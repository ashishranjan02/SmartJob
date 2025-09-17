import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  // Check login status (example: from localStorage)
  const isLoggedIn = localStorage.getItem("userToken"); // or "user" etc.

  const handleApply = () => {
    if (isLoggedIn) {
      // ✅ Candidate is logged in
      alert(`Applied for ${job.title} at ${job.company}`);
      // Here you can call API to apply
    } else {
      // ❌ Not logged in → redirect to login page
      navigate("/login");
    }
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{job.title}</Typography>
        <Typography color="text.secondary">{job.company}</Typography>
        <Typography variant="body2" sx={{ my: 1 }}>
          {job.description}
        </Typography>
        <Typography variant="caption" display="block">
          Posted on {job.date}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="error" onClick={handleApply}>
            APPLY
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
