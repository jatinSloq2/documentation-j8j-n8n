import { documentation } from "@/constants/documentation";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";

type Params = {
  category: string;
  section: string;
};

export default async function SectionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, section } = await params;

  const categoryData =
    documentation[category as keyof typeof documentation];

  const sectionData = categoryData?.sections.find(
    (s) => s.id === section
  );

  if (!categoryData || !sectionData) {
    notFound();
  }

  return (
    <Card className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">
        {sectionData.title}
      </h1>

      <p className="text-muted-foreground">
        {sectionData.description}
      </p>

      <pre className="bg-muted p-4 rounded-md text-sm overflow-auto">
        {JSON.stringify(sectionData, null, 2)}
      </pre>
    </Card>
  );
}
