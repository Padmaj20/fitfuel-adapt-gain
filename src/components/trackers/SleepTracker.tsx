
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Moon, Clock, PlusCircle } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

interface SleepData {
  date: string;
  hoursSlept: number;
  bedTime: string;
  wakeTime: string;
  quality: number; // 1-5 scale
}

interface SleepTrackerProps {
  onAddSleepRecord?: (data: SleepData) => void;
  recentSleep?: SleepData[];
}

const SleepTracker = ({ onAddSleepRecord, recentSleep = [] }: SleepTrackerProps) => {
  const today = format(new Date(), "yyyy-MM-dd");
  const [hours, setHours] = useState(8);
  const [quality, setQuality] = useState(4);
  
  // Calculate weekly average if data is available
  const weeklyAverage = recentSleep.length 
    ? Math.round(recentSleep.reduce((sum, day) => sum + day.hoursSlept, 0) / recentSleep.length * 10) / 10
    : 0;
  
  const goalHours = 8;
  const percentOfGoal = Math.min(100, Math.round((weeklyAverage / goalHours) * 100));

  const handleAddSleep = () => {
    // In a real app, this would open a form to enter sleep details
    toast.success("Sleep record added successfully!");
    
    if (onAddSleepRecord) {
      onAddSleepRecord({
        date: today,
        hoursSlept: hours,
        bedTime: "23:00",
        wakeTime: "07:00",
        quality: quality
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex items-center">
          <Moon className="mr-2 h-5 w-5 text-indigo-400" />
          Sleep Tracker
        </CardTitle>
        <CardDescription>
          Monitor your sleep patterns for better recovery
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Weekly average</span>
                <span className="text-sm">{weeklyAverage} / {goalHours} hours</span>
              </div>
              <Progress value={percentOfGoal} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">
                {percentOfGoal}% of recommended 8 hours
              </p>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-4 space-y-3">
              <h4 className="text-sm font-medium">Quick add today's sleep</h4>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Hours slept</span>
                  <span className="text-sm font-medium">{hours} hrs</span>
                </div>
                <Slider 
                  min={0} 
                  max={12} 
                  step={0.5} 
                  value={[hours]} 
                  onValueChange={(vals) => setHours(vals[0])}
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Sleep quality</span>
                  <span className="text-sm font-medium">{quality}/5</span>
                </div>
                <Slider 
                  min={1} 
                  max={5} 
                  step={1} 
                  value={[quality]} 
                  onValueChange={(vals) => setQuality(vals[0])}
                />
              </div>
              
              <Button 
                variant="default" 
                size="sm" 
                className="w-full mt-2"
                onClick={handleAddSleep}
              >
                <PlusCircle className="mr-1 h-4 w-4" /> Add Sleep Record
              </Button>
            </div>
          </div>
          
          <div className="flex-1">
            <h4 className="text-sm font-medium mb-3">Recent sleep history</h4>
            {recentSleep.length > 0 ? (
              <div className="space-y-3">
                {recentSleep.map((day, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-muted/30 p-2 rounded-md">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Moon size={16} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">
                          {format(new Date(day.date), "MMM d")}
                        </p>
                        <p className="text-sm">{day.hoursSlept} hrs</p>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground mt-1">
                        <Clock size={12} className="mr-1" />
                        <span>{day.bedTime} - {day.wakeTime}</span>
                      </div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Moon 
                          key={i} 
                          size={12} 
                          className={`${i < day.quality ? "text-indigo-400" : "text-muted-foreground/30"}`} 
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-sm text-muted-foreground">
                <Moon size={24} className="mx-auto mb-2 opacity-50" />
                <p>No sleep records found</p>
                <p>Add your first sleep record to see history</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <p className="text-xs text-muted-foreground">
          Improving sleep quality can enhance workout recovery and performance.
        </p>
      </CardFooter>
    </Card>
  );
};

export default SleepTracker;
