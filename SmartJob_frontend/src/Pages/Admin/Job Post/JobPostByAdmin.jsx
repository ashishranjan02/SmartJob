import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import JobFilterBar from "./JobFilterBar.jsx";
import JobCard from "./JobCard.jsx";

const JobPostByAdmin = () => {
  const navigate = useNavigate();

  const handleNewJobClick = () => {
    navigate("/addjob");
  };

  return (
    <Box p={2}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight="bold">
          Jobs
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleNewJobClick} sx={{bgcolor:'#26A69A'}}>
          New Job
        </Button>
      </Stack>

      <JobFilterBar />
      <JobCard/>
    </Box>
  );
};

export default JobPostByAdmin;
