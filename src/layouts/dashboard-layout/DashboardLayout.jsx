import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) return <Loader />;

  return (
    <div>
      <div>MENU</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
