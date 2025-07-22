import Hero from "@/components/home/1-hero";
import Projects from "@/components/home/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full max-w-2xl mx-auto min-h-screen bg-neutral-900">
      <Hero />
      <Projects />
    </main>
  );
}
