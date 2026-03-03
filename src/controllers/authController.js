import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const register = async (req, res) => {
  const body = req.body;
  const { name, email, password } = req.body;

  // check if user already exists
  const userExists = await prisma.user.findUnique({
    where: { email },
  });

  if (userExists) {
    return res
      .status(400)
      .json({ message: "User already exists with this email" });
  }

  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
};

export { register };
