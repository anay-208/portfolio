"use client";
import { Github, Mail } from "lucide-react";
import { siTailwindcss, siNextdotjs, siReact, siTypescript, siNodedotjs, siPostgresql, siGit } from "simple-icons";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

function TechBadge({ icon, name }: { icon: any; name: string }) {
  return (
    <span
      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-neutral-800 text-neutral-200 border border-neutral-600"
    >
      <svg
        width="16"
        height="16"
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
    title: "E-Commerce Platform",
    subtitle: "Full-stack Next.js application",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80"
  },
  {
    id: 2,
    title: "Task Management App",
    subtitle: "React & TypeScript dashboard",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    subtitle: "Real-time data visualization",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80"
  },
  {
    id: 4,
    title: "Social Media App",
    subtitle: "Full-stack with PostgreSQL",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=300&fit=crop&crop=entropy&auto=format&q=80"
  }
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
          <motion.img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            className="w-full h-full object-cover rounded-lg "
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg" />

          <motion.div
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ delay: 0.2, duration: 0.4 }}
            className="absolute bottom-4 left-4 right-4"
          >
            <motion.h3
              className="text-white font-semibold text-lg mb-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {projects[currentIndex].title}
            </motion.h3>
            <motion.p
              className="text-neutral-300 text-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              {projects[currentIndex].subtitle}
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center py-10 px-6 gap-4">
      {/* Main Hero Section */}
      <div className="relative p-8 rounded-2xl overflow-hidden border-2 border-neutral-800 w-full max-w-2xl">
        <GlassBackground />
        <div className="relative z-10">
          <p className="text-neutral-300 text-lg mb-2">Hi, I am</p>
          <h1 className="text-5xl md:text-6xl text-neutral-50 mb-6 tracking-wide font-raleway-dots">
            Anay Paraswani
          </h1>
          <p className="text-neutral-300 text-lg">
            A student and a full stack developer
          </p>
        </div>
      </div>

      {/* Skills and Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl ">
        {/* Skills Section */}
        <div className="text-left bg-neutral-900 p-8 rounded-2xl border-2 border-neutral-800">
          <h2 className="text-2xl font-light text-neutral-200 mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            <TechBadge icon={siReact} name="React" />
            <TechBadge icon={siNextdotjs} name="Next.js" />
            <TechBadge icon={siTypescript} name="TypeScript" />
            <TechBadge icon={siTailwindcss} name="Tailwind" />
            <TechBadge icon={siNodedotjs} name="Node.js" />
            <TechBadge icon={siPostgresql} name="PostgreSQL" />
            <TechBadge icon={siGit} name="Git" />
          </div>
        </div>

        {/* Projects Section */}
        <div className="text-left bg-neutral-900 p-8 rounded-2xl border-2 border-neutral-800">
          <h2 className="text-2xl font-light text-neutral-200 mb-6">Projects</h2>
          <ProjectSlider />
        </div>
      </div>

      {/* About Me Section */}
      <div className="relative p-8 rounded-2xl overflow-hidden border-2 border-neutral-800 w-full max-w-2xl bg-neutral-900">
        <div className="relative z-10 text-left">
          <h2 className="text-2xl font-light text-neutral-200 mb-6">About Me</h2>
          <p className="text-neutral-300 text-base leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-neutral-300 text-base leading-relaxed mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-neutral-300 text-base leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  );
}