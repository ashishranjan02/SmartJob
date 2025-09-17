import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Data = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const [counterKey, setCounterKey] = useState(0);

  const stats = [
    { value: 500000, suffix: "+", text: "New candidates join every month." },
    { value: 200, suffix: "+", text: "Job categories to publish your job." },
    { value: 5, suffix: "X", text: "More walk-ins than competitors." },
    { value: 80, suffix: "%", text: "Get qualified candidates within a week" },
  ];

  // Each time the section comes into view, change the key to restart CountUp
  useEffect(() => {
    if (inView) {
      setCounterKey((prev) => prev + 1);
    }
  }, [inView]);

  return (
    <Box sx={{px: { xs: 2, sm: 3, md: 8 }, 
              py:4, 
              textAlign: "center", 
              bgcolor: "#E8EFF9" }} ref={ref}>

      {/* Heading */}
      <Typography variant="h4" fontWeight={700} gutterBottom color="#6a1b9a">
        Why hire from SmartJob?
      </Typography>

      {/* Subheading */}
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: 700, mx: "auto",}}
      >
        From startups to Smart revolutionizes
        the way to find high-quality talent quickly & effortlessly.
      </Typography>

      {/* Stats Section */}
      <Grid container py={4} justifyContent="center">
        {stats.map((item, index) => (
          <Grid size={{xs:6, sm:6, md:3}} key={`${index}-${counterKey}`}>
            <Box>
              <Typography
                variant="h5"
                fontWeight={700}
                color="#6a1b9a"
                gutterBottom
              >
                {inView ? (
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2}
                    suffix={item.suffix}
                  />
                ) : (
                  `0${item.suffix}`
                )}
              </Typography>
              <Divider
                sx={{
                  width: "30px",
                  mx: "auto",
                  borderColor: "rgba(0,0,0,0.1)",
                  mb: 1,
                }}
              />
              <Typography variant="body2" color="text.secondary">
                {item.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Data