
import { useState } from "react";
import { Workout } from "@/types/workout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Dumbbell, Flame, ArrowLeft, Heart } from "lucide-react";
import ExerciseAnimation from "./ExerciseAnimation";
import { toast } from "sonner";

interface WorkoutDetailProps {
  workout: Workout;
  onBack: () => void;
}

const WorkoutDetail = ({ workout, onBack }: WorkoutDetailProps) => {
  const [isFavorite, setIsFavorite] = useState(workout.isFavorite || false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? "Removed from favorites" : "Added to favorites");
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
      case "intermediate":
        return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20";
      case "advanced":
        return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
      default:
        return "bg-primary/10 text-primary hover:bg-primary/20";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">Workout Details</h1>
      </div>

      <Card>
        <div className="relative h-48 md:h-64 overflow-hidden">
          {workout.image ? (
            <img
              src={workout.image}
              alt={workout.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-fitfuel-purple-dark/20 flex items-center justify-center">
              <Dumbbell size={48} className="text-fitfuel-purple opacity-50" />
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/70"
            onClick={toggleFavorite}
          >
            <Heart
              size={18}
              className={isFavorite ? "fill-red-500 text-red-500" : "text-white"}
            />
          </Button>
        </div>

        <CardHeader>
          <div className="flex flex-wrap gap-2 mb-2">
            <Badge variant="outline" className={`${getLevelColor(workout.level)}`}>
              {workout.level.charAt(0).toUpperCase() + workout.level.slice(1)}
            </Badge>
            <Badge variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
              {workout.category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
            </Badge>
          </div>
          <CardTitle className="text-2xl">{workout.name}</CardTitle>
          <CardDescription className="text-base">
            {workout.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span>{workout.duration} minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-muted-foreground" />
              <span>{workout.caloriesBurn} calories</span>
            </div>
            <div className="flex items-center gap-2">
              <Dumbbell className="h-5 w-5 text-muted-foreground" />
              <span>{workout.exercises.length} exercises</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Exercises</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workout.exercises.map((exercise) => (
                <ExerciseAnimation 
                  key={exercise.id} 
                  exercise={exercise} 
                  isExpanded={true}
                />
              ))}
            </div>
          </div>

          <Button className="w-full mt-4" size="lg">
            Start Workout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkoutDetail;
