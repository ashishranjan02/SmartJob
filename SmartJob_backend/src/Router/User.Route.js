import express from 'express'
import { register, login, allUser, deleteUser, updateUser } from '../Controller/User.Details.js'

const router = express.Router();

router.post('/register', register);
router.get('/allUser', allUser);
router.post('/login', login);
router.delete('/delete/:id', deleteUser);
router.post('/update/:id', updateUser)

export default router;
