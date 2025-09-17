import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Paper,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { motion } from "framer-motion";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import VisibilityIcon from "@mui/icons-material/Visibility";

const About = () => {
  const stats = [
    { icon: <SupportAgentIcon />, value: "960+", label: "Support Agents" },
    { icon: <WorkOutlineIcon />, value: "1200+", label: "Active Jobs" },
    { icon: <PeopleAltIcon />, value: "2500+", label: "Happy Candidates" },
    { icon: <SupervisorAccountIcon />, value: "500+", label: "Recruiters" },
  ];

  const features = [
    {
      icon: <WorkOutlineIcon sx={{ fontSize: 50, color: "#fff" }} />,
      title: "Job Opportunities",
      desc: "Access thousands of verified job openings across multiple industries.",
    },
    {
      icon: <PeopleAltIcon sx={{ fontSize: 50, color: "#fff" }} />,
      title: "Professional Network",
      desc: "Connect with top recruiters and expand your professional network.",
    },
    {
      icon: <BusinessCenterIcon sx={{ fontSize: 50, color: "#fff" }} />,
      title: "Career Growth",
      desc: "Get personalized career advice and skill development resources.",
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 50, color: "#fff" }} />,
      title: "Performance Tracking",
      desc: "Monitor your career progress and improve your job search strategy.",
    },
  ];

  const team = [
    {
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Rahul Sharma",
      role: "Founder & CEO",
    },
    {
      img: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Priya Verma",
      role: "HR Manager",
    },
    {
      img: "https://randomuser.me/api/portraits/men/55.jpg",
      name: "Amit Kumar",
      role: "Tech Lead",
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.default" }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: "35vh",
          backgroundImage:
            "url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          mb: 8,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.55)",
          }}
        />
        <Container sx={{ position: "relative", zIndex: 2 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            About <span style={{ color: "#ffd166" }}>Smart Job</span>
          </Typography>
          <Typography variant="subtitle1" maxWidth="sm" mx="auto">
            Building trusted connections between job seekers and recruiters with
            innovation and excellence.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Company Story + Highlights */}
        <Grid container spacing={6} alignItems="center" mb={10}>
          <Grid
            item
            xs={12}
            md={6}
            component={motion.div}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Welcome to Smart Job!
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              We bridge the gap between job seekers and companies with:
            </Typography>
            <Stack spacing={2}>
              {[
                "Verified & trusted recruiters",
                "Wide range of job opportunities",
                "AI-powered job matching",
                "Guidance for career growth",
              ].map((point, i) => (
                <Stack direction="row" alignItems="center" spacing={1} key={i}>
                  <CheckCircleIcon color="primary" />
                  <Typography>{point}</Typography>
                </Stack>
              ))}
            </Stack>
            <Button
              variant="contained"
              size="medium"
              sx={{ borderRadius: 6, mt: 3 }}
            >
              Explore Jobs
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            component={motion.div}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <Paper
              elevation={3}
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg"
                alt="Smart Job"
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Paper>
          </Grid>
        </Grid>

        {/* Stats Section */}
        <Box textAlign="center" mb={10}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Our Achievements
          </Typography>
          <Grid container spacing={4} justifyContent="center" mt={2}>
            {stats.map((stat, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    textAlign: "center",
                    background: "linear-gradient(135deg, #f5f9ff, #e3f2fd)",
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-6px)" },
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "white",
                      color: "primary.main",
                      width: 60,
                      height: 60,
                      mx: "auto",
                      mb: 2,
                      boxShadow: 2,
                    }}
                  >
                    {stat.icon}
                  </Avatar>
                  <Typography variant="h6" fontWeight="bold">
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Features */}
        <Box sx={{ py: 10, backgroundColor: "#f8fafc", borderRadius: 4, mb: 10 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            sx={{ mb: 6, color: "primary.main" }}
          >
            What We Offer
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 5,
                    background:
                      "linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)",
                    color: "#fff",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                  }}
                >
                  {feature.icon}
                  <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography sx={{ opacity: 0.9 }}>{feature.desc}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Mission & Vision */}
<Box mb={10}>
  <Grid container spacing={6} alignItems="stretch">
    <Grid item xs={12} md={6} display="flex">
      <Paper
        elevation={2}
        sx={{
          p: 4,
          borderRadius: 4,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#f9fbff",
        }}
      >
        <EmojiObjectsIcon sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Our Mission
        </Typography>
        <Typography color="text.secondary" textAlign="center">
          To empower individuals by providing career opportunities that
          align with their skills and ambitions while helping companies
          find the best talent.
        </Typography>
      </Paper>
    </Grid>
    <Grid item xs={12} md={6} display="flex">
      <Paper
        elevation={2}
        sx={{
          p: 4,
          borderRadius: 4,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#f9fbff",
        }}
      >
        <VisibilityIcon sx={{ fontSize: 50, color: "primary.main", mb: 2 }} />
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Our Vision
        </Typography>
        <Typography color="text.secondary" textAlign="center">
          To become the most trusted global recruitment platform, known
          for innovation, reliability, recruitment and innovation and meaningful connections.
        </Typography>
      </Paper>
    </Grid>
  </Grid>
</Box>


        {/* Team Section */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Meet Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center" mt={2}>
            {team.map((member, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    textAlign: "center",
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-6px)" },
                  }}
                >
                  <Avatar
                    src={member.img}
                    alt={member.name}
                    sx={{ width: 80, height: 80, mx: "auto", mb: 2 }}
                  />
                  <Typography variant="h6" fontWeight="bold">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {member.role}
                  </Typography>
                  <Stack direction="row" justifyContent="center" spacing={1}>
                    <IconButton size="small" color="primary">
                      <LinkedInIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="primary">
                      <TwitterIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="primary">
                      <FacebookIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          py: 10,
          background: "linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Ready to Find Your Dream Job?
          </Typography>
          <Typography
            variant="h6"
            sx={{ mb: 4, opacity: 0.9, fontWeight: 300 }}
          >
            Join Smart Job today and take the next step in your career.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              borderRadius: "30px",
              px: 5,
              py: 1.5,
              fontWeight: "bold",
              textTransform: "none",
              boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            Get Started
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default About;