import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

export default async function BlogDetail({ params }: any) {
  await connectDB();
  const blog = await Blog.findOne({ slug: params.slug }).lean();

  return (
    <article className="p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div className="text-zinc-300 whitespace-pre-wrap">{blog.content}</div>
    </article>
  );
}
