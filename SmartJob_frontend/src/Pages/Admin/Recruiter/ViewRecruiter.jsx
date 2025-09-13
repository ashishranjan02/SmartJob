import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Card,
  CardContent,
  Divider,
  TextField
} from "@mui/material";
import { ArrowBack, Business } from "@mui/icons-material";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getRecruiterById} from "../../../features/recruiter/recruiterSlice.js";

const ViewRecruiter = () => {
  const { recruiterId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

 const {viewedRecruiter } = useSelector((state) => state.recruiter);

  useEffect(() => {
    if (recruiterId) {
      dispatch(getRecruiterById(recruiterId));
    }
  
  }, [dispatch, recruiterId]);

  if (!viewedRecruiter) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h6">Loading recruiter details...</Typography>
      </Box>
    );
  }

  console.log("details", viewedRecruiter);

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1200, mx: "auto" }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h4" fontWeight={600}>
            Recruiter Details
          </Typography>
          <Button
            variant="outlined"
            startIcon={<ArrowBack />}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </Box>

        <Card sx={{ mt: 3, p: 2, bgcolor: "grey.50" }}>
          <CardContent sx={{ px: { xs: 1, md: 3 }, py: 2 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <Business sx={{ mr: 1 }} />
              <Typography variant="h6">Recruiter Information</Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />

            <Grid container spacing={2} py={1}>
              {/* First Name */}
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  label="First Name"
                  value={viewedRecruiter.firstName }
                  InputProps={{ readOnly: true }}
                />
              </Grid>

              {/* Last Name */}
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  label="Last Name"
                  value={viewedRecruiter.lastName}
                  InputProps={{ readOnly: true }}
                />
              </Grid>

              {/* Gender */}
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  fullWidth
                  label="Gender"
                  value={viewedRecruiter.gender}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} py={1}>
              {/* Email */}
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  label="Email"
                  value={viewedRecruiter.email || ""}
                  InputProps={{ readOnly: true }}
                />
              </Grid>

              {/* Phone Number */}
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  value={viewedRecruiter.phoneNo || ""}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} py={1}>
              {/* Total Experience */}
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  label="Experience"
                  value={viewedRecruiter.totalExperience }
                  InputProps={{ readOnly: true }}
                />
              </Grid>

              {/* Level */}
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  fullWidth
                  label="Level"
                  value={viewedRecruiter.level}
                  InputProps={{ readOnly: true }}
                />
              </Grid>

              {/* Description */}
              <Grid item xs={12} sm={12} md={5}>
                <TextField
                  fullWidth
                  multiline
                  label="Description"
                  value={viewedRecruiter.description}
                  InputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>


          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};

export default ViewRecruiter;
