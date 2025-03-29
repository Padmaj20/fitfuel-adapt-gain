
import { useState } from "react";
import WorkoutList from "@/components/workout/WorkoutList";
import { popularWorkouts } from "@/data/workouts";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Heart, Clock } from "lucide-react";
import { toast } from "sonner";

const Workouts = () => {
  const [activeTab, setActiveTab] = useState("discover");
  
  const favoriteWorkouts = popularWorkouts.filter(workout => workout.isFavorite);
  
  const handleCreateWorkout = () => {
    toast.info("Custom workout creation will be available in the next update!");
  };

  return (
    <div className="space-y-6 py-4">
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
          />
        </TabsContent>
        
        <TabsContent value="favorites">
          {favoriteWorkouts.length > 0 ? (
            <WorkoutList workouts={favoriteWorkouts} />
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
    </div>
  );
};

export default Workouts;
