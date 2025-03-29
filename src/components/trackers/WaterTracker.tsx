
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Plus, Minus, Droplet } from "lucide-react";
import { toast } from "sonner";

interface WaterTrackerProps {
  currentAmount: number;
  goalAmount: number;
  onUpdate?: (amount: number) => void;
}

const WaterTracker = ({ currentAmount = 0, goalAmount = 3000, onUpdate }: WaterTrackerProps) => {
  const [waterAmount, setWaterAmount] = useState(currentAmount);
  
  // Calculate percentage of water goal achieved
  const percentage = Math.min(100, Math.round((waterAmount / goalAmount) * 100));
  
  // Define glass sizes
  const smallGlass = 250; // ml
  const mediumGlass = 500; // ml
  const largeGlass = 750; // ml
  
  const handleAddWater = (amount: number) => {
    const newAmount = Math.min(goalAmount * 1.5, waterAmount + amount);
    setWaterAmount(newAmount);
    if (onUpdate) onUpdate(newAmount);
    
    const glassSizeText = 
      amount === smallGlass ? "small glass" : 
      amount === mediumGlass ? "medium glass" : "large glass";
    
    toast.success(`Added ${amount}ml (${glassSizeText}) of water`);
  };
  
  const handleRemoveWater = (amount: number) => {
    const newAmount = Math.max(0, waterAmount - amount);
    setWaterAmount(newAmount);
    if (onUpdate) onUpdate(newAmount);
    toast.info(`Removed ${amount}ml of water`);
  };
  
  const handleSliderChange = (value: number[]) => {
    const newAmount = value[0];
    setWaterAmount(newAmount);
    if (onUpdate) onUpdate(newAmount);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <Droplet className="mr-2 h-5 w-5 text-blue-500" />
          Water Tracker
        </CardTitle>
        <CardDescription>
          Stay hydrated by tracking your water intake
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center">
          <div className="relative w-36 h-36">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold">{Math.round(waterAmount / 1000 * 10) / 10}L</span>
            </div>
            <svg viewBox="0 0 100 100" className="w-full h-full rotate-[-90deg]">
              <circle
                cx="50"
                cy="50"
                r="40"
                strokeWidth="8"
                stroke="#e2e8f0"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                strokeWidth="8"
                stroke="#3b82f6"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - percentage / 100)}`}
                className="transition-all duration-500 ease-in-out"
              />
            </svg>
          </div>
          <div className="mt-2 text-center">
            <p className="text-sm text-muted-foreground">{percentage}% of daily goal</p>
            <p className="text-sm font-medium mt-1">{(goalAmount / 1000).toFixed(1)}L goal</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm">0L</span>
            <span className="text-sm">{(goalAmount * 1.5 / 1000).toFixed(1)}L</span>
          </div>
          <Slider
            defaultValue={[waterAmount]}
            max={goalAmount * 1.5}
            step={50}
            value={[waterAmount]}
            onValueChange={handleSliderChange}
            className="py-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <p className="text-sm font-medium">Add Water:</p>
            <div className="grid grid-cols-3 gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className="h-auto py-2 flex flex-col"
                onClick={() => handleAddWater(smallGlass)}
              >
                <Droplet size={14} className="mb-1 text-blue-500" />
                <span className="text-xs">{smallGlass}ml</span>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="h-auto py-2 flex flex-col"
                onClick={() => handleAddWater(mediumGlass)}
              >
                <Droplet size={16} className="mb-1 text-blue-500" />
                <span className="text-xs">{mediumGlass}ml</span>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="h-auto py-2 flex flex-col"
                onClick={() => handleAddWater(largeGlass)}
              >
                <Droplet size={18} className="mb-1 text-blue-500" />
                <span className="text-xs">{largeGlass}ml</span>
              </Button>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-sm font-medium">Quick Adjust:</p>
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleAddWater(250)}
                className="flex items-center gap-1"
              >
                <Plus size={14} /> 250ml
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleRemoveWater(250)}
                className="flex items-center gap-1"
              >
                <Minus size={14} /> 250ml
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WaterTracker;
