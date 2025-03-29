
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { toast } from "sonner";
import { User, Settings, Moon, Sun, LogOut, Award, Bell, Database, Check, Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [saveWorkouts, setSaveWorkouts] = useState(true);
  
  if (!user) {
    return null;
  }
  
  const handleLogout = () => {
    logout();
    navigate("/");
    toast.success("You've been successfully logged out");
  };
  
  const formatGoal = (goal: string | undefined) => {
    if (!goal) return "Not set";
    return goal.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };

  return (
    <div className="space-y-6 py-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      
      <Card className="overflow-hidden">
        <div className="h-24 bg-gradient-to-r from-fitfuel-purple to-fitfuel-purple-dark" />
        <div className="px-6 pb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-12 mb-4 gap-4">
            <div className="w-24 h-24 rounded-full border-4 border-background overflow-hidden bg-background">
              {user.profileImage ? (
                <img 
                  src={user.profileImage} 
                  alt={user.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                  <User className="h-12 w-12 text-primary/50" />
                </div>
              )}
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
            <div className="sm:ml-auto flex gap-2">
              <Button variant="outline" size="sm">
                Edit Profile
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Weight</p>
              <p className="font-medium">{user.weight ? `${user.weight} kg` : "Not set"}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Height</p>
              <p className="font-medium">{user.height ? `${user.height} cm` : "Not set"}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Goal</p>
              <p className="font-medium">{formatGoal(user.goal)}</p>
            </div>
          </div>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="mr-2 h-5 w-5 text-primary" />
              Achievements
            </CardTitle>
            <CardDescription>
              Milestones and badges you've earned
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
                <Check className="mr-1 h-3 w-3" /> First Workout
              </Badge>
              <Badge variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
                <Check className="mr-1 h-3 w-3" /> Nutrition Tracker
              </Badge>
              <Badge variant="outline" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">
                <Heart className="mr-1 h-3 w-3" /> Water Goal - 3 Days
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Account Level</span>
                <span className="font-medium">3/10</span>
              </div>
              <Progress value={30} className="h-2" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All Achievements</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Settings className="mr-2 h-5 w-5 text-muted-foreground" />
              Settings
            </CardTitle>
            <CardDescription>
              Manage your app preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="theme-mode">Dark Mode</Label>
                <div className="text-sm text-muted-foreground">
                  Switch between light and dark themes
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="h-4 w-4 text-muted-foreground" />
                <Switch 
                  id="theme-mode"
                  checked={isDarkMode}
                  onCheckedChange={toggleDarkMode}
                />
                <Moon className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="notifications">Notifications</Label>
                <div className="text-sm text-muted-foreground">
                  Receive reminders and updates
                </div>
              </div>
              <Switch 
                id="notifications" 
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="save-workouts">Offline Workouts</Label>
                <div className="text-sm text-muted-foreground">
                  Save workouts for offline access
                </div>
              </div>
              <Switch 
                id="save-workouts" 
                checked={saveWorkouts}
                onCheckedChange={setSaveWorkouts}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="destructive" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" /> Log Out
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
