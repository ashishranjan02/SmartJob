import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import JobTabs from "./JobTabs";
import JobFilterBar from "./JobFilterBar";
import ManageJdPost from "./ManageJdPost.jsx";

const JobPostPage = () => {
  const navigate = useNavigate();

  const handleNewJobClick = () => {
    navigate("/jobpostbyadmin");
  };

  return (
    <Box p={3}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5" fontWeight="bold">
          Jobs
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />} onClick={handleNewJobClick}>
          New Job
        </Button>
      </Stack>

      <JobTabs />
      <JobFilterBar />
      <ManageJdPost/>
    </Box>
  );
};

export default JobPostPage;
