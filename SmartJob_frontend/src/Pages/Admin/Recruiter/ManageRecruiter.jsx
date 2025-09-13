import React, { useEffect, useState } from "react";
import {
  Box, Typography, Table, TableBody, TableCell,
  TableContainer, TableHead, TableRow, Paper,
  IconButton, Tooltip, CircularProgress, Menu, MenuItem,

} from "@mui/material";
import { Edit, Visibility, MoreVert} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecruiter, updateStatus } from "../../../features/recruiter/recruiterSlice.js";

const ManageRecruiter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuAnchorE1, setMenuAnchorE1] = useState(null);
  const [menuRecruiterId, setMenuRecruiterId] = useState(null);

  const { list, status, error } = useSelector((state) => state.recruiter);

  useEffect(() => {
  dispatch(getAllRecruiter()).then((res) => console.log("API Response:", res));
}, [dispatch]);

console.log("Recruiter list from store:", list);

  const handleMoreClick = (e, recruiterId) =>{
    setMenuAnchorE1(e.currentTarget);
    setMenuRecruiterId(recruiterId);
  }

  const handleEdit = (recruiterId) => {
    navigate(`/update/${recruiterId}`);
  };

  const handleView = (recruiterId) => {
    navigate(`/view/${recruiterId}`);
  };

  const handleCloseMenu = () => {
    setMenuAnchorE1(null);
    setMenuRecruiterId(null);
  };

  const handleStatusChange = (statusLabel) =>{
    const statusMap = {
      Active: "Active",
      Deactive: "Deactive",
      Blocked: "Blocked",
    }
    const status = statusMap[statusLabel];
    if(menuRecruiterId){
      dispatch(updateStatus({ recruiterId: menuRecruiterId, data: { status } }));
      window.location.reload();
    }
    handleCloseMenu();
  }

  const open = Boolean(anchorEl);
  
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
                <TableCell><strong>First Name</strong></TableCell>
                <TableCell><strong>Recruiter ID</strong></TableCell>
                <TableCell><strong>Gender</strong></TableCell>
                <TableCell><strong>Email</strong></TableCell>
                <TableCell><strong>Phone</strong></TableCell>
                <TableCell><strong>Level</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell align="center"><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list && list.length > 0 ? (
                list.map((recruiter, index) => (
                  <TableRow key={recruiter._id || recruiter.id}>
                    <TableCell>{index +1}</TableCell>
                    <TableCell>{recruiter.firstName}</TableCell>
                    <TableCell>{recruiter.recruiterId}</TableCell>
                    <TableCell>{recruiter.gender}</TableCell>
                    <TableCell>{recruiter.email}</TableCell>
                    <TableCell>{recruiter.phoneNo}</TableCell>
                    <TableCell>{recruiter.level}</TableCell>
                    <TableCell>{recruiter.status}</TableCell>
                    <TableCell align="center">
                        <Tooltip title="View">
                          <IconButton color="secondary" onClick={() => handleView(recruiter.recruiterId)} >
                            <Visibility />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit">
                          <IconButton color="primary" onClick={() => handleEdit(recruiter.recruiterId)}>
                            <Edit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="More options">
                          <IconButton onClick={(e) => handleMoreClick(e, recruiter.recruiterId)}>
                            <MoreVert />
                          </IconButton>
                        </Tooltip>

                        <Menu
                          anchorEl={menuAnchorE1}
                          open={Boolean(menuAnchorE1)}
                          onClose={handleCloseMenu}
                        >
                          <MenuItem onClick={() => handleStatusChange("Active")}>Active</MenuItem>
                          <MenuItem onClick={() => handleStatusChange("Deactive")}>Deactive</MenuItem>
                          <MenuItem onClick={() => handleStatusChange("Blocked")}>Blocked</MenuItem>

                        </Menu>
                     
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
