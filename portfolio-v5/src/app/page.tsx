import Hero from "@/components/home/1-hero";
import Projects from "@/components/home/2-projects";
import Contact from "@/components/home/3-contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Contact />
      <footer className="text-center py-8 text-gray-600 border-t">
        <p>&copy; {new Date().getFullYear()} Anay Paraswani</p>
      </footer>
    </main>
  );
}
