// Contact.jsx
import React from "react";
import { Box, Container, Grid, Typography, TextField, Button } from "@mui/material";
import { LocationOn, Phone, Email } from "@mui/icons-material";

const Contact = () => {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh", backgroundColor: "#f4f6f8" }}>
      {/* Gradient Header */}
      <Box
        sx={{
          py: 6,
          textAlign: "center",
          background: "linear-gradient(90deg, #1976d2, #00bfa5)",
          color: "#fff",
          borderRadius: "0 0 20px 20px",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          Contact Smart Job
        </Typography>
        <Typography sx={{ fontSize: 16 }}>
          We are here to help you. Reach out to us anytime!
        </Typography>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 4,
                background: "linear-gradient(135deg, #ffffff, #e0f7fa)",
                borderRadius: 3,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold", color: "#1976d2" }}>
                Send a Message
              </Typography>
              <Box component="form" noValidate autoComplete="off">
                <TextField label="Full Name" fullWidth sx={{ mb: 2 }} />
                <TextField label="Email" type="email" fullWidth sx={{ mb: 2 }} />
                <TextField label="Subject" fullWidth sx={{ mb: 2 }} />
                <TextField label="Message" multiline rows={5} fullWidth sx={{ mb: 2 }} />
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(45deg, #1976d2, #00bfa5)",
                    color: "#fff",
                    fontWeight: "bold",
                    "&:hover": { background: "linear-gradient(45deg, #00bfa5, #1976d2)" },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 4,
                background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
                borderRadius: 3,
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold", color: "#1976d2" }}>
                Contact Info
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOn sx={{ color: "#00bfa5", mr: 2 }} />
                <Typography>123 Smart Street, Tech City, India</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Phone sx={{ color: "#00bfa5", mr: 2 }} />
                <Typography>+91 98765 43210</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Email sx={{ color: "#00bfa5", mr: 2 }} />
                <Typography>support@smartjob.com</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Map Section */}
        <Box
          sx={{
            mt: 6,
            borderRadius: 3,
            overflow: "hidden",
            height: 400,
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            position: "relative",
          }}
        >
          <iframe
            title="Smart Job Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902041779838!2d90.41251881498128!3d23.81033269410695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7bdba6d574f%3A0x681dfd5f71e15f0!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sin!4v1694572761930!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;