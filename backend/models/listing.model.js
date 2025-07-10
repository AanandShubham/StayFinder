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
    city:{
        type:String,
        required:true
    },
    landmark:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        require:true
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
        required:true,
        default:false
    },
    host:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;