const express = require("express")
const {generateToken} = require("../config/utils.js")
const bcrypt = require("bcrypt")
const jws = require("jsonwebtoken")
const User = require('../models/userModel')

export const signup = async(req,res)=>{
const {username,email,password,phonenumber} = req.body 
    try{

    if(!username||!email||!password||!phonenumber){
      return res.status(400).json({message:"please provide information in all fields"})
    }
    if(!phoneNumber.length==10){
      return res.status(400).json({message:"phone number must be of length 10"})
    }
    if(password.length<6){
      return res.status(400).json({message:"password must be at least 6 charecters"})
    }
      const user = await User.findOne({email})
      if(user){
        return res.status(400).json({message:"password must be less than 6 charecters "})

      }

      const salt  = await bcrypt.genSalt(10)
      const hashedpassword = await bcrypt.hash(password,salt)

      const newUser = new User({
        username,
        email,
        password:hashedpassword,
        phoneNumber
      })
      if(newUser){
        generateToken(newUser._id,res)

        await newUser.save()
        res.status(201).json({
          _id:newUser._id,
          fullName:newUser.fullName,
          email:newUser.email,
          phoneNumber:newUser.phoneNumber,
          profilePic:newUser.profilePic
        })
      }else{
        res.status(400).json({message:"invalid user data "})
      }

    }catch(err){
     res.status(500).json({message:"sometihng went wrong "+err})
    }
}


export const login = async(req,res)=>{
  try{
   const {username , email,password}= req.body
   const user = await User.findOne({email})

    if (!user){
            return res.status(401).json({
                error:
                    'Invalid credentials'
            });
        }
       const passwordMatch = await bcrypt.compare(password,
            user.password);

       if (!passwordMatch) {
            return res.status(401).json({
                error:
                    'Invalid credentials'
            });
        }

  }catch(err){
  return res.status(500).json({message:"something went wrong " +err})
  }
}



export const logout = async(req,res)=>{

}