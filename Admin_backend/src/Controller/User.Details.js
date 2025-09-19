import user from '../Model/User.Model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const register = async(req, res) =>{
    try{
        const{firstName, lastName, email, phoneNo, currentLocation, role, password, confirmPassword} = req.body;
        
        if(!firstName || !lastName || !email || !phoneNo || !currentLocation || !role || !password || !confirmPassword){
            return res.status(400).json({message: "All fields are required"});
        }

        if(password !== confirmPassword){
            return res.status(400).json({message: "Password don't Match"})
        }

        const existing_User = await user.findOne({ $or: [{ email }, { phoneNo }] })
            if(existing_User){
                return res.status(100).json({message: "User already exist"})
            }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new user({
            firstName, lastName, email, phoneNo, role, currentLocation, password:hashedPassword
        })
        await newUser.save();

        res.status(201).json({message: "User register successfully"})
    }
    catch(error){
        console.error(error)
        res.status(500).json({message: "Registration error", error: error.message});
    }
};

export const login = async(req, res) =>{
    try{
        console.log("req", req.body)
        const{email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({message: 'Required Email & Password'})
        }


        const users = await user.findOne({email});
        if(!users){
            return res.status(400).json({message: "Invalid Email or Password"})
        }

        const passwordCorrect = await bcrypt.compare(password, users.password);
        if(!passwordCorrect){
            return res.status(400).json({message: "Invalid Email or Password"})
        }

        const token = jwt.sign(
            {userId: users._id, adminId: user.adminId, email: users.email, role: users.role},
            process.env.JWT_SECRET,
            {expiresIn: '1h'},
        )

        res.status(200).json({
            message:"Login Successful",
            token,
            users:{
                name: users.name,
                email: users.email,
                phoneNo: users.phoneNo,
                currentLocation: users.currentLocation,
                role: users.role
            }
        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: error.message})
    }
    
};

export const allUser = async(req, res) =>{
    try{
        const users = await user.find()
        res.status(200).json(users)
    
        if(!users.length){
            res.status(400).json({message:'User not found'})
        }
    }
    catch(error){
        console.error(error)
        res.status(500).json({message: "Cannot get data"});
    }
};

export const deleteUser = async(req, res) =>{
    try{
        const deluser = await user.findByIdAndDelete(req.params.id);

        if(!deluser){
            return res.status(404).json({message: 'user not found'})
        }

        res.status(200).json({message: 'user deleted successfully'})
    }
    catch (error){
        console.error
        res.status(500).json({message: error.message})
    }
};

export const updateUser = async(req, res) => {
    try{
        const updatedUser = await user.findByIdAndUpdate(req.params.id, req.body, 
           { new: true, runValidators:true}
        );

        if(!updateUser){
            return res.status(404).json({message: 'user not found'})
        }

        res.status(200).json({message: 'user updated successfully', user: updatedUser});
    }
    catch(error){
        console.error
        res.status(500).json({message: error.message})
    }
} 
