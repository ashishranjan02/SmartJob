import React from 'react'
import {Box, Button, Typography, Stack} from '@mui/material'
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from 'react-router-dom';
import ManageRecruiter from './ManageRecruiter';
import StatusCard from './StatusCard';


const CreateRecruiter = () => {
    const navigate = useNavigate();

    const handleCreate = () =>{
        navigate('/addrecruiter');
    }
  return (
    <Box p={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant='h5' fontWeight="bold">
                Recruiter Data
            </Typography>
            <Typography>
                <Button variant='contained' startIcon={<AddIcon/>} onClick={handleCreate} sx={{bgcolor:'#26A69A'}}>
                    Recruiter
                </Button>
            </Typography>
        </Stack>

        <StatusCard />
        <ManageRecruiter/>
        
    </Box>
    
  )
}

export default CreateRecruiter;