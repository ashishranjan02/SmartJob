import React from "react";
import { Box, Typography, Stack, Card } from "@mui/material";
import { motion } from "framer-motion";
import WorkIcon from "@mui/icons-material/Work";

const FeaturesPage = () => {
  const features = [
    {
      title: "Connect with top talent",
      description: "Reach skilled candidates quickly and easily.",
    },
    {
      title: "Grow your business",
      description: "Hire the right people to accelerate your company growth.",
    },
    {
      title: "Trusted by 800+ cities",
      description: "Our platform connects businesses nationwide.",
    },
    {
      title: "5 Crore+ candidates",
      description: "Huge talent pool available for every role.",
    },
    {
      title: "6 Lakh+ employers",
      description: "Join thousands of companies hiring on our platform.",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: { xs: 3, md: 10 },
        py: 8,
        background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cubes.png')",
        backgroundRepeat: "repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 6 }}>
        <WorkIcon sx={{ fontSize: 50, mr: 1, color: "#1976d2" }} />
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            background: "linear-gradient(45deg, #1976d2, #42a5f5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "1px",
          }}
        >
          TalentWave Features
        </Typography>
      </Box>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        sx={{ width: "100%", flexWrap: "wrap", justifyContent: "center" }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8, type: "spring" }}
          >
            <Card
              sx={{
                p: 4,
                minWidth: 250,
                maxWidth: 300,
                borderRadius: 3,
                bgcolor: "#ffffff",
                boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
                color="#1976d2"
                gutterBottom
              >
                {feature.title}
              </Typography>
              <Typography variant="body2" color="#475569">
                {feature.description}
              </Typography>
            </Card>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
};

export default FeaturesPage;
