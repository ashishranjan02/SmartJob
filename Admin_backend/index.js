import express from 'express';
import connectDB from "./src/DB/index.js";
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import  router  from './src/Router/User.Route.js';
import jobrouter from './src/Router/Job.Route.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import recruiterRouter from './src/Router/Recruiter.Route.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({
    path:'./env'
})

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.get('/', (req, res) =>{
    res.send("Connection Stablish")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/v1/auth', router);
app.use('/api/v1/job', jobrouter);
app.use('/api/v1/recruiter', recruiterRouter)

connectDB()
    .then(() =>{
        app.listen(process.env.PORT || 3300, () =>{
            console.log(`server is working ${process.env.PORT}`);
        })
    })
    .catch(() =>{
        console.log('server is lost');
    })