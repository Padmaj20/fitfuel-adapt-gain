
import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import { useAuth } from "@/contexts/AuthContext";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "./Logo";

const AppLayout = () => {
  const { user } = useAuth();
  const isMobile = useIsMobile();

  if (!user) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b py-2 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo size={isMobile ? "sm" : "sm"} />
          <h1 className="text-xl font-bold text-primary">FitFuel</h1>
        </div>
      </header>
      <main className="flex-1 container max-w-5xl mx-auto p-4 pb-20">
        <Outlet />
      </main>
      {isMobile && <BottomNav />}
    </div>
  );
};

export default AppLayout;
