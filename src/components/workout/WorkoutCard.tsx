
import { Workout } from "@/types/workout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Dumbbell, Flame, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface WorkoutCardProps {
  workout: Workout;
  onClick?: () => void;
}

const WorkoutCard = ({ workout, onClick }: WorkoutCardProps) => {
  const [isFavorite, setIsFavorite] = useState(workout.isFavorite || false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
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
    <Card 
      className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        {workout.image ? (
          <img
            src={workout.image}
            alt={workout.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className={`${getLevelColor(workout.level)}`}>
            {workout.level.charAt(0).toUpperCase() + workout.level.slice(1)}
          </Badge>
          <Badge variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
            {workout.category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
          </Badge>
        </div>
        <CardTitle className="text-xl mt-2">{workout.name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {workout.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4 flex-grow">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{workout.duration} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame size={14} />
            <span>{workout.caloriesBurn} cal</span>
          </div>
          <div className="flex items-center gap-1">
            <Dumbbell size={14} />
            <span>{workout.exercises.length} exercises</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="default" className="w-full">
          Start Workout
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WorkoutCard;
