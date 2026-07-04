"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Volume2, VolumeX, Play, Subtitles } from "lucide-react";

export default function Welcome() {
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
  const avatarCardRef = useRef<HTMLDivElement>(null);

  const greetingText =
    "Hello! I'm Deep Mistry. Welcome to Deep Mistry's Portfolio. I'm the Founder of DAVLABS Solutions. I specialize in building premium websites, mobile applications, AI-powered software, business automation systems, and digital experiences that help businesses grow. Take a look around, explore my work, and let's create something extraordinary together.";

  useEffect(() => {
    // Generate cache buster timestamp to bypass Next.js image cache
    setCacheBuster(String(new Date().getTime()));

    // Check Speech Synthesis availability
    if (typeof window !== "undefined" && window.speechSynthesis) {
      setVoiceAvailable(true);
      window.speechSynthesis.getVoices();
    }

    // Periodical eye blinking loop (every 4 seconds)
    const blinkInterval = setInterval(() => {
      setEyeBlink(true);
      setTimeout(() => setEyeBlink(false), 150);
    }, 4000);

    // Track mouse movement to rotate/tilt head (maintain eye contact simulation)
    const handleMouseMove = (e: MouseEvent) => {
      if (!avatarCardRef.current) return;
      const rect = avatarCardRef.current.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      
      const x = (e.clientX - cardCenterX) / (window.innerWidth / 2);
      const y = (e.clientY - cardCenterY) / (window.innerHeight / 2);
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(blinkInterval);
      window.removeEventListener("mousemove", handleMouseMove);
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Voice Speech Synthesis Handler
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

        // Open mouth on word boundaries
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

  // Image source with cache buster query parameter
  const imageSrc = cacheBuster
    ? `/images/deep_mistry_portrait.png?t=${cacheBuster}`
    : "/images/deep_mistry_portrait.png";

  return (
    <div className="flex flex-col items-center w-full max-w-sm z-20">
      {/* 3D Pop-out Avatar Card Container */}
      <div
        ref={avatarCardRef}
        className="relative w-72 h-96 sm:w-80 sm:h-[400px] glass-panel rounded-3xl border border-white/10 flex flex-col justify-end p-6 select-none"
        style={{
          transform: `perspective(1000px) rotateY(${mousePos.x * 8}deg) rotateX(${mousePos.y * -6}deg)`,
          transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Holographic Glowing Backing Grid */}
        <div className="absolute inset-x-6 top-6 bottom-32 bg-gradient-to-b from-neon-blue/10 to-neon-purple/5 border border-neon-blue/15 rounded-2xl pointer-events-none overflow-hidden" style={{ transform: "translateZ(-20px)" }}>
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div className="absolute inset-0 bg-radial-glow opacity-30" />
        </div>

        {/* 3D Pop-out Avatar Image Layer */}
        <div 
          className="absolute inset-x-0 bottom-24 top-[-20px] pointer-events-none flex items-end justify-center"
          style={{ transform: "translateZ(15px) scale(1.05)" }}
        >
          <div className="relative w-64 h-72 sm:w-72 sm:h-80 overflow-visible">
            {/* Holographic scanner line */}
            <div className="absolute left-4 right-4 h-[1px] bg-neon-blue/40 blur-[1px] animate-scan-vertical z-30 pointer-events-none" />

            {/* Dark inner mouth cavity backing (placed exactly behind the mouth split line at Y = 51%) */}
            <div
              className="absolute left-[45%] w-[10%] bg-[#1a0808] border border-[#2d0505] rounded-full pointer-events-none z-10 transition-all duration-100"
              style={{
                top: "50.5%",
                height: mouthOpen ? "12px" : "0px",
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
                  alt="Deep Mistry Upper Head"
                  fill
                  sizes="320px"
                  unoptimized
                  priority
                  className={`object-contain object-bottom transition-all duration-700 ${
                    isSpeaking ? "brightness-[1.0]" : "brightness-[0.8] hover:brightness-[0.95]"
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
                  alt="Deep Mistry Lower Jaw"
                  fill
                  sizes="320px"
                  unoptimized
                  priority
                  className={`object-contain object-bottom transition-all duration-700 ${
                    isSpeaking ? "brightness-[1.0]" : "brightness-[0.8] hover:brightness-[0.95]"
                  }`}
                />
              )}
            </div>

            {/* Eyelid blinking overlay */}
            <div
              className={`absolute left-[12%] right-[12%] bottom-[45%] top-[10%] bg-bg-dark z-25 pointer-events-none transition-transform duration-100 ease-out origin-top rounded-b-full ${
                eyeBlink ? "scale-y-100" : "scale-y-0"
              }`}
              style={{ opacity: 0.9 }}
            />
          </div>
        </div>

        {/* Action Trigger inside card panel */}
        <div className="relative z-30 w-full flex flex-col items-center bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-white/5" style={{ transform: "translateZ(30px)" }}>
          <div className="flex items-center justify-between w-full mb-3">
            <span className="font-space text-[8px] tracking-widest text-white/50 uppercase">
              COGNITIVE_NODE: AI_DEEP
            </span>
            <span className="font-mono text-[8px] text-neon-green uppercase flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse" />
              Live
            </span>
          </div>

          {!hasInteracted ? (
            <button
              onClick={startGreeting}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-neon-blue to-neon-purple text-bg-dark font-space text-[10px] font-bold uppercase tracking-wider py-2.5 rounded-lg shadow-lg hover:shadow-neon-blue/20 transition-all duration-300 cursor-pointer"
            >
              <Play size={10} className="text-bg-dark fill-current" />
              <span>Initialize AI Voice</span>
            </button>
          ) : (
            <div className="flex gap-2 w-full">
              {isSpeaking ? (
                <button
                  onClick={stopGreeting}
                  className="flex-1 flex items-center justify-center gap-1.5 border border-neon-pink/30 bg-neon-pink/5 hover:bg-neon-pink/15 text-[9px] tracking-wider font-mono text-neon-pink uppercase py-2.5 rounded-lg transition duration-300 cursor-pointer"
                >
                  <VolumeX size={10} />
                  <span>Mute</span>
                </button>
              ) : (
                <button
                  onClick={startGreeting}
                  className="flex-1 flex items-center justify-center gap-1.5 border border-neon-blue/30 bg-neon-blue/5 hover:bg-neon-blue/15 text-[9px] tracking-wider font-mono text-neon-blue uppercase py-2.5 rounded-lg transition duration-300 cursor-pointer"
                >
                  <Volume2 size={10} />
                  <span>Replay</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Real-time Subtitles Feed */}
      <AnimatePresence>
        {hasInteracted && subtitleText && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="w-full max-w-sm mt-4 p-4 glass-panel rounded-xl border border-white/5 relative z-20 text-left"
          >
            <div className="absolute top-1 left-2 font-mono text-[6.5px] text-white/30 tracking-widest uppercase">
              Subtitles feed // Audio synced
            </div>
            <p className="mt-2 font-mono text-[10.5px] leading-relaxed text-white/80 min-h-[40px] select-text">
              {subtitleText}
              {isSpeaking && <span className="text-neon-blue font-bold animate-pulse">_</span>}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
