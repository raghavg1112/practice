import mongoose from "mongoose";
import User from "@/models/User";
import connect from "@/Utils/mongodb";
import bcrypt from "bcryptjs";
export const POST = async (request) => {
  const { email, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);
  const filter = { email: email };
  const update = { password: password };
  const result = await User.findOneAndUpdate(filter, update);
  if (!result) return res.status(201).json({ message: "failed" });
  return res.status(201).json({ message: "changed" });
};
