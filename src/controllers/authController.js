import { PrismaClient } from "@prisma/client";
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
};

export { register };
