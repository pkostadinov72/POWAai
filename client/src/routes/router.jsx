import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "../layouts/root-layout/RootLayout";
import DashboardLayout from "../layouts/dashboard-layout/DashboardLayout";

const Home = lazy(() => import("./home/Home"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Chat = lazy(() => import("./chat/Chat"));
const SignInPage = lazy(() => import("./auth/sign-in/SignIn"));
const SignUpPage = lazy(() => import("./auth/sign-up/SignUp"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />
          },
          {
            path: "/dashboard/chats/:chatId",
            element: <Chat />
          }
        ]
      }
    ]
  }
]);

export default router;
