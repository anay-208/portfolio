"use client";

interface Project {
  name: string;
  description: string;
  link?: string;
  image?: string;
}

const projects: Project[] = [
  {
    name: "Advanced Holidays and Adventures",
    description: "A travel platform founded in 2019, sharing the joy of travel with unique experiences.",
    link: "https://advancedholidaysandadventures.com",
    image: "https://placehold.co/96x96?text=Project",
  },
  {
    name: "Dkvk Jewellers",
    description: "Established in 1995 in Agra, India. Modern jewelry e-commerce.",
    link: "https://dkvkjewellers.com",
    image: "https://placehold.co/96x96?text=Project",
  },
  {
    name: "Lifelog",
    description: "A platform to create journals, manage finances, and set goals. Built for Next.js Hackathon.",
    link: "https://nextjs-hackathon-murex.vercel.app/",
    image: "https://placehold.co/96x96?text=Project",
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col items-center w-full py-10">
      <h2 className="text-2xl font-bold mb-6 text-neutral-100">Projects</h2>
      <div className="flex flex-col gap-8 w-full">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-row items-center gap-6 w-full sm:flex-nowrap flex-wrap"
          >
            <img
              src={project.image}
              alt={project.name + ' image'}
              className="w-24 h-24 rounded-lg object-cover flex-shrink-0 bg-neutral-800"
            />
            <div className="flex-1 min-w-0">
              <span className="text-lg font-semibold text-neutral-100">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </span>
              <p className="text-neutral-300 mt-1 text-base">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 