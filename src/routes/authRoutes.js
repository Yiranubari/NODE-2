import express from "express";
import { register } from "../controllers/authController.js";

const router = express.Router();

router.get("/reister", register);

export default router;
