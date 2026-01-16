import {documentation} from "@/constants/documentation";
import Link from "next/link";

export default function DocsSidebar() {
  return (
    <aside className="w-72 border-r border-zinc-800 p-6 space-y-4">
      {Object.entries(documentation).map(([slug, doc]) => (
        <Link
          key={slug}
          href={`/docs/${slug}`}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-800 transition"
        >
          <doc.icon className={`w-5 h-5 ${doc.color}`} />
          <span className="font-medium">{doc.title}</span>
        </Link>
      ))}
    </aside>
  );
}
