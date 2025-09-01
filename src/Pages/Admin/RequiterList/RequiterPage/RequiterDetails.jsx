import React from 'react';
import {
  Box,
  Avatar,
  Typography,
  Button,
  Stack,
  Chip,
  Link,
  Divider,
} from '@mui/material';
import TabsPanel from './TabsPanel';

const RequiterDetails = ({ requiter }) => {
  return (
    <Box>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Avatar src={requiter.image} sx={{ width: 56, height: 56 }} />
        <Box>
          <Typography variant="h6">{requiter.name}</Typography>
          <Typography color="text.secondary">{requiter.position}</Typography>
        </Box>
        <Box ml="auto">
          <Button variant="contained" color="primary" sx={{ mr: 1 }}>
            Accept
          </Button>
          <Button variant="outlined" color="error">
            Reject
          </Button>
        </Box>
      </Stack>

      <TabsPanel requiter={requiter} />
    </Box>
  );
};

export default RequiterDetails;
