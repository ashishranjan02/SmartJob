const mongoose = require("mongoose")

const newjobSchema = mongoose.Schema({
    jobId:{
        type:String,
        unique:true,
        require:true,
    },
    jobTitle:{
        type:String,
        require:true,
    },
    jobDescription:{
        type:String,
        require:true,
    },
    requiredSkillandQualification:{
        type:String,
        require:true,
    }, 
    skill:{
        type:[String],
        require:true,
    },
    minimumSalary:{
        type:Number,
        require:true,
    },
    maximumSalary:{
        type:Number,
        require:true,
    },
    jobType:{
        type:String,
        enum: ["Full-time", "Part-time", "Internship", "Contract", "Remote"],
        require:true,
    },
    experienceLevel:{
        type:String,
        enum: ["Fresher", "Junior", "Mid", "Senior", "Lead"],
        require:true,
    },
    location:{
        type:String,
        require:true,
    },
    postingDate:{
        type:Date,
        require:true,
    },
    applicationDeadline:{
        type:Date,
        require:true,
    },
    status:{
        type:String,
        enum:['Active', 'Expired'],
        default:"Active",
    }
},{timestamps:true})
newjobSchema.pre('validate', function (next) {
  if (!this.jobId) {
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    this.jobId = `jd_${randomDigits}post`;
  }
  next();
});

const newjob = mongoose.model('NewJobModel', newjobSchema);
module.exports= newjob;