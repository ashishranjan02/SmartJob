import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./routeConstants.js";
import DashboardLayout from "../components/layout/DashboardLayout.jsx";
import DashboardPage from "../pages/dashboard/DashboardPage.jsx";
import JobsPage from "../pages/jobs/JobsPage.jsx";
import PostJobPage from "../pages/jobs/PostJobPage.jsx";
import EditJobPage from "../pages/jobs/EditJobPage.jsx";
import ManageJobsPage from "../pages/jobs/ManageJobPage.jsx";
import CandidatesPage from "../pages/candidates/CandidatesPage.jsx";
import ApplicantListPage from "../pages/candidates/ApplicationListPage.jsx";
import AcceptedApplicantsPage from "../pages/candidates/AcceptedApplicantsPage.jsx";
import RejectedApplicantsPage from "../pages/candidates/RejectedApplicantsPage.jsx";
import SearchCandidatesPage from "../pages/candidates/SearchCandidatesPage.jsx";
import BookmarkedCandidatesPage from "../pages/candidates/BookmarkedCandidatesPage.jsx";
import CandidateDetailPage from "../pages/candidates/CandidateDetailPage.jsx";
import InterviewsPage from "../pages/interviews/InterviewsPage.jsx";
import CommunicationPage from "../pages/communication/CommunicationPage.jsx";
import ProfilePage from "../pages/profile/ProfilePage.jsx";
import TokenHandler from "../pages/auth/TokenHandler.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ✅ Directly handle token & role */}
      <Route path="/" element={<TokenHandler />} />

      {/* Dashboard Layout */}
      <Route path="/" element={<DashboardLayout />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="jobs/post" element={<PostJobPage />} />
        <Route path="jobs/manage" element={<ManageJobsPage />} />
        <Route path="jobs/edit/:id" element={<EditJobPage />} />

        <Route path="candidates" element={<CandidatesPage />} />
        <Route path="candidates/applicants" element={<ApplicantListPage />} />
        <Route path="candidates/accepted" element={<AcceptedApplicantsPage />} />
        <Route path="candidates/rejected" element={<RejectedApplicantsPage />} />
        <Route path="candidates/search" element={<SearchCandidatesPage />} />
        <Route path="candidates/bookmarked" element={<BookmarkedCandidatesPage />} />
        <Route path="candidates/:id" element={<CandidateDetailPage />} />

        <Route path="interviews" element={<InterviewsPage />} />
        <Route path="communication" element={<CommunicationPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;
