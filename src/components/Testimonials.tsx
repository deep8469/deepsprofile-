"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, User } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const testimonialsList: Testimonial[] = [
    {
      name: "Rajesh Mehta",
      role: "CEO & Founder",
      company: "Fintech Dynamics",
      quote: "Deep Mistry and his team engineered our central client portal. The resulting application increased our checkout transaction speeds by 40% and doubled our mobile sign-up metrics. Truly outstanding engineering.",
    },
    {
      name: "Sarah Jenkins",
      role: "Director of Operations",
      company: "CoreFlow Systems",
      quote: "The business automation architecture Deep integrated into our server pipeline saves our administrative staff over 25 hours every single week. Invoices, reporting, and ticketing are now entirely autonomous.",
    },
    {
      name: "Amit Patel",
      role: "Founder & CTO",
      company: "NeuralStack Tech",
      quote: "An exceptional technical architect for AI projects. Deep integrated custom LLM agents and database vector queries that automated 80% of our triage routing. His attention to premium UI/UX details is top-tier.",
    },
  ];

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex]);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      className="relative w-full py-24 sm:py-32 flex flex-col items-center overflow-hidden px-6 sm:px-12 md:px-20 z-10"
    >
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-12 z-20">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="text-xs font-space tracking-[0.25em] text-neon-blue uppercase mb-2">
            06 // Validation Logs
          </div>
          <h2 className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase text-glow-blue">
            Client Testimonials
          </h2>
          <div className="w-12 h-[1px] bg-neon-blue mt-4" />
        </div>

        {/* Carousel Area */}
        <div className="relative w-full min-h-[300px] sm:min-h-[250px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full p-8 sm:p-10 glass-panel-glow-blue rounded-2xl relative flex flex-col justify-between"
            >
              {/* Floating Quote Icon */}
              <div className="absolute -top-5 -left-2 text-neon-blue/20">
                <Quote size={80} />
              </div>

              {/* Quote Description */}
              <blockquote className="font-sans text-white/80 text-sm sm:text-base md:text-lg italic leading-relaxed mb-8 relative z-10">
                "{testimonialsList[activeIndex].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6 z-10">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-neon-blue" />
                </div>
                <div>
                  <cite className="font-space text-sm font-bold text-white uppercase tracking-wider not-italic">
                    {testimonialsList[activeIndex].name}
                  </cite>
                  <p className="font-mono text-[9px] sm:text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
                    {testimonialsList[activeIndex].role} //{" "}
                    <span className="text-neon-blue font-bold">
                      {testimonialsList[activeIndex].company}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-6 mt-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-neon-blue/60 hover:text-neon-blue hover:bg-neon-blue/5 transition duration-300 transform active:scale-90 cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>
          
          {/* Slide Indicators */}
          <div className="flex gap-2">
            {testimonialsList.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > activeIndex ? 1 : -1);
                  setActiveIndex(i);
                }}
                className={`h-[4px] rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === i ? "w-6 bg-neon-blue" : "w-2 bg-white/10"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-neon-blue/60 hover:text-neon-blue hover:bg-neon-blue/5 transition duration-300 transform active:scale-90 cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
