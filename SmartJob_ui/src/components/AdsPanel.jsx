import React from "react";
import { Box } from "@mui/material";
import image1 from "../assets/companies/hiring.jpg"
const AdsPanel = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <img src={image1} alt="ad1" />
      <img src={image1} alt="ad1" />
      <img src={image1} alt="ad1" />
    </Box>
  );
};

export default AdsPanel;
