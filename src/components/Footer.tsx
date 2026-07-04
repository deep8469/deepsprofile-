"use client";

import { Terminal, Shield, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-white/5 bg-black/40 py-12 px-6 sm:px-12 md:px-20 z-10">
      <div className="absolute inset-0 cyber-grid opacity-[0.02] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Column: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Logo Mark */}
          <div className="flex items-center gap-3.5 mb-3">
            <div className="w-7 h-7 rounded bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center font-space text-[10px] font-black text-white select-none shadow-sm shadow-orange-500/20">
              DM
            </div>
            <span className="font-space text-sm font-bold tracking-[0.3em] text-white uppercase">
              DEEP MISTRY
            </span>
          </div>

          {/* Copyrights */}
          <p className="font-mono text-[10px] text-white/40 uppercase tracking-wider">
            © {currentYear} Deep Mistry. All rights reserved.
          </p>
          <p className="font-mono text-[9px] text-white/30 uppercase tracking-widest mt-1">
            Designed & Engineered by{" "}
            <span className="text-neon-blue font-bold">Deep Mistry</span>.
          </p>
        </div>

        {/* Middle Column: Quick Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-space text-xs font-bold uppercase tracking-widest text-white/55">
          <a href="#hero" className="hover:text-neon-blue transition duration-300">
            HQ Home
          </a>
          <a href="#about" className="hover:text-neon-blue transition duration-300">
            Profile
          </a>
          <a href="#services" className="hover:text-neon-blue transition duration-300">
            Solutions
          </a>
          <a href="#projects" className="hover:text-neon-blue transition duration-300">
            Innovations
          </a>
          <a href="#experience" className="hover:text-neon-blue transition duration-300">
            Timeline
          </a>
        </div>

        {/* Right Column: Scroll Top Button */}
        <div className="flex flex-col items-center md:items-end">
          <button
            onClick={handleScrollTop}
            className="group flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-neon-blue/60 text-white hover:text-neon-blue hover:bg-neon-blue/5 transition duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <span className="font-mono text-[8px] tracking-widest text-white/20 uppercase mt-2">
            Return to Core
          </span>
        </div>
      </div>
    </footer>
  );
}
