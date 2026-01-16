import { documentation } from "@/constants/documentation";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function DocsHome() {
    return (
        <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(documentation).map(([slug, doc]) => (
                <Link key={slug} href={`/docs/${slug}`}>
                    <Card className="bg-gradient-to-br from-zinc-900 to-black border-zinc-800 hover:scale-[1.03] transition-all">
                        <CardHeader>
                            <doc.icon className={`w-10 h-10 ${doc.color}`} />
                            <CardTitle className="mt-4 text-xl">
                                {doc.title}
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </Link>
            ))}
        </div>
    );
}
