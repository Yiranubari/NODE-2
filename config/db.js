import { prismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client/extension";

const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
});

const connectDB = async () => {};

const disconnectDB = async () => {};
