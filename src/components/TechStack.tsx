"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Atom,
  Server,
  Cpu,
  Smartphone,
  Flame,
  Database,
  Layers,
  Wind,
  FolderTree,
  GitBranch,
  Brain,
  MessageSquareCode,
  Terminal,
  FileCode,
  Binary,
  Box,
} from "lucide-react";

interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Mobile / Desktop" | "AI / Devops";
  icon: React.ComponentType<any>;
  level: string;
}

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const technologies: TechItem[] = [
    { name: "React", category: "Frontend", icon: Atom, level: "EXPERT" },
    { name: "Next.js", category: "Frontend", icon: Layers, level: "EXPERT" },
    { name: "Node.js", category: "Backend", icon: Server, level: "EXPERT" },
    { name: "Electron", category: "Mobile / Desktop", icon: Cpu, level: "INTERMEDIATE" },
    { name: "Flutter", category: "Mobile / Desktop", icon: Smartphone, level: "EXPERT" },
    { name: "Laravel", category: "Backend", icon: FileCode, level: "ADVANCED" },
    { name: "MongoDB", category: "Backend", icon: Database, level: "ADVANCED" },
    { name: "SQL Server", category: "Backend", icon: Binary, level: "ADVANCED" },
    { name: "Firebase", category: "Backend", icon: Flame, level: "EXPERT" },
    { name: "Python", category: "AI / Devops", icon: Terminal, level: "ADVANCED" },
    { name: "Three.js", category: "Frontend", icon: Box, level: "ADVANCED" },
    { name: "TailwindCSS", category: "Frontend", icon: Wind, level: "EXPERT" },
    { name: "Docker", category: "AI / Devops", icon: FolderTree, level: "ADVANCED" },
    { name: "Git", category: "AI / Devops", icon: GitBranch, level: "EXPERT" },
    { name: "Artificial Intelligence", category: "AI / Devops", icon: Brain, level: "EXPERT" },
    { name: "Prompt Engineering", category: "AI / Devops", icon: MessageSquareCode, level: "EXPERT" },
  ];

  // Mouse proximity swell and glow effect
  useEffect(() => {
    const stackElement = stackRef.current;
    if (!stackElement) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cards = stackElement.querySelectorAll(".tech-card");
      cards.forEach((cardNode) => {
        const card = cardNode as HTMLDivElement;
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;

        const dist = Math.sqrt(
          Math.pow(e.clientX - cardX, 2) + Math.pow(e.clientY - cardY, 2)
        );

        const range = 180; // Proximity threshold in pixels
        const glowEl = card.querySelector(".tech-glow") as HTMLDivElement;

        if (dist < range) {
          const power = (range - dist) / range; // 0 to 1
          const scale = 1 + power * 0.12; // swell up to 1.12 scale
          const glowOpacity = power * 0.5;

          card.style.transform = `scale(${scale})`;
          card.style.borderColor = `rgba(0, 217, 255, ${0.1 + power * 0.4})`;
          if (glowEl) {
            glowEl.style.opacity = `${glowOpacity}`;
          }
        } else {
          card.style.transform = "scale(1)";
          card.style.borderColor = "rgba(255, 255, 255, 0.05)";
          if (glowEl) {
            glowEl.style.opacity = "0";
          }
        }
      });
    };

    const handleMouseLeave = () => {
      const cards = stackElement.querySelectorAll(".tech-card");
      cards.forEach((cardNode) => {
        const card = cardNode as HTMLDivElement;
        const glowEl = card.querySelector(".tech-glow") as HTMLDivElement;
        card.style.transform = "scale(1)";
        card.style.borderColor = "rgba(255, 255, 255, 0.05)";
        if (glowEl) {
          glowEl.style.opacity = "0";
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    stackElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (stackElement) {
        stackElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      id="tech-stack"
      className="relative w-full py-24 sm:py-32 flex flex-col items-center overflow-hidden px-6 sm:px-12 md:px-20 z-10"
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div
        ref={containerRef}
        className="w-full max-w-7xl flex flex-col items-center justify-center gap-16 z-20"
      >
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6 }}
            className="text-xs font-space tracking-[0.25em] text-neon-blue uppercase mb-2"
          >
            04 // Digital Infrastructure
          </motion.div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase text-glow-blue"
          >
            Tactical Tech Constellation
          </motion.h2>
          <div className="w-12 h-[1px] bg-neon-blue mt-4" />
        </div>

        {/* Technology Grids */}
        <div
          ref={stackRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full"
        >
          {technologies.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="tech-card relative glass-panel rounded-xl p-5 flex flex-col items-center justify-center text-center border border-white/5 overflow-hidden transition-all duration-200"
                style={{
                  height: "130px",
                }}
              >
                {/* Glow Sphere Layer */}
                <div
                  className="tech-glow absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 opacity-0 blur-md pointer-events-none transition-opacity duration-300"
                  style={{ transform: "scale(1.5)" }}
                />

                {/* Subtitle Tech Level */}
                <span className="absolute top-2 right-3 font-mono text-[7px] tracking-widest text-white/30">
                  {tech.level}
                </span>

                {/* Tech Icon */}
                <Icon className="w-8 h-8 text-white/80 mb-3 group-hover:text-neon-blue transition-colors duration-300" />

                {/* Tech Name */}
                <span className="font-space text-sm font-bold tracking-wider text-white uppercase mb-1">
                  {tech.name}
                </span>

                {/* Tech Category */}
                <span className="font-mono text-[8px] tracking-wider text-white/40 uppercase">
                  {tech.category}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
