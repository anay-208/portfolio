"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { forwardRef } from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    tags: string[];
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
    ({ title, description, imageSrc, imageAlt, tags }, ref) => {
        return (
            <motion.div
                ref={ref}
                className="flex flex-col gap-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <div>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={1712}
                        height={972}
                        className="rounded-2xl"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <h3 className="font-cal-sans text-2xl sm:text-4xl">{title}</h3>
                    <div className="flex gap-2">
                        {tags.map((tag, index) => (
                            <div
                                key={index}
                                className="bg-[#D9D9D9] text-black rounded-2xl h-fit px-2 flex justify-center items-center font-cal-sans"
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-[#D4D4D4] font-cal-sans">{description}</p>
            </motion.div>
        );
    }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
