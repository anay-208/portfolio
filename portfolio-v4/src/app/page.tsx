import Hero from "@/components/home/1-hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full max-w-6xl mx-auto min-h-screen ">
      <Hero />
    </main>
  );
}
