
import { useState } from "react";
import { Meal } from "@/types/nutrition";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

interface MealItemProps {
  meal: Meal;
  onAddFood: (mealId: string) => void;
}

const MealItem = ({ meal, onAddFood }: MealItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Calculate meal nutrition totals
  const totalCalories = meal.foods.reduce(
    (sum, item) => sum + item.food.calories * item.quantity,
    0
  );
  
  const totalProtein = meal.foods.reduce(
    (sum, item) => sum + item.food.protein * item.quantity,
    0
  );
  
  const totalCarbs = meal.foods.reduce(
    (sum, item) => sum + item.food.carbs * item.quantity,
    0
  );
  
  const totalFat = meal.foods.reduce(
    (sum, item) => sum + item.food.fat * item.quantity,
    0
  );

  // Format meal type for display
  const formatMealType = (type: string) => {
    return type.split("-").map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");
  };

  return (
    <Card>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-lg flex items-center">
                {formatMealType(meal.type)}
                <span className="text-sm text-muted-foreground ml-2">
                  {meal.time}
                </span>
              </CardTitle>
              <CardDescription>
                {meal.foods.length} {meal.foods.length === 1 ? "item" : "items"} · {Math.round(totalCalories)} kcal
              </CardDescription>
            </div>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
          </div>
        </CardHeader>
        
        <CollapsibleContent>
          <CardContent className="pt-2">
            {meal.foods.length > 0 ? (
              <div className="space-y-3">
                {meal.foods.map((foodItem, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    {foodItem.food.image ? (
                      <img 
                        src={foodItem.food.image} 
                        alt={foodItem.food.name}
                        className="w-10 h-10 rounded-md object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center">
                        <span className="text-xs">No img</span>
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <div className="font-medium text-sm">{foodItem.food.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {foodItem.quantity * 100}g · {Math.round(foodItem.food.calories * foodItem.quantity)} kcal
                      </div>
                    </div>
                    
                    <div className="text-xs grid grid-cols-3 gap-2">
                      <div className="text-center">
                        <div className="font-medium">{Math.round(foodItem.food.protein * foodItem.quantity)}g</div>
                        <div className="text-muted-foreground">Protein</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{Math.round(foodItem.food.carbs * foodItem.quantity)}g</div>
                        <div className="text-muted-foreground">Carbs</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{Math.round(foodItem.food.fat * foodItem.quantity)}g</div>
                        <div className="text-muted-foreground">Fat</div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="pt-2 border-t">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Total</span>
                    <div className="grid grid-cols-4 gap-3">
                      <div className="text-center">{Math.round(totalCalories)} kcal</div>
                      <div className="text-center">{Math.round(totalProtein)}g</div>
                      <div className="text-center">{Math.round(totalCarbs)}g</div>
                      <div className="text-center">{Math.round(totalFat)}g</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-6 text-center">
                <p className="text-muted-foreground mb-2">No food items added yet</p>
              </div>
            )}
            
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full mt-3"
              onClick={() => onAddFood(meal.id)}
            >
              <Plus className="mr-1 h-4 w-4" /> Add Food
            </Button>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default MealItem;
