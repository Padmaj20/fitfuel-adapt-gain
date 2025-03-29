
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WaterTracker from "@/components/trackers/WaterTracker";
import SleepTracker from "@/components/trackers/SleepTracker";
import { useState } from "react";

const Trackers = () => {
  const [waterAmount, setWaterAmount] = useState(2000);
  
  // Sample sleep data for demonstration
  const sampleSleepData = [
    {
      date: "2023-05-25",
      hoursSlept: 7.5,
      bedTime: "23:30",
      wakeTime: "07:00",
      quality: 4
    },
    {
      date: "2023-05-24",
      hoursSlept: 8,
      bedTime: "23:00",
      wakeTime: "07:00",
      quality: 5
    },
    {
      date: "2023-05-23",
      hoursSlept: 6.5,
      bedTime: "00:30",
      wakeTime: "07:00",
      quality: 3
    },
    {
      date: "2023-05-22",
      hoursSlept: 7,
      bedTime: "23:45",
      wakeTime: "06:45",
      quality: 4
    }
  ];
  
  return (
    <div className="space-y-6 py-4">
      <h1 className="text-2xl font-bold">Trackers</h1>
      
      <Tabs defaultValue="water">
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="water">Water</TabsTrigger>
          <TabsTrigger value="sleep">Sleep</TabsTrigger>
        </TabsList>
        
        <TabsContent value="water">
          <WaterTracker 
            currentAmount={waterAmount}
            goalAmount={3000}
            onUpdate={setWaterAmount}
          />
        </TabsContent>
        
        <TabsContent value="sleep">
          <SleepTracker 
            recentSleep={sampleSleepData}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Trackers;
