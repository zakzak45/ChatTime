import mongoose from "mongoose";
import User from "../models/userModel.js"; // if needed

const MessageSchema = new mongoose.Schema({
  sendBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  sendAt: {
    type: Date, // timestamp when the message was sent
    default: Date.now,
    required: true,
  },
  chat: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Message", MessageSchema);
