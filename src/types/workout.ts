
export type WorkoutLevel = "beginner" | "intermediate" | "advanced";

export type WorkoutCategory =
  | "bro-split"
  | "push-pull"
  | "full-body"
  | "hiit"
  | "yoga"
  | "cardio";

export type Exercise = {
  id: string;
  name: string;
  description: string;
  muscleGroup: string;
  equipment: string[];
  image?: string;
  video?: string;
  sets: number;
  reps: number;
  restTime: number; // in seconds
  instructions: string[];
};

export type Workout = {
  id: string;
  name: string;
  description: string;
  level: WorkoutLevel;
  category: WorkoutCategory;
  duration: number; // in minutes
  caloriesBurn: number;
  exercises: Exercise[];
  image?: string;
  isFavorite?: boolean;
  isCustom?: boolean;
};

export type WorkoutDay = {
  id: string;
  name: string;
  workouts: Workout[];
};

export type WorkoutPlan = {
  id: string;
  name: string;
  description: string;
  level: WorkoutLevel;
  duration: number; // in weeks
  days: WorkoutDay[];
  image?: string;
};
