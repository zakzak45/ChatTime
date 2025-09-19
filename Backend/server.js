import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import messageRoutes  from "./routes/messageRoute.js"
import userRoutes from "./routes/userRoutes.js";
import cookiePaser from "cookie-parser"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookiePaser())

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/users", userRoutes);
app.use("/api/messages",messageRoutes)
connectDB();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
