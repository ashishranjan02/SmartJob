import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import RequiterList from './RequiterPage/RequiterInnerList';
import RequiterDetails from './RequiterPage/RequiterDetails';

const RequiterListPage = () => {
  const [selectedRequiter, setSelectedRequiter] = useState(null);

  return (
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid size={{xs:12, md:6}}>
          <RequiterList onSelect={setSelectedRequiter} />
        </Grid>
        <Grid size={{xs:12, md:6}}>
          {selectedRequiter ? (
            <RequiterDetails requiter={selectedRequiter} />
          ) : (
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              sx={{
                minHeight: '500px',
                backgroundColor: '#f9f9f9',
                borderRadius: 2,
                border: '1px dashed #ccc',
              }}
            >
              <Grid item>
                <Typography variant="h6" color="text.secondary">
                  No Data Found
                </Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default RequiterListPage;
