
import { useState } from "react";
import { Exercise } from "@/types/workout";
import { Card, CardContent } from "@/components/ui/card";
import { CirclePlay, CircleStop, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ExerciseAnimationProps {
  exercise: Exercise;
  isExpanded?: boolean;
}

const ExerciseAnimation = ({ exercise, isExpanded = false }: ExerciseAnimationProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Card className="overflow-hidden h-full">
      <div className="relative">
        {exercise.animation ? (
          <div className="relative">
            <div className={`w-full h-48 overflow-hidden bg-gray-100 ${!isPlaying ? 'relative' : ''}`}>
              <img 
                src={exercise.animation}
                alt={`${exercise.name} animation`}
                className={`w-full h-full object-contain ${!isPlaying ? 'opacity-50' : 'animate-pulse'}`}
              />
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <CirclePlay className="w-16 h-16 text-primary opacity-80" />
                </div>
              )}
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2 bg-background/70 backdrop-blur-sm hover:bg-background/90 rounded-full"
              onClick={togglePlay}
            >
              {isPlaying ? <CircleStop className="w-5 h-5" /> : <CirclePlay className="w-5 h-5" />}
            </Button>
          </div>
        ) : (
          <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
            <Dumbbell className="w-12 h-12 text-muted-foreground/50" />
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg">{exercise.name}</h3>
            <Badge variant="outline" className="bg-primary/10 text-primary hover:bg-primary/20">
              {exercise.muscleGroup}
            </Badge>
          </div>
          
          <p className="text-sm text-muted-foreground">{exercise.description}</p>
          
          <div className="flex items-center gap-4 text-sm mt-2">
            <div className="flex items-center gap-1">
              <span className="font-medium">{exercise.sets}</span> sets
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium">{exercise.reps}</span> reps
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium">{exercise.restTime}</span>s rest
            </div>
          </div>
          
          {isExpanded && (
            <div className="mt-3">
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs"
                onClick={() => setShowInstructions(!showInstructions)}
              >
                {showInstructions ? "Hide Instructions" : "Show Instructions"}
              </Button>
              
              {showInstructions && (
                <div className="mt-3 space-y-2">
                  <h4 className="font-medium text-sm">Instructions:</h4>
                  <ol className="list-decimal list-inside text-sm space-y-1 text-muted-foreground">
                    {exercise.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                  
                  {exercise.equipment.length > 0 && (
                    <div className="mt-2">
                      <h4 className="font-medium text-sm">Equipment:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {exercise.equipment.map((item, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExerciseAnimation;
