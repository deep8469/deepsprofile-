"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code2,
  Brain,
  Settings,
  TrendingUp,
  Palette,
  Video,
  Award,
} from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  details: string[];
  color: string;
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const servicesList: ServiceItem[] = [
    {
      title: "Website Development",
      description: "Ultra-fast Next.js portals, e-commerce networks, and high-converting marketing structures.",
      icon: Globe,
      details: ["Next.js & React Frameworks", "Headless CMS Integration", "Tailwind styling", "SEO Infrastructure"],
      color: "from-neon-blue to-neon-purple",
    },
    {
      title: "Mobile App Development",
      description: "Interactive cross-platform iOS & Android mobile software built to scale with rich UI elements.",
      icon: Smartphone,
      details: ["Flutter Framework", "React Native Architecture", "Native App compilation", "App Store deployment"],
      color: "from-neon-purple to-neon-pink",
    },
    {
      title: "Custom Software",
      description: "Bespoke SaaS engines, customized CRM, ERP, and API frameworks tailored to workflow needs.",
      icon: Code2,
      details: ["Node.js & Python backends", "Secure DB (SQL / MongoDB)", "Microservice API nodes", "High scalability"],
      color: "from-neon-pink to-neon-green",
    },
    {
      title: "AI Automation",
      description: "Intelligent agent deployment, LangChain, LLM vector integrations, and conversational neural engines.",
      icon: Brain,
      details: ["LLM Fine-Tuning", "Vector DB (Pinecone / Chroma)", "RAG systems implementation", "Autonomous AI Agents"],
      color: "from-neon-blue to-neon-green",
    },
    {
      title: "Business Automation",
      description: "No-code/low-code integrations, automated sales pipelines, and workflow orchestration.",
      icon: Settings,
      details: ["Make.com & Zapier pipelines", "Automated email sequences", "CRM workflow synchronization", "Data scrapers"],
      color: "from-neon-green to-neon-blue",
    },
    {
      title: "Digital Marketing",
      description: "Lead generation funnels, search marketing (SEM), pixel tracking, and paid customer acquisition.",
      icon: TrendingUp,
      details: ["High-intent search campaigns", "Meta Pixel & Analytics setup", "Funnel conversion optimization", "ROI dashboards"],
      color: "from-neon-purple to-neon-blue",
    },
    {
      title: "UI UX Design",
      description: "Premium glassmorphic high-fidelity UI design sheets, prototyping, and user journey optimization.",
      icon: Palette,
      details: ["Interactive wireframing", "Figma design systems", "Cinematic web mockups", "User journey flows"],
      color: "from-neon-blue to-neon-pink",
    },
    {
      title: "Video Production",
      description: "High-end corporate promos, animations, and premium post-production content that converts.",
      icon: Video,
      details: ["Motion graphics animation", "Promotional script editing", "Sound design overlays", "Color grading sheets"],
      color: "from-neon-pink to-neon-purple",
    },
    {
      title: "Brand Identity",
      description: "Luxury logo marks, brand guides, fonts, design libraries, and consistent digital styling rules.",
      icon: Award,
      details: ["Futuristic SVG logo marks", "Brand style guidelines", "Custom typography boards", "Asset styling files"],
      color: "from-neon-green to-neon-purple",
    },
  ];

  // Mouse hover glow tracking logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      id="services"
      className="relative w-full py-24 sm:py-32 flex flex-col items-center overflow-hidden px-6 sm:px-12 md:px-20 z-10"
    >
      <div className="absolute inset-0 bg-radar-glow opacity-25 pointer-events-none" />

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
            className="text-xs font-space tracking-[0.25em] text-neon-purple uppercase mb-2"
          >
            02 // Core Capabilities
          </motion.div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase text-glow-purple"
          >
            Premium Digital Solutions
          </motion.h2>
          <div className="w-12 h-[1px] bg-neon-purple mt-4" />
        </div>

        {/* Services Grid (3x3 on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {servicesList.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                onMouseMove={handleMouseMove}
                className="group relative rounded-2xl glass-panel p-6 sm:p-8 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-white/20"
                style={{
                  minHeight: "260px",
                }}
              >
                {/* Mouse Tracking Radial Glow Background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 217, 255, 0.07), transparent 80%)",
                  }}
                />

                {/* Mouse Tracking Border Glow Highlight */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    padding: "1px",
                    background:
                      "radial-gradient(150px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(123, 47, 247, 0.4), transparent 80%)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    borderRadius: "inherit",
                  }}
                />

                <div>
                  {/* Icon Area */}
                  <div className="mb-6 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-neon-blue/40 group-hover:bg-neon-blue/5 transition duration-300">
                    <Icon className="w-6 h-6 text-white group-hover:text-neon-blue transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-space text-lg font-bold text-white mb-2 group-hover:text-neon-blue transition-colors duration-300 uppercase tracking-wide">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Core bullet items */}
                <div className="border-t border-white/5 pt-4 flex flex-wrap gap-2">
                  {service.details.map((detail, index) => (
                    <span
                      key={index}
                      className="font-mono text-[9px] tracking-wider text-white/40 uppercase bg-white/2 px-2 py-1 rounded"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
