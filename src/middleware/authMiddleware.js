import jwt from "jsonwebtoken";
import { prisma } from "../config/db.js";

// Read token from the request
export const authMiddleware = async () => {
  console.log("Auth Middleware Invoked");
};
