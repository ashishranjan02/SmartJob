import React from "react";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@mui/material";

const Filters = ({ filters, setFilters }) => {
  // Handle checkbox changes
  const handleChange = (category, value) => {
    setFilters((prev) => {
      const updated = { ...prev };
      if (updated[category].includes(value)) {
        updated[category] = updated[category].filter((v) => v !== value);
      } else {
        updated[category] = [...updated[category], value];
      }
      return updated;
    });
  };

  return (
    <Box sx={{ width: 250, bgcolor: "white", p: 2 }}>
      <Typography variant="h6" gutterBottom>ALL FILTERS</Typography>

      <Typography fontWeight="bold">Job Function</Typography>
      {["Software Engineer", "Database Administrator", "Graphic Designer", "Client Server"].map((item) => (
        <FormControlLabel
          key={item}
          control={
            <Checkbox
              checked={filters.jobFunction.includes(item)}
              onChange={() => handleChange("jobFunction", item)}
            />
          }
          label={item}
        />
      ))}

      <Divider sx={{ my: 2 }} />

      <Typography fontWeight="bold">Location</Typography>
      {["Delhi/NCR", "Noida", "Gurgaon", "Rohtak"].map((loc) => (
        <FormControlLabel
          key={loc}
          control={
            <Checkbox
              checked={filters.location.includes(loc)}
              onChange={() => handleChange("location", loc)}
            />
          }
          label={loc}
        />
      ))}

      <Divider sx={{ my: 2 }} />

      <Typography fontWeight="bold">Experience</Typography>
      {["0-2 Years", "3-5 Years", "5-7 Years", "7-10 Years", "10-15 Years"].map((exp) => (
        <FormControlLabel
          key={exp}
          control={
            <Checkbox
              checked={filters.experience.includes(exp)}
              onChange={() => handleChange("experience", exp)}
            />
          }
          label={exp}
        />
      ))}

      <Divider sx={{ my: 2 }} />

      <Typography fontWeight="bold">Salary</Typography>
      {["0-2 Lacs", "2-4 Lacs", "4-6 Lacs", "6-10 Lacs", "10-15 Lacs"].map((sal) => (
        <FormControlLabel
          key={sal}
          control={
            <Checkbox
              checked={filters.salary.includes(sal)}
              onChange={() => handleChange("salary", sal)}
            />
          }
          label={sal}
        />
      ))}
    </Box>
  );
};

export default Filters;
