const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ag4656678:ymf7iOGH1FWoyH8k@smartjob.ueq0vqa.mongodb.net/Smartjob?retryWrites=true&w=majority&appName=Smartjob')
.then(()=> console.log("connected successfully"))
.catch((err)=>{
    console.error("Data connection failed:", err);
});

module.exports = mongoose;