
import React from "react";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ForgotPassword = () => {
  return (
    <div className="container max-w-md mx-auto py-12 px-4">
      <div className="mb-6">
        <Link to="/login">
          <Button variant="ghost" size="sm" className="pl-0">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Login
          </Button>
        </Link>
        <h1 className="text-3xl font-bold mt-4 mb-1 text-center">Reset Password</h1>
        <p className="text-center text-muted-foreground">
          Enter your email to receive a password reset link
        </p>
      </div>
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPassword;
