
import { useAuth } from "@/contexts/AuthContext";
import LoginForm from "@/components/auth/LoginForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Activity, Dumbbell, Droplet, Moon, ArrowRight, Calendar, Utensils } from "lucide-react";
import UserSetupForm from "@/components/auth/UserSetupForm";
import { useState } from "react";
import { toast } from "sonner";
import { useTheme } from "@/contexts/ThemeContext";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showSetup, setShowSetup] = useState(!(user?.age && user?.weight && user?.height && user?.goal));
  const { isDarkMode } = useTheme();

  const handleSetupComplete = () => {
    setShowSetup(false);
    toast.success("Profile setup complete! Your experience is now personalized.");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gradient">
              FitFuel
            </h1>
            <p className="mt-3 text-muted-foreground">
              Your next-gen workout and diet companion
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    );
  }

  if (showSetup) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
        <div className="max-w-md w-full space-y-8">
          <UserSetupForm onComplete={handleSetupComplete} />
        </div>
      </div>
    );
  }

  // Dashboard for logged-in users
  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Hi, {user.name.split(' ')[0]}!</h1>
          <p className="text-muted-foreground">Let's crush your fitness goals today</p>
        </div>
        <div className="w-12 h-12 rounded-full overflow-hidden">
          {user.profileImage ? (
            <img 
              src={user.profileImage} 
              alt={user.name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-primary/20 flex items-center justify-center">
              <span className="text-lg font-medium">{user.name.charAt(0)}</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gradient-to-br from-indigo-500/10 to-purple-600/10 hover:from-indigo-500/20 hover:to-purple-600/20 transition-all">
          <CardContent className="p-4 flex flex-col items-center text-center">
            <Dumbbell className="h-10 w-10 mb-2 text-primary" />
            <h3 className="font-semibold">Workouts</h3>
            <p className="text-xs text-muted-foreground mb-3">Strength & Cardio</p>
            <Button 
              variant="default" 
              size="sm" 
              className="w-full"
              onClick={() => navigate('/workouts')}
            >
              Start <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-rose-500/10 to-orange-400/10 hover:from-rose-500/20 hover:to-orange-400/20 transition-all">
          <CardContent className="p-4 flex flex-col items-center text-center">
            <Utensils className="h-10 w-10 mb-2 text-rose-500" />
            <h3 className="font-semibold">Nutrition</h3>
            <p className="text-xs text-muted-foreground mb-3">Meals & Tracking</p>
            <Button 
              variant="default" 
              size="sm" 
              className="w-full bg-rose-500 hover:bg-rose-600"
              onClick={() => navigate('/nutrition')}
            >
              View <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-400/10 hover:from-blue-500/20 hover:to-cyan-400/20 transition-all">
          <CardContent className="p-4 flex flex-col items-center text-center">
            <Droplet className="h-10 w-10 mb-2 text-blue-500" />
            <h3 className="font-semibold">Water</h3>
            <p className="text-xs text-muted-foreground mb-3">Track hydration</p>
            <Button 
              variant="default" 
              size="sm" 
              className="w-full bg-blue-500 hover:bg-blue-600"
              onClick={() => navigate('/trackers')}
            >
              Track <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-violet-500/10 to-indigo-400/10 hover:from-violet-500/20 hover:to-indigo-400/20 transition-all">
          <CardContent className="p-4 flex flex-col items-center text-center">
            <Moon className="h-10 w-10 mb-2 text-violet-500" />
            <h3 className="font-semibold">Sleep</h3>
            <p className="text-xs text-muted-foreground mb-3">Rest & recover</p>
            <Button 
              variant="default" 
              size="sm" 
              className="w-full bg-violet-500 hover:bg-violet-600"
              onClick={() => navigate('/trackers')}
            >
              Monitor <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Today's Schedule</h2>
          <Button variant="ghost" size="sm" className="text-primary">
            <Calendar className="h-4 w-4 mr-1" /> View All
          </Button>
        </div>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <Activity className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Upper Body Push</h3>
                <p className="text-sm text-muted-foreground">Chest, Shoulders, Triceps</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">6:00 PM</p>
                <p className="text-xs text-muted-foreground">40 mins</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center">
              <div className="bg-rose-500/10 p-3 rounded-lg mr-4">
                <Utensils className="h-5 w-5 text-rose-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Post-Workout Meal</h3>
                <p className="text-sm text-muted-foreground">High Protein, Recovery</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">7:30 PM</p>
                <p className="text-xs text-muted-foreground">500 kcal</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
