
import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import { useAuth } from "@/contexts/AuthContext";
import { useIsMobile } from "@/hooks/use-mobile";

const AppLayout = () => {
  const { user } = useAuth();
  const isMobile = useIsMobile();

  if (!user) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 container max-w-5xl mx-auto p-4 pb-20">
        <Outlet />
      </main>
      {isMobile && <BottomNav />}
    </div>
  );
};

export default AppLayout;
