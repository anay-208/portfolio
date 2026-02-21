"use client";
import { Github, Mail } from "lucide-react";
import { siTailwindcss, siNextdotjs, siReact, siTypescript, siNodedotjs, siPostgresql, siGit, siUbuntu, siNginx, siPython } from "simple-icons";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// TODO
/// EXTEND GRADIENT
/// ON SKILLS BADGES, do some stuff to highlight one more like by reducing contrast of others and highlighting that more


// Create motion-wrapped Image component
const MotionImage = motion.create(Image);
import Lifelog from "@/../public/projects/lifelog.png"
import Learningo from "@/../public/projects/learningo.png"
function GlassBackground() {
  // Fixed positions for square particles to avoid hydration issues
  const squares = [
    { id: 1, size: 40, x: 15, y: 20, rotation: 45, duration: 20 },
    { id: 2, size: 25, x: 85, y: 15, rotation: 0, duration: 25 },
    { id: 3, size: 35, x: 70, y: 70, rotation: 30, duration: 18 },
    { id: 4, size: 20, x: 10, y: 80, rotation: 60, duration: 22 },
    { id: 5, size: 30, x: 50, y: 10, rotation: 15, duration: 28 },
    { id: 6, size: 45, x: 90, y: 85, rotation: 75, duration: 24 },
    { id: 7, size: 28, x: 25, y: 50, rotation: 90, duration: 26 },
    { id: 8, size: 22, x: 60, y: 35, rotation: 120, duration: 20 },
    { id: 9, size: 38, x: 5, y: 45, rotation: 180, duration: 30 },
    { id: 10, size: 32, x: 80, y: 50, rotation: 210, duration: 23 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-neutral-900/80 " />

      {/* Glass morphism layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/30 via-neutral-900/50 to-black/60 backdrop-blur-lg" />

      {/* Animated square particles */}
      {squares.map((square) => (
        <motion.div
          key={square.id}
          className="absolute border border-neutral-500/50 bg-gradient-to-br from-white/10 to-neutral-700/20 rounded-sm shadow-lg"
          style={{
            width: square.size,
            height: square.size,
          }}
          initial={{
            x: `${square.x}vw`,
            y: `${square.y}vh`,
            rotate: square.rotation,
          }}
          animate={{
            x: [`${square.x}vw`, `${(square.x + 20) % 100}vw`, `${square.x}vw`],
            y: [`${square.y}vh`, `${(square.y + 15) % 100}vh`, `${square.y}vh`],
            rotate: [square.rotation, square.rotation + 180, square.rotation + 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: square.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Static floating orbs */}
      <div
        className="absolute w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-60"
        style={{ left: '20%', top: '30%' }}
      />

      <div
        className="absolute w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl opacity-50"
        style={{ right: '25%', bottom: '40%' }}
      />
    </div>
  );
}

function TechBadge({ icon, name, url, size = "sm" }: { icon: any; name: string; url?: string; size?: "sm" | "lg" }) {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Size variants
  const sizeClasses = {
    sm: "gap-1.5 px-1.5 py-0.5 rounded-md text-xs",
    lg: "gap-2 px-3 py-2 rounded-lg text-sm"
  };

  const iconSizes = {
    sm: { width: "12", height: "12" },
    lg: { width: "16", height: "16" }
  };

  return (
    <span
      className={`inline-flex items-center ${sizeClasses[size]} font-medium bg-neutral-800 text-neutral-200 border border-neutral-600 transition-all duration-200 hover:bg-neutral-700 hover:border-neutral-500 hover:scale-105 ${url ? 'cursor-pointer hover:shadow-sm' : ''}`}
      onClick={handleClick}
      role={url ? "button" : undefined}
      tabIndex={url ? 0 : undefined}
      onKeyDown={(e) => {
        if (url && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <svg
        width={iconSizes[size].width}
        height={iconSizes[size].height}
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

// Sample project data
const projects = [
  {
    id: 1,
    title: "",
    subtitle: "",
    image: Lifelog,
    color: "#1e40af",
    url: "https://nextjs-hackathon-murex.vercel.app/"
  },
  {
    id: 2,
    title: "Learningo",
    subtitle: "Revise anything you want with AI",
    image: Learningo,
    color: "#ffffff", // green
    url: "https://learningo.xyz"
  },
];

function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000); // Change project every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: {
      x: "-100%",
      y: "-100%",
      opacity: 0,
      scale: 0.8,
      rotate: -10
    },
    center: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0
    },
    exit: {
      x: "100%",
      y: "-100%",
      opacity: 0,
      scale: 0.8,
      rotate: 10
    },
  };

  const textVariants = {
    enter: {
      opacity: 0,
      y: 20,
    },
    center: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  };

  return (
    <div className="relative h-40 overflow-hidden rounded-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.6,
          }}
          className="absolute inset-0"
        >
          <motion.a
            href={projects[currentIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <MotionImage
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              fill
              placeholder="blur"
              className="object-contain rounded-lg"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg" />
          </motion.a>

          <motion.div
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ delay: 0.2, duration: 0.4 }}
            className="absolute bottom-4 left-4 right-4"
          >
            <motion.a
              href={projects[currentIndex].url}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <motion.h3
                className="font-semibold text-lg mb-1 group-hover:underline"
                style={{ color: projects[currentIndex].color }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                {projects[currentIndex].title}
              </motion.h3>
              <motion.p
                className="text-sm"
                style={{ color: projects[currentIndex].color, opacity: 0.8 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                {projects[currentIndex].subtitle}
              </motion.p>
            </motion.a>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center py-10 px-6 gap-6">
      {/* Main Hero Section */}
      <div className="relative p-8 rounded-2xl overflow-hidden border-2 border-neutral-800 w-full max-w-2xl">
        <GlassBackground />
        <div className="relative z-10">
          {/* <p className="text-neutral-300 text-lg mb-2">Hi, I am</p> */}
          <h1 className="text-5xl md:text-6xl text-neutral-50 mb-6 tracking-wide">
            Anay Paraswani
          </h1>
          <p className="text-neutral-300 text-lg">
            A student and a full stack developer
          </p>
        </div>
      </div>

      {/* Skills and Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl ">
        {/* Skills Section */}
        <div className="text-left bg-neutral-900 p-8 rounded-2xl border-2 border-neutral-800">
          <h2 className="text-2xl font-light text-neutral-200 mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            <TechBadge icon={siReact} name="React" url="https://react.dev" size="lg" />
            <TechBadge icon={siNextdotjs} name="Next.js" url="https://nextjs.org" size="lg" />
            <TechBadge icon={siTypescript} name="TypeScript" url="https://www.typescriptlang.org" size="lg" />
            <TechBadge icon={siTailwindcss} name="Tailwind" url="https://tailwindcss.com" size="lg" />
            <TechBadge icon={siNodedotjs} name="Node.js" url="https://nodejs.org" size="lg" />
            <TechBadge icon={siPython} name="Python" url="https://www.python.org" size="lg" />
            <TechBadge icon={siPostgresql} name="PostgreSQL" url="https://www.postgresql.org" size="lg" />
            <TechBadge icon={siUbuntu} name="Ubuntu" url="https://ubuntu.com" size="lg" />
            <TechBadge icon={siNginx} name="Nginx" url="https://nginx.org" size="lg" />
            <TechBadge icon={siGit} name="Git" url="https://git-scm.com" size="lg" />
          </div>
        </div>

        {/* Projects Section */}
        <div className="text-left bg-neutral-900 p-8 rounded-2xl border-2 border-neutral-800">
          <h2 className="text-2xl font-light text-neutral-200 mb-6">Projects</h2>
          <ProjectSlider />
        </div>
      </div>

      {/* About Me Section */}
      <div className="w-full max-w-2xl">
        {/* About Me Card */}
        <div className="relative p-8 rounded-2xl overflow-hidden border-2 border-neutral-800 bg-neutral-900">
          <div className="relative z-10 text-left">
            <h2 className="text-2xl font-light text-neutral-200 mb-6">About Me</h2>
            <p className="text-neutral-300 text-sm leading-relaxed mb-4">
              I am a full-stack web developer and a student, passionate about creating functional and visually appealing websites. I specialize in 
              <TechBadge icon={siReact} name="React" url="https://react.dev" />, 
              <TechBadge icon={siNextdotjs} name="Next.js" url="https://nextjs.org" />, and 
              <TechBadge icon={siTypescript} name="TypeScript" url="https://www.typescriptlang.org" />, focusing on building websites that are intuitive and user-friendly.
            </p>
            <p className="text-neutral-300 text-sm leading-relaxed mb-4">
              I am also deeply interested in AI, technology, and entrepreneurship. I have worked on projects ranging from interactive websites to AI-powered web tools, each helping me strengthen my technical and problem-solving skills.
            </p>
            <p className="text-neutral-300 text-sm leading-relaxed">
              I usually build websites with 
              <TechBadge icon={siNextdotjs} name="Next.js" url="https://nextjs.org" />, 
              <TechBadge icon={siTailwindcss} name="TailwindCSS" url="https://tailwindcss.com" />, and 
              <TechBadge icon={siPostgresql} name="PostgreSQL" url="https://www.postgresql.org" />, seeking opportunities to collaborate on meaningful projects and contribute to innovative web solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}