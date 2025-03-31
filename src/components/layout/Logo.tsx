
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  return (
    <div className={cn("flex items-center", className)}>
      <img 
        src="/lovable-uploads/b2b7e825-9ee5-49b8-8ab7-5112423a27fd.png" 
        alt="FitFuel Logo" 
        className={cn("object-contain", sizeClasses[size])}
      />
    </div>
  );
};

export default Logo;
