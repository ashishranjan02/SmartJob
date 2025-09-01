import React from 'react';
import { Box, TextField, Grid, Button } from '@mui/material';

const JobFilterBar = () => {
  return (
    <Box mb={2}>
      <Grid container spacing={2}>
        {['Keywords', 'Location', 'Remote Friendly', 'Job Type', 'Experience', 'Contract'].map((label, idx) => (
          <Grid size={{xs:12, sm:6, md:2}} key={idx}>
            <TextField fullWidth size="small" label={label} />
          </Grid>
        ))}
        <Grid size={{xs:12, sm:6, md:2}} >
          <Button fullWidth variant="outlined">🔍 Filter</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobFilterBar;
