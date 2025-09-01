import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import ListAltIcon from "@mui/icons-material/ListAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    handleMenuClose();
    navigate("/login");
  };

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#424242", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "flex-end", gap: 2 }}> 
        {/* Search Box */}
        <TextField
          size="small"
          placeholder="Search..."
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            borderRadius: 1,
            width: 250,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* Icon Buttons */}
        <Box display="flex" alignItems="center" gap={1}>
          <IconButton color="inherit" size="large">
            <MailIcon />
            <ArrowDropDownIcon fontSize="small" />
          </IconButton>

          <IconButton color="inherit" size="large">
            <ListAltIcon />
            <ArrowDropDownIcon fontSize="small" />
          </IconButton>

          <IconButton color="inherit" size="large">
            <NotificationsIcon />
          </IconButton>

          <IconButton color="inherit" size="large" onClick={handleMenuOpen}>
            <AccountCircle />
            <ArrowDropDownIcon fontSize="small" />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
