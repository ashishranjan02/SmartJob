import React, { useEffect } from "react";
import {
  Box, Button, Grid, MenuItem, TextField, Typography, Paper,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {createPost} from '../../../../features/Admin/JdPost/jdSlice.js';


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
  jobDescription: Yup.string().required("jobDescription is required"),
});

const JobPostByAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {status, error}  = useSelector((state) => state.jd);
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
        navigate("/jdpostadmin");
      } else {
        console.error("Create failed:", result);
      }
    } catch (error) {
      console.error("Error in onSubmit:", error);
    }
  },
});
  // If error occurs → show alert
  useEffect(() => {
    if (error) {
      alert(`Error: ${error}`);
    }
  }, [error]);

  return (
    <Box p={2} sx={{ maxWidth: "900px", margin: "auto" }}>
      {/* Header with back button */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate("/jdpostadmin")}
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
          <Grid container spacing={2}>
            {[
              { name: "companyName", label: "Company Name" },
              { name: "jobTitle", label: "Job Title" },
              { name: "department", label: "Department" },
              { name: "requiredSkill", label: "Required Skill" },
              { name: "eligiblity", label: "Eligibility", multiline: true },
              { name: "location", label: "Location", multiline: true },
              { name: "jobProfileCTC", label: "Job Profile CTC" },
            ].map((field) => (
              <Grid item xs={12} sm={6} key={field.name}>
                <TextField
                  fullWidth
                  {...field}
                  value={formik.values[field.name]}
                  onChange={formik.handleChange}
                  error={formik.touched[field.name] && Boolean(formik.errors[field.name])}
                  helperText={formik.touched[field.name] && formik.errors[field.name]}
                />
              </Grid>
            ))}

            {/* Job Type */}
            <Grid item xs={12} sm={6}>
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
                  <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Work Option */}
            <Grid item xs={12} sm={6}>
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
                  <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Experience Level */}
            <Grid item xs={12} sm={6}>
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

            {/* Deadline */}
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
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

            {/* jobDescription */}
            <Grid item xs={12}>
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

            {/* Buttons */}
            <Grid item xs={12} sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="outlined"
                onClick={() => navigate("/jdpostadmin")}
              >
                Cancel
              </Button>
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

export default JobPostByAdmin;
