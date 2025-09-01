import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const TabsPanel = ({ requiter }) => {
  const [tab, setTab] = useState(0);

  return (
    <Box mt={3}>
      <Tabs
        value={tab}
        onChange={(e, newTab) => setTab(newTab)}
        aria-label="tabs"
      >
        <Tab label="Overview" />
        <Tab label="Activities" />
        <Tab label="Emails" />
        <Tab label="My Files" />
      </Tabs>

      {tab === 0 && (
        <Box mt={2}>
          <Typography variant="subtitle2" gutterBottom>
            General Information
          </Typography>

          <Stack direction="row" spacing={1} mb={2}>
            <Chip label="Human Resource" />
            <Chip label="Design" />
          </Stack>

          <Typography variant="body2">
            <strong>Email:</strong> {requiter.email}
          </Typography>
          <Typography variant="body2">
            <strong>Phone:</strong> {requiter.phone}
          </Typography>
          <Typography variant="body2">
            <strong>Source:</strong> {requiter.from}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle2">Social Media</Typography>
          <Stack direction="row" spacing={2} mt={1}>
            <LanguageIcon />
            <TwitterIcon color="primary" />
            <FacebookIcon color="primary" />
            <InstagramIcon sx={{ color: "#E1306C" }} />
            <LinkedInIcon sx={{ color: "#0A66C2" }} />
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default TabsPanel;
