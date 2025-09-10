// sidebarData.js (or define inside Sidebar.js)
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';



export const sidebarItems = [
    { label: 'Dashboard', route: '/dashboard', icon: <DashboardIcon /> },
    { label: 'Active Recruiter', route: '/activerecruiter', icon: <WorkIcon/> },
    { label: 'Dactive Recruiter', route: '/deactiverecruiter', icon: <WorkIcon/> },
    { label: 'Blocked Recruiter', route: '/blockrecruiter', icon: <WorkIcon/> },
    { label: 'Job Post By Admin', route: '/jobpostbyadmin', icon: <WorkIcon/> },
    { label: 'Create Recruiter', route: '/createrecruiter', icon: <WorkIcon/> },
   
];
