import mongoose from 'mongoose';

const recruiterSchema = mongoose.Schema({
    
    firstName:{type:String, required:true},
    lastName:{type:String, },
    gender:{type:String, required:true},
    email:{
        type:String, 
        required:true, 
        unique:true
    },
    phoneNo:{
        type:Number, 
        required:true, 
        unique:true,
        match:[/^[6-9][0-9]{9}$/,] 
    },
    currentLocation:{type:String, required:true},
    description:{type:String, requirdd:true},
    totalExperience:{type:String, required:true},
    level:{
        type:String,
        enum:['Junior Level', 'Mid Level', 'Senior Level', 'Management Level'],
        required:true,
    },
    recruiterImage:{type:String},
    recruiterId:{type:String, unique:true},
    status:{
        type:String,
        enum:['Active', 'Deactive', 'Blocked'],
        default:'Active'
    },
    activeRecruiter:{type: Boolean, default: true},
    deactiveRecruiter:{type: Boolean, default: false},
    blockedRecruiter: {type: Boolean, default: false},

})

recruiterSchema.pre("save", async function (next) {
    if (!this.recruiterId) {
        const prefix = "REC"; 
        const randomDigit = Math.floor(1000 + Math.random() * 9000);    
        this.recruiterId = `${prefix}${randomDigit}`;  
    }
    next();
});

const recruiter = mongoose.model('recruiter', recruiterSchema);
export default recruiter;
