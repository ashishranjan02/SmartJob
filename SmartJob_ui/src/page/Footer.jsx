import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  IconButton,
  Stack,
  Link as MuiLink,
  InputAdornment,
} from "@mui/material";
import {
  LocationOn,
  Phone,
  Email,
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Send,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #2b2452ff, #2b2452ff, #2b2452ff)",
        color: "#fff",
        py:4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Reach Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Stack spacing={1} alignItems="flex-start">
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                sx={{ textTransform: "uppercase", fontSize: "13px" }}
              >
                Reach Us
              </Typography>

              <Stack direction="row" spacing={0.6} alignItems="center">
                <LocationOn fontSize="small" />
                <Typography variant="caption">
                  123 Main Street, Noida
                </Typography>
              </Stack>
              <Stack direction="row" spacing={0.6} alignItems="center">
                <Phone fontSize="small" />
                <Typography variant="caption">+91 7484062524</Typography>
              </Stack>
              <Stack direction="row" spacing={0.6} alignItems="center">
                <Email fontSize="small" />
                <Typography variant="caption">SmartJob@gmail.com</Typography>
              </Stack>

              <Stack direction="row" spacing={0.5} mt={0.5}>
                {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, i) => (
                  <IconButton
                    key={i}
                    sx={{
                      backgroundColor: "#fff",
                      color: "#0d1b2a",
                      "&:hover": {
                        backgroundColor: "#1976d2",
                        color: "#fff",
                      },
                      width: 28,
                      height: 28,
                    }}
                  >
                    <Icon fontSize="inherit" sx={{ fontSize: "16px" }} />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* About */}
          <Grid item xs={12} sm={6} md={3}>
            <Stack spacing={1} alignItems="flex-start">
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                sx={{ textTransform: "uppercase", fontSize: "13px" }}
              >
                About
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  lineHeight: 1.4,
                  opacity: 0.8,
                  fontSize: "12px",
                }}
              >
                Smart Job connects professionals with leading employers,
                making job hunting simple and effective for
                everyone.
              </Typography>
              <MuiLink
                component={RouterLink}
                to="/about"
                underline="none"
                sx={{
                  fontSize: "12px",
                  color: "#64b5f6",
                  fontWeight: "bold",
                  mt: 0.5,
                  "&:hover": { textDecoration: "underline", color: "#90caf9" },
                }}
              >
                Learn More →
              </MuiLink>
            </Stack>
          </Grid>

          {/* Links */}
          {/* Links */}
<Grid item xs={12} sm={6} md={3}>
  <Stack spacing={1} alignItems="flex-start">
    <Typography
      variant="subtitle2"
      fontWeight="bold"
      sx={{ textTransform: "uppercase", fontSize: "13px" }}
    >
      Quick Links
    </Typography>
    <Stack spacing={0.4}>
      {["Home", "About", "Service", "Career", "Blog", "Contact"].map(
        (link, i) => {
          // Map Contact to /contact route
          const to =
            link === "Home"
              ? "/"
              : link === "Contact"
              ? "/contact"
              : `/${link.toLowerCase()}`;
          return (
            <MuiLink
              key={i}
              component={RouterLink}
              to={to} // This now navigates to the correct page
              color="inherit"
              underline="none"
              sx={{
                fontSize: "12px",
                opacity: 0.8,
                "&:hover": {
                  opacity: 1,
                  textDecoration: "underline",
                  color: "#64b5f6",
                },
              }}
            >
              {link}
            </MuiLink>
          );
        }
      )}
    </Stack>
  </Stack>
</Grid>


          {/* Newsletter */}
          <Grid item xs={12} sm={6} md={3}>
            <Stack spacing={1} alignItems="flex-start" sx={{ width: "100%" }}>
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                sx={{ textTransform: "uppercase", fontSize: "13px" }}
              >
                Newsletter
              </Typography>
              <TextField
                placeholder="Email"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={{
                          backgroundColor: "#1976d2",
                          color: "#fff",
                          "&:hover": { backgroundColor: "#1565c0" },
                          width: 28,
                          height: 28,
                        }}
                      >
                        <Send sx={{ fontSize: "16px" }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 1,
                  input: { color: "#000", fontSize: "12px", p: 1 },
                }}
              />
              <Typography
                variant="caption"
                sx={{ fontSize: "11px", opacity: 0.6 }}
              >
                Subscribe for latest news & updates.
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography
          variant="caption"
          align="center"
          sx={{ mt: 3, fontSize: "11px", opacity: 0.6, display: "block" }}
        >
          © {new Date().getFullYear()} All Rights Reserved by{" "}
          <strong>Smart Job</strong>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;