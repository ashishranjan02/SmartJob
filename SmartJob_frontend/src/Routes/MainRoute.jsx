// src/Routes/MainRoute.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import RecruiterDashboard from "../Pages/Recruiter/RecruiterDashboard";
import AdminLayout from "../Layout/AdminLayout/AdminLayout";
import ActiveRecruiter from "../Pages/Admin/Recruiter Status/Active/ActiveRecruiter.jsx";
import DeactiveRecruiter from "../Pages/Admin/Recruiter Status/Deactive/DeactiveRecruiter.jsx"
import BlockedRecruiter from "../Pages/Admin/Recruiter Status/Blocked/BlockedRecruiter.jsx";
import JobPostByAdmin from "../Pages/Admin/Job Post/JobPostByAdmin.jsx";
import AddJob from "../Pages/Admin/Job Post/Form/AddJob.jsx";
import CreateRecruiter from "../Pages/Admin/Recruiter/CreateRecruiter";
import AddRecruiter from "../Pages/Admin/Recruiter/AddRecruiter";
import ViewRecruiter from "../Pages/Admin/Recruiter/ViewRecruiter.jsx";
const NotFound = () => <h2>404 - Page Not Found</h2>;

const MainRoute = () => {
  const role = localStorage.getItem("userRole");

  return (
    <Routes>
      {/* Admin protected routes */}
      {role === "admin" ? (
        <Route path="/" element={<AdminLayout />}>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/activerecruiter" element={<ActiveRecruiter />} />
          <Route path="/deactiverecruiter" element={<DeactiveRecruiter />} />
          <Route path="/blockrecruiter" element={<BlockedRecruiter />} />
          <Route path="/jobpostbyadmin" element={<JobPostByAdmin />} />
          <Route path="/addjob" element={<AddJob />} />
          <Route path="/createrecruiter" element={<CreateRecruiter />} />
          <Route path='/addrecruiter' element={<AddRecruiter/>} />
          <Route path='/view/:recruiterId' element={<ViewRecruiter />} />
        </Route>
      ) : (
        // if non-admin tries to access /dashboard, redirect
        <Route path="/dashboard" element={<Navigate to="/login" />} />
      )}

      {/* Recruiter route */}
      <Route
        path="/recruiter-dashboard"
        element={
          role === "recruiter" ? (
            <RecruiterDashboard />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoute;
