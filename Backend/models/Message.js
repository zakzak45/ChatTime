import mongoose from "mongoose"

const MessageSchema = new mongoose.Schema({
  sendId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiverId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
  chat: {
    type: String,
    required: true,
  },
  image:{
    type:String
  }
});

export default mongoose.model("Message", MessageSchema);
