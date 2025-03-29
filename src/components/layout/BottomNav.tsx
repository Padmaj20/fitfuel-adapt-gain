
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Activity, Dumbbell, User, Utensils } from "lucide-react";

const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    {
      name: "Dashboard",
      icon: Activity,
      path: "/",
      isActive: location.pathname === "/"
    },
    {
      name: "Workouts",
      icon: Dumbbell,
      path: "/workouts",
      isActive: location.pathname.startsWith("/workouts")
    },
    {
      name: "Nutrition",
      icon: Utensils,
      path: "/nutrition",
      isActive: location.pathname.startsWith("/nutrition")
    },
    {
      name: "Profile",
      icon: User,
      path: "/profile",
      isActive: location.pathname.startsWith("/profile")
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t flex items-center justify-around p-2 backdrop-blur-lg">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="w-full"
        >
          <div className={cn(
            "flex flex-col items-center justify-center py-1 transition-colors",
            item.isActive 
              ? "text-primary" 
              : "text-muted-foreground hover:text-foreground"
          )}>
            <item.icon size={20} className={cn(
              "transition-all",
              item.isActive ? "text-primary" : ""
            )} />
            <span className="text-xs mt-1">{item.name}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;
