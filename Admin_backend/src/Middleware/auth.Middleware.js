import jwt from 'jsonwebtoken';

export const verifyToken = (req, res) =>{
    const token = req.headers[`authorization`]; //Get token from the Authorization header
    if(!token) return res.status(403).json({message:'No token provider'});

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id
        next();
    }

    catch(error){
        res.status(401).json({message: 'Unauthorized'})
    }
}