import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Toolbar,
  AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { sidebarItems } from "./SidebarData";

const drawerWidth = 222;

const Sidebar = ({ children }) => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const drawerContent = (
    <Box>
      <Box sx={{ p: 2, textAlign: "center", bgcolor: "#424242" }}>
        <Typography variant="h5" fontWeight="bold" color="#fff">
          SMART JOB
        </Typography>
      </Box>
      <Divider sx={{ borderColor: "#616161" }} />
      <List>
        {sidebarItems.map((item, index) => {
          if (item.divider) {
            return (
              <Divider
                key={`divider-${index}`}
                sx={{ my: 1, borderColor: "#616161" }}
              />
            );
          }

          const isActive = location.pathname === item.route;

          return (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component={Link}
                to={item.route}
                sx={{
                  backgroundColor: isActive ? "#616161" : "transparent",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#555",
                  },
                }}
                onClick={() => isMobile && toggleDrawer()}
              >
                <ListItemIcon sx={{ color: "white", minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      {isMobile && (
        <AppBar
          position="fixed"
          sx={{
            zIndex: theme.zIndex.drawer + 1,
            bgcolor: "#424242", // Set background color here
          }}
        >
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#424242",
            color: "white",
            borderRight: "1px solid #303030",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: isMobile ? 7 : 0,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Sidebar;
