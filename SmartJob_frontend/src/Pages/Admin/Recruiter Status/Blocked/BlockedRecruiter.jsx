// import React from "react";
// import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
// import GroupsIcon from '@mui/icons-material/Groups';
// import BlockedRecruiterList from "./BlockedRecruiterList";

// const summaryData = [
//   {
//     label: "All Recruiter",
//     value: "457",
//     icon: <GroupsIcon />,
//     color: "#03a9f4",
//   },
//   {
//     label: "Active Recruiter",
//     value: "160",
//     icon: <GroupsIcon />,
//     color: "#4caf50",
//   },
//   {
//     label: "Dactive Recruiter",
//     value: "23",
//     icon: <GroupsIcon />,
//     color: "#ff9800",
//   },
//   {
//     label: "Blocked Recruiter",
//     value: "52",
//     icon: <GroupsIcon />,
//     color: "#f44336",
//   },
// ];

// const BlockedRecruiter = () => {
//   return (
//     <>
//     <Box mt={-2} minHeight="100%">
//       <Grid container spacing={2} mt={2}>
//         {summaryData.map((item, index) => (
//           <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
//             <Card>
//               <CardContent sx={{ textAlign: "center", bgcolor:'#ec07075b' }}>
//                 <Box
//                   sx={{
//                     width: 60,
//                     height: 60,
//                     borderRadius: "50%",
//                     backgroundColor: item.color,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     mx: "auto",
//                     mb: 2,
//                   }}
//                 >
//                   <Box color="#fff">{item.icon}</Box>
//                 </Box>
//                 <Typography variant="h5" fontWeight={600}>
//                   {item.value}
//                 </Typography>
//                 <Typography color="text.secondary">{item.label}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <BlockedRecruiterList/>
//     </Box>
    
//     </>
//   );
// };

// export default BlockedRecruiter;

import React from 'react'
import StatusCard from '../../Recruiter/StatusCard'

const BlockedRecruiter = () => {
  return (
    <div>
      <StatusCard/>
    </div>
  )
}

export default BlockedRecruiter

