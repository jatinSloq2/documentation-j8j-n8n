"use server";

import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export async function loginAction(_: any, formData: FormData) {
  await connectDB();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw new Error("Invalid credentials");

  cookies().set("session", user._id.toString(), {
    httpOnly: true,
    path: "/",
  });
}
