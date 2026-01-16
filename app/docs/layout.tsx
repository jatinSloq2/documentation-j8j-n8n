import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import DocsSidebar from "./components/DocsSidebar";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-72 border-r">
        <DocsSidebar />
      </aside>

      <main className="flex-1 p-6">
        <Separator className="mb-6" />
        {children}
      </main>
    </div>
  );
}
