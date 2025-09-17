import React, { useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  LinearProgress,
  Button,
} from '@mui/material';
import {
  Work,
  People,
  Schedule,
  Email,
} from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchJobStats } from "../../slice/JobSlice"; 
// import { fetchUserProfile } from "../../slice/UserSlice"; // optional: if you want to fetch full profile
import StatsCard from '../../components/dashboard/StatsCard.jsx';
import VacancyStatsChart from '../../components/dashboard/VacancyStatsChart.jsx';
import RecentActivities from '../../components/dashboard/RecentActivities.jsx';
import './DashboardPage.css';

const DashboardPage = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { stats, loading } = useSelector((state) => state.jobs);

  // ✅ Parse URL params and store token/role
  useEffect(() => {
    const params = new URLSearchParams(search);
    const token = params.get("token");
    const role = params.get("role");

    if (token) {
      localStorage.setItem("authToken", token);
    }
    if (role) {
      localStorage.setItem("userRole", role);
    }

    // OPTIONAL: fetch user profile using token
    // if (token) {
    //   dispatch(fetchUserProfile(token));
    // }
  }, [search, dispatch]);

  // ✅ Safely parse user from localStorage
  let user = {};
  try {
    user = JSON.parse(localStorage.getItem("user")) || {};
  } catch {
    user = {};
  }

  // ✅ Fallback values to avoid crashes
  const displayName = user.fullName || "Guest User";
  const displayRole = user.role || localStorage.getItem("userRole") || "Recruiter";

  useEffect(() => {
    dispatch(fetchJobStats());
  }, [dispatch]);

  const statsData = [
    {
      title: 'Active Jobs',
      value: stats.activeJobs || 0,
      icon: <Work />,
      color: 'primary',
      trend: '+2.5%',
      description: 'vs last month',
    },
    {
      title: 'Total Applications',
      value: stats.totalJobs || 0,
      icon: <People />,
      color: 'secondary',
      trend: '+12.3%',
      description: 'vs last month',
    },
    {
      title: 'Interviews Scheduled',
      value: 8,
      icon: <Schedule />,
      color: 'success',
      trend: '+5.1%',
      description: 'this week',
    },
    {
      title: 'Messages',
      value: 23,
      icon: <Email />,
      color: 'warning',
      trend: '+8.2%',
      description: 'unread',
    },
  ];

  const profileData = {
    completionPercentage: 75,
    technologies: [
      { name: 'React', percentage: 90 },
      { name: 'Node.js', percentage: 85 },
      { name: 'Python', percentage: 80 },
    ],
  };

  return (
    <Box className="dashboard-container">
      {/* ✅ Welcome Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Welcome back, {displayName}! 👋
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here's what's happening with your recruitment activities today.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* ✅ Stats Cards */}
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {statsData.map((stat, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <StatsCard {...stat} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* ✅ Profile Section */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                <Avatar
                  src={user?.photo || ""}
                  sx={{
                    width: 80,
                    height: 80,
                    mb: 2,
                    background: !user?.photo
                      ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                      : 'transparent',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                  }}
                >
                  {!user?.photo && displayName.charAt(0)}
                </Avatar>

                <Typography variant="h6" fontWeight="bold">
                  {displayName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {displayRole}
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" fontWeight="600">
                    Profile Completion
                  </Typography>
                  <Typography variant="body2" color="primary.main" fontWeight="600">
                    {profileData.completionPercentage}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={profileData.completionPercentage}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: '#e2e8f0',
                    '& .MuiLinearProgress-bar': { borderRadius: 4 },
                  }}
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" fontWeight="600" sx={{ mb: 2 }}>
                  Hiring Focus Areas
                </Typography>
                {profileData.technologies.map((tech, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body2">{tech.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {tech.percentage}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={tech.percentage}
                      sx={{
                        height: 4,
                        borderRadius: 2,
                        backgroundColor: '#e2e8f0',
                        '& .MuiLinearProgress-bar': { borderRadius: 2 },
                      }}
                    />
                  </Box>
                ))}
              </Box>

              <Button
                variant="contained"
                fullWidth
                sx={{ borderRadius: 2 }}
                onClick={() => navigate('/profile')}
              >
                View Full Profile
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* ✅ Vacancy Stats Chart */}
        <Grid item xs={12} md={8}>
          <VacancyStatsChart />
        </Grid>

        {/* ✅ Recent Activities */}
        <Grid item xs={12}>
          <RecentActivities />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
