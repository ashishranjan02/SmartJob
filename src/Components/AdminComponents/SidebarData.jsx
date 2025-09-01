// sidebarData.js (or define inside Sidebar.js)
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';



export const sidebarItems = [
    { label: 'Dashboard', route: '/dashboard', icon: <DashboardIcon /> },
    { label: 'Recruiter List', route: '/recruiterlist', icon: <WorkIcon/> },
    { label: 'Active Recruiter', route: '/activerecruiter', icon: <WorkIcon/> },
    { label: 'Dactive Recruiter', route: '/deactiverecruiter', icon: <WorkIcon/> },
    { label: 'Blocked Recruiter', route: '/blockrecruiter', icon: <WorkIcon/> },
    { label: 'JD Posted By Admin', route: '/jdpostadmin', icon: <WorkIcon/> },
    { label: 'Create Recruiter', route: '/createrecruiter', icon: <WorkIcon/> },
   
];
