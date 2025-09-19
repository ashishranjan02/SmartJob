import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRouter from './routes/PublicRoutes';
import Home from '../page/public/Home/Home.jsx';
import Companies from '../page/public/Companies';
import Career from '../page/public/Home/FeaturedCompanies.jsx';
import Login from "../page/public/Auth/Login.jsx";
import Services from '../page/public/Services';
import Job from "../page/public/Job";
import Contact from "../page/public/Contact";
import About from "../page/public/About";


const routers = createBrowserRouter([
    {
        path:"/",
        element:<PublicRouter />,
        children:[
        {
          path: "",
          index: true,
          element: <Home />
        },
        {
            path:"/job",
            element:<Job/>
        },
        
        {
            path:"/companies",
            element: <Companies/>
        },
        {
            path:"/service",
            element: <Services />
        },
        {
            path:"/career",
             element:<Career />
        },
        {
            path:"/login",
            element:<Login />
        },
        {
            path:"/services",
            element:<Services/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/about",
            element:<About/>
        }
        ],
    },

]);

export default function MainRouter() {
    return <RouterProvider router={routers} />;
}