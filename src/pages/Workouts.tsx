
import { useState, useEffect } from "react";
import WorkoutList from "@/components/workout/WorkoutList";
import WorkoutDetail from "@/components/workout/WorkoutDetail";
import { popularWorkouts } from "@/data/workouts";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Heart, Clock } from "lucide-react";
import { toast } from "sonner";
import { Workout } from "@/types/workout";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

const Workouts = () => {
  const [activeTab, setActiveTab] = useState("discover");
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const [favoriteWorkouts, setFavoriteWorkouts] = useState<Workout[]>([]);
  const [recentWorkouts, setRecentWorkouts] = useState<Workout[]>([]);
  const { user } = useAuth();
  
  // We're still using the demo workouts for discovery, but in a real app
  // these would come from Supabase as well
  
  useEffect(() => {
    if (user) {
      // In a real app, you would fetch the user's favorite and recent workouts from Supabase
      // For now, we're just filtering the mock data
      setFavoriteWorkouts(popularWorkouts.filter(workout => workout.isFavorite));
      
      // Fetch user's completed workouts from Supabase
      const fetchRecentWorkouts = async () => {
        const { data, error } = await supabase
          .from('user_workouts')
          .select('*')
          .eq('user_id', user.id)
          .order('completed_at', { ascending: false })
          .limit(5);
          
        if (error) {
          console.error("Error fetching recent workouts:", error);
          return;
        }
        
        // In a real app, you would map these to workout objects
        console.log("Recent workouts:", data);
      };
      
      fetchRecentWorkouts();
    }
  }, [user]);
  
  const handleCreateWorkout = () => {
    toast.info("Custom workout creation will be available in the next update!");
  };

  const handleWorkoutClick = (workout: Workout) => {
    setSelectedWorkout(workout);
  };

  const handleBackToList = () => {
    setSelectedWorkout(null);
  };

  return (
    <div className="space-y-6 py-4">
      {!selectedWorkout ? (
        <>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Workouts</h1>
            <Button className="flex items-center gap-1" onClick={handleCreateWorkout}>
              <PlusCircle className="h-4 w-4" /> Create
            </Button>
          </div>
          
          <Tabs defaultValue="discover" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="discover">Discover</TabsTrigger>
              <TabsTrigger value="favorites">
                <Heart className="h-4 w-4 mr-1" /> Favorites
              </TabsTrigger>
              <TabsTrigger value="recent">
                <Clock className="h-4 w-4 mr-1" /> Recent
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="discover" className="space-y-6">
              <WorkoutList
                workouts={popularWorkouts}
                showFilters={true}
                onWorkoutClick={handleWorkoutClick}
              />
            </TabsContent>
            
            <TabsContent value="favorites">
              {favoriteWorkouts.length > 0 ? (
                <WorkoutList 
                  workouts={favoriteWorkouts} 
                  onWorkoutClick={handleWorkoutClick}
                />
              ) : (
                <div className="text-center py-12">
                  <Heart className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                  <h3 className="text-lg font-medium mb-2">No favorite workouts yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Add workouts to your favorites for quick access
                  </p>
                  <Button variant="outline" onClick={() => setActiveTab("discover")}>
                    Browse Workouts
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="recent">
              <div className="text-center py-12">
                <Clock className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-lg font-medium mb-2">No recent workouts</h3>
                <p className="text-muted-foreground mb-6">
                  Your recently accessed workouts will appear here
                </p>
                <Button variant="outline" onClick={() => setActiveTab("discover")}>
                  Start a Workout
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </>
      ) : (
        <WorkoutDetail workout={selectedWorkout} onBack={handleBackToList} />
      )}
    </div>
  );
};

export default Workouts;
