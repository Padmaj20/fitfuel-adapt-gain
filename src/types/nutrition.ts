
export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'pre-workout' | 'post-workout';

export type FoodItem = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  servingSize: string;
  servingUnit: string;
  image?: string;
};

export type Meal = {
  id: string;
  type: MealType;
  time: string;
  foods: Array<{
    food: FoodItem;
    quantity: number;
  }>;
};

export type DailyNutrition = {
  date: string;
  meals: Meal[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  waterIntake: number; // in ml
};

export type NutritionGoals = {
  dailyCalories: number;
  proteinPercentage: number;
  carbsPercentage: number;
  fatPercentage: number;
  waterGoal: number; // in ml
};
