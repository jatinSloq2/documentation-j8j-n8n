"use server";

import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import { revalidatePath } from "next/cache";

export async function createBlog(_: any, formData: FormData) {
  await connectDB();

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await Blog.create({
    title,
    content,
    slug: title.toLowerCase().replace(/\s+/g, "-"),
  });

  revalidatePath("/blog");
}
