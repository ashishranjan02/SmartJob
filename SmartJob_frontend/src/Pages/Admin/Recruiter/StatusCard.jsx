import React, { useEffect } from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {getAllRecruiterCount, 
        getActiveRecruiterCount, 
        getDectiveRecruiterCount, 
        getBlockedRecruiterCount,} from '../../../features/recruiter/recruiterSlice.js';

const StatusCard = () => {

const dispatch = useDispatch();
const {totalRecruiter, 
      activeRecruiter, 
      deactiveRecruiter, 
      blockedRecruiter, loading} = useSelector(state => state.recruiter);

useEffect((() =>{
  dispatch(getAllRecruiterCount());
  dispatch(getActiveRecruiterCount());
  dispatch(getDectiveRecruiterCount());
  dispatch(getBlockedRecruiterCount());
}), [dispatch])


const cardData = [
    { title: 'All Recruiter', value: totalRecruiter, icon: <GroupsIcon/>, color: "#03a9f4"},
    { title: 'Active Recruiter', value: activeRecruiter, icon: <GroupsIcon/>, color: "#4caf50"},
    { title: 'Deactive Recruiter', value: deactiveRecruiter, icon: <GroupsIcon />, color: "#ff9800"},
    { title: 'Blocked Recruiter', value: blockedRecruiter,  icon: <GroupsIcon/>, color: "#f44336"},
];


  return (
    <>
    <Box>
      <Grid container spacing={2} py={2}>
        {cardData.map((item, index) => (
          <Grid size={{xs:6, sm:6, md:3}} key={index}>
            <Card>
              <CardContent sx={{textAlign:'center', bgcolor:'#16e90f4b'}}>
                <Box sx={{
                    width:"50px",
                    height:"50px",
                    borderRadius: "50%",
                    backgroundColor: item.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb:2
                }}>
                  <Box color="#fff">{item.icon}</Box>
                </Box>
                  <Typography variant="h5" fontWeight={'bold'}>
                    {loading ? "..." : item.value}
                  </Typography>
                  <Typography color="text.secondary">{item.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  )
}

export default StatusCard;
