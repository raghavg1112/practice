import mongoose from "mongoose";
import User from "@/models/User";
import connect from "@/Utils/mongodb";
import { compare } from "bcryptjs";

export const POST = async (req) => {
  const { email, otp } = await request.json();

  await connect();

  const user = User.find({ email: email });
  if (!user) return res.status(201).json({ message: "failed" });
  if (await bcrypt.compare(user.otp, otp))
    return resizeBy.status(201).json({ message: "authenticated" });
  return res.status(201).json({ message: "failed" });
};
