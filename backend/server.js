import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.routes.js";
import connectToMongoDb from "./db/connectToMongoDB.js";
import dotenv from 'dotenv'

dotenv.config({})

const app = express();


app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("this is main page");
});
app.use("/api/auth", authRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    connectToMongoDb();
});