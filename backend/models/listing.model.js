import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    rent:{
        type:Number,
        required:true
    },
    image1:{
        type:String,
        required:true
    },
    image2:{
        type:String,
        required:true
    },
    image3:{
        type:String,
        required:true
    },
    isBooked:{
        type:Boolean,
        required:true
    }

},{timestamps:true})

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;