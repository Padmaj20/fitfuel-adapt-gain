import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const UserSetupForm = ({ onComplete }: { onComplete: () => void }) => {
  const { user, updateProfile } = useAuth();
  const [age, setAge] = useState<number | undefined>(user?.age);
  const [weight, setWeight] = useState<number | undefined>(user?.weight);
  const [height, setHeight] = useState<number | undefined>(user?.height);
  const [goal, setGoal] = useState<string>(user?.goal || "");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      updateProfile({
        age,
        weight,
        height,
        goal: goal as "weight-loss" | "muscle-gain" | "maintenance",
      });
      
      toast.success("Profile updated successfully!");
      onComplete();
    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Set Up Your Profile</CardTitle>
        <CardDescription className="text-center">
          Let's personalize your experience
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              placeholder="e.g. 28"
              value={age || ""}
              onChange={(e) => setAge(parseInt(e.target.value) || undefined)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              step="0.1"
              placeholder="e.g. 75"
              value={weight || ""}
              onChange={(e) => setWeight(parseFloat(e.target.value) || undefined)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              id="height"
              type="number"
              placeholder="e.g. 180"
              value={height || ""}
              onChange={(e) => setHeight(parseInt(e.target.value) || undefined)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="goal">Fitness Goal</Label>
            <Select value={goal} onValueChange={setGoal} required>
              <SelectTrigger>
                <SelectValue placeholder="Select your goal" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="weight-loss">Weight Loss</SelectItem>
                  <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save and Continue"}
            {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center">
        <p className="text-center text-sm text-muted-foreground">
          You can update this information later in your profile settings.
        </p>
      </CardFooter>
    </Card>
  );
};

export default UserSetupForm;
