const express = require("express")
const {generateToken} = require("../config/utils")
const bcrypt = require("bcrypt")
const jws = require("jsonwebtoken")
const User = require('../models/userModel')



export const signup = async(req,res)=>{
const {username,email,password,phonenumber} = req.body 
    try{
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
      }else{
        res.status(400).json({message:"invalid user data "})
      }

    }catch(err){
     res.status(500).json({message:"sometihng went wrong"+err})
    }
}