import React from 'react'
import {Box, Button, Typography, } from '@mui/material'
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from 'react-router-dom';
import ManageRecruiter from './ManageRecruiter';

const CreateRecruiter = () => {
    const navigate = useNavigate();

    const handleCreate = () =>{
        navigate('/addrecruiter');
    }
  return (
    <Box>
        <Typography>
            <Button variant='contained' startIcon={<AddIcon/>} onClick={handleCreate}>
                Add Recruiter
            </Button>
        </Typography>

        <ManageRecruiter/>
    </Box>
    
  )
}

export default CreateRecruiter;