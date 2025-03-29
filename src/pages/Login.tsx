
import LoginForm from "@/components/auth/LoginForm";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  return (
    <div className="container max-w-md mx-auto py-12 px-4">
      <div className="mb-6">
        <Link to="/">
          <Button variant="ghost" size="sm" className="pl-0">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-3xl font-bold mt-4 mb-1 text-center">Welcome Back</h1>
        <p className="text-center text-muted-foreground">
          Log in to your FitFuel account
        </p>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
