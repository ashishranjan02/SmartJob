import React, { useEffect } from "react";
import {
  Box, Typography, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper,
  IconButton, Tooltip, CircularProgress
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost, deletePost } from "../../../features/Admin/JdPost/jdSlice.js";

const ManageJdPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { list, status, error } = useSelector((state) => state.jd);

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      dispatch(deletePost(id));
    }
  };

  const handleEdit = (id) => {
    navigate(`/jdpostadmin/edit/${id}`);
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
                list.map((jd) => (
                  <TableRow key={jd._id || jd.id}>
                    <TableCell>{jd.companyName}</TableCell>
                    <TableCell>{jd.jobTitle}</TableCell>
                    <TableCell>{jd.department}</TableCell>
                    <TableCell>{jd.location}</TableCell>
                    <TableCell>{jd.jobProfileCTC}</TableCell>
                    <TableCell>{jd.jobType}</TableCell>
                    <TableCell>{jd.experienceLevel}</TableCell>
                    <TableCell>{jd.status}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit">
                        <IconButton color="primary" onClick={() => handleEdit(jd._id || jd.id)}>
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton color="error" onClick={() => handleDelete(jd._id || jd.id)}>
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={14} align="center">
                    No Jd found.
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

export default ManageJdPost;
