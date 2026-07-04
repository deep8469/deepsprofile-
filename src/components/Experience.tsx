"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Calendar, Briefcase, Zap, Rocket, Star, Heart, Activity } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const timelineItems: TimelineItem[] = [
    {
      year: "2024",
      title: "Technical Support",
      subtitle: "Mobibox",
      description: "Provided systems technical support, network configurations, server maintenance, and application troubleshooting at Mobibox.",
      icon: Briefcase,
      color: "border-neon-blue text-neon-blue",
    },
    {
      year: "2025",
      title: "Associate Specialist",
      subtitle: "CA Firm",
      description: "Managed internal database operations, accounting program setups, and custom tools for auditing and corporate financial compliance.",
      icon: Activity,
      color: "border-neon-purple text-neon-purple",
    },
    {
      year: "2026",
      title: "AI Developer & Agency Founder",
      subtitle: "Mobibox & Deep Mistry Solutions",
      description: "Currently working as an AI Developer at Mobibox building LLM systems and custom automation workflows, while running Deep Mistry Solutions for enterprise web creations.",
      icon: Rocket,
      color: "border-neon-green text-neon-green",
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full py-24 sm:py-32 flex flex-col items-center overflow-hidden px-6 sm:px-12 md:px-20 z-10"
    >
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div
        ref={containerRef}
        className="w-full max-w-5xl flex flex-col items-center justify-center gap-16 z-20"
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
            className="text-xs font-space tracking-[0.25em] text-neon-pink uppercase mb-2"
          >
            05 // Operational Logs
          </motion.div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase text-glow-pink"
          >
            Experience Timeline
          </motion.h2>
          <div className="w-12 h-[1px] bg-neon-pink mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative w-full flex flex-col mt-8">
          {/* Vertical center glowing line on desktop */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/5 pointer-events-none">
            {/* Glowing fill */}
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green opacity-45 shadow-[0_0_10px_rgba(0,217,255,0.4)]" />
          </div>

          {/* Timeline Nodes */}
          <div className="flex flex-col gap-12 w-full">
            {timelineItems.map((item, i) => {
              const Icon = item.icon;
              const isEven = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-start w-full relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Vertical line connector overlay for mobile spacing */}
                  <div className="absolute left-[20px] md:left-1/2 top-2 md:-translate-x-1/2 z-10">
                    {/* Glowing point bubble */}
                    <div className="w-[10px] h-[10px] rounded-full bg-bg-dark border-2 border-neon-blue shadow-[0_0_8px_#00D9FF] animate-pulse" />
                  </div>

                  {/* Left Column (Desktop) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 flex justify-start md:justify-end">
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: isEven ? 40 : -40 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      initial="hidden"
                      animate={controls}
                      transition={{ duration: 0.7, delay: i * 0.1 }}
                      className={`w-full max-w-md p-6 glass-panel rounded-2xl relative border border-white/5 ${
                        isEven ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      {/* Subtitle Node */}
                      <span className="font-space text-[9px] tracking-widest text-neon-blue uppercase bg-neon-blue/5 border border-neon-blue/10 px-2 py-0.5 rounded">
                        {item.subtitle}
                      </span>

                      {/* Header Title */}
                      <h3 className="font-space text-lg font-bold text-white mt-3 mb-1 uppercase tracking-wide">
                        {item.title}
                      </h3>

                      {/* Year */}
                      <div className="flex items-center gap-1.5 justify-start md:justify-start is-even:md:justify-start not-is-even:md:justify-end text-white/50 text-xs font-mono mb-4">
                        <Calendar size={12} className="text-neon-pink" />
                        <span>{item.year}</span>
                      </div>

                      {/* Description */}
                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for Desktop alignment */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
