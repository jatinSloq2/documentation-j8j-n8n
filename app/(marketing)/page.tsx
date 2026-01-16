import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-black to-zinc-900">
      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">
        AI Workflow Automation
      </h1>

      <p className="mt-6 text-xl text-zinc-400 max-w-xl">
        Build powerful AI-driven workflows using nodes, logic, data, and automation.
      </p>

      <Button size="lg" className="mt-8 animate-pulse">
        Explore Docs
      </Button>
    </section>
  );
}
