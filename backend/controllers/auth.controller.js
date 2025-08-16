import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateTokens.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {

    try {
        const { fullname, username, password, confirmPassword } = req.body;

        if (password != confirmPassword) {
            res.status(500).json({
                message: "Password and confirm password do not match"
            })
        }

        const user = await User.findOne({ username })

        if (user) {
            res.status(500).json({ message: "User already exists" })
        }
                // hashing the password 
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password,salt);
                // creating a new user
        const newUser = await User.create({
            fullname,
            username,
            password:hashedPassword
        })
     
        if(newUser){

            // generate token code 
            generateTokenAndSetCookie(res,newUser._id);

            await newUser.save();

            res.status(200).json({
                _id: newUser._id,
                username: newUser.username,
                fullName: newUser.fullname
            })

        }else{
            res.status(500).json({message:"Invalid User Data"})
        }


        // res.status(200).json({ message: "User created successfully" })
    } catch (error) {
        console.log("Error in signup controller",error.message);
        res.status(500).json({ message: "Internal server error" })
    }
}

export const login = async (req, res) => {
    try {
        const {username,password} = req.body

        const user = await User.findOne({username})

        const isPasswordTrue = await bcryptjs.compare(password,user?.password || '')

        if(!user || !isPasswordTrue){
            res.status(401).json({message:"User Details are invalid !!!"})
        }else{
            generateTokenAndSetCookie(res,user._id);

            res.status(200).json({
                _id:user._id,
                username:user.username,
                fullname:user.fullname
            })
        }

       

    } catch (error) {
        console.log("Error in login auth controller \n",error.message);
        res.status(500).json({message:"Internal Sever Error !!!"})
    }
}

export const logout = async (req, res) => {
        try {
            res.cookie("jwt","",{
                masAge:0
            })

            res.status(200).json({message:"Logged Out Successfully !!!"})
        } catch (error) {
            console.log("Error in Logout auth controller \n",error.message)
            res.status(500).json({message:"Internal Server Error"})
            
        }
}