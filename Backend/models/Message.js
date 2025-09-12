const User = require('../models/userModel')

const mongoose = require('mongoose')

const MessageSchmema = new mongoose.Schema({
SendBy:
{
   type:mongoose.Schema.Types.ObjectId,
   ref:"User",
   required:true,
},
SendAt:{
   type:mongoose.Schema.Types.ObjectId,
   ref:"User",
   required:true
},
chat:{
   type:String,
   required:true
},
 timestamp: {
    type: Date,
    default: Date.now,
  },
})



module.exports = mongoose.model("message",MessageSchmema)

