
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleHelp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { DailyNutrition, NutritionGoals } from "@/types/nutrition";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

interface NutritionSummaryProps {
  nutrition: DailyNutrition;
  goals: NutritionGoals;
}

const NutritionSummary = ({ nutrition, goals }: NutritionSummaryProps) => {
  // Calculate percentages of daily goals
  const caloriePercentage = Math.min(100, Math.round((nutrition.totalCalories / goals.dailyCalories) * 100));
  const proteinPercentage = Math.min(100, Math.round((nutrition.totalProtein * 4 / (goals.dailyCalories * goals.proteinPercentage / 100)) * 100));
  const carbsPercentage = Math.min(100, Math.round((nutrition.totalCarbs * 4 / (goals.dailyCalories * goals.carbsPercentage / 100)) * 100));
  const fatPercentage = Math.min(100, Math.round((nutrition.totalFat * 9 / (goals.dailyCalories * goals.fatPercentage / 100)) * 100));
  const waterPercentage = Math.min(100, Math.round((nutrition.waterIntake / goals.waterGoal) * 100));
  
  // Data for macronutrient distribution pie chart
  const macroData = [
    { name: 'Protein', value: nutrition.totalProtein * 4, color: '#9b87f5' },
    { name: 'Carbs', value: nutrition.totalCarbs * 4, color: '#7E69AB' },
    { name: 'Fat', value: nutrition.totalFat * 9, color: '#D946EF' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center justify-between">
              <span>Daily Calories</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <CircleHelp className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Your daily calorie goal based on your profile and fitness goals</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardTitle>
            <CardDescription>
              <span className="text-lg font-semibold">{nutrition.totalCalories}</span>
              <span className="text-sm text-muted-foreground"> / {goals.dailyCalories} kcal</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={caloriePercentage} className="h-2.5" />
            <div className="mt-2 text-sm text-muted-foreground">
              {caloriePercentage}% of daily goal
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center justify-between">
              <span>Water Intake</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <CircleHelp className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Staying hydrated is essential for optimal performance and recovery</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardTitle>
            <CardDescription>
              <span className="text-lg font-semibold">{nutrition.waterIntake / 1000}</span>
              <span className="text-sm text-muted-foreground"> / {goals.waterGoal / 1000} L</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={waterPercentage} className="h-2.5" />
            <div className="mt-2 text-sm text-muted-foreground">
              {waterPercentage}% of daily goal
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Macronutrient Breakdown</CardTitle>
          <CardDescription>
            Track your protein, carbs, and fat intake against your daily goals
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Protein</span>
              <span>{nutrition.totalProtein}g / {Math.round((goals.dailyCalories * goals.proteinPercentage / 100) / 4)}g</span>
            </div>
            <Progress value={proteinPercentage} className="h-2" />
            
            <div className="flex justify-between mt-4">
              <span className="font-medium">Carbs</span>
              <span>{nutrition.totalCarbs}g / {Math.round((goals.dailyCalories * goals.carbsPercentage / 100) / 4)}g</span>
            </div>
            <Progress value={carbsPercentage} className="h-2" />
            
            <div className="flex justify-between mt-4">
              <span className="font-medium">Fat</span>
              <span>{nutrition.totalFat}g / {Math.round((goals.dailyCalories * goals.fatPercentage / 100) / 9)}g</span>
            </div>
            <Progress value={fatPercentage} className="h-2" />
          </div>
          
          <div className="md:col-span-2 h-60">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={macroData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {macroData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NutritionSummary;
