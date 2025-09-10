import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicRoute from "./Routes/PublicRoute";
import MainRoute from "./Routes/MainRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<PublicRoute />} />
      <Route path="/*" element={<MainRoute />} />
    </Routes>
  );
}

export default App;
