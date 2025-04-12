
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
        ],
        animation: "https://media.giphy.com/media/U4GnKBrIbhEA8PGRu3/giphy.gif"
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
        ],
        animation: null
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
        ],
        animation: "https://media.giphy.com/media/ZEeRc2LWOcjyo2GaS7/giphy.gif"
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
        ],
        animation: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTBkY2xtNzVwYzljeWpjOWdnZjkzNTRiaGxpNHQzd3lvZ3h6dDNqcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ckMk6QnDs5gvLf2eSy/giphy.gif"
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
        ],
        animation: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDAxYmNtaWt6Z3EzZ2RjOHRvaWFpY2I5dmFpNDYxYWVjcHV6eGY3eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UVFJGrWDzG3F37XEi1/giphy.gif"
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
        ],
        animation: "https://media.giphy.com/media/1n7CZhvaXKLaZWYqSU/giphy.gif"
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
        ],
        animation: "https://media.giphy.com/media/7YCC78OgvWQRa/giphy.gif"
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
        ],
        animation: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXdnOXJ2YTltOWZrYzMxeWdycWlscG85dng5aXE0OGZ0NXJyeDFkZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pXQhkGBcqMlQMWGiPY/giphy.gif"
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
        ],
        animation: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXI5MDBxaTBka3NlczVybnQwcXptOW02d2hvMXg4emR3YXZvYnl0dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12kaWgPOsJQ4g/giphy.gif"
      }
    ]
  },
  {
    id: "w4",
    name: "Upper Body Pull",
    description: "Focus on pulling movements for back, biceps, and rear delts",
    level: "intermediate",
    category: "push-pull",
    duration: 45,
    caloriesBurn: 320,
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    exercises: [
      {
        id: "e10",
        name: "Pull-ups",
        description: "Challenging bodyweight exercise for back and biceps",
        muscleGroup: "Back",
        equipment: ["Pull-up Bar"],
        sets: 4,
        reps: 8,
        restTime: 90,
        instructions: [
          "Hang from bar with hands slightly wider than shoulders",
          "Pull body up until chin clears bar",
          "Lower body with control to starting position",
          "Repeat for prescribed reps"
        ],
        animation: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnBkcGk5ZGN1cHFrZm0wY2NyMWd4cjJsaXJsYm5wcTdyeWpqZ2d3bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XfnwLTlDj6Hq8dZPO8/giphy.gif"
      },
      {
        id: "e11",
        name: "Dumbbell Rows",
        description: "Unilateral back exercise for strength and muscle development",
        muscleGroup: "Back",
        equipment: ["Dumbbell", "Bench"],
        sets: 3,
        reps: 12,
        restTime: 60,
        instructions: [
          "Place one knee and hand on bench",
          "Hold dumbbell in free hand with arm extended",
          "Pull dumbbell up to side of torso",
          "Lower dumbbell with control and repeat"
        ],
        animation: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXVhdGl6bmR0NjNlanRvdmxsdGlnYXoyOXdlMmNvOHcwODhjNmV6NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1qfKTILpWYYwS8YxhG/giphy.gif"
      },
      {
        id: "e12",
        name: "Bicep Curls",
        description: "Isolation exercise for biceps development",
        muscleGroup: "Arms",
        equipment: ["Dumbbells"],
        sets: 3,
        reps: 15,
        restTime: 60,
        instructions: [
          "Stand with dumbbells at sides, palms facing forward",
          "Keeping elbows close to torso, curl weights toward shoulders",
          "Squeeze biceps at top of movement",
          "Lower weights with control to starting position"
        ],
        animation: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnR3bjJsaDE3YThoYXJ1eTJhcmx0c2ZwNGptMmZlaDE0cmoyaTN0MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JTzI2kM0ymlizRwyV2/giphy.gif"
      }
    ]
  },
  {
    id: "w5",
    name: "Chest Day",
    description: "Complete chest workout focusing on all areas of the pectoral muscles",
    level: "intermediate",
    category: "bro-split",
    duration: 50,
    caloriesBurn: 340,
    image: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    exercises: [
      {
        id: "e13",
        name: "Incline Bench Press",
        description: "Targets upper chest with inclined pressing movement",
        muscleGroup: "Chest",
        equipment: ["Barbell", "Incline Bench"],
        sets: 4,
        reps: 10,
        restTime: 90,
        instructions: [
          "Lie on incline bench set to 30-45 degrees",
          "Grip barbell slightly wider than shoulder width",
          "Lower bar to upper chest",
          "Press bar back up to starting position"
        ],
        animation: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemFrbWZ0aTJxZnBhMHdocng0OWI3Z2J3dGczMnF2dWs4NGR1OHZhaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/u4CY9BW4umAfu/giphy.gif"
      },
      {
        id: "e14",
        name: "Cable Flyes",
        description: "Isolation movement for chest with constant tension",
        muscleGroup: "Chest",
        equipment: ["Cable Machine"],
        sets: 3,
        reps: 12,
        restTime: 60,
        instructions: [
          "Stand between cable stations with arms extended to sides",
          "Slightly bend elbows and maintain bend throughout movement",
          "Bring hands together in front of chest in arcing motion",
          "Return to starting position with control"
        ],
        animation: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmJsdGU4OXlzc2ZjYXllcTRqbHlxZnVydWVqd3ZhcGF0c3pvMXJ3ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohzAePgJVPpk2QIwg/giphy.gif"
      },
      {
        id: "e15",
        name: "Chest Dips",
        description: "Compound bodyweight exercise for lower chest and triceps",
        muscleGroup: "Chest",
        equipment: ["Parallel Bars"],
        sets: 3,
        reps: 10,
        restTime: 60,
        instructions: [
          "Grip parallel bars with arms straight and body suspended",
          "Lean torso forward to target chest muscles",
          "Lower body by bending elbows until shoulders are below elbows",
          "Push back up to starting position"
        ],
        animation: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3Ryc3ZiMWRkdnU3MWw4anNkNjg0aGdhYzRla3pnNWpmN2ltdjFxYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/eKmtDh0gLV5j1YhXnj/giphy.gif"
      }
    ]
  },
  {
    id: "w6",
    name: "Back & Biceps Day",
    description: "Classic bro split workout focusing on back thickness, width, and bicep development",
    level: "intermediate",
    category: "bro-split",
    duration: 55,
    caloriesBurn: 360,
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    exercises: [
      {
        id: "e16",
        name: "Lat Pulldowns",
        description: "Machine exercise targeting latissimus dorsi muscles",
        muscleGroup: "Back",
        equipment: ["Cable Machine", "Lat Pulldown Bar"],
        sets: 4,
        reps: 12,
        restTime: 75,
        instructions: [
          "Sit at lat pulldown machine with knees secured under pads",
          "Grip bar wider than shoulder width",
          "Pull bar down to upper chest while squeezing shoulder blades",
          "Return bar with control to starting position"
        ],
        animation: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG85b3FxaWdnaTVoZnJscG9rcDlhajZuZnoyaWVhc25lOTJtbmtsaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L8G10sX6hhQrsn7txj/giphy.gif"
      },
      {
        id: "e17",
        name: "T-Bar Rows",
        description: "Compound rowing movement for middle back thickness",
        muscleGroup: "Back",
        equipment: ["T-Bar Row Machine", "Weight Plates"],
        sets: 3,
        reps: 10,
        restTime: 75,
        instructions: [
          "Straddle the pad with chest against support",
          "Grip handles with both hands",
          "Pull weight toward lower chest while keeping back flat",
          "Lower weight with control to starting position"
        ],
        animation: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnMzaHU2YXB2c3M5dTNlbXBqN2xjdXl4bngzdzZ1MHRjaTM1YzFlNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26vUBBZsQwwyBDdGo/giphy.gif"
      },
      {
        id: "e18",
        name: "Hammer Curls",
        description: "Bicep exercise that also targets brachialis and forearms",
        muscleGroup: "Arms",
        equipment: ["Dumbbells"],
        sets: 3,
        reps: 12,
        restTime: 60,
        instructions: [
          "Stand with dumbbells at sides, palms facing your torso",
          "Keeping elbows close to body, curl weights up toward shoulders",
          "Hold briefly at top of movement",
          "Lower weights with control to starting position"
        ],
        animation: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnR3bjJsaDE3YThoYXJ1eTJhcmx0c2ZwNGptMmZlaDE0cmoyaTN0MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JTzI2kM0ymlizRwyV2/giphy.gif"
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
