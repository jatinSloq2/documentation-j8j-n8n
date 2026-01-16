import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DocsContent({ section }: any) {
    return (
        <div className="space-y-8 animate-slide-up">
            <h1 className="text-4xl font-bold">{section.title}</h1>
            <p className="text-zinc-400">{section.description}</p>

            {section.config && (
                <Card className="bg-zinc-900 p-6">
                    <h3 className="font-semibold mb-2">Configuration</h3>
                    <pre className="text-sm text-green-400">
                        {JSON.stringify(section.config, null, 2)}
                    </pre>
                </Card>
            )}

            {section.output && (
                <Card className="bg-zinc-900 p-6">
                    <h3 className="font-semibold mb-2">Output</h3>
                    <pre className="text-sm text-blue-400">
                        {JSON.stringify(section.output, null, 2)}
                    </pre>
                </Card>
            )}

            {section.expressions && (
                <div className="flex gap-2 flex-wrap">
                    {section.expressions.map((exp: string) => (
                        <Badge key={exp} variant="secondary">
                            {exp}
                        </Badge>
                    ))}
                </div>
            )}
        </div>
    );
}
