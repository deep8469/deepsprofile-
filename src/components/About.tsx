"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Shield, Sparkles, Zap, Heart } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  // Cyber metric data
  const metrics = [
    { label: "Projects Delivered", value: "40+", icon: Sparkles, color: "text-neon-blue" },
    { label: "AI Deployments", value: "15+", icon: Zap, color: "text-neon-green" },
    { label: "Clients Empowered", value: "25+", icon: Shield, color: "text-neon-purple" },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-24 sm:py-32 flex flex-col items-center overflow-hidden px-6 sm:px-12 md:px-20 z-10"
    >
      {/* Absolute floating cyber meshes */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div
        ref={containerRef}
        className="w-full max-w-7xl flex flex-col items-center justify-center gap-12 z-20"
      >
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-6">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.6 }}
            className="text-xs font-space tracking-[0.25em] text-neon-blue uppercase mb-2"
          >
            01 // Profile
          </motion.div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase text-glow-blue"
          >
            Executive Profile
          </motion.h2>
          <div className="w-12 h-[1px] bg-neon-blue mt-4" />
        </div>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full items-stretch">
          {/* Left Block: Modern SaaS Metrics Dashboard Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-white/5 bg-white/[0.02]"
          >
            {/* Minimal Grid Background */}
            <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

            {/* Mock Chart / Analytics visualization */}
            <div className="relative w-full aspect-video rounded-xl border border-white/10 bg-black/40 p-4 overflow-hidden mb-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] text-white/40 uppercase tracking-widest">
                  Connected Companies // Professional Network
                </span>
                <span className="font-mono text-[8px] text-neon-blue uppercase flex items-center gap-1.5 font-bold">
                  <span className="w-1 h-1 bg-neon-blue rounded-full animate-ping" />
                  3 Enterprise Partners
                </span>
              </div>

              {/* Clean Vector SVG Chart */}
              <div className="w-full h-16 mt-2 relative">
                <svg className="w-full h-full text-neon-blue overflow-visible" viewBox="0 0 100 30">
                  <defs>
                    <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#00D9FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Glowing chart fill */}
                  <path
                    d="M0,25 Q15,10 30,18 T60,5 T90,8 L100,2 L100,30 L0,30 Z"
                    fill="url(#chartGlow)"
                  />
                  {/* Clean chart line */}
                  <path
                    d="M0,25 Q15,10 30,18 T60,5 T90,8 L100,2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    style={{ filter: "drop-shadow(0 0 4px #00D9FF)" }}
                  />
                  {/* Data points */}
                  <circle cx="30" cy="18" r="1.5" fill="#7B2FF7" />
                  <circle cx="60" cy="5" r="1.5" fill="#00FFC6" />
                  <circle cx="100" cy="2" r="2" fill="#00D9FF" />
                </svg>
              </div>

              <div className="flex justify-between font-mono text-[7px] text-white/30 tracking-widest pt-2 border-t border-white/5">
                <span>Q1</span>
                <span>Q2</span>
                <span>Q3</span>
                <span>Q4</span>
              </div>
            </div>

            {/* Readout capability details */}
            <div className="flex flex-col gap-3 font-mono text-[9px] sm:text-[10px] text-white/60 border-t border-white/5 pt-4">
              <div className="flex justify-between items-start gap-4">
                <span>DEEP MISTRY SOLUTIONS:</span>
                <span className="text-white font-bold text-right">FOUNDER & principal architect</span>
              </div>
              <div className="flex justify-between items-start gap-4">
                <span>MOBIBOX:</span>
                <span className="text-neon-blue font-bold text-right">AI Developer & Technical Support</span>
              </div>
              <div className="flex justify-between items-start gap-4">
                <span>CA FIRM:</span>
                <span className="text-neon-purple font-bold text-right">Associate (1 Year)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Content Details */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 flex flex-col justify-between gap-8"
          >
            {/* Core Card */}
            <div className="glass-panel-glow-purple rounded-2xl p-8 sm:p-10 flex flex-col gap-6 relative">
              <h3 className="font-space text-2xl font-bold text-white tracking-wide leading-tight">
                Hello, I'm Deep Mistry
              </h3>
              
              <div className="space-y-4 text-white/70 text-sm sm:text-base leading-relaxed">
                <p>
                  As the Founder of{" "}
                  <span className="text-neon-blue font-bold tracking-wide">Deep Mistry Solutions</span>,
                  I build state-of-the-art technological infrastructures that help business enterprises scale, optimize, and expand.
                </p>
                <p>
                  I specialize in creating modern, ultra-premium digital products utilizing high-performance{" "}
                  <span className="text-white font-bold">Websites</span>, robust{" "}
                  <span className="text-white font-bold">Mobile Applications</span>, advanced{" "}
                  <span className="text-neon-purple font-bold">Artificial Intelligence</span> implementations,{" "}
                  <span className="text-neon-green font-bold">Business Automations</span>, and data-driven marketing frameworks.
                </p>
                <p>
                  My core mission is to bridge complex engineering with breathtaking user experience design. Every solution is tailor-made to automate manual workflows, generate high-intent leads, and solve tangible bottleneck issues for modern corporate executives.
                </p>
              </div>

              {/* Graphic scanlines */}
              <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none">
                <Shield size={120} className="text-neon-purple" />
              </div>
            </div>

            {/* Metrics HUD Row */}
            <div className="grid grid-cols-3 gap-4">
              {metrics.map((metric, i) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="glass-panel rounded-xl p-4 flex flex-col items-center justify-center text-center group hover:border-neon-blue/30 transition duration-300"
                  >
                    <Icon className={`w-5 h-5 mb-2 ${metric.color} group-hover:scale-110 transition-transform`} />
                    <span className="font-space text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                      {metric.value}
                    </span>
                    <span className="font-mono text-[9px] sm:text-[10px] tracking-wider text-white/50 uppercase">
                      {metric.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
