// src/Routes/PublicRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import Login from "../Pages/Login";

const PublicRoute = () => {
  const role = localStorage.getItem("userRole");

  if (role === "admin") return <Navigate to="/dashboard" />;
  if (role === "recruiter") return <Navigate to="/recruiter-dashboard" />;

  return <Login />;
};

export default PublicRoute;
