
import { FoodItem, NutritionGoals, DailyNutrition } from "@/types/nutrition";

export const commonFoods: FoodItem[] = [
  {
    id: "f1",
    name: "Chicken Breast",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    servingSize: "100",
    servingUnit: "g",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "f2",
    name: "Brown Rice",
    calories: 112,
    protein: 2.6,
    carbs: 23,
    fat: 0.9,
    servingSize: "100",
    servingUnit: "g",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "f3",
    name: "Broccoli",
    calories: 34,
    protein: 2.8,
    carbs: 6.6,
    fat: 0.4,
    servingSize: "100",
    servingUnit: "g",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "f4",
    name: "Salmon",
    calories: 206,
    protein: 22,
    carbs: 0,
    fat: 13,
    servingSize: "100",
    servingUnit: "g",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "f5",
    name: "Sweet Potato",
    calories: 86,
    protein: 1.6,
    carbs: 20,
    fat: 0.1,
    servingSize: "100",
    servingUnit: "g",
    image: "https://images.unsplash.com/photo-1596097634673-56cc0bf1d841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "f6",
    name: "Greek Yogurt",
    calories: 59,
    protein: 10,
    carbs: 3.6,
    fat: 0.4,
    servingSize: "100",
    servingUnit: "g",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0bfdf63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "f7",
    name: "Eggs",
    calories: 155,
    protein: 13,
    carbs: 1.1,
    fat: 11,
    servingSize: "100",
    servingUnit: "g",
    image: "https://images.unsplash.com/photo-1607690424560-35d7c2d97b53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "f8",
    name: "Avocado",
    calories: 160,
    protein: 2,
    carbs: 8.5,
    fat: 14.7,
    servingSize: "100",
    servingUnit: "g",
    image: "https://images.unsplash.com/photo-1519162808019-7de1f919b24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "f9",
    name: "Almonds",
    calories: 579,
    protein: 21,
    carbs: 22,
    fat: 49,
    servingSize: "100",
    servingUnit: "g",
    image: "https://images.unsplash.com/photo-1574209580816-20c9f83a3f35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

// Sample nutrition goals for a user looking to build muscle
export const defaultNutritionGoals: NutritionGoals = {
  dailyCalories: 2500,
  proteinPercentage: 30, // 30% of calories from protein
  carbsPercentage: 45,   // 45% of calories from carbs
  fatPercentage: 25,     // 25% of calories from fat
  waterGoal: 3000        // 3000ml (3 liters) daily
};

// Sample daily nutrition data
export const sampleDailyNutrition: DailyNutrition = {
  date: new Date().toISOString().split('T')[0],
  meals: [
    {
      id: "m1",
      type: "breakfast",
      time: "08:00",
      foods: [
        {
          food: commonFoods[6], // Eggs
          quantity: 1.5 // 150g
        },
        {
          food: commonFoods[7], // Avocado
          quantity: 0.5 // 50g
        }
      ]
    },
    {
      id: "m2",
      type: "lunch",
      time: "13:00",
      foods: [
        {
          food: commonFoods[0], // Chicken Breast
          quantity: 1.5 // 150g
        },
        {
          food: commonFoods[1], // Brown Rice
          quantity: 1.0 // 100g
        },
        {
          food: commonFoods[2], // Broccoli
          quantity: 1.0 // 100g
        }
      ]
    },
    {
      id: "m3",
      type: "dinner",
      time: "19:00",
      foods: [
        {
          food: commonFoods[3], // Salmon
          quantity: 1.5 // 150g
        },
        {
          food: commonFoods[4], // Sweet Potato
          quantity: 1.0 // 100g
        }
      ]
    },
    {
      id: "m4",
      type: "snack",
      time: "16:00",
      foods: [
        {
          food: commonFoods[5], // Greek Yogurt
          quantity: 1.5 // 150g
        },
        {
          food: commonFoods[8], // Almonds
          quantity: 0.3 // 30g
        }
      ]
    }
  ],
  totalCalories: 1842,
  totalProtein: 162,
  totalCarbs: 120,
  totalFat: 75,
  waterIntake: 2000
};
