import React, { useEffect } from "react";
import {
  Box, Button, Grid, MenuItem, TextField, Typography, Paper,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../../../features/Job/jobSlice.js";

const validationSchema = Yup.object({
  companyName: Yup.string().required("Company Name is required"),
  jobTitle: Yup.string().required("Job Title is required"),
  department: Yup.string().required("Department is required"),
  requiredSkill: Yup.string().required("Skills are required"),
  eligiblity: Yup.string().required("Eligibility is required"),
  location: Yup.string().required("Location is required"),
  jobProfileCTC: Yup.string().required("Job Profile CTC is required"),
  jobType: Yup.string().required("Job Type is required"),
  workOption: Yup.string().required("Work Option is required"),
  experienceLevel: Yup.string().required("Experience Level is required"),
  deadline: Yup.string().required("Deadline is required"),
  status: Yup.string().required("Status is required"),
  jobDescription: Yup.string().required("Job Description is required"),
});

const AddJob = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.job);
  const loading = status === "loading";

  const formik = useFormik({
    initialValues: {
      companyName: "",
      jobTitle: "",
      department: "",
      requiredSkill: "",
      eligiblity: "",
      location: "",
      jobProfileCTC: "",
      jobType: "",
      workOption: "",
      experienceLevel: "",
      deadline: "",
      status: "",
      jobDescription: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const result = await dispatch(createPost(values));
        if (createPost.fulfilled.match(result)) {
          console.log("Post created:", result.payload);
          resetForm();
          navigate("/jobpostbyadmin");
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
          onClick={() => navigate("/jobpostbyadmin")}
          sx={{ mr: 2 }}
        >
          Back
        </Button>
      </Box>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          New Job Post
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} py={1}>
            {/* Company Name */}
            <Grid size={{xs:12, sm:6, md:4}}>
              <TextField
                fullWidth
                name="companyName"
                label="Company Name"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                error={formik.touched.companyName && Boolean(formik.errors.companyName)}
                helperText={formik.touched.companyName && formik.errors.companyName}
              />
            </Grid>

            {/* Job Title */}
            <Grid size={{xs:12, sm:6, md:4}}>
              <TextField
                fullWidth
                name="jobTitle"
                label="Job Title"
                value={formik.values.jobTitle}
                onChange={formik.handleChange}
                error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
                helperText={formik.touched.jobTitle && formik.errors.jobTitle}
              />
            </Grid>

            {/* Department */}
            <Grid size={{xs:12, sm:6, md:4}}>
              <TextField
                fullWidth
                name="department"
                label="Department"
                value={formik.values.department}
                onChange={formik.handleChange}
                error={formik.touched.department && Boolean(formik.errors.department)}
                helperText={formik.touched.department && formik.errors.department}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} py={1}>
            {/* Required Skill */}
            <Grid size={{xs:12, sm:6, md:4}}>
              <TextField
                fullWidth
                name="requiredSkill"
                label="Required Skill"
                value={formik.values.requiredSkill}
                onChange={formik.handleChange}
                error={formik.touched.requiredSkill && Boolean(formik.errors.requiredSkill)}
                helperText={formik.touched.requiredSkill && formik.errors.requiredSkill}
              />
            </Grid>

            {/* Eligibility */}
            <Grid size={{xs:12, sm:6, md:4}}>
              <TextField
                fullWidth
                name="eligiblity"
                label="Eligibility"
                multiline
                value={formik.values.eligiblity}
                onChange={formik.handleChange}
                error={formik.touched.eligiblity && Boolean(formik.errors.eligiblity)}
                helperText={formik.touched.eligiblity && formik.errors.eligiblity}
              />
            </Grid>

            {/* Location */}
            <Grid size={{xs:12, sm:6, md:4}}>
              <TextField
                fullWidth
                name="location"
                label="Location"
                value={formik.values.location}
                onChange={formik.handleChange}
                error={formik.touched.location && Boolean(formik.errors.location)}
                helperText={formik.touched.location && formik.errors.location}
              />
            </Grid>
          </Grid>
          
          <Grid container spacing={2} py={1}>
            {/* Job Profile CTC */}
            <Grid size={{xs:12, sm:6, md:3}}>
              <TextField
                fullWidth
                name="jobProfileCTC"
                label="Job Profile CTC"
                value={formik.values.jobProfileCTC}
                onChange={formik.handleChange}
                error={formik.touched.jobProfileCTC && Boolean(formik.errors.jobProfileCTC)}
                helperText={formik.touched.jobProfileCTC && formik.errors.jobProfileCTC}
              />
            </Grid>

            {/* Job Type */}
            <Grid size={{xs:12, sm:6, md:3}}>
              <TextField
                select
                fullWidth
                name="jobType"
                label="Job Type"
                value={formik.values.jobType}
                onChange={formik.handleChange}
                error={formik.touched.jobType && Boolean(formik.errors.jobType)}
                helperText={formik.touched.jobType && formik.errors.jobType}
              >
                {["Full Time", "Part Time", "Internship", "Contract"].map((opt) => (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Work Option */}
            <Grid size={{xs:12, sm:6, md:3}}>
              <TextField
                select
                fullWidth
                name="workOption"
                label="Work Option"
                value={formik.values.workOption}
                onChange={formik.handleChange}
                error={formik.touched.workOption && Boolean(formik.errors.workOption)}
                helperText={formik.touched.workOption && formik.errors.workOption}
              >
                {["On-Site", "Remote", "Hybrid"].map((opt) => (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Experience Level */}
            <Grid size={{xs:12, sm:6, md:3}}>
              <TextField
                select
                fullWidth
                name="experienceLevel"
                label="Experience Level"
                value={formik.values.experienceLevel}
                onChange={formik.handleChange}
                error={formik.touched.experienceLevel && Boolean(formik.errors.experienceLevel)}
                helperText={formik.touched.experienceLevel && formik.errors.experienceLevel}
              >
                <MenuItem value="Fresher">Fresher</MenuItem>
                <MenuItem value="Experienced">Experienced</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          <Grid container spacing={2} py={1}>
            {/* Deadline */}
            <Grid size={{xs:12, sm:6, md:3}}>
              <TextField
                fullWidth
                type="date"
                name="deadline"
                label="Deadline"
                InputLabelProps={{ shrink: true }}
                value={formik.values.deadline}
                onChange={formik.handleChange}
                error={formik.touched.deadline && Boolean(formik.errors.deadline)}
                helperText={formik.touched.deadline && formik.errors.deadline}
              />
            </Grid>

            {/* Status */}
            <Grid size={{xs:12, sm:6, md:3}}>
              <TextField
                select
                fullWidth
                name="status"
                label="Status"
                value={formik.values.status}
                onChange={formik.handleChange}
                error={formik.touched.status && Boolean(formik.errors.status)}
                helperText={formik.touched.status && formik.errors.status}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Expired">Expired</MenuItem>
              </TextField>
            </Grid>

            {/* Job Description */}
            <Grid size={{xs:12, sm:6, md:5}}>
              <TextField
                fullWidth
                name="jobDescription"
                label="Job Description"
                multiline
                value={formik.values.jobDescription}
                onChange={formik.handleChange}
                error={formik.touched.jobDescription && Boolean(formik.errors.jobDescription)}
                helperText={formik.touched.jobDescription && formik.errors.jobDescription}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} py={1}>
            {/* Buttons */}
            <Grid size={{xs:5, sm:3, md:2}} >
              <Button
                variant="outlined"
                onClick={() => navigate("/jobpostbyadmin")}
              >
                Cancel
              </Button>
            </Grid>
            <Grid size={{xs:5, sm:3, md:2}} >
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={!formik.isValid || formik.isSubmitting || loading}
              >
                {loading ? "Saving..." : "Add Post"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default AddJob;