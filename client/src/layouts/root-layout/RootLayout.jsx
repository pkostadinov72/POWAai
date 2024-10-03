import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import ImagekitProvider from "../../contexts/ImageKitContext";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <ImagekitProvider>
        <div className="rootLayout">
          <header>
            <Link to="/" className="logo">
              <img src="/logo.png" />
              <span>POWA AI</span>
            </Link>
            <div className="user">
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          <main>
            <Outlet />
          </main>
        </div>
      </ImagekitProvider>
    </ClerkProvider>
  );
};

export default RootLayout;
