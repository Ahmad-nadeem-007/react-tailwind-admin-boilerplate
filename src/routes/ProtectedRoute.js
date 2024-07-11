import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
const token = localStorage.getItem("access-token")
  return token ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
