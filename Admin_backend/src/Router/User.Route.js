import express from 'express'
import { register, login, allUser, deleteUser, updateUser } from '../Controller/User.Details.js';
import { verifyToken } from '../Middleware/auth.Middleware.js';

const router = express.Router();

router.post('/register', register);
router.get('/allUser', allUser);
router.post('/login', login);
router.delete('/delete/:id', verifyToken, deleteUser);
router.put('/update/:id', verifyToken, updateUser)

export default router;
