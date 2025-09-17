import mongoose from "mongoose";


const connectDB = async() =>{
    try{
        const connectionStablish = await mongoose.connect(`${process.env.Mongodb_URL}`)
        console.log(`db is connected ${connectionStablish}`)
    }
    catch (error){
        console.log(`db connection lost`, error.message);
        process.exit(1);
    }
}

export default connectDB;