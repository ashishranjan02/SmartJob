

import React, { useState } from "react";
import {
  Box, Button, Card, CardContent, TextField, Typography, Alert,
  IconButton, InputAdornment, MenuItem, Container
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, updateRecruiterProfile } from "../../../features/authSlice.js"; 
// Make sure fetchUserProfile is imported


const LoginPage = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.users);

  const [formData, setFormData] = useState({ email: "", password: "", role: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 🔑 Login API call
      const loginResponse = await dispatch(loginUser(formData)).unwrap();
      const token = loginResponse.token;
      const role = loginResponse.user.role;

      // ✅ Save token & role
      localStorage.setItem("authToken", token);
      localStorage.setItem("userRole", role);

      console.log("✅ Role received:", role);

      // 🌐 Redirect
      window.location.href = `http://localhost:3000/?token=${token}&role=${role}`;
    } catch (err) {
      console.error("❌ Login failed", err);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Card sx={{ width: "100%", maxWidth: 400, p: 3, borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
              Sign In
            </Typography>

            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth label="Email" name="email" type="email"
                value={formData.email} onChange={handleChange} margin="normal" required
              />
              <TextField
                fullWidth label="Password" name="password"
                type={showPassword ? "text" : "password"} value={formData.password}
                onChange={handleChange} margin="normal" required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                select fullWidth label="Role" name="role"
                value={formData.role} onChange={handleChange} margin="normal" required
              >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Recruiter">Recruiter</MenuItem>
              </TextField>

              <Button
                type="submit" variant="contained" fullWidth disabled={loading}
                sx={{ mt: 3, py: 1.3, bgcolor: "#6a1b9a", "&:hover": { bgcolor: "#6a1b9a" } }}
              >
                {loading ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default LoginPage;

