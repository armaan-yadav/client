import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
const PrivateRoutes = () => {
  let navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    !user && navigate("/auth");
  }, []);
  return <Outlet />;
};

export default PrivateRoutes;
