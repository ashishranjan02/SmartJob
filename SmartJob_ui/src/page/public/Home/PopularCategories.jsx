import React from "react";
import { Box, Grid, Typography, Paper, IconButton } from "@mui/material";
import {
  AccountBalance,
  Home,
  People,
  Work,
  Calculate,
  SupportAgent,
  Event,
  Language,
  Storage,
  DonutSmall,
  Brush,
  ShoppingBag,
  LocalHospital,
  School,
  Engineering,
} from "@mui/icons-material";

const categories = [
  { name: "Banking", icon: <AccountBalance />, url: "/categories/banking" },
  { name: "Work From Home", icon: <Home />, url: "/categories/work-from-home" },
  { name: "HR", icon: <People />, url: "/categories/hr" },
  { name: "Sales", icon: <Work />, url: "/categories/sales" },
  { name: "Accounting", icon: <Calculate />, url: "/categories/accounting" },
  { name: "Customer Support", icon: <SupportAgent />, url: "/categories/customer-support" },
  { name: "Event Management", icon: <Event />, url: "/categories/event-management" },
  { name: "IT", icon: <Language />, url: "/categories/it" },
  { name: "SQL", icon: <Storage />, url: "/categories/sql" },
  { name: "Oracle", icon: <DonutSmall />, url: "/categories/oracle" },
  { name: "Graphic Design", icon: <Brush />, url: "/categories/graphic-design" },
  { name: "Digital Marketing", icon: <ShoppingBag />, url: "/categories/digital-marketing" },
  { name: "Healthcare", icon: <LocalHospital />, url: "/categories/healthcare" },
  { name: "Education", icon: <School />, url: "/categories/education" },
  { name: "Engineering", icon: <Engineering />, url: "/categories/engineering" },
];

export default function PopularCategories() {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <Box sx={{ py: 4, px: { xs: 2, sm: 3, md: 8 } }}>
      <Typography variant="h5" fontWeight={600} mb={4} display={'flex'} justifyContent={'center'}>
        Popular Categories
      </Typography>

      <Grid container spacing={3}>
        {categories.map((cat) => (
          <Grid size={{xs:12, sm:4, md:2.4}}
            key={cat.name}
            display="flex"
            justifyContent="center"
            boxSizing={'unset'}
          >
            <Paper
              onClick={() => handleRedirect(cat.url)}
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                borderRadius: 2,
                width: 190,
                cursor: "pointer",
                border: "1px solid #eee",
                transition: "all 0.3s ease",
                "&:hover": { boxShadow: 4, transform: "scale(1.03)" },
              }}
            >
              <IconButton
                sx={{
                  bgcolor: "#fbe9e7",
                  color: "#6d4c41",
                  mr: 2,
                  borderRadius: 2,
                  p: 1.2,
                }}
              >
                {cat.icon}
              </IconButton>
              <Typography variant="body1" fontWeight={500}>
                {cat.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}