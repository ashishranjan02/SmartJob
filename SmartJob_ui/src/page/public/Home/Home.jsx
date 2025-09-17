import React from 'react'
import {Box, Typography, Stack, TextField, InputAdornment, Divider, Button} from '@mui/material'
import { Search, LocationOn } from "@mui/icons-material";
import FeaturedCompanies from './FeaturedCompanies.jsx';
import PopularCategories from './PopularCategories.jsx';
import Data from './Data.jsx';
const Home = () => {

  const handleSearch = () => {
    console.log("Searching with:", { location });
  };
  return (
    <>
    <Box sx={{
        backgroundColor: "#E8EFF9",
        width:'100%',
        height:'50vh',
        position:'relative',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        boxSizing:'border-box',
    }}>
      <Box >
        <Stack  direction={'column'} textAlign={'center'}>
          <Typography variant='h6' >
            It's Simple and Smart
          </Typography>

          <Typography variant='h3' color='#6a1b9a' py={1}>
            Search, Find & Apply
          </Typography>
        </Stack>

        <Box  sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "white",
              borderRadius: "50px",
              boxShadow: 2,
              p:1,
              }}>

          <Stack direction={'row'} >
          <TextField
            placeholder="Search by Skills, Company or Job Title"
            variant="standard"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="action" />
                </InputAdornment>
              ),
            }}
            sx={{ flex: 1, px: 2 }}
          />

          <Divider orientation="vertical" flexItem />

            {/* Location Input */}
            <TextField
              placeholder="Location"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{ flex: 1, px: 2 }}
            />

              {/* Search Button */}
            <Button
              variant="contained"
              sx={{
                bgcolor: "#6a1b9a",
                color: "white",
                px: 4,
                py: 1,
                borderRadius: "50px",
                ml: 2,
                "&:hover": { bgcolor: "#4a148c" },
              }}
              onClick={handleSearch}
            >
              Search
            </Button>
          </Stack>
        </Box>
      </Box>
      
    </Box>
    <Box>
      <FeaturedCompanies />
      <PopularCategories />
      <Data />
    </Box>
    
  </>
  )
}

export default Home;