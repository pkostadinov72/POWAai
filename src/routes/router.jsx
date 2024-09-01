import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "../layouts/root-layout/RootLayout";

const Home = lazy(() => import("./home/Home"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Chat = lazy(() => import("./chat/Chat"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "/", element: <Home /> }]
  }
]);

export default router;
