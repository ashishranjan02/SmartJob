import jwt from 'jsonwebtoken';
import user from '../Model/User.Model.js'

export const verifyToken = async(req, res, next) =>{
    const token = req.headers[`authorization`]; //Get token from the Authorization header
    if(!token) return res.status(403).json({message:'No token provider'});

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const foundUser = await user.findOne({adminId: decoded?.adminId}).select("-password ")

        if(!foundUser){
            res.status(404).json({message: 'User not found or invalid token'})
        }
        req.user = foundUser;
        next();
    }

    catch(error){
        res.status(401).json({message: 'Unauthorized'})
    }
}