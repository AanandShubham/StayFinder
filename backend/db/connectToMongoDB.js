import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({})
async function connectToMongoDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error Connecting to MongoDB",error.message);
    }
}

export default connectToMongoDb;