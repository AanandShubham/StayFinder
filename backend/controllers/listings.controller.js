import { response } from "express"
import Listing from "../models/listing.model.js"
import User from "../models/user.model.js"
import uploadOnCloudinary from "../utils/uploadOnCloudinary.js"

export const addListings = async (req, res) => {
    try {

        const hostUser = req.userId

        const { title, description, city, landmark, rent, category ,pincode} = req.body
        const image1 = await uploadOnCloudinary(req.files.image1[0].path)
        const image2 = await uploadOnCloudinary(req.files.image2[0].path)
        const image3 = await uploadOnCloudinary(req.files.image3[0].path)

        const newListing = await Listing.create({
            title,
            description,
            city,
            landmark,
            pincode,
            category,
            rent,
            host: hostUser,
            image1,
            image2,
            image3
        })

        if (!newListing) {
            throw new Error("Listing Not Created due to some reason")
        }

        const user = await User.findByIdAndUpdate(hostUser,
            { $push: { listing: newListing._id } },
            { new: true }
        )

        if (!user) {
            res.status(404).json({ message: "user not found" })
        }

        Promise.all([user.save(), newListing.save()])

        res.status(201).json(newListing)
        
    } catch (error) {
        console.log("Error in add listing controller \n ",error)
        res.status(500).json({message:"Internal Server Error !!"})
    }

}

