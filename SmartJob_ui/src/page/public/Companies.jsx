// src/pages/Companies.jsx
import React, { useState } from "react";
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Divider,
  TextField,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Paper,
  Grid,
  Avatar,
  Drawer,
  IconButton,
  Autocomplete,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import BusinessIcon from "@mui/icons-material/Business";
import FilterListIcon from "@mui/icons-material/FilterList";
import TopCompaniesCarousel from "../../components/TopCompaniesCarousel";

const companiesData = [
  {
    id: 1,
    name: "Infosys",
    domain: "infosys.com",
    rating: 4.8,
    reviews: 3200,
    tags: ["Corporate", "IT Services & Consulting"],
    location: "Bengaluru",
  },
  {
    id: 2,
    name: "DLF Limited",
    domain: "dlf.in",
    rating: 4.1,
    reviews: 1590,
    tags: ["Corporate", "Real Estate"],
    location: "Delhi / NCR",
  },
  {
    id: 3,
    name: "Apollo Hospitals",
    domain: "apollohospitals.com",
    rating: 4.3,
    reviews: 2500,
    tags: ["Medical Services / Hospital"],
    location: "Hyderabad",
  },
  {
    id: 4,
    name: "Tata Consultancy Services",
    domain: "tcs.com",
    rating: 4.6,
    reviews: 4500,
    tags: ["Corporate", "IT Services & Consulting"],
    location: "Mumbai",
  },
  {
    id: 5,
    name: "Larsen & Toubro",
    domain: "larsentoubro.com",
    rating: 4.2,
    reviews: 3100,
    tags: ["Corporate", "Engineering & Construction"],
    location: "Delhi / NCR",
  },
  {
    id: 6,
    name: "Wipro",
    domain: "wipro.com",
    rating: 4.4,
    reviews: 2890,
    tags: ["Corporate", "Analytics", "IT Services"],
    location: "Bengaluru",
  },
];

const companyTypes = ["Corporate", "Foreign MNC", "Startup", "Indian MNC"];
const locations = ["Bengaluru", "Delhi / NCR", "Mumbai", "Hyderabad"];

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // Filtering Logic
  const filteredCompanies = companiesData.filter((company) => {
    const matchesSearch = company.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesType =
      selectedTypes.length === 0 ||
      selectedTypes.some((type) => company.tags.includes(type));

    const matchesLocation =
      !selectedLocation || company.location === selectedLocation;

    return matchesSearch && matchesType && matchesLocation;
  });

  // Sidebar Filters
  const FilterContent = () => (
    <Box sx={{ width: 250, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        All Filters
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1">Company type</Typography>
      {companyTypes.map((type) => (
        <FormControlLabel
          key={type}
          control={
            <Checkbox
              checked={selectedTypes.includes(type)}
              onChange={() => handleTypeChange(type)}
            />
          }
          label={type}
        />
      ))}

      <Divider sx={{ my: 2 }} />

      <Typography variant="subtitle1">Location</Typography>
      <Autocomplete
        size="small"
        options={locations}
        value={selectedLocation}
        onChange={(e, newValue) => setSelectedLocation(newValue)}
        renderInput={(params) => (
          <TextField {...params} placeholder="Search location" />
        )}
        sx={{ mt: 1 }}
      />
    </Box>
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #ffecd2, #fcb69f)",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <TopCompaniesCarousel />

        {/* Wrapper */}
        <Box sx={{ display: "flex", gap: 3, py: 3 }}>
          {/* Sidebar - Desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              width: "280px",
              flexShrink: 0,
            }}
          >
            <Paper
              sx={{
                p: 2,
                borderRadius: 2,
                height: "80vh",
                overflowY: "auto",
                position: "sticky",
                top: "80px",
              }}
            >
              <FilterContent />
            </Paper>
          </Box>

          {/* Right Section */}
          <Box sx={{ flex: 1 }}>
            {/* Search + Filter Button */}
            <Box
              sx={{
                mb: 3,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <Typography variant="h6">
                Showing {filteredCompanies.length} companies
              </Typography>

              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                {/* Mobile Filter Button */}
                <IconButton
                  onClick={() => setMobileOpen(true)}
                  sx={{ display: { xs: "flex", md: "none" } }}
                >
                  <FilterListIcon />
                </IconButton>

                <TextField
                  size="small"
                  placeholder="Search companies"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>

            {/* Company Cards */}
            <Grid container spacing={2}>
              {filteredCompanies.map((company) => (
                <Grid item xs={12} sm={6} key={company.id}>
                  <Card
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      p: 2,
                      borderRadius: 3,
                      boxShadow: 2,
                      height: "100%",
                    }}
                  >
                    <Avatar
                      src={`https://logo.clearbit.com/${company.domain}`}
                      alt={company.name}
                      sx={{
                        width: 60,
                        height: 60,
                        mr: 2,
                        bgcolor: "grey.100",
                        border: "1px solid #eee",
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://img.icons8.com/color/48/business-building.png";
                      }}
                    >
                      <BusinessIcon />
                    </Avatar>

                    <CardContent sx={{ flex: 1, p: 0 }}>
                      <Typography variant="h6">{company.name}</Typography>
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={0.5}
                        sx={{ mb: 1 }}
                      >
                        <StarIcon fontSize="small" sx={{ color: "orange" }} />
                        <Typography variant="body2">
                          {company.rating} | {company.reviews} reviews
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1} flexWrap="wrap">
                        {company.tags.map((tag, i) => (
                          <Chip
                            key={i}
                            label={tag}
                            variant="outlined"
                            size="small"
                          />
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>

      {/* Drawer for Mobile Filters */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <FilterContent />
      </Drawer>
    </Box>
  );
};

export default Companies;
