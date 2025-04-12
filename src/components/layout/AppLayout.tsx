
import { Outlet, useNavigate } from "react-router-dom";
import BottomNav from "./BottomNav";
import { useAuth } from "@/contexts/AuthContext";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import UserSetupForm from "@/components/auth/UserSetupForm";

const AppLayout = () => {
  const { user, isLoading } = useAuth();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [needsProfileSetup, setNeedsProfileSetup] = useState(false);
  
  useEffect(() => {
    // If user is logged in but hasn't set their profile data yet, show setup form
    if (user && !isLoading) {
      if (!user.weight || !user.height || !user.age || !user.goal) {
        setNeedsProfileSetup(true);
      } else {
        setNeedsProfileSetup(false);
      }
    }
  }, [user, isLoading]);

  // Public pages don't require authentication
  const publicPaths = ['/login', '/signup', '/', '/forgot-password'];
  const isPublicPage = publicPaths.includes(window.location.pathname);

  // Show loading state while auth is being checked
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // If not logged in and not on a public page, redirect to login
  if (!user && !isPublicPage) {
    navigate('/login');
    return null;
  }

  if (needsProfileSetup && user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <UserSetupForm onComplete={() => setNeedsProfileSetup(false)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {user && (
        <header className="border-b py-2 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo size={isMobile ? "sm" : "sm"} />
            <h1 className="text-xl font-bold text-primary">FitFuel</h1>
          </div>
        </header>
      )}
      <main className={`flex-1 container max-w-5xl mx-auto p-4 ${user ? 'pb-20' : ''}`}>
        <Outlet />
      </main>
      {user && isMobile && <BottomNav />}
    </div>
  );
};

export default AppLayout;
