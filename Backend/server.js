import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import messageRoutes  from "./routes/messageRoute.js"
import userRoutes from "./routes/userRoutes.js";
import cookiePaser from "cookie-parser"
import cors from "cors"
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookiePaser())
app.use(cors(
  {
origin:"http:/localhost:4000 ",
credentials:true,
  }
))
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/", userRoutes);
app.use("/api/messages",messageRoutes)
connectDB();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
