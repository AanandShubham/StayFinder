import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'
const protectRoute = async (req,res,next)=>{
    try {
        const token = req.cookie.jwt

    if(!token){
        res.status(401).json({message:"Un-authorized user , no token provided"})
    }

    const decode = jwt.verify(token,process.env.JWT_SECRETE)

    if(!decode){
        res.status(401).json({message:"Un-authorized :-  Invalid User token"})
    }

    const user = await User.findById(decode.userId).select("-password")

    if(!user){
        res.status(401).json({message:"Invalid ,  user not found"})
    }
    
    req.userId = user._id 

    next()

    } catch (error) {
        console.log("Error in Protect Route Middle Ware : ",error)
        res.status(500).json({message:"Internal Server Error !!"})    
    }
}

export default protectRoute ;