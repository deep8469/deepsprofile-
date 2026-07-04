"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Calendar, Download, Mail, Play, Volume2, VolumeX, Code2, Subtitles, Sparkles } from "lucide-react";

export default function Hero() {
  // Speech & Blinking States
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentWord, setCurrentWord] = useState("");
  const [subtitleText, setSubtitleText] = useState("");
  const [mouthOpen, setMouthOpen] = useState(false);
  const [eyeBlink, setEyeBlink] = useState(false);
  const [voiceAvailable, setVoiceAvailable] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cacheBuster, setCacheBuster] = useState("");
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const rightPortraitRef = useRef<HTMLDivElement>(null);

  const greetingText =
    "Hello! I'm Deep Mistry. Welcome to Deep Mistry's Portfolio. I'm the Founder of Deep Mistry Solutions. I specialize in building premium websites, mobile applications, AI-powered software, business automation systems, and digital experiences that help businesses grow. Take a look around, explore my work, and let's create something extraordinary together.";

  useEffect(() => {
    // Generate cache buster timestamp
    setCacheBuster(String(new Date().getTime()));

    // Check Speech Synthesis availability
    if (typeof window !== "undefined" && window.speechSynthesis) {
      setVoiceAvailable(true);
      window.speechSynthesis.getVoices();
    }

    // Eye blinking loop (every 4 seconds)
    const blinkInterval = setInterval(() => {
      setEyeBlink(true);
      setTimeout(() => setEyeBlink(false), 150);
    }, 4000);

    // Mouse tilt tracking (subtle head tilting & eye contact simulation)
    const handleMouseMove = (e: MouseEvent) => {
      if (!rightPortraitRef.current) return;
      const rect = rightPortraitRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const x = (e.clientX - centerX) / (window.innerWidth / 2);
      const y = (e.clientY - centerY) / (window.innerHeight / 2);
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      clearInterval(blinkInterval);
      window.removeEventListener("mousemove", handleMouseMove);
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const startGreeting = () => {
    if (!voiceAvailable) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(greetingText);
    utteranceRef.current = utterance;

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice =
      voices.find((v) => v.lang === "en-IN") ||
      voices.find((v) => v.lang.startsWith("en-GB")) ||
      voices.find((v) => v.lang.startsWith("en-US")) ||
      voices[0];

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.rate = 0.95;
    utterance.pitch = 1.05;

    utterance.onboundary = (event) => {
      if (event.name === "word") {
        const remainingText = greetingText.slice(event.charIndex);
        const nextWord = remainingText.split(" ")[0].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        
        setCurrentWord(nextWord);
        const spokenPart = greetingText.slice(0, event.charIndex + nextWord.length);
        setSubtitleText(spokenPart);

        // Open lips dynamically
        setMouthOpen(true);
        setTimeout(() => setMouthOpen(false), 140);
      }
    };

    utterance.onstart = () => {
      setIsSpeaking(true);
      setSubtitleText("");
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setCurrentWord("");
      setSubtitleText(greetingText);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setCurrentWord("");
    };

    window.speechSynthesis.speak(utterance);
    setHasInteracted(true);
  };

  const stopGreeting = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setCurrentWord("");
  };

  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const imageSrc = cacheBuster
    ? `/images/deep_mistry_portrait.png?t=${cacheBuster}`
    : "/images/deep_mistry_portrait.png";

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-start overflow-hidden pt-28 pb-16 px-6 sm:px-12 md:px-20 z-10 bg-[#121212]"
    >
      {/* Ambient Cool Glow backdrop behind welcome text */}
      <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-neon-blue/10 via-neon-purple/5 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />

      {/* 1. Left Side Content Column (takes up 50-55% of the page width) */}
      <div className="w-full lg:max-w-[50%] flex flex-col items-start text-left z-20">
        
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[9px] tracking-[0.25em] font-space text-white/80 uppercase w-fit mb-6"
        >
          <Sparkles size={10} className="text-neon-blue animate-pulse" />
          <span>Interactive Neural Uplink</span>
        </motion.div>

        {/* Large Typography Headlines */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-space text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white uppercase leading-none mb-3"
        >
          WELCOME TO <br />
          DEEP MISTRY'S <br />
          PORTFOLIO
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-space text-base sm:text-lg font-bold tracking-widest text-neon-purple uppercase mb-4"
        >
          Founder of Deep Mistry Solutions
        </motion.h2>

        {/* Technical Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[9px] sm:text-[10px] tracking-widest text-white/50 uppercase mb-6 border-b border-white/5 pb-4 w-full"
        >
          <span>AI Developer</span>
          <span className="text-neon-blue">•</span>
          <span>Full Stack Developer</span>
          <span className="text-neon-blue">•</span>
          <span>Software Engineer</span>
          <span className="text-neon-blue">•</span>
          <span>Digital Innovator</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 text-xs sm:text-sm leading-relaxed mb-8 max-w-lg"
        >
          Building premium websites, mobile applications, AI solutions, custom software, automation systems, and modern digital experiences for businesses worldwide.
        </motion.p>

        {/* Primary CTA Buttons (4 Buttons) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-3.5 mb-10"
        >
          {/* Explore My Work */}
          <button
            onClick={() => handleScrollTo("services")}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-neon-blue to-neon-purple text-bg-dark font-space text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg shadow-lg hover:shadow-neon-blue/10 transition duration-300 transform active:scale-95 overflow-hidden cursor-pointer"
          >
            <div className="absolute inset-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition duration-1000 ease-out" />
            <span>Explore My Work</span>
            <ArrowRight size={12} className="text-bg-dark transform group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* View Projects */}
          <button
            onClick={() => handleScrollTo("projects")}
            className="group inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-neon-green/60 text-white hover:text-neon-green font-space text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg hover:bg-neon-green/5 transition duration-300 transform active:scale-95 cursor-pointer"
          >
            <Code2 size={12} />
            <span>View Projects</span>
          </button>

          {/* Contact Me */}
          <button
            onClick={() => handleScrollTo("contact")}
            className="group inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-neon-purple/60 text-white hover:text-neon-purple font-space text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg hover:bg-neon-purple/5 transition duration-300 transform active:scale-95 cursor-pointer"
          >
            <Mail size={12} />
            <span>Contact Me</span>
          </button>

          {/* Download Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:border-white/40 text-white/80 hover:text-white font-space text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg hover:bg-white/5 transition duration-300 transform active:scale-95 cursor-pointer"
          >
            <Download size={12} />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* AI Voice Uplink Terminal Panel (Shifted below CTA buttons) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-lg border-t border-white/5 pt-6 flex flex-col items-start gap-4"
        >
          <div className="flex items-center justify-between w-full">
            <span className="font-mono text-[8px] tracking-widest text-white/40 uppercase">
              AI Voice Status // Integrated
            </span>
            <span className="font-mono text-[8px] text-neon-green uppercase flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse" />
              Online
            </span>
          </div>

          {!hasInteracted ? (
            <button
              onClick={startGreeting}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-neon-blue/60 text-white hover:text-neon-blue text-[10px] font-space font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
            >
              <Play size={10} className="fill-current text-current" />
              <span>Initialize AI Voice Greeting</span>
            </button>
          ) : (
            <div className="flex gap-2">
              {isSpeaking ? (
                <button
                  onClick={stopGreeting}
                  className="flex items-center gap-1.5 border border-neon-pink/30 bg-neon-pink/5 hover:bg-neon-pink/15 text-[9px] tracking-wider font-mono text-neon-pink uppercase px-3 py-2 rounded-lg transition duration-300 cursor-pointer"
                >
                  <VolumeX size={10} />
                  <span>Mute Voice</span>
                </button>
              ) : (
                <button
                  onClick={startGreeting}
                  className="flex items-center gap-1.5 border border-neon-blue/30 bg-neon-blue/5 hover:bg-neon-blue/15 text-[9px] tracking-wider font-mono text-neon-blue uppercase px-3 py-2 rounded-lg transition duration-300 cursor-pointer"
                >
                  <Volume2 size={10} />
                  <span>Replay Voice</span>
                </button>
              )}
            </div>
          )}

          {/* Audio Synced Subtitles console */}
          <AnimatePresence>
            {hasInteracted && subtitleText && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="w-full p-4 rounded-xl border border-white/5 bg-white/[0.01] relative text-left"
              >
                <div className="absolute top-1 left-2.5 font-mono text-[6.5px] text-white/30 tracking-widest uppercase flex items-center gap-1">
                  <Subtitles size={8} />
                  <span>Subtitles log // Speech Synced</span>
                </div>
                <p className="mt-2.5 font-mono text-[10.5px] leading-relaxed text-white/70 select-text">
                  {subtitleText}
                  {isSpeaking && <span className="text-neon-blue font-bold animate-pulse">_</span>}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* 2. Right Side Full-Height Integrated Portrait (takes up 45-50% width of hero viewport) */}
      <div
        ref={rightPortraitRef}
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[45vw] xl:w-[50vw] pointer-events-none z-10 overflow-hidden flex items-end justify-center right-[-3%] lg:right-[-2%] select-none"
        style={{
          transform: `perspective(1000px) rotateY(${mousePos.x * 4}deg) rotateX(${mousePos.y * -3}deg)`,
          transition: "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="relative w-full h-[100%] scale-102 flex items-end justify-center">
          
          {/* Subtle blue rim light backlight glow */}
          <div className="absolute -inset-10 bg-radial-glow opacity-25 pointer-events-none blur-3xl z-10" />

          {/* Dark inner mouth cavity backing (positioned behind the lips seam at Y = 51%) */}
          <div
            className="absolute left-[45%] w-[8%] bg-[#1a0808] border border-[#2d0505] rounded-full pointer-events-none z-10 transition-all duration-100"
            style={{
              top: "50.5%",
              height: mouthOpen ? "14px" : "0px",
              opacity: mouthOpen ? 0.95 : 0,
              transform: "translateX(-50%)",
              boxShadow: "inset 0 0 4px rgba(0,0,0,0.8)",
            }}
          />

          {/* Image Layer 1: Top Lip and upper head (Clipped to show only top 51%) */}
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              clipPath: "inset(0 0 49% 0)",
            }}
          >
            {cacheBuster && (
              <Image
                src={imageSrc}
                alt="Deep Mistry Upper Profile"
                fill
                sizes="50vw"
                unoptimized
                priority
                className={`object-cover object-bottom transition-all duration-700 ${
                  isSpeaking ? "brightness-[1.0]" : "brightness-[0.8] hover:brightness-[0.9]"
                }`}
              />
            )}
          </div>

          {/* Image Layer 2: Lower Lip, chin and shoulders (Clipped to show only bottom 49%, moves down when mouthOpen is true) */}
          <div
            className="absolute inset-0 z-20 pointer-events-none transition-transform duration-100 ease-out"
            style={{
              clipPath: "inset(51% 0 0 0)",
              transform: mouthOpen ? "translateY(5px)" : "translateY(0px)",
            }}
          >
            {cacheBuster && (
              <Image
                src={imageSrc}
                alt="Deep Mistry Lower Profile"
                fill
                sizes="50vw"
                unoptimized
                priority
                className={`object-cover object-bottom transition-all duration-700 ${
                  isSpeaking ? "brightness-[1.0]" : "brightness-[0.8] hover:brightness-[0.9]"
                }`}
              />
            )}
          </div>

          {/* Eyelid blinking overlay */}
          <div
            className={`absolute left-[15%] right-[15%] bottom-[43%] top-[15%] bg-[#121212] z-25 pointer-events-none transition-transform duration-100 ease-out origin-top rounded-b-full ${
              eyeBlink ? "scale-y-100" : "scale-y-0"
            }`}
            style={{ opacity: 0.95 }}
          />

          {/* Ambient rim glow line overlay on the right side of body */}
          <div className="absolute inset-0 border-r-2 border-neon-blue/10 pointer-events-none z-30 opacity-60 blur-[1px]" />

          {/* Smooth blend overlays (fades body seamlessly into page background) */}
          {/* Wide Left edge fade (increased for a very long soft merge) */}
          <div className="absolute inset-y-0 left-0 w-96 sm:w-[24rem] bg-gradient-to-r from-[#121212] via-[#121212]/60 to-transparent z-30 pointer-events-none" />
          
          {/* Top edge fade (blends the photo's ceiling light strips into viewport top) */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#121212] to-transparent z-30 pointer-events-none" />

          {/* Bottom edge fade (increased for soft waist/jacket blend) */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#121212] to-transparent z-30 pointer-events-none" />

          {/* Right edge fade (fades hard right edge of photo) */}
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#121212] to-transparent z-30 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
