
import Introduction from "./components/introduction";
import Projects from "./components/projects";
import Skills from "./components/skills";
export default function Home() {
  return (
    <main className="font-default min-h-screen w-full max-w-full overflow-x-hidden bg-slate-950 text-white">
        <Introduction />
        <Skills />
        <Projects />
    </main>
  );
}
