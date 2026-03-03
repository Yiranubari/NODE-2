import express from "express";
import { register, login, logout } from "../controllers/authController.js";

const router = express.Router();

// Register route
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post;

export default router;
