"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Bot, HelpCircle } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I am Deep Mistry's AI Assistant. How can I assist you with your business goals today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const predefinedQuestions = [
    { label: "Tell me about yourself", key: "about" },
    { label: "Show your projects", key: "projects" },
    { label: "What services do you provide?", key: "services" },
    { label: "How can I contact you?", key: "contact" },
  ];

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const botResponses: { [key: string]: string } = {
    about: "I am Deep Mistry, the Founder of Deep Mistry Solutions. I build modern digital infrastructure, focusing on high-performance websites, custom apps, business automations, and AI solutions that help companies scale operations and optimize revenue.",
    projects: "I showcase three flagship products here: 'Nexus ERP v2' (Enterprise management), 'Aetheria AI Marketing' (Autonomous ad manager), and 'Vortex Crypto Portal' (Web3 visualizer). Click the 'Explore My Work' button in the Hero section to view full specifications!",
    services: "My agency specializes in Web Development (Next.js), Mobile App Dev (Flutter/React Native), Custom Software (Node/Python), AI integrations (agents, vector RAG systems), CRM workflow automations, and digital marketing funnels.",
    contact: "You can reach out to me immediately via email at Deep.kamini9687280@gmail.com, or drop a message on WhatsApp at +91 8469159877. You can also view my GitHub (deep8469) or connect on LinkedIn (deep-mistry-9a103121a)!",
  };

  const handleSendMessage = (text: string, isPreset = false) => {
    if (!text.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI cognitive processing delay
    setTimeout(() => {
      let botReply = "";

      if (isPreset) {
        // Find preset key
        const preset = predefinedQuestions.find((q) => q.label === text);
        botReply = preset ? botResponses[preset.key] : "I am here to help!";
      } else {
        // Natural keyword matching parser
        const lowerText = text.toLowerCase();
        if (lowerText.includes("hello") || lowerText.includes("hi") || lowerText.includes("hey")) {
          botReply = "Greetings! I'm Deep's digital clone. How can I help you construct future-ready software today?";
        } else if (lowerText.includes("project") || lowerText.includes("work") || lowerText.includes("portfolio")) {
          botReply = botResponses.projects;
        } else if (lowerText.includes("service") || lowerText.includes("develop") || lowerText.includes("build")) {
          botReply = botResponses.services;
        } else if (lowerText.includes("contact") || lowerText.includes("email") || lowerText.includes("phone") || lowerText.includes("whatsapp")) {
          botReply = botResponses.contact;
        } else if (lowerText.includes("meet") || lowerText.includes("book") || lowerText.includes("calendly") || lowerText.includes("call")) {
          botReply = botResponses.contact;
        } else if (lowerText.includes("who are you") || lowerText.includes("about") || lowerText.includes("deep")) {
          botReply = botResponses.about;
        } else if (lowerText.includes("price") || lowerText.includes("budget") || lowerText.includes("cost")) {
          botReply = "Project allocations start at ₹50,000 for standard applications up to ₹5,00,000+ for enterprise AI SaaS builds. Connect with us via WhatsApp to get an exact custom quote.";
        } else {
          botReply = "I understand. I specialize in Next.js, AI, and business automation. Would you like to review my services, check my projects, or get my direct contact info?";
        }
      }

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-bg-dark font-space text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-neon-blue/30 transition-all duration-300 transform active:scale-95 cursor-pointer"
        >
          <MessageSquare size={16} className="text-bg-dark" />
          <span>Ask Deep AI</span>
        </button>
      </div>

      {/* Chat Terminal Console Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 w-[340px] sm:w-[380px] h-[480px] rounded-2xl glass-panel-glow-purple flex flex-col justify-between overflow-hidden z-[9999]"
          >
            {/* Header Console */}
            <div className="bg-neon-purple/10 px-4 py-3 flex items-center justify-between border-b border-neon-purple/20">
              <div className="flex items-center gap-2">
                <Bot size={16} className="text-neon-purple animate-pulse" />
                <div className="flex flex-col text-left">
                  <span className="font-space text-xs font-bold tracking-wider text-white">
                    DEEP_AI_v1.0
                  </span>
                  <span className="font-mono text-[7px] text-neon-green tracking-widest uppercase">
                    Core Uplink Active
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition duration-200 cursor-pointer"
              >
                <X size={14} />
              </button>
            </div>

            {/* Messages Log Panel */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-black/30 scroll-smooth">
              {messages.map((msg, i) => {
                const isBot = msg.sender === "bot";
                return (
                  <div
                    key={i}
                    className={`flex items-start gap-2.5 max-w-[85%] ${
                      isBot ? "self-start" : "ml-auto flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${
                        isBot ? "bg-neon-purple/10 border-neon-purple/30 text-neon-purple" : "bg-neon-blue/10 border-neon-blue/30 text-neon-blue"
                      }`}
                    >
                      {isBot ? <Bot size={12} /> : <User size={12} />}
                    </div>
                    <div
                      className={`p-3 rounded-2xl text-xs leading-relaxed font-mono ${
                        isBot
                          ? "bg-white/5 text-white/80 rounded-tl-none border border-white/5"
                          : "bg-neon-blue/10 text-neon-blue rounded-tr-none border border-neon-blue/20"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                );
              })}

              {/* Typing simulation bubble */}
              {isTyping && (
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple flex items-center justify-center shrink-0">
                    <Bot size={12} />
                  </div>
                  <div className="p-3 bg-white/5 text-white/40 rounded-2xl rounded-tl-none border border-white/5 text-xs font-mono">
                    <span className="animate-pulse">TYPING CORE RESPONSE...</span>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Dynamic Preset Suggestions Selector */}
            <div className="px-4 py-2 bg-black/40 border-t border-white/5 flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-thin">
              {predefinedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q.label, true)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 hover:border-neon-purple/50 hover:text-neon-purple text-[9px] font-mono text-white/60 tracking-wider transition duration-300 cursor-pointer"
                >
                  <HelpCircle size={10} />
                  <span>{q.label}</span>
                </button>
              ))}
            </div>

            {/* Input Bar Footer */}
            <div className="p-3 bg-black/60 border-t border-white/10 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                placeholder="ASK DEEP A QUESTION..."
                className="flex-1 bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-xs font-mono text-neon-blue placeholder:text-white/20 focus:outline-none focus:border-neon-blue transition duration-300 uppercase"
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                className="w-8 h-8 rounded-lg bg-neon-purple hover:bg-neon-blue text-bg-dark flex items-center justify-center transition duration-300 cursor-pointer"
              >
                <Send size={12} className="text-bg-dark" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
