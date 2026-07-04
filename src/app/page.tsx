"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

// Dynamic import for client-only R3F background canvas
const Background3D = dynamic(() => import("@/components/Background3D"), {
  ssr: false,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen w-full bg-[#121212] overflow-x-hidden selection:bg-neon-blue/30 selection:text-neon-blue">
      {/* 3D WebGL Background Scene */}
      <Background3D />

      {/* Cinematic Load Overlay */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* Primary Website Scaffold */}
      <div
        className={`transition-opacity duration-1000 ease-in-out ${
          isLoading ? "opacity-0 h-screen overflow-hidden" : "opacity-100 min-h-screen"
        }`}
      >
        {/* Navigation / Header Anchor nodes are handled internally */}
        
        <main className="w-full flex flex-col relative">
          {/* Section 00: Welcoming Screen */}
          <Hero />

          {/* Section 01: Profile Bios */}
          <About />

          {/* Section 02: Business Offerings */}
          <Services />

          {/* Section 03: Projects Showcase */}
          <Projects />

          {/* Section 04: Tech Constellation Grid */}
          <TechStack />

          {/* Section 05: Experience Records */}
          <Experience />

          {/* Section 06: Client Testimonials */}
          <Testimonials />

          {/* Section 07: Communications Console */}
          <Contact />
        </main>

        {/* Brand footer */}
        <Footer />

        {/* Floating Chatbot Assistant */}
        <AIAssistant />
      </div>
    </div>
  );
}
