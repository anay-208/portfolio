"use client";

import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Sharlz",
      description:
        "“Sharlz” is an up-and-coming clothing brand that offers and provides design varieties for Gamers, Cartoon and Anime enthusiasts!",
      link: "https://sharlz.com",
      image: "/sharlz.jpg",
      font: "sharlz" //Name of the font, its added in layout.tsx and tailwind.config.ts
    },
    {
      title: "Dkvk Jewellers",
      description: "DKVK JEWELLERS was Established in 1995 in AGRA INDIA. ",
      link: "https://dkvkjewellers.com",
      image: "/dkvk.jpg",
      font: "dkvk"
    }
  ];
  return (
    <div className="container relative flex h-fit min-h-screen w-screen flex-col items-start justify-center bg-slate-900 sm:w-auto sm:rounded-sm sm:px-5">
      <h1 className="self-center py-10 text-5xl">View my projects</h1>
      <div className="align-center grid w-full grid-cols-1 gap-6 items-center justify-center bg-slate-900 sm:grid-cols-2">
        {" "}
        {/* Projects card(s) */}
        {projects.map((project, index) => (
        <div key={index} className="flex h-auto w-full flex-col px-32">
          <Image
            className="inset-0 z-10 h-fit w-full rounded-t-md"
            src={project.image}
            width={1280}
            height={720}
            alt={project.title}
          />
          <div className="rounded-b-md bg-slate-950">
            <h2 className={`font-${project.font} text-center text-2xl`}>{project.title}</h2>
            <p className="text-center mx-4 my-2 h-20">{project.description} &nbsp;
            <Link className=" text-blue-500 underline" href={project.link + "/about"}>Read More</Link></p>
            <Link href={project.link} className="mx-auto my-3 block rounded bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 w-fit bg-[length:200%_200%] hover:animate-gradient">
              View Site
            </Link>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
