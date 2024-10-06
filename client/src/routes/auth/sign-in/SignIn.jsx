import { SignIn } from "@clerk/clerk-react";
import "../auth.css";

const SignInPage = () => {
  return (
    <div className="auth">
      <SignIn
        path="/sign-in"
        signUpUrl="/sign-up"
        fallbackRedirectUrl="/dashboard"
      />
    </div>
  );
};

export default SignInPage;
