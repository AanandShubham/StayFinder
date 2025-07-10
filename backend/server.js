import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.routes.js";
import connectToMongoDb from "./db/connectToMongoDB.js";
import dotenv from 'dotenv'
import listingRoute from "./routes/listings.routes.js";
// import upload from "./middleware/multer.js";

dotenv.config({})

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("this is main page");
});
app.use("/api/auth", authRoute);
app.use('/api/listing', listingRoute)


// // Test of file upload with multer middleware and formData 
// // multer is used to upload files to the server
// // formData is used to send files to the server
// // multer.single('files') is used to upload a single file
// // multer.array('files',2) is used to upload multiple files
// // multer.fields([{name:'file1',maxCount:1},{name:'file2',maxCount:2}]) is used to upload multiple files with different names and max counts
// // multer.none() is used to upload no files
// // multer.any() is used to upload any type of files

// app.post('/api/test', upload.fields([
//     { name: 'image1', maxCount: 1 },
//     { name: 'image2', maxCount: 1 },
//     { name: 'image3', maxCount: 1 }
// ]), (req, res) => {
//     console.log("All images : ",req.files)

//     console.log("Image1 Path : ",req.files.image1[0].path)

//     res.status(200).json({
//         message: "File uploaded successfully",
//     })
// })


app.listen(3000, () => {
    console.log("Server is running on port 3000");
    // connectToMongoDb();
});