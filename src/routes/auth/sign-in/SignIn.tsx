import React from "react";
import { SignIn } from "@clerk/clerk-react";
import "../auth.css";

const SignInPage = () => {
  return (
    <div className="auth">
      <SignIn path="/sign-in" signUpUrl="/sign-up" />
    </div>
  );
};

export default SignInPage;
