
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle, Calendar } from "lucide-react";
import { sampleDailyNutrition, defaultNutritionGoals } from "@/data/nutrition";
import NutritionSummary from "@/components/nutrition/NutritionSummary";
import MealItem from "@/components/nutrition/MealItem";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Nutrition = () => {
  const [activeTab, setActiveTab] = useState("today");
  const [addFoodDialogOpen, setAddFoodDialogOpen] = useState(false);
  const [selectedMealId, setSelectedMealId] = useState("");
  
  const handleAddFood = (mealId: string) => {
    setSelectedMealId(mealId);
    setAddFoodDialogOpen(true);
  };
  
  const handleAddFoodSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAddFoodDialogOpen(false);
    toast.success("Food added to your meal");
  };

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Nutrition</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Change Date</span>
          </Button>
          <Button size="sm" className="flex items-center gap-1">
            <PlusCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Add Meal</span>
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="today" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="plans">Meal Plans</TabsTrigger>
          <TabsTrigger value="recipes">Recipes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="today" className="space-y-8">
          <NutritionSummary 
            nutrition={sampleDailyNutrition}
            goals={defaultNutritionGoals}
          />
          
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Meals</h2>
            <div className="space-y-4">
              {sampleDailyNutrition.meals.map((meal) => (
                <MealItem 
                  key={meal.id} 
                  meal={meal}
                  onAddFood={handleAddFood}
                />
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="plans">
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">Meal Plans Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              Personalized meal plans based on your profile will be available in the next update
            </p>
            <Button onClick={() => setActiveTab("today")}>
              View Today's Nutrition
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="recipes">
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">Recipes Coming Soon</h3>
            <p className="text-muted-foreground mb-6">
              Healthy recipes to support your fitness goals will be available soon
            </p>
            <Button onClick={() => setActiveTab("today")}>
              View Today's Nutrition
            </Button>
          </div>
        </TabsContent>
      </Tabs>
      
      <Dialog open={addFoodDialogOpen} onOpenChange={setAddFoodDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Food to Meal</DialogTitle>
            <DialogDescription>
              Search for a food item or create a custom entry
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleAddFoodSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="food-search">Search Food</Label>
              <Input 
                id="food-search"
                placeholder="Search food database..."
                type="search"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="food-amount">Amount</Label>
                <Input 
                  id="food-amount"
                  type="number"
                  min="0"
                  defaultValue="100"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="food-unit">Unit</Label>
                <Select defaultValue="g">
                  <SelectTrigger id="food-unit">
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="g">grams</SelectItem>
                    <SelectItem value="oz">ounces</SelectItem>
                    <SelectItem value="ml">milliliters</SelectItem>
                    <SelectItem value="cup">cups</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <DialogFooter>
              <Button type="submit">Add Food</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Nutrition;
