import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import { generateToken } from "../config/utils.js";


export const signup = async (req, res) => {
  const { username, email, password} = req.body;

  try {
  

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    generateToken(newUser._id, res);

    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      profilePic: newUser.profilePic,
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong: " + err });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    generateToken(user._id, res);
    res.status(200).json({ 
      _id: user._id,
      username: user.username,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong: " + err });
  }
};

export const logout = async (req, res) => {
try{
res.cookie("jwt"," ",{maxAge:0})
res.status(200).json({message:"logged in successfully"})
}catch(error){
console.log("Error in logout controller ", error.message)
res.status(500).json({message:"internal server error"})
}

};



export const updateProfile = async(req,res)=>{
  try{

  }catch(err){

  }
}