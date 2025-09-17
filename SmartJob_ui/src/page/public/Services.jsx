import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Paper,
  Avatar,
} from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ navigation hook

// Service data
const services = [
  {
    title: "Job Posting",
    description:
      "Easily post job openings and reach thousands of candidates across industries.",
    icon: <WorkOutlineIcon fontSize="large" sx={{ color: "white" }} />,
    gradient: "linear-gradient(135deg, #42a5f5, #478ed1)",
  },
  {
    title: "Recruiter Support",
    description:
      "Dedicated recruiter tools to manage applicants and schedule interviews.",
    icon: <PeopleAltIcon fontSize="large" sx={{ color: "white" }} />,
    gradient: "linear-gradient(135deg, #66bb6a, #43a047)",
  },
  {
    title: "Company Branding",
    description:
      "Showcase your company profile and attract top talent with a strong brand.",
    icon: <BusinessCenterIcon fontSize="large" sx={{ color: "white" }} />,
    gradient: "linear-gradient(135deg, #ab47bc, #8e24aa)",
  },
  {
    title: "Analytics & Reports",
    description:
      "Track hiring progress with detailed reports and insights for better decisions.",
    icon: <TrendingUpIcon fontSize="large" sx={{ color: "white" }} />,
    gradient: "linear-gradient(135deg, #ef5350, #d32f2f)",
  },
];

// Why Choose Us data
const whyChoose = [
  {
    title: "Fast & Easy Hiring",
    desc: "Post jobs in minutes and get applications instantly.",
    icon: <WorkOutlineIcon sx={{ fontSize: 45 }} />,
    color: "linear-gradient(135deg, #42a5f5, #1976d2)",
  },
  {
    title: "Verified Companies",
    desc: "We ensure authenticity and trust in every profile.",
    icon: <BusinessCenterIcon sx={{ fontSize: 45 }} />,
    color: "linear-gradient(135deg, #66bb6a, #43a047)",
  },
  {
    title: "Smart Analytics",
    desc: "Track performance with real-time dashboards & insights.",
    icon: <TrendingUpIcon sx={{ fontSize: 45 }} />,
    color: "linear-gradient(135deg, #ef5350, #d32f2f)",
  },
  {
    title: "24/7 Support",
    desc: "Our team is always here to help you succeed.",
    icon: <PeopleAltIcon sx={{ fontSize: 45 }} />,
    color: "linear-gradient(135deg, #ab47bc, #8e24aa)",
  },
];

// Counter component
const Counter = ({ end }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <Typography variant="h4" fontWeight="bold">
      {count}+
    </Typography>
  );
};

const Service = () => {
  const navigate = useNavigate(); // ✅ navigation hook

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(135deg, #1565c0, #1976d2, #42a5f5)",
          color: "white",
          py: { xs: 4, md: 6 },
          textAlign: "center",
          borderBottomLeftRadius: "50% 10%",
          borderBottomRightRadius: "50% 10%",
        }}
      >
        <Container
          component={motion.div}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ letterSpacing: 1 }}
          >
            Our <span style={{ color: "#ffeb3b" }}>Services</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "600px",
              mx: "auto",
              fontSize: "15px",
              opacity: 0.9,
            }}
          >
            Modern hiring solutions designed to connect companies with the right
            talent quickly and effectively.
          </Typography>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  borderRadius: 4,
                  boxShadow: 4,
                  background: service.gradient,
                  color: "white",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 8,
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <CardContent>
                  {service.icon}
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mt: 2, mb: 1 }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {service.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.2)",
                      color: "white",
                      textTransform: "none",
                      borderRadius: 20,
                      px: 3,
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.35)",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Why Choose Us Section */}
      <Box
        sx={{ py: 8, background: "linear-gradient(135deg, #f9f9f9, #ffffff)" }}
      >
        <Container>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Why <span style={{ color: "#1976d2" }}>Choose Us?</span>
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              mb: 6,
              maxWidth: 600,
              mx: "auto",
              color: "text.secondary",
            }}
          >
            We provide innovative hiring solutions that make recruitment
            smarter, faster, and more reliable.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {whyChoose.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                component={motion.div}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transition: "0.4s ease",
                    "&:hover": {
                      transform: "scale(1.07)",
                      boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                      color: "white",
                      background: item.color,
                      boxShadow: 3,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontSize: "14px" }}
                  >
                    {item.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Animated Counters */}
      <Box
        sx={{ py: 6, background: "linear-gradient(135deg, #e3f2fd, #ffffff)" }}
      >
        <Container>
          <Grid container spacing={4} justifyContent="center" textAlign="center">
            <Grid item xs={6} md={3}>
              <Counter end={5000} />
              <Typography>Jobs Posted</Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Counter end={1200} />
              <Typography>Recruiters</Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Counter end={30000} />
              <Typography>Candidates</Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <Counter end={24} />
              <Typography>Support (hrs)</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 6, textAlign: "center" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Ready to hire smarter?
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            background: "linear-gradient(135deg, #1565c0, #42a5f5)",
            borderRadius: 30,
            px: 4,
            fontWeight: "bold",
          }}
          onClick={() => navigate("/")} // ✅ redirects to Home
        >
          Get Started
        </Button>
      </Box>

      {/* What Our Clients Say */}
      <Box
        sx={{
          py: 8,
          background: "linear-gradient(135deg, #f5f5f5, #ffffff)",
        }}
      >
        <Container>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
          >
            What Our Clients Say
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ mb: 6, maxWidth: 600, mx: "auto", color: "text.secondary" }}
          >
            Hear from recruiters and companies who found success with Smart Job.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {[
              {
                name: "Amit Sharma",
                role: "HR Manager, TechCorp",
                text: "Smart Job transformed our hiring process. We filled positions 3x faster!",
                img: "https://i.pravatar.cc/150?img=1",
              },
              {
                name: "Priya Singh",
                role: "Recruiter, Hitachi",
                text: "The analytics dashboard gave us deep insights into candidate trends.",
                img: "https://i.pravatar.cc/150?img=2",
              },
              {
                name: "Rahul Mehta",
                role: "Founder, StartupHub",
                text: "Loved the company branding feature. It boosted our applications massively.",
                img: "https://i.pravatar.cc/150?img=3",
              },
            ].map((t, i) => (
              <Grid
                item
                xs={12}
                md={4}
                key={i}
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 4,
                    textAlign: "center",
                    height: "100%",
                    transition: "0.4s ease",
                    "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
                  }}
                >
                  <Avatar
                    src={t.img}
                    alt={t.name}
                    sx={{
                      width: 70,
                      height: 70,
                      mx: "auto",
                      mb: 2,
                      boxShadow: 3,
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, fontStyle: "italic", color: "text.primary" }}
                  >
                    "{t.text}"
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {t.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t.role}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Service;
