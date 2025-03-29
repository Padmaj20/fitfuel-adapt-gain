
import { Workout, WorkoutPlan } from "@/types/workout";

export const popularWorkouts: Workout[] = [
  {
    id: "w1",
    name: "Full Body Power",
    description: "Complete full body workout targeting all major muscle groups",
    level: "intermediate",
    category: "full-body",
    duration: 45,
    caloriesBurn: 350,
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    isFavorite: true,
    exercises: [
      {
        id: "e1",
        name: "Barbell Squat",
        description: "Compound exercise targeting quadriceps, hamstrings, and glutes",
        muscleGroup: "Legs",
        equipment: ["Barbell", "Squat Rack"],
        sets: 4,
        reps: 10,
        restTime: 90,
        instructions: [
          "Stand with feet shoulder-width apart",
          "Place barbell across upper back",
          "Bend knees and lower hips until thighs are parallel to floor",
          "Return to starting position"
        ]
      },
      {
        id: "e2",
        name: "Bench Press",
        description: "Compound exercise for chest, shoulders, and triceps",
        muscleGroup: "Chest",
        equipment: ["Barbell", "Bench"],
        sets: 4,
        reps: 8,
        restTime: 90,
        instructions: [
          "Lie on bench with feet flat on floor",
          "Grip barbell slightly wider than shoulder width",
          "Lower bar to mid-chest",
          "Press bar back to starting position"
        ]
      },
      {
        id: "e3",
        name: "Bent Over Row",
        description: "Compound exercise for back and biceps",
        muscleGroup: "Back",
        equipment: ["Barbell"],
        sets: 3,
        reps: 12,
        restTime: 60,
        instructions: [
          "Bend at hips with slight knee bend",
          "Grip barbell with hands shoulder-width apart",
          "Pull barbell to lower chest/upper abdomen",
          "Lower bar back to starting position"
        ]
      }
    ]
  },
  {
    id: "w2",
    name: "HIIT Cardio Blast",
    description: "High-intensity interval training to maximize calorie burn",
    level: "intermediate",
    category: "hiit",
    duration: 30,
    caloriesBurn: 400,
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    exercises: [
      {
        id: "e4",
        name: "Burpees",
        description: "Full body exercise that combines a squat, push-up, and jump",
        muscleGroup: "Full Body",
        equipment: [],
        sets: 4,
        reps: 15,
        restTime: 30,
        instructions: [
          "Start in standing position",
          "Drop into squat position and place hands on ground",
          "Kick feet back into plank position",
          "Perform a push-up",
          "Return feet to squat position",
          "Jump explosively from squat position"
        ]
      },
      {
        id: "e5",
        name: "Mountain Climbers",
        description: "Dynamic exercise for cardio and core",
        muscleGroup: "Core",
        equipment: [],
        sets: 4,
        reps: 30,
        restTime: 30,
        instructions: [
          "Start in plank position",
          "Alternately drive knees toward chest in running motion",
          "Keep core tight and hips level",
          "Maintain quick pace"
        ]
      },
      {
        id: "e6",
        name: "Jump Squats",
        description: "Explosive lower body exercise",
        muscleGroup: "Legs",
        equipment: [],
        sets: 4,
        reps: 20,
        restTime: 30,
        instructions: [
          "Stand with feet shoulder-width apart",
          "Perform squat, lowering hips below knees",
          "Explosively jump upward",
          "Land softly and immediately go into next rep"
        ]
      }
    ]
  },
  {
    id: "w3",
    name: "Upper Body Push",
    description: "Focus on pushing movements for chest, shoulders, and triceps",
    level: "beginner",
    category: "push-pull",
    duration: 40,
    caloriesBurn: 300,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    exercises: [
      {
        id: "e7",
        name: "Push-ups",
        description: "Classic bodyweight exercise for upper body",
        muscleGroup: "Chest",
        equipment: [],
        sets: 3,
        reps: 15,
        restTime: 60,
        instructions: [
          "Start in plank position with hands slightly wider than shoulders",
          "Lower body until chest nearly touches ground",
          "Keep body in straight line from head to toe",
          "Push back up to starting position"
        ]
      },
      {
        id: "e8",
        name: "Dumbbell Shoulder Press",
        description: "Overhead press for shoulder development",
        muscleGroup: "Shoulders",
        equipment: ["Dumbbells"],
        sets: 3,
        reps: 12,
        restTime: 60,
        instructions: [
          "Sit on bench with back support",
          "Hold dumbbells at shoulder level",
          "Press weights overhead until arms are extended",
          "Lower weights back to shoulder level"
        ]
      },
      {
        id: "e9",
        name: "Tricep Dips",
        description: "Bodyweight exercise for triceps",
        muscleGroup: "Arms",
        equipment: ["Bench or Chair"],
        sets: 3,
        reps: 12,
        restTime: 60,
        instructions: [
          "Sit on edge of bench with hands beside hips",
          "Slide buttocks off bench with legs extended",
          "Lower body by bending elbows",
          "Press back up until arms are straight"
        ]
      }
    ]
  }
];

export const workoutPlans: WorkoutPlan[] = [
  {
    id: "p1",
    name: "8-Week Muscle Builder",
    description: "Comprehensive program designed to increase strength and muscle mass",
    level: "intermediate",
    duration: 8,
    image: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    days: [
      {
        id: "d1",
        name: "Day 1: Chest & Triceps",
        workouts: [popularWorkouts[0]]
      },
      {
        id: "d2",
        name: "Day 2: Back & Biceps",
        workouts: [popularWorkouts[2]]
      },
      {
        id: "d3",
        name: "Day 3: Rest or Light Cardio",
        workouts: []
      },
      {
        id: "d4",
        name: "Day 4: Legs & Shoulders",
        workouts: [popularWorkouts[0]]
      },
      {
        id: "d5",
        name: "Day 5: Full Body HIIT",
        workouts: [popularWorkouts[1]]
      },
      {
        id: "d6",
        name: "Day 6: Arms & Core",
        workouts: [popularWorkouts[2]]
      },
      {
        id: "d7",
        name: "Day 7: Rest",
        workouts: []
      }
    ]
  },
  {
    id: "p2",
    name: "12-Week Fat Loss Challenge",
    description: "Progressive program focused on burning fat and improving cardiovascular fitness",
    level: "beginner",
    duration: 12,
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    days: [
      {
        id: "d1",
        name: "Day 1: HIIT Cardio",
        workouts: [popularWorkouts[1]]
      },
      {
        id: "d2",
        name: "Day 2: Upper Body",
        workouts: [popularWorkouts[2]]
      },
      {
        id: "d3",
        name: "Day 3: Active Recovery",
        workouts: []
      },
      {
        id: "d4",
        name: "Day 4: Lower Body",
        workouts: [popularWorkouts[0]]
      },
      {
        id: "d5",
        name: "Day 5: HIIT & Core",
        workouts: [popularWorkouts[1]]
      },
      {
        id: "d6",
        name: "Day 6: Full Body Strength",
        workouts: [popularWorkouts[0]]
      },
      {
        id: "d7",
        name: "Day 7: Rest",
        workouts: []
      }
    ]
  }
];
