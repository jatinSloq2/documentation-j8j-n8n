"use server";

import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function registerAction(_: any, formData: FormData) {
  await connectDB();

  await User.create({
    name: formData.get("name"),
    email: formData.get("email"),
    password: await bcrypt.hash(formData.get("password") as string, 10),
  });
}
