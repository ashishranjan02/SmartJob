import React from "react";
import AppHeader from '../../Components/AdminComponents/AppBarHeader'
import Sidebar from '../../Components/AdminComponents/Sidebar'
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
const AdminLayout = () => {
  return (
    <>
      <AppHeader />
      <Box display="flex">
        <Sidebar /> 
        <Box component="main" flexGrow={1} mt={8} p={3}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default AdminLayout;
