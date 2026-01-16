import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import Link from "next/link";

export default async function BlogPage() {
  await connectDB();
  const blogs = await Blog.find().lean();

  return (
    <div className="p-10 grid md:grid-cols-3 gap-6">
      {blogs.map((b: any) => (
        <Link
          key={b._id}
          href={`/blog/${b.slug}`}
          className="bg-zinc-900 p-6 rounded-xl hover:scale-105 transition"
        >
          <h2 className="text-xl font-bold">{b.title}</h2>
        </Link>
      ))}
    </div>
  );
}
