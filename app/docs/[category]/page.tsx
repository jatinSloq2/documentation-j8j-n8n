import { documentation } from "@/constants/documentation";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = {
  category: string;
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;

  console.log("params", category);

  const categoryData =
    documentation[category as keyof typeof documentation];

  if (!categoryData) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">
        {categoryData.title}
      </h1>

      <div className="space-y-4">
        {categoryData.sections.map((section) => (
          <Link
            key={section.id}
            href={`/docs/${category}/${section.id}`}
            className="block p-5 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition"
          >
            <h2 className="text-xl font-semibold">
              {section.title}
            </h2>
            <p className="text-zinc-400">
              {section.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
