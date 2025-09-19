import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String},
    email:{type:String, required:true, unique:true},
    phoneNo:{
        type:Number, 
        required:true, 
        unique:true,
        match:[/^[6-9][0-9]{9}$/,] 
    },
    currentLocation:{type:String, required:true},
    role:{
        type:String,
        enum:["Recruiter", "Admin"],
        required:true,
    },
    password:{
        type:String, 
        required:true, 
    },
    adminId:{type:String, unique:true},
});

userSchema.pre("save", async function (next) {
    if (!this.adminId) {
        const prefix = "ADM"; 
        const randomDigit = Math.floor(1000 + Math.random() * 9000);    
        this.adminId = `${prefix}${randomDigit}`;  
    }
    next();
});

const user = mongoose.model('user', userSchema);
export default user;