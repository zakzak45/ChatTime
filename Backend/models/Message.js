const mongoose = require("mongoose")
const User = require("./userModel")


const messageSchema = new mongoose.Schema({
 SendBy:{
    type:String,
 },
 text:{
    type:String,
    
 }
})



module.exports = mongoose.model("message",messageSchema)


