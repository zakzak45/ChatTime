// routes/userRoutes.js
import express from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import { signup, login, logout ,updateProfile,checkAuth} from "../controllers/AuthController.js";

const router = express.Router();
//User
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/updateProfile",protectRoute,updateProfile)
router.get("/check",protectRoute,checkAuth)


export default router;

