const jwt = require("jsonwebtoken")


export const generateToken=(userid,res)=>{
const token  = jwt.sign({userid},process.env.JWT_SECRET,{
    expiresIn:"7d"
})


res.cookie("jwt",token,{
    maxAge:7*24*60*1000,
    httpOnly:true,
    sameSite:"strict",
    secure:process.env.NODE_ENV !== "development"
})

return token


}