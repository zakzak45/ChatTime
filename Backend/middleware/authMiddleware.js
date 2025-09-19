import jwt from "jsonwebtoken"
import User from '../models/userModel.js'

export const protectRoute = async(req,res,next)=>{
try{
const token  = req.cookie.jwt 
if(!token ){
    return res.status(401).json({message:"Unauthourised-NO token provided"})

}

const decoded = jwt.verify(token , process.env.JWT_TOKEN)

if(!decoded){
    res.status(401).json({message:"Unathorized - Invalid-token"})
    
}
const user =  await  user.findById(decoded.userId).select("-password")

if(!user){
    return res.status(404).json({message:"user not found"})
}

req.user= user
next()
}catch(error){
console.log("error in  protectRoute ",error.message)
res.status(500).json({message:"internal server error"})
}
}