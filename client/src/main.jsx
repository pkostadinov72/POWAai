import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import "./index.css";
import RootLayout from "./layouts/root-layout/RootLayout";
import DashboardLayout from "./layouts/dashboard-layout/DashboardLayout";
import Loader from "./components/Loader";

const Home = lazy(() => import("./routes/landing/Landing"));
const Dashboard = lazy(() => import("./routes/dashboard/Dashboard"));
const ChatPage = lazy(() => import("./routes/chat/ChatPage"));
const SignInPage = lazy(() => import("./routes/auth/sign-in/SignIn"));
const SignUpPage = lazy(() => import("./routes/auth/sign-up/SignUp"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/sign-in",
        element: <SignInPage />,
        children: [
          {
            path: "/sign-in/sso-callback/",
            errorElement: <SignInPage />,
            loader: <Loader />
          }
        ]
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
        children: [
          {
            path: "/sign-up/sso-callback/",
            errorElement: <SignInPage />,
            loader: <Loader />
          }
        ]
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />
          },
          {
            path: "/dashboard/chat/:chatId",
            element: <ChatPage />
          }
        ]
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
