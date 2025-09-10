import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Reequiter Dashboard
      </Typography>
      <Button variant="contained" color="error" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default Dashboard;
