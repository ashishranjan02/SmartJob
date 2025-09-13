import React from 'react'
import {Box} from '@mui/material';
// import { updateRecruiter, getRecruiterById } from '../../../features/recruiter/recruiterSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const EditRecruiter = () => {
    const navigate = useNavigate();
    const {recruiterId} = useParams();
    const dispatch = useDispatch();
    const viewRecruiter = useSelector((state) => state.recriter.viewRecruiter)

    useEffect(() =>{
      if(recruiterId){
        dispatch()
      }
    })

  return (
    <Box>
      
    </Box>
  )
}

export default EditRecruiter
