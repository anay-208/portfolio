"use client";

import Image from "next/image";
import Link from "next/link";
import sharlz from "../images/sharlz.jpg"
import dkvk from "../images/dkvk.jpg"
export default function Projects() {
  const projects = [
    {
      title: "Sharlz",
      description:
        "Sharlz is a revolutionary clothing brand that is set to transform the fashion industry. With a focus on generation Z, Sharlz aims to provide an immersive shopping ",
      link: "https://sharlz.com",
      image: sharlz,
      font: "font-sharlz" //Name of the font, its added in layout.tsx and tailwind.config.ts
    },
    {
      title: "Dkvk Jewellers",
      description: "DKVK JEWELLERS was Established in 1995 in AGRA INDIA. ",
      link: "https://dkvkjewellers.com",
      image: dkvk,
      font: "font-dkvk" // Use font-dkvk, and not font-${font} in className. Tailwind can't compile that
    }
  ];
  return (
    <div id="projects" className="relative flex h-fit min-h-screen w-screen flex-col items-start justify-center sm:rounded-sm sm:px-5">
      <h1 className="self-center py-10 text-5xl">View my projects</h1>
      <div className="align-center grid w-full grid-cols-1 gap-6 items-center justify-center  sm:grid-cols-2">
        {" "}
        {/* Projects card(s) */}
        {projects.map((project, index) => (
        <div key={index} className="flex h-auto w-2/3 flex-col mx-auto">
          <Image
            className="inset-0 z-10 h-fit w-full rounded-t-md"
            src={project.image}
            width={1280}
            height={720}
            alt={project.title}
            placeholder="blur"
          />
          <div className="rounded-b-md bg-slate-900">
            <h2 className={`${project.font} text-center text-2xl`}>{project.title}</h2>
            <p className="text-center mx-4 my-2 h-28 sm:h-20">{project.description} &nbsp;
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
