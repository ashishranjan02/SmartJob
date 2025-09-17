import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    first_Name:{type:String, required:true},
    last_Name:{type:String},
    email:{type:String, required:true, unique:true},
    phone_No:{
        type:Number, 
        required:true, 
        unique:true,
        match:[/^[6-9][0-9]{9}$/,] 
    },
    current_Location:{type:String, required:true},
    role:{
        type:String,
        enum:["recruiter", "admin"],
        required:true,
    },
    password:{
        type:String, 
        required:true, 
        unique:true,
    }
});

const user = mongoose.model('user', userSchema);
export default user;