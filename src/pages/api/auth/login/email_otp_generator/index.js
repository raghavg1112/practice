import mongoose from "mongoose";
import User from "@/models/User";
import connect from "@/Utils/mongodb";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "rg406738@gmail.com",
    pass: process.env.EMAIL_PASS,
  },
});

// Generate a random 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}
export const POST = async (request) => {
  const { email } = request.body;

  // Generate OTP
  const otp = generateOTP();
  const hashedOtp = await bcrypt.hash(otp, 5);
  const filter = { email: email };
  const update = { otp: hashedOtp };
  await connect();
  User.findOneAndUpdate(filter, update);

  // Email options
  const mailOptions = {
    from: "rg406738@gmail.com",
    to: email,
    subject: "OTP Verification",
    text: `Your OTP is: ${otp}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Error sending OTP" });
    } else {
      console.log("OTP sent: " + info.response);
      res.json({ message: "OTP sent successfully" });
    }
  });
};
