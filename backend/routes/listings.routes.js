import express from 'express'
import protectRoute from '../middleware/protectRoute.js'
import upload from '../middleware/multer.js'
import { addListings } from '../controllers/listings.controller.js'

const listingRouter = express.Router()

listingRouter.post('/add', protectRoute, upload.fields(
    [
        { name: "image1", maxCount: 1 },
        { name: "image2", maxCount: 1 },
        { name: "image3", maxCount: 1 }
    ]
), addListings)

export default listingRouter 