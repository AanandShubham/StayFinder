import {v2 as cloudinary} from 'cloudinary'
import fs from "fs"
const uploadOnCloudinary = async (filepath)=>{


    cloudinary.config({ 
        cloud_name: process.env.cloudinary_cloud_name, 
        api_key: process.env.cloudinary_api_key, 
        api_secret: process.env.cloudinary_api_secret
    });

    try {
        if(!filepath) return null

        const uploadResult = await cloudinary.uploader.upload(filepath)
        fs.unlinkSync(filepath)
        return uploadResult.secure_url

    } catch (error) {
        fs.unlinkSync(filepath)
        console.log("-------------------------------------\n")
        console.log("Error in Cludinary upload Function !!\n")
        console.log("-------------------------------------",error)
        return null
    }
}

export default uploadOnCloudinary ;