"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { Play } from "lucide-react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [hasSqueaked, setHasSqueaked] = useState(false);

  // Play retro squeak chimes using Web Audio API (no external file needed!)
  const playRetroSqueaks = () => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Squeak 1 (High frequency sweep)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "triangle";
      osc1.frequency.setValueAtTime(700, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.1);
      gain1.gain.setValueAtTime(0.12, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start();
      osc1.stop(ctx.currentTime + 0.11);

      // Squeak 2 (slightly higher, delayed)
      setTimeout(() => {
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(850, ctx.currentTime);
        osc2.frequency.exponentialRampToValueAtTime(1700, ctx.currentTime + 0.1);
        gain2.gain.setValueAtTime(0.12, ctx.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start();
        osc2.stop(ctx.currentTime + 0.11);
      }, 140);
    } catch (e) {
      console.warn("AudioContext blocker:", e);
    }
  };

  useEffect(() => {
    document.body.classList.add("loading");

    // Retro slapstick auto squeak on initial load (if interaction is allowed)
    const playTimer = setTimeout(() => {
      playRetroSqueaks();
      setHasSqueaked(true);
    }, 800);

    // Simulate loading progress over 3.5 seconds
    const duration = 3500;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(nextProgress);

      // Intermediate squeak sounds at 50%
      if (nextProgress === 50) {
        playRetroSqueaks();
      }

      if (nextProgress >= 100) {
        clearInterval(timer);
        triggerExit();
      }
    }, intervalTime);

    return () => {
      clearTimeout(playTimer);
      clearInterval(timer);
      document.body.classList.remove("loading");
    };
  }, []);

  const triggerExit = () => {
    // Play final chime squeak
    playRetroSqueaks();

    const loaderEl = document.getElementById("main-loader");
    if (loaderEl) {
      gsap.to(loaderEl, {
        opacity: 0,
        scale: 1.15,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          document.body.classList.remove("loading");
          onComplete();
        },
      });
    } else {
      document.body.classList.remove("loading");
      onComplete();
    }
  };

  return (
    <div
      id="main-loader"
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#180808] overflow-hidden"
    >
      {/* Retro Concentric MGM Cartoon Rings */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-85 select-none"
        style={{
          background: "radial-gradient(circle at center, #ffd54f 0%, #f57c00 25%, #d84315 50%, #7b1fa2 75%, #180808 95%)",
        }}
      />

      {/* Classic Vignette Spotlight Film Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(24,8,8,0.85)_100%)] mix-blend-multiply" />

      {/* Retro Film Grain Noise Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Title Card Content Block */}
      <div className="relative flex flex-col items-center justify-center max-w-md px-6 text-center select-none z-20">
        
        {/* Playful Arched Production Name */}
        <div className="font-space text-[10px] tracking-[0.4em] text-[#ffe082] uppercase mb-1 font-bold animate-pulse">
          A DEEP MISTRY PRESENTATION
        </div>

        {/* Vintage Old-School Playful Ribbon Title */}
        <div className="relative mb-6 transform -rotate-2 scale-102">
          {/* Background drop shadow text */}
          <h1 className="font-serif text-5xl sm:text-6xl font-black italic tracking-tight text-[#3e2723] absolute top-1 left-1 select-none">
            DEEP & MISTRY
          </h1>
          {/* Main front text */}
          <h1 className="font-serif text-5xl sm:text-6xl font-black italic tracking-tight text-[#fff8e1] stroke-retro">
            DEEP & MISTRY
          </h1>
        </div>

        {/* Cursive Subtitle Card */}
        <div className="font-serif italic text-sm text-[#ffe082]/90 tracking-wider mb-14">
          in Technicolor
        </div>

        {/* Retro Silhouette Chase Circle Scene */}
        <div className="relative w-36 h-36 border-4 border-dashed border-[#ffe082]/30 rounded-full flex items-center justify-center mb-10 overflow-hidden bg-black/10">
          {/* Orbiting Chase Silhouette 1: Cat-like outline */}
          <div 
            className="absolute w-8 h-8 rounded-full bg-[#3e2723] animate-spin"
            style={{
              animationDuration: "2.8s",
              transformOrigin: "70px 70px",
              left: "-16px",
              top: "-16px",
            }}
          />
          {/* Orbiting Chase Silhouette 2: Mouse-like outline */}
          <div 
            className="absolute w-5 h-5 rounded-full bg-[#ffcc00] animate-spin"
            style={{
              animationDuration: "2.8s",
              animationDelay: "-0.5s",
              transformOrigin: "70px 70px",
              left: "-16px",
              top: "-16px",
            }}
          />

          {/* Centerpiece: Cute blinks in a cartoon mouse hole */}
          <div className="absolute bottom-0 w-16 h-10 bg-[#3e2723] rounded-t-full flex items-center justify-center border-t border-[#ffe082]/10 shadow-inner">
            <div className="flex gap-2.5 mt-1.5">
              {/* Left blinking eye */}
              <div className="w-1.5 h-3 bg-[#fff8e1] rounded-full animate-bounce" />
              {/* Right blinking eye */}
              <div className="w-1.5 h-3 bg-[#fff8e1] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
            </div>
          </div>
        </div>

        {/* Retro mischievous progress slide bar */}
        <div className="w-64 h-[12px] bg-[#3e2723] border border-[#ffe082]/30 rounded-full overflow-hidden mb-5 relative flex items-center shadow-inner">
          {/* Interactive sliding cheese element or block */}
          <div
            className="h-full bg-gradient-to-r from-[#ffa726] to-[#fb8c00] rounded-full transition-all duration-100 ease-out flex items-center justify-end pr-1 relative"
            style={{ width: `${progress}%` }}
          >
            {/* Playful cartoon mouse block zipping at the front edge */}
            <div className="w-4 h-4 bg-[#ffcc00] rounded-sm transform rotate-45 border border-[#3e2723]/30 shadow-md absolute right-[-4px] animate-bounce" />
          </div>
        </div>

        {/* Slapstick loading percentage badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#3e2723] border border-[#ffe082]/20 rounded-full font-space text-[#fff8e1] text-xs font-bold uppercase shadow-md select-none">
          <span>Loading</span>
          <span className="text-[#ffa726]">{progress.toString().padStart(3, "0")}%</span>
        </div>

        {/* Manual Squeaker Play Button */}
        <button
          onClick={playRetroSqueaks}
          className="mt-6 flex items-center gap-1.5 text-[8.5px] font-mono tracking-wider text-[#ffe082]/50 hover:text-[#ffe082] uppercase transition cursor-pointer"
        >
          <span>🔊 Tap to Squeak</span>
        </button>
      </div>

      {/* Accessible Skip Intro trigger */}
      <button
        onClick={triggerExit}
        className="absolute bottom-6 right-6 px-4 py-2 border border-[#ffe082]/20 hover:border-[#ffe082]/50 bg-[#3e2723]/60 hover:bg-[#3e2723] text-[#ffe082] font-space text-[9px] uppercase tracking-widest rounded-lg transition duration-300 transform active:scale-95 cursor-pointer z-50"
      >
        Skip Intro
      </button>
    </div>
  );
}
