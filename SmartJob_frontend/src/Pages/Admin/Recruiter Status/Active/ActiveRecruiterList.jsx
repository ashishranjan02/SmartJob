import React, { useState } from "react";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Typography,
  IconButton,
  Tooltip,
  Paper,
  TableContainer,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { Star, StarBorder, Edit, Delete, MoreVert } from "@mui/icons-material";

const initialApplicants = [
  {
    id: 1,
    name: "Jamalia Bradford",
    status: "Active",
    recruiter: "/avatar.png",
    date: "2022-04-24",
    rating: 3,
  },
  {
    id: 2,
    name: "Mercedes Carney",
    status: "Active",
    recruiter: "/avatar.png",
    date: "2022-04-24",
    rating: 4,
  },
  {
    id: 3,
    name: "Emma Smart",
    status: "Active",
    recruiter: "/avatar.png",
    date: "2022-04-24",
    rating: 5,
  },
   {
    id: 4,
    name: "Mercedes Carney",
    status: "Active",
    recruiter: "/avatar.png",
    date: "2022-04-24",
    rating: 3.5,
  },
  {
    id: 5,
    name: "Emma Smart",
    status: "Active",
    recruiter: "/avatar.png",
    date: "2022-04-24",
    rating: 4,
  },
];


const renderStars = (count) => {
  return (
    <>
      {[...Array(5)].map((_, i) =>
        i < count ? (
          <Star key={i} sx={{ color: "#fbc02d", fontSize: "18px" }} />
        ) : (
          <StarBorder key={i} sx={{ color: "#ccc", fontSize: "18px" }} />
        )
      )}
    </>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case "Active":
      return "green";
    case "Deactive":
      return "gray";
    case "Blocked":
      return "red";
    default:
      return "black";
  }
};

const ActiveRecruiterList = () => {
  const [applicants, setApplicants] = useState(initialApplicants);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [editOpen, setEditOpen] = useState(false);
  const [editData, setEditData] = useState({ name: "", date: "", rating: 0 });

  const handleDelete = (indexToDelete) => {
    const updatedApplicants = applicants.filter((_, index) => index !== indexToDelete);
    setApplicants(updatedApplicants);
  };

  const handleMoreClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedIndex(null);
  };

  const handleStatusChange = (status) => {
    const updatedApplicants = [...applicants];
    updatedApplicants[selectedIndex].status = status;
    setApplicants(updatedApplicants);
    handleCloseMenu();
  };

  const handleEditOpen = (index) => {
    const applicant = applicants[index];
    setEditData({ ...applicant });
    setSelectedIndex(index);
    setEditOpen(true);
  };

  const handleEditSave = () => {
  const updated = [...applicants];
  updated[selectedIndex] = { ...editData, id: applicants[selectedIndex].id };
  setApplicants(updated);
  setEditOpen(false);
};


  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f9fafb" }}>
            <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>

              <TableCell sx={{ fontWeight: "bold" }}>Recruiter Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Recruiter IMG</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Since</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Rating</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applicants.map((applicant, index) => (
              <TableRow key={index}>
                <TableCell>{applicant.id}</TableCell>

                <TableCell>
                  <Typography>{applicant.name}</Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ color: getStatusColor(applicant.status), fontWeight: 600 }}>
                    {applicant.status}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Avatar alt={applicant.name} src={applicant.recruiter} />
                </TableCell>
                <TableCell>{applicant.date}</TableCell>
                <TableCell>
                  <Box display="flex">{renderStars(applicant.rating)}</Box>
                </TableCell>
                <TableCell>
                  <Tooltip title="Edit">
                    <IconButton onClick={() => handleEditOpen(index)}>
                      <Edit />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => handleDelete(index)}>
                      <Delete />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="More options">
                    <IconButton onClick={(e) => handleMoreClick(e, index)}>
                      <MoreVert />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* More Options Menu */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
          <MenuItem onClick={() => handleStatusChange("Deactive")}>Deactivate</MenuItem>
          <MenuItem onClick={() => handleStatusChange("Blocked")}>Block</MenuItem>
          <MenuItem onClick={() => handleStatusChange("Active")}>Activate</MenuItem>
        </Menu>
      </TableContainer>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onClose={() => setEditOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>Edit Recruiter</DialogTitle>
        <DialogContent dividers>
          <Box display="flex" flexDirection="column" gap={2} mt={1}>
            <TextField
              label="Name"
              value={editData.name}
              onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              fullWidth
            />
            <TextField
              label="Date"
              type="date"
              value={editData.date}
              onChange={(e) => setEditData({ ...editData, date: e.target.value })}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Rating"
              type="number"
              inputProps={{ min: 0, max: 5 }}
              value={editData.rating}
              onChange={(e) => setEditData({ ...editData, rating: Number(e.target.value) })}
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>Cancel</Button>
          <Button onClick={handleEditSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ActiveRecruiterList;
