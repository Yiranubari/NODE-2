import pkg from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const { PrismaClient, Prisma } = pkg;
const { Pool } = pg;

const createPoolFromEnv = () => {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }

  const url = new URL(process.env.DATABASE_URL);

  return new Pool({
    user: url.username,
    password: url.password,
    host: url.hostname,
    port: url.port ? Number(url.port) : 5432,
    database: url.pathname.startsWith("/")
      ? url.pathname.slice(1)
      : url.pathname,
    ssl:
      url.searchParams.get("sslmode") === "require"
        ? { rejectUnauthorized: false }
        : undefined,
  });
};

const pool = createPoolFromEnv();

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
});

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to database");
  } catch (error) {
    console.error("Failed to connect to database:", error.message);
    process.exit(1);
  }
};

const disconnectDB = async () => {
  await prisma.$disconnect();
  console.log("Disconnected from database");
};

export { Prisma, connectDB, disconnectDB, prisma };
