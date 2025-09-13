import React, { useEffect } from "react";
import {
  Box, Typography, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper,
  IconButton, Tooltip, CircularProgress
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost, deletePost } from "../../../features/Job/jobSlice.js";

const JobCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { list, status, error } = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deletePost(id));
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <Box py={2}>

      {status === "loading" ? (
        <Box display="flex" justifyContent="center" py={5}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
              <TableRow>
                <TableCell><strong>S.No</strong></TableCell>
                <TableCell><strong>Company</strong></TableCell>
                <TableCell><strong>Job Title</strong></TableCell>
                <TableCell><strong>Department</strong></TableCell>
                <TableCell><strong>Location</strong></TableCell>
                <TableCell><strong>CTC</strong></TableCell>
                <TableCell><strong>Job Type</strong></TableCell>
                <TableCell><strong>Experience</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell align="center"><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.length > 0 ? (
                list.map((job, index) => (
                  <TableRow key={job._id || job.id}>
                    <TableCell>{index +1}</TableCell>
                    <TableCell>{job.companyName}</TableCell>
                    <TableCell>{job.jobTitle}</TableCell>
                    <TableCell>{job.department}</TableCell>
                    <TableCell>{job.location}</TableCell>
                    <TableCell>{job.jobProfileCTC}</TableCell>
                    <TableCell>{job.jobType}</TableCell>
                    <TableCell>{job.experienceLevel}</TableCell>
                    <TableCell>{job.status}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit">
                        <IconButton color="primary" onClick={() => handleEdit(job._id || job.id)}>
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton color="error" onClick={() => handleDelete(job._id || job.id)}>
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={14} align="center">
                    No Job found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default JobCard;
