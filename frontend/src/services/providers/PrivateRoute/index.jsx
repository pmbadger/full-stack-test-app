import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthProvider/AuthProvider";

const PrivateRoute = () => {
  const { isAuthorized } = useAuth();
  if (isAuthorized === null) {
    return <div>Loading...</div> //!!!!!!!!!!!!!!!!!!!!!!!Add loading Page
  }
  console.log(isAuthorized);
  
  if (!isAuthorized) return <Navigate to="/login" />;
  return <Outlet />;
};

export default PrivateRoute;