import { SignUp } from "@clerk/clerk-react";
import React from "react";
import "../auth.css";

const SignUpPage = () => {
  return (
    <div className="auth">
      <SignUp path="/sign-up" signInUrl="/sign-in" />
    </div>
  );
};

export default SignUpPage;
