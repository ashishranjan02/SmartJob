import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    companyName:{type:String, required:true},
    jobTitle:{type:String, required:true},
    department:{type:String, required:true},
    requiredSkill:{
        type:[String],
        required:true,
    },
    eligiblity:{type:String, required:true},
    location:{type:String, required:true},
    jobProfileCTC:{
        type:String,
        required: true
    },
    jobType:{
        type:String,
        enum:['Full Time', 'Part Time', 'Internship', 'Contract'],
        required:true,
    },
    workOption:{
        type:String,
        enum:['On-Site', 'Remote', 'Hybrid'],
        required:true
    },
    experienceLevel:{
        type:String,
        enum:['Fresher', 'Experienced'],
        required:true,
    },
    postDate:{type:Date, default:"2025-08-21"},
    deadline:{type:Date, required:true},
    status:{
        type:String,
        enum:['Active', 'Expired'],
    },
    jobDescription:{type:String, required:true},
} )

const jobPost = mongoose.model('jobPost', jobSchema);
export default jobPost;