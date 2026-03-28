"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { cn } from "@/lib/utils";

const projectsData = [
    {
        title: "LifeLog",
        description: "Lifelog is a unified space for managing your thoughts, goals, finances, and reflections. Built using Next.js with a focus on seamless navigation and performance.",
        imageSrc: "/projects/lifelog.png",
        imageAlt: "Lifelog",
        tags: ["Next.js Global Hackathon", "2025"]
    },
    {
        title: "Learningo",
        description: "Learningo is a web platform that lets users create and take quizzes on any topic. Built to make self-testing simple, fast, and accessible across subjects.",
        imageSrc: "/projects/learningo.png",
        imageAlt: "Learningo",
        tags: ["KTHack Hackathon", "2025"]
    }
];

export default function Projects() {
    const [currentProject, setCurrentProject] = useState(0);
    const [isCentered, setIsCentered] = useState(false);
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const counterOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    useEffect(() => {
        const handleScroll = () => {
            if (!gridRef.current) return;

            const rect = gridRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Use 50% offset on the grid container (which has the actual content)
            const isInViewport = rect.top < viewportHeight * 0.5 && rect.bottom > viewportHeight * 0.5;
            setIsCentered(isInViewport);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observers = projectRefs.current.map((ref, index) => {
            if (!ref) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setCurrentProject(index);
                    }
                },
                {
                    threshold: 0.1,
                    rootMargin: "-30% 0px -30% 0px"
                }
            );

            observer.observe(ref);
            return observer;
        });

        return () => {
            observers.forEach((observer) => {
                if (observer) observer.disconnect();
            });
        };
    }, []);

    return (
        <section ref={sectionRef}>
            <div className="bg-neutral-950 text-white rounded-3xl m-2 py-2 px-4 sm:py-4 sm:px-8">
                <h2 className="font-cal-sans text-3xl sm:text-5xl">Projects</h2>

                <div className="grid grid-cols-2 py-32">
                    <motion.div 
                        ref={gridRef}
                        className={cn(
                            "sticky top-1/2 self-start flex items-center justify-center transition-transform duration-500 ease-in-out",
                            isCentered && "-translate-y-1/2"
                        )}
                        style={{ opacity: counterOpacity }}
                    >
                        {/* Project Counter */}
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentProject}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="font-cal-sans text-[14rem] leading-none text-white"
                            >
                                {String(currentProject + 1).padStart(2, '0')}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>
                    <div className="flex flex-col gap-64 overflow-hidden">
                        {projectsData.map((project, index) => (
                            <ProjectCard
                                key={index}
                                ref={(el) => { projectRefs.current[index] = el }}
                                title={project.title}
                                description={project.description}
                                imageSrc={project.imageSrc}
                                imageAlt={project.imageAlt}
                                tags={project.tags}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}