import React, { useEffect } from "react";
import {
  Box, Typography, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper,
  IconButton, Tooltip, CircularProgress, Avatar
} from "@mui/material";
import { Edit, Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecruiter } from "../../../features/Admin/recruiter/recruiterSlice.js";

const ManageRecruiter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { list, status, error } = useSelector((state) => state.recruiter);

  useEffect(() => {
    dispatch(getAllRecruiter());
  }, [dispatch]);

  const handleEdit = (id) => {
    navigate(`/createrecruiter/edit/${id}`);
  };

  const handleView = (id) => {
    navigate(`/createrecruiter/view/${id}`);
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
                <TableCell><strong>First Name</strong></TableCell>
                <TableCell><strong>Gender</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell><strong>Phone</strong></TableCell>
                <TableCell><strong>Experience</strong></TableCell>
                <TableCell><strong>Level</strong></TableCell>
                <TableCell align="center"><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list && list.length > 0 ? (
                list.map((rec) => (
                  <TableRow key={rec._id || rec.id}>
                    <TableCell>{rec.firstName}</TableCell>
                    <TableCell>{rec.gender}</TableCell>
                    <TableCell>{rec.email}</TableCell>
                    <TableCell>{rec.phoneNo}</TableCell>
                    <TableCell>{rec.totalExperience}</TableCell>
                    <TableCell>{rec.level}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="View">
                        <IconButton color="secondary" onClick={() => handleView(rec._id || rec.id)}>
                          <Visibility />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit">
                        <IconButton color="primary" onClick={() => handleEdit(rec._id || rec.id)}>
                          <Edit />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={11} align="center">
                    No recruiters found.
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

export default ManageRecruiter;
