"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Code2, Globe } from "lucide-react";

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveLink: string;
  gitLink: string;
  category: string;
  glowColor: string;
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const projectsList: ProjectItem[] = [
    {
      title: "Ecom Platform",
      description: "A modern ecommerce store featuring clean shopping grids, modular components, and fluid user checkouts.",
      image: "/images/ecom_store.png",
      tech: ["React", "TypeScript", "Vercel", "TailwindCSS"],
      liveLink: "https://ecom-psi-vert.vercel.app",
      gitLink: "https://github.com/deep8469/ecom-",
      category: "E-Commerce System",
      glowColor: "hover:border-neon-green/40 shadow-neon-green/5 hover:shadow-neon-green/15",
    },
    {
      title: "Studio Photo App",
      description: "A clean photographic asset manager built for studios, helping select, view, and organize digital image assets.",
      image: "/images/photo_app.png",
      tech: ["JavaScript", "HTML5", "CSS3", "Git"],
      liveLink: "https://github.com/deep8469/Photo-app-",
      gitLink: "https://github.com/deep8469/Photo-app-",
      category: "Photography Tool",
      glowColor: "hover:border-neon-purple/40 shadow-neon-purple/5 hover:shadow-neon-purple/15",
    },
    {
      title: "Group Activate App",
      description: "A lightweight financial split app designed to handle payment triggers and group active setups.",
      image: "/images/group_activate.png",
      tech: ["HTML5", "CSS3", "JavaScript", "Git"],
      liveLink: "https://github.com/deep8469/Group-Activate-app",
      gitLink: "https://github.com/deep8469/Group-Activate-app",
      category: "Financial App",
      glowColor: "hover:border-neon-blue/40 shadow-neon-blue/5 hover:shadow-neon-blue/15",
    },
  ];

  // 3D Tilt calculation logic on mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const width = rect.width;
    const height = rect.height;

    // Calculate rotation angles (-8 to +8 degrees)
    const rotateY = ((x - width / 2) / (width / 2)) * 8;
    const rotateX = -((y - height / 2) / (height / 2)) * 8;

    // Calculate glare position
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <section
      id="projects"
      className="relative w-full py-24 sm:py-32 flex flex-col items-center overflow-hidden px-6 sm:px-12 md:px-20 z-10"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-radar-glow opacity-10 pointer-events-none" />

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
            className="text-xs font-space tracking-[0.25em] text-neon-green uppercase mb-2"
          >
            03 // Innovation Portfolio
          </motion.div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase text-glow-green"
          >
            Selected Project Showcases
          </motion.h2>
          <div className="w-12 h-[1px] bg-neon-green mt-4" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-stretch">
          {projectsList.map((project, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className={`group flex flex-col glass-panel rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 ${project.glowColor} cursor-pointer`}
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.1s ease, border-color 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              {/* Image Preview Container */}
              <div className="relative w-full h-[180px] sm:h-[220px] overflow-hidden bg-black/40">
                {/* Visual Scanner Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent z-10" />
                <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none z-10" />
                
                {/* Hover Glare Reflection */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
                  style={{
                    background:
                      "radial-gradient(150px circle at var(--x, 0px) var(--y, 0px), rgba(255, 255, 255, 0.15), transparent 80%)",
                  }}
                />

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.8] group-hover:brightness-100"
                />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 z-20 font-space text-[9px] tracking-widest text-white/90 bg-black/60 backdrop-blur border border-white/10 px-2.5 py-1.5 rounded uppercase">
                  {project.category}
                </span>
              </div>

              {/* Project Info Block */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-space text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300 tracking-wide uppercase">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tag, index) => (
                      <span
                        key={index}
                        className="font-mono text-[9px] tracking-wider text-neon-blue/80 bg-neon-blue/5 border border-neon-blue/10 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Buttons Row */}
                  <div className="flex gap-4 border-t border-white/5 pt-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-neon-green/60 text-white hover:text-neon-green font-space text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg hover:bg-neon-green/5 transition duration-300 cursor-pointer"
                    >
                      <Globe size={12} />
                      <span>Visit Live</span>
                      <ExternalLink size={10} className="opacity-60 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-white/5 border border-white/10 hover:border-white/40 text-white/70 hover:text-white py-2.5 px-3 rounded-lg transition duration-300 cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
