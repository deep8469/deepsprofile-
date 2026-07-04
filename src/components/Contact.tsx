"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  MessageSquare,
  Mail,
  Phone,
  Calendar,
  Send,
  CheckCircle,
} from "lucide-react";

// Custom SVG Brand Icons since Lucide v1.23.0 does not contain brand icons
const LinkedInIcon = ({ size = 14, ...props }: { size?: number; [key: string]: any }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = ({ size = 14, ...props }: { size?: number; [key: string]: any }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const InstagramIcon = ({ size = 14, ...props }: { size?: number; [key: string]: any }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "website",
    budget: "medium",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success">("idle");

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;

    setIsSubmitting(true);
    setSubmitStatus("sending");

    // Simulate cyber transmission payload delay
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormState({
        name: "",
        email: "",
        projectType: "website",
        budget: "medium",
        message: "",
      });

      // Clear success notification after 5s
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 2500);
  };

  // Contacts Array
  const directContacts = [
    { name: "Email Link", label: "Deep.kamini9687280@gmail.com", icon: Mail, url: "mailto:Deep.kamini9687280@gmail.com", color: "hover:border-neon-blue/40 hover:text-neon-blue" },
    { name: "WhatsApp Chat", label: "+91 8469159877", icon: MessageSquare, url: "https://wa.me/918469159877", color: "hover:border-neon-green/40 hover:text-neon-green" },
    { name: "LinkedIn Connection", label: "deep-mistry-9a103121a", icon: LinkedInIcon, url: "https://linkedin.com/in/deep-mistry-9a103121a", color: "hover:border-neon-blue/40 hover:text-neon-blue" },
    { name: "GitHub Repositories", label: "deep8469", icon: GitHubIcon, url: "https://github.com/deep8469", color: "hover:border-white/40 hover:text-white" },
    { name: "Instagram Portal", label: "mr.perfect__dm", icon: InstagramIcon, url: "https://instagram.com/mr.perfect__dm", color: "hover:border-neon-pink/40 hover:text-neon-pink" },
  ];

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 flex flex-col items-center overflow-hidden px-6 sm:px-12 md:px-20 z-10"
    >
      {/* Absolute floating cyber vortexes */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-12 left-0 w-[40vw] h-[40vw] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

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
            className="text-xs font-space tracking-[0.25em] text-neon-blue uppercase mb-2"
          >
            07 // Uplink Communication
          </motion.div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase text-glow-blue"
          >
            Initiate Project Uplink
          </motion.h2>
          <div className="w-12 h-[1px] bg-neon-blue mt-4" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-stretch">
          {/* Left Column: Direct links & Headline */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-space text-3xl sm:text-4xl font-bold leading-tight text-white tracking-wide mb-6 uppercase">
                Let's Build <br />
                Something <br />
                <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent">
                  Amazing
                </span>{" "}
                Together.
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Connect directly with our operations network. Select an uplink channel below or submit your project credentials via the console terminal to schedule a session.
              </p>
            </div>

            {/* Quick Link Buttons List */}
            <div className="flex flex-col gap-3">
              {directContacts.map((contact, i) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={i}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-4 glass-panel rounded-xl border border-white/5 transition-all duration-300 ${contact.color}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                        <Icon size={14} />
                      </div>
                      <span className="font-space text-xs font-bold uppercase tracking-wider">
                        {contact.name}
                      </span>
                    </div>
                    <span className="font-mono text-[9px] text-white/40 group-hover:text-inherit">
                      {contact.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Console Form Dashboard */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 glass-panel-glow-purple rounded-2xl p-8 relative flex flex-col justify-between"
          >
            {/* Cyber corner marks */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-neon-purple/40" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-neon-purple/40" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-neon-purple/40" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-neon-purple/40" />

            <div className="absolute left-0 right-0 h-[2px] bg-neon-purple/10 pointer-events-none animate-scan-vertical z-10" />

            {submitStatus === "success" ? (
              // Transmission Successful Node
              <div className="flex flex-col items-center justify-center text-center py-20">
                <CheckCircle size={48} className="text-neon-green mb-4 animate-pulse-glow" />
                <h4 className="font-space text-xl font-bold text-white uppercase tracking-wider mb-2">
                  Payload Transmitted Successfully
                </h4>
                <p className="text-white/60 text-xs sm:text-sm font-mono uppercase tracking-widest max-w-sm">
                  Communication channel established. Deep Mistry's team will contact you within 0x08 hours.
                </p>
              </div>
            ) : submitStatus === "sending" ? (
              // Transmission Sending Node
              <div className="flex flex-col items-center justify-center text-center py-20">
                <div className="w-12 h-12 border-2 border-t-neon-blue border-white/10 rounded-full animate-spin mb-4" />
                <h4 className="font-space text-lg font-bold text-neon-blue uppercase tracking-wider mb-2 animate-pulse">
                  TRANSMITTING ENCRYPTED PAYLOAD...
                </h4>
                <p className="text-white/30 text-[10px] font-mono uppercase tracking-wider">
                  SYNC_NODE: SECURE_POST_DATA // PORT: 443
                </p>
              </div>
            ) : (
              // Interactive Input Form console
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-neon-purple animate-pulse" />
                    <span className="font-space text-xs font-bold uppercase tracking-widest text-white/80">
                      UPLINK_CONSOLE_v4.2
                    </span>
                  </div>
                  <span className="font-mono text-[8px] text-white/30">SYS_SECURE: HTTPS</span>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-space text-[10px] font-bold tracking-wider text-white/70 uppercase">
                    Sender Credentials (Name)
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="ENTER NAME..."
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs sm:text-sm font-mono text-neon-blue focus:outline-none focus:border-neon-blue transition duration-300 uppercase placeholder:text-white/20"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-space text-[10px] font-bold tracking-wider text-white/70 uppercase">
                    Uplink Node Destination (Email)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="ENTER EMAIL ADDRESS..."
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs sm:text-sm font-mono text-neon-blue focus:outline-none focus:border-neon-blue transition duration-300 uppercase placeholder:text-white/20"
                  />
                </div>

                {/* Row: Project type & budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Project Type */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-space text-[10px] font-bold tracking-wider text-white/70 uppercase">
                      Select Project Segment
                    </label>
                    <select
                      name="projectType"
                      value={formState.projectType}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs font-mono text-neon-blue focus:outline-none focus:border-neon-blue transition duration-300 uppercase"
                    >
                      <option value="website">Web Development</option>
                      <option value="mobile">Mobile Application</option>
                      <option value="ai">AI / Automation</option>
                      <option value="custom">Custom SaaS Dev</option>
                      <option value="marketing">Digital Marketing</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-space text-[10px] font-bold tracking-wider text-white/70 uppercase">
                      Select Capital Allocation
                    </label>
                    <select
                      name="budget"
                      value={formState.budget}
                      onChange={handleChange}
                      className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs font-mono text-neon-blue focus:outline-none focus:border-neon-blue transition duration-300 uppercase"
                    >
                      <option value="low">&lt; ₹50,000</option>
                      <option value="medium">₹50,000 - ₹2,00,000</option>
                      <option value="high">₹2,00,000 - ₹5,00,000</option>
                      <option value="enterprise">&gt; ₹5,00,000</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-space text-[10px] font-bold tracking-wider text-white/70 uppercase">
                    Payload Description (Message Details)
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="ENTER SPECIFICATIONS / BRIEF..."
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-xs sm:text-sm font-mono text-neon-blue focus:outline-none focus:border-neon-blue transition duration-300 uppercase placeholder:text-white/20 resize-none"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-neon-purple to-neon-blue text-bg-dark font-space text-xs font-bold uppercase tracking-wider py-4 rounded-lg shadow-lg hover:shadow-neon-purple/20 transition duration-300 transform active:scale-98 overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 w-full h-full bg-white/15 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition duration-1000 ease-out" />
                  <Send size={14} className="text-bg-dark" />
                  <span>Transmit Core Credentials</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
