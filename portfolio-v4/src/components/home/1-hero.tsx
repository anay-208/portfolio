"use client";
import { Github, Mail } from "lucide-react";
import { siNextdotjs, siTailwindcss, siShadcnui, siPostgresql } from "simple-icons";

function TechBadge({ icon, name }: { icon: any; name: string }) {
  return (
    <span
      className="inline-flex items-center gap-1 ml-1 px-2 py-1 rounded-md text-sm font-medium bg-neutral-950 border border-neutral-700"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d={icon.path} />
      </svg>
      {name}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="flex justify-center items-start min-h-[40vh] w-full py-10">
      <div className="w-full px-6 py-8 flex flex-col">
        <div className="flex flex-row items-center gap-4 mb-4">
          <img
            src="https://avatars.githubusercontent.com/u/96932471?v=4"
            alt="Anay Paraswani profile picture"
            className="w-12 h-12 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm object-cover"
          />
          <span className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">Anay Paraswani</span>
        </div>
        <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
            Hi, I'm Anay Paraswani, a 17 year old self-taught developer from  🇮🇳. I've been coding since I was 11, and I'm really passionate about web development.
            <br /> <br />
            I usually built websites with             
          <TechBadge icon={siNextdotjs} name="Next.js" />, 
          <TechBadge icon={siTailwindcss} name="TailwindCSS" />, 
          <TechBadge icon={siShadcnui} name="Shadcn UI" /> and
          <TechBadge icon={siPostgresql} name="PostgreSQL" />.
        </p>
        <div className="flex mx-auto gap-3 mt-1">
          <a href="https://github.com/Anay-208" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="w-6 h-6 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors" />
          </a>
          <a href="mailto:me@anayparaswani.dev" aria-label="Email">
            <Mail className="w-6 h-6 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}