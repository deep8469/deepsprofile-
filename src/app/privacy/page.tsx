"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

const sections = [
  {
    id: "01",
    title: "Introduction",
    content: [
      `Deep Mistry Solutions ("we", "our", "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, store, and disclose information about you when you interact with our website or engage our IT services.`,
    ],
  },
  {
    id: "02",
    title: "Information We Collect",
    content: [
      `Personal Identification: Name, email address, phone number, company name, and job title provided via contact forms, emails, or calls.`,
      `Project Information: Business requirements, technical specifications, and documents you share during consultations or onboarding.`,
      `Technical Data: IP address, browser type, operating system, referring URLs, and page interactions collected automatically via cookies and analytics tools.`,
      `Communication Records: Records of emails, chat messages, or calls conducted during an active engagement.`,
    ],
  },
  {
    id: "03",
    title: "How We Use Your Information",
    content: [
      `To respond to inquiries, provide service proposals, and deliver contracted IT solutions.`,
      `To manage project communications, milestones, deliveries, and invoices.`,
      `To improve our website's functionality and user experience using anonymized analytics data.`,
      `To send service updates, project status reports, or occasional newsletters (you may opt out at any time).`,
      `To comply with legal obligations, resolve disputes, and enforce our agreements.`,
    ],
  },
  {
    id: "04",
    title: "Data Storage & Security",
    content: [
      `Your data is stored on secure servers with industry-standard encryption (TLS/SSL). Access to client data is strictly limited to authorized personnel directly involved in the project.`,
      `While we implement robust safeguards, no internet transmission is 100% secure. We cannot guarantee absolute security of data transmitted to or from our platforms.`,
    ],
  },
  {
    id: "05",
    title: "Data Sharing & Third Parties",
    content: [
      `We do not sell, rent, or trade your personal information to any third party.`,
      `We may share data with vetted sub-contractors or technology partners (e.g., cloud hosting providers, analytics tools) solely to the extent necessary to deliver your project. Such parties are bound by strict confidentiality obligations.`,
      `We may disclose information if required by law, court order, or governmental regulation.`,
    ],
  },
  {
    id: "06",
    title: "Cookies & Tracking",
    content: [
      `Our website may use cookies to enhance performance and analytics. These cookies do not store personally identifiable information beyond session preferences.`,
      `You may disable cookies in your browser settings, though this may affect certain website features.`,
    ],
  },
  {
    id: "07",
    title: "Your Rights",
    content: [
      `You have the right to access, correct, or delete any personal information we hold about you.`,
      `You may request a copy of your data or ask us to restrict certain processing activities by contacting us at the email below.`,
      `If you are located in the EU/EEA, you may have additional rights under the GDPR, including the right to data portability and to lodge a complaint with your local supervisory authority.`,
    ],
  },
  {
    id: "08",
    title: "Data Retention",
    content: [
      `We retain personal data only for as long as necessary to fulfil the purposes outlined in this policy, manage active contracts, or comply with legal obligations. Project-related communications and records are typically retained for 3 years post-project completion.`,
    ],
  },
  {
    id: "09",
    title: "Changes to This Policy",
    content: [
      `We may update this Privacy Policy periodically. The "Last Updated" date at the top of this page indicates the most recent revision. We encourage you to review this policy regularly.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#050816] overflow-x-hidden selection:bg-neon-green/30 selection:text-neon-green flex flex-col">
      <div className="absolute inset-0 cyber-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-neon-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="relative w-full border-b border-white/5 bg-black/20 backdrop-blur-md py-4 px-6 sm:px-12 z-20 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-neon-green/60 text-white hover:text-neon-green transition duration-300"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          </Link>
          <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
            Back to Headquarters
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center font-space text-[8px] font-black text-white select-none">
            DM
          </div>
          <span className="font-space text-xs font-bold tracking-[0.2em] text-white uppercase hidden sm:block">
            DEEP MISTRY
          </span>
        </div>
      </header>

      {/* Content */}
      <main className="relative flex-1 max-w-4xl w-full mx-auto px-6 py-14 sm:py-20 z-10">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="text-neon-green w-4 h-4" />
            <span className="font-mono text-[10px] text-neon-green uppercase tracking-widest">
              Legal Document // DMS-PP-02
            </span>
          </div>
          <h1 className="font-space text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase mb-3 text-glow-green">
            Privacy Policy
          </h1>
          <div className="flex items-center gap-3 font-mono text-[10px] text-white/35 uppercase tracking-wider">
            <span>Deep Mistry Solutions</span>
            <span className="text-white/15">•</span>
            <span>Last Updated: 05 July 2026</span>
          </div>
          <div className="w-16 h-[2px] bg-gradient-to-r from-neon-green to-neon-blue mt-5" />
        </div>

        <div className="glass-panel rounded-xl p-6 border border-neon-green/10 bg-neon-green/[0.02] mb-8">
          <p className="font-sans text-sm text-white/60 leading-relaxed">
            Your privacy is important to us. This policy outlines how Deep Mistry Solutions collects, uses, and protects your data when you engage with our IT services or visit our website.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className="glass-panel rounded-xl p-6 sm:p-8 border border-white/5 bg-white/[0.02] hover:border-white/10 transition duration-300 relative overflow-hidden group"
            >
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-neon-green/60 via-neon-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h2 className="font-space text-base font-bold text-white uppercase tracking-wider flex items-center gap-3 mb-4">
                <span className="font-mono text-neon-green text-sm">{section.id}.</span>
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.content.map((para, i) => (
                  <p key={i} className="font-sans text-sm text-white/60 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 glass-panel rounded-xl p-6 border border-neon-green/10 bg-neon-green/[0.02] text-center">
          <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest mb-2">
            Privacy Requests
          </p>
          <p className="font-sans text-sm text-white/60">
            To exercise your data rights or raise a privacy concern, contact us at{" "}
            <a
              href="mailto:deepmistry.solutions@gmail.com"
              className="text-neon-green hover:text-white transition duration-300 font-semibold"
            >
              deepmistry.solutions@gmail.com
            </a>
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-[10px] text-white/30 uppercase tracking-wider">
          <Link href="/terms" className="hover:text-neon-green transition duration-300">Terms &amp; Conditions</Link>
          <span className="text-white/10">•</span>
          <Link href="/refund-policy" className="hover:text-neon-green transition duration-300">Refund Policy</Link>
          <span className="text-white/10">•</span>
          <Link href="/cancellation-policy" className="hover:text-neon-green transition duration-300">Cancellation Policy</Link>
        </div>
      </main>

      <footer className="relative border-t border-white/5 py-6 px-6 z-10 text-center">
        <p className="font-mono text-[9px] text-white/25 uppercase tracking-widest">
          © {new Date().getFullYear()} Deep Mistry Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
