import React, { useEffect } from "react";
import {
  Box, Button, Grid, MenuItem, TextField, Typography, Paper,
} from "@mui/material";
import { ArrowBack, Password } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createRecruiter } from "../../../features/recruiter/recruiterSlice.js";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  gender: Yup.string().required("Gender is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNo: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  currentLocation: Yup.string().required("Location is required"),
  description: Yup.string().required("Description is required"),
  totalExperience: Yup.string()
    .required("Total experience is required"),
  level: Yup.string().required("Level is required"),
  recruiterImage: Yup.mixed().required("Recruiter Image is required"),
});

const AddRecruiter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.recruiter);
  const loading = status === "loading";

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      phoneNo: "",
      currentLocation: "",
      description: "",
      totalExperience: "",
      level: "",
      recruiterImage:"",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, value);
        });

        const result = await dispatch(createRecruiter(formData));

        if (createRecruiter.fulfilled.match(result)) {
          console.log("Recruiter created:", result.payload);
          resetForm();
          navigate("/createrecruiter");
        } else {
          console.error("Create failed:", result);
        }
      } catch (error) {
        console.error("Error in onSubmit:", error);
      }
    },
  });

  useEffect(() => {
    if (error) {
      alert(`Error: ${error}`);
    }
  }, [error]);

  return (
    <Box p={2} sx={{ maxWidth: "900px", margin: "auto" }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate("/createrecruiter")}
          sx={{ mr: 2 }}
        >
          Back
        </Button>
      </Box>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          New Recruiter
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} py={1}>
            {/* First Name */}
            <Grid  size={{xs:12, sm:6, md:4}}>
              <TextField
                fullWidth
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>

            {/* Last Name */}
            <Grid size={{xs:12, sm:6, md:4}}>
              <TextField
                fullWidth
                name="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>

            {/* Gender */}
            <Grid size={{xs:12, sm:6, md:3}}>
              <TextField
                select
                fullWidth
                name="gender"
                label="Gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                error={formik.touched.gender && Boolean(formik.errors.gender)}
                helperText={formik.touched.gender && formik.errors.gender}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          <Grid container spacing={2} py={1}>
            {/* Email */}
            <Grid size={{xs:12, sm:6, md:4}}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>

            {/* Phone Number */}
            <Grid size={{xs:12, sm:6, md:4}}>
              <TextField
                fullWidth
                name="phoneNo"
                label="Phone Number"
                type="number"
                value={formik.values.phoneNo}
                onChange={formik.handleChange}
                error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
                helperText={formik.touched.phoneNo && formik.errors.phoneNo}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} py={1}>
            {/* Current Location */}
            <Grid size={{xs:12, sm:6, md:7}}>
              <TextField
                fullWidth
                name="currentLocation"
                label="Current Location"
                multiline
                value={formik.values.currentLocation}
                onChange={formik.handleChange}
                error={formik.touched.currentLocation && Boolean(formik.errors.currentLocation)}
                helperText={formik.touched.currentLocation && formik.errors.currentLocation}
              />
            </Grid>

            {/* Total Experience */}
            <Grid size={{xs:12, sm:6, md:4}}>
              <TextField
                select
                fullWidth
                name="totalExperience"
                label="Total Experience (Years)"
                value={formik.values.totalExperience}
                onChange={formik.handleChange}
                error={formik.touched.totalExperience && Boolean(formik.errors.totalExperience)}
                helperText={formik.touched.totalExperience && formik.errors.totalExperience}
              >
                <MenuItem value=""><em>Select Experience</em></MenuItem>
                <MenuItem value="Less than 1 Year">Less than 1 Year</MenuItem>
                <MenuItem value="1+ Year">1+ Year</MenuItem>
                <MenuItem value="2+ Year">2+ Year</MenuItem>
                <MenuItem value="3+ Year">3+ Year</MenuItem>
                <MenuItem value="4+ Year">4+ Year</MenuItem>
                <MenuItem value="5+ Year">5+ Year</MenuItem>
                <MenuItem value="6+ Year">6+ Year</MenuItem>
                <MenuItem value="7+ Year">7+ Year</MenuItem>
                <MenuItem value="8+ Year">8+ Year</MenuItem>
                <MenuItem value="9+ Year">9+ Year</MenuItem>
                <MenuItem value="10+ Year">10+ Year</MenuItem>
                <MenuItem value="11+ Year">11+ Year</MenuItem>
                <MenuItem value="12+ Year">12+ Year</MenuItem>
                <MenuItem value="13+ Year">13+ Year</MenuItem>
                <MenuItem value="14+ Year">14+ Year</MenuItem>
                <MenuItem value="More than 15+ Year">More than 15+ Year</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          <Grid container spacing={2} py={1}>
            {/* Level */}
            <Grid size={{xs:12, sm:6, md:3}}>
              <TextField
                select
                fullWidth
                name="level"
                label="Level"
                value={formik.values.level}
                onChange={formik.handleChange}
                error={formik.touched.level && Boolean(formik.errors.level)}
                helperText={formik.touched.level && formik.errors.level}
              >
                <MenuItem value="Junior Level">Junior Level</MenuItem>
                <MenuItem value="Mid Level">Mid Level</MenuItem>
                <MenuItem value="Senior Level">Senior Level</MenuItem>
                <MenuItem value="Management Level">Management Level</MenuItem>
              </TextField>
            </Grid>

            {/* Description */}
            <Grid size={{xs:12, sm:6, md:5}}>
              <TextField
                fullWidth
                name="description"
                label="Description"
                multiline
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
              />
            </Grid>

            {/* Recruiter Image */}
            <Grid size={{xs:12, sm:6, md:3}} display={'flex'} alignItems={'center'} >
              <Button
                variant="outlined"
                component="label"
              >
                Upload Image
                <input
                  type="file"
                  hidden
                  name="recruiterImage"
                  accept="image/*"
                  onChange={(event) => {
                    formik.setFieldValue("recruiterImage", event.currentTarget.files[0]);
                  }}
                  height={'40px'}
                />
              </Button>
              {formik.errors.recruiterImage && formik.touched.recruiterImage && (
                <Typography color="error" variant="body2">
                  {formik.errors.recruiterImage}
                </Typography>
              )}
            </Grid>
          </Grid>

          <Grid container spacing={2} py={1}>
            {/* Buttons */}
            <Grid item xs={12} sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="outlined"
                onClick={() => navigate("/createrecruiter")}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={!formik.isValid || formik.isSubmitting || loading}
              >
                {loading ? "Saving..." : "Add Recruiter"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default AddRecruiter;

