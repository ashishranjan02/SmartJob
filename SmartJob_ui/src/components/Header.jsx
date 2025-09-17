import React from "react";
import { AppBar, Toolbar, Box, TextField, Button } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#0c4da2", py: 2 }}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: { xs: "100%", sm: "80%", md: "60%" },
            flexDirection: { xs: "column", sm: "row" }, // stack on mobile
          }}
        >
          <TextField
            fullWidth
            placeholder="Enter Skills, Designation etc"
            variant="outlined"
            InputProps={{
              sx: {
                height: 50, // increase height
                borderRadius: 2,
                bgcolor: "white",
                "& fieldset": { border: "none" }, // remove outline
              },
            }}
          />
          <TextField
            fullWidth
            placeholder="Enter Location"
            variant="outlined"
            InputProps={{
              sx: {
                height: 50,
                borderRadius: 2,
                bgcolor: "white",
                "& fieldset": { border: "none" },
              },
            }}
          />
          <Button
            variant="contained"
            color="error"
            sx={{
              px: 4,
              borderRadius: 2,
              fontWeight: "bold",
              height: 50, // match TextField height
            }}
          >
            FIND JOBS
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
