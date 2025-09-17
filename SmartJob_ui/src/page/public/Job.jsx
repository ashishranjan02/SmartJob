import React, { useState, useMemo } from "react";
import { Box, Typography, Pagination, Container, Grid } from "@mui/material";
import Filters from "../../components/Filter";
import JobCard from "../../components/JobCard";
import AdsPanel from "../../components/AdsPanel";
import Header from "../../components/Header";

// Dummy jobs data
const jobsData = [
  {
    title: "Maintenance Engineer",
    company: "TECHLOOK",
    description: "Only job description for demo",
    date: "10 Feb, 2025",
    location: "Noida",
    jobFunction: "Maintenance Engineer",
    experience: "3-5 Years",
    salary: "6-10 Lacs",
  },
  {
    title: "Software Engineer",
    company: "INNOVATIVE SOLUTIONS PVT LTD",
    description: "Develop, test and maintain highly-scalable web apps...",
    date: "15 Mar, 2024",
    location: "Bangalore, India",
    jobFunction: "Software Engineer",
    experience: "0-2 Years",
    salary: "2-4 Lacs",
  },
  {
    title: "Database Administrator",
    company: "DB Corp",
    description: "Manage database systems...",
    date: "20 Mar, 2024",
    location: "Delhi/NCR",
    jobFunction: "Database Administrator",
    experience: "5-7 Years",
    salary: "6-10 Lacs",
  },
];

const Jobs = () => {
  const [filters, setFilters] = useState({
    jobFunction: [],
    location: [],
    experience: [],
    salary: [],
  });

  // Filter logic
  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const matchJobFunction =
        filters.jobFunction.length === 0 ||
        filters.jobFunction.includes(job.jobFunction);

      const matchLocation =
        filters.location.length === 0 ||
        filters.location.some((loc) => job.location.includes(loc));

      const matchExperience =
        filters.experience.length === 0 ||
        filters.experience.includes(job.experience);

      const matchSalary =
        filters.salary.length === 0 ||
        filters.salary.includes(job.salary);

      return matchJobFunction && matchLocation && matchExperience && matchSalary;
    });
  }, [filters]);

  return (
    
    <Container maxWidth="lg" sx={{ py: 2 }}>
        <Header/>
      <Grid
        container
        spacing={2}
        sx={{
          bgcolor: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        {/* Filters */}
        <Grid size={{xs:12,md:3}}>
          <Filters filters={filters} setFilters={setFilters} />
        </Grid>

        {/* Jobs + Ads in one flex row */}
        <Grid size={{xs:12,md:9}}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
            }}
          >
            {/* Jobs */}
            <Box sx={{ flex: 1, p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {filteredJobs.length} Jobs Found
              </Typography>
              {filteredJobs.map((job, idx) => (
                <JobCard key={idx} job={job} />
              ))}
              {filteredJobs.length === 0 && (
                <Typography color="error">
                  No jobs found for selected filters.
                </Typography>
              )}
              <Pagination count={3} color="primary" sx={{ mt: 2 }} />
            </Box>

            {/* Ads always on the side */}
            <Box
              sx={{
                width: { xs: "100%", sm: 260 },
                flexShrink: 0,
                p: 2,
              }}
            >
              <AdsPanel />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Jobs;
