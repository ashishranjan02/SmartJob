import express from 'express';
import { createPost, getAllPost, updateJob, deletePost } from "../Controller/Job.Details.js";

const jobrouter = express.Router();

jobrouter.post('/create', createPost);
jobrouter.get('/getAll', getAllPost);
jobrouter.put('/update/:id', updateJob);
jobrouter.delete('/delete/:id', deletePost)

export default jobrouter;