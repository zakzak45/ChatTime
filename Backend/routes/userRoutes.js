// routes/userRoutes.js
import express from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import { signup, login, logout } from "../controllers/AuthController.js";

const router = express.Router();

// Pass function reference, do NOT call it
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/updateProfile",protectRoute,updateProfile)
export default router;

