import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Users from "../pages/users/Users";
import AddUser from "../pages/users/AddUser";
import Login from "../pages/Login";
import Dashboard from "../pages/dasboard/Dashboard";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
