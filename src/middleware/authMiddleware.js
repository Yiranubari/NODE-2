import jwt from "jsonwebtoken";
import { prisma } from "../config/db.js";

// Read token from the request
export const authMiddleware = async (req, res, next) => {
  console.log("Auth Middleware Invoked");

  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
};
