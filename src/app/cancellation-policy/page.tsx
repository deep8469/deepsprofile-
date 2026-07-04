"use client";

import Link from "next/link";
import { ArrowLeft, XCircle } from "lucide-react";

const sections = [
  {
    id: "01",
    title: "Overview",
    content: [
      `This Cancellation Policy outlines the conditions and consequences of cancelling an active project engagement with Deep Mistry Solutions. Given that all our IT projects are custom-built and resource-intensive, cancellation terms are structured to fairly protect both parties.`,
    ],
  },
  {
    id: "02",
    title: "Client-Initiated Cancellation",
    content: [
      `The client may request cancellation of an active project at any time by submitting a written notice to deepmistry.solutions@gmail.com.`,
      `Upon receipt of the cancellation notice:`,
      `• All work in progress will be paused immediately.`,
      `• Deep Mistry Solutions will prepare a final account of all work completed to date versus the agreed milestones.`,
      `• The client will be invoiced for all completed milestones and any pro-rated work completed in the active (in-progress) milestone.`,
    ],
  },
  {
    id: "03",
    title: "Non-Refundable Advance",
    content: [
      `The initial advance/retainer paid at project commencement is strictly non-refundable in all client-initiated cancellation scenarios. This covers initial scoping, resource reservations, architecture planning, and kickoff activities.`,
    ],
  },
  {
    id: "04",
    title: "Partial Work Settlement",
    content: [
      `If a cancellation occurs mid-milestone, Deep Mistry Solutions will assess the percentage of work completed within that milestone and invoice accordingly.`,
      `Any completed assets, code, designs, or documentation accumulated up to the cancellation date will be delivered to the client upon settlement of all outstanding invoices.`,
    ],
  },
  {
    id: "05",
    title: "Cancellation After Final Delivery",
    content: [
      `A project is considered closed and non-cancellable once a final deliverable has been submitted and the client has provided approval (explicitly or implicitly through the 5-day review window lapse).`,
      `Post-delivery requests for changes or cancellations will be treated as new service requests.`,
    ],
  },
  {
    id: "06",
    title: "Company-Initiated Cancellation",
    content: [
      `Deep Mistry Solutions reserves the right to cancel or pause a project under the following conditions:`,
      `• Non-payment of invoices for more than 14 calendar days beyond the due date.`,
      `• Persistent failure by the client to provide required resources, feedback, or access despite repeated follow-ups.`,
      `• Discovery of unlawful, unethical, or harmful project intent.`,
      `In such cases, all completed milestone payments will be retained, and the client will receive all work completed up to that point upon settlement of any outstanding balance.`,
    ],
  },
  {
    id: "07",
    title: "Project Pause / Suspension",
    content: [
      `If the client needs to pause an active project temporarily, a written request must be submitted. Projects can be paused for up to 30 calendar days without additional holding fees. Beyond 30 days, a monthly project-hold fee may apply to retain dedicated resources.`,
      `A project on hold for more than 90 days without communication or payment may be treated as a client-initiated cancellation.`,
    ],
  },
  {
    id: "08",
    title: "Handover Upon Cancellation",
    content: [
      `Upon completion of the cancellation settlement, Deep Mistry Solutions will provide a handover package including: all source code, design files, documentation, and access credentials relevant to the completed portion of the project.`,
      `Handover is contingent on the full and final payment of all outstanding invoices.`,
    ],
  },
  {
    id: "09",
    title: "Dispute Resolution",
    content: [
      `If either party disputes the cancellation terms, both parties agree to a good-faith negotiation period of 14 business days. If unresolved, the dispute will be governed by the courts of Gujarat, India, as stipulated in our Terms & Conditions.`,
    ],
  },
];

export default function CancellationPolicyPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#050816] overflow-x-hidden selection:bg-neon-pink/30 selection:text-neon-pink flex flex-col">
      <div className="absolute inset-0 cyber-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-neon-pink/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="relative w-full border-b border-white/5 bg-black/20 backdrop-blur-md py-4 px-6 sm:px-12 z-20 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-neon-pink/60 text-white hover:text-neon-pink transition duration-300"
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
            <XCircle className="text-neon-pink w-4 h-4" />
            <span className="font-mono text-[10px] text-neon-pink uppercase tracking-widest">
              Legal Document // DMS-CP-04
            </span>
          </div>
          <h1 className="font-space text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase mb-3" style={{ textShadow: "0 0 8px rgba(255,42,95,0.6), 0 0 20px rgba(255,42,95,0.2)" }}>
            Cancellation Policy
          </h1>
          <div className="flex items-center gap-3 font-mono text-[10px] text-white/35 uppercase tracking-wider">
            <span>Deep Mistry Solutions</span>
            <span className="text-white/15">•</span>
            <span>Last Updated: 05 July 2026</span>
          </div>
          <div className="w-16 h-[2px] bg-gradient-to-r from-neon-pink to-neon-purple mt-5" />
        </div>

        <div className="glass-panel rounded-xl p-6 border border-neon-pink/10 bg-neon-pink/[0.02] mb-8">
          <p className="font-sans text-sm text-white/60 leading-relaxed">
            All our projects are custom-engineered and resource-intensive. Please read this policy thoroughly before initiating a cancellation. We always prefer to resolve issues collaboratively before terminating an engagement.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className="glass-panel rounded-xl p-6 sm:p-8 border border-white/5 bg-white/[0.02] hover:border-white/10 transition duration-300 relative overflow-hidden group"
            >
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-neon-pink/60 via-neon-purple/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h2 className="font-space text-base font-bold text-white uppercase tracking-wider flex items-center gap-3 mb-4">
                <span className="font-mono text-neon-pink text-sm">{section.id}.</span>
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

        <div className="mt-10 glass-panel rounded-xl p-6 border border-neon-pink/10 bg-neon-pink/[0.02] text-center">
          <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest mb-2">
            Cancellation Notices
          </p>
          <p className="font-sans text-sm text-white/60">
            Submit all cancellation requests in writing to{" "}
            <a
              href="mailto:deepmistry.solutions@gmail.com"
              className="text-neon-pink hover:text-white transition duration-300 font-semibold"
            >
              deepmistry.solutions@gmail.com
            </a>
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-[10px] text-white/30 uppercase tracking-wider">
          <Link href="/terms" className="hover:text-neon-pink transition duration-300">Terms &amp; Conditions</Link>
          <span className="text-white/10">•</span>
          <Link href="/privacy" className="hover:text-neon-pink transition duration-300">Privacy Policy</Link>
          <span className="text-white/10">•</span>
          <Link href="/refund-policy" className="hover:text-neon-pink transition duration-300">Refund Policy</Link>
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
