// src/Pages/Login.js
import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const users = {
  admin: { email: "admin@example.com", password: "admin123" },
  recruiter: { email: "recruiter@example.com", password: "recruiter123" },
};

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6, "Too short").required("Required"),
    }),
    onSubmit: (values, { setSubmitting, setErrors }) => {
      const { email, password } = values;

      if (email === users.admin.email && password === users.admin.password) {
        localStorage.setItem("userRole", "admin");
        navigate("/dashboard"); // Admin route
      } else if (
        email === users.recruiter.email &&
        password === users.recruiter.password
      ) {
        localStorage.setItem("userRole", "recruiter");
        navigate("/recruiter-dashboard"); // Recruiter route
      } else {
        setErrors({ email: "Invalid credentials" });
      }

      setSubmitting(false);
    },
  });

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            margin="normal"
            type="password"
            label="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
