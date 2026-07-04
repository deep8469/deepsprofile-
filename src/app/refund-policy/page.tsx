"use client";

import Link from "next/link";
import { ArrowLeft, RotateCcw } from "lucide-react";

const sections = [
  {
    id: "01",
    title: "Overview",
    content: [
      `Deep Mistry Solutions follows a milestone-based project delivery model. This Refund Policy outlines the conditions under which refunds may be requested and processed for our IT services, including software development, mobile app development, web design, AI integrations, and business automation solutions.`,
    ],
  },
  {
    id: "02",
    title: "Non-Refundable Advance Payment",
    content: [
      `The initial advance/retainer payment (typically 30%–50% of total project value) collected before project commencement is strictly non-refundable. This amount covers project scoping, resource allocation, initial research, design concepts, and planning work done upfront.`,
    ],
  },
  {
    id: "03",
    title: "Milestone-Based Refund Eligibility",
    content: [
      `Refunds may be considered under the following circumstances:`,
      `• A milestone payment has been made, but the corresponding deliverable has not been initiated by Deep Mistry Solutions within the agreed timeline with no justified cause.`,
      `• Deep Mistry Solutions is demonstrably unable to deliver the agreed scope of a paid milestone due to internal capacity issues.`,
      `If a milestone has been partially completed and work has been submitted for client review, only the unused portion may be considered for a partial refund at our discretion.`,
    ],
  },
  {
    id: "04",
    title: "No Refund After Milestone Approval",
    content: [
      `Once a milestone deliverable has been explicitly approved by the client (verbally, via email, or via a signed document), no refund will be issued for that milestone.`,
      `If the client raises a revision request after approval that falls within the original project scope, it will be handled as a standard revision. Requests outside scope will be quoted as Change Requests.`,
    ],
  },
  {
    id: "05",
    title: "Client-Side Dissatisfaction",
    content: [
      `Refunds will not be issued on the basis of subjective dissatisfaction if the delivered work conforms to the agreed technical and functional specifications documented in the SOW.`,
      `If you are unsatisfied with a deliverable, please raise the issue in writing. We are committed to working collaboratively to resolve any concerns through revisions, alternate approaches, or other solutions.`,
    ],
  },
  {
    id: "06",
    title: "Third-Party Costs",
    content: [
      `Any costs incurred for third-party services on behalf of the client (e.g., domain registrations, cloud server setup, API subscriptions, licensed assets) are non-refundable and will not be reversed, even if the project is terminated.`,
    ],
  },
  {
    id: "07",
    title: "Refund Processing",
    content: [
      `Approved refunds will be processed within 10–15 business days via the original payment method or an agreed alternative.`,
      `A written refund request must be submitted to deepmistry.solutions@gmail.com with the project reference, the specific milestone in question, and the reason for the refund request.`,
    ],
  },
  {
    id: "08",
    title: "Dispute Resolution",
    content: [
      `Before initiating a formal refund request, both parties agree to make a good-faith effort to resolve the issue through direct communication within 7 business days.`,
      `If unresolved, disputes will be handled as per the Governing Law clause in our Terms & Conditions (courts of Gujarat, India).`,
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#050816] overflow-x-hidden selection:bg-neon-purple/30 selection:text-neon-purple flex flex-col">
      <div className="absolute inset-0 cyber-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="relative w-full border-b border-white/5 bg-black/20 backdrop-blur-md py-4 px-6 sm:px-12 z-20 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-neon-purple/60 text-white hover:text-neon-purple transition duration-300"
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
            <RotateCcw className="text-neon-purple w-4 h-4" />
            <span className="font-mono text-[10px] text-neon-purple uppercase tracking-widest">
              Legal Document // DMS-RP-03
            </span>
          </div>
          <h1 className="font-space text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase mb-3 text-glow-purple">
            Refund Policy
          </h1>
          <div className="flex items-center gap-3 font-mono text-[10px] text-white/35 uppercase tracking-wider">
            <span>Deep Mistry Solutions</span>
            <span className="text-white/15">•</span>
            <span>Last Updated: 05 July 2026</span>
          </div>
          <div className="w-16 h-[2px] bg-gradient-to-r from-neon-purple to-neon-blue mt-5" />
        </div>

        <div className="glass-panel rounded-xl p-6 border border-neon-purple/10 bg-neon-purple/[0.02] mb-8">
          <p className="font-sans text-sm text-white/60 leading-relaxed">
            Due to the custom, bespoke nature of our IT engagements, refunds are handled on a milestone basis. Please review this policy carefully before initiating a project.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className="glass-panel rounded-xl p-6 sm:p-8 border border-white/5 bg-white/[0.02] hover:border-white/10 transition duration-300 relative overflow-hidden group"
            >
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-neon-purple/60 via-neon-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h2 className="font-space text-base font-bold text-white uppercase tracking-wider flex items-center gap-3 mb-4">
                <span className="font-mono text-neon-purple text-sm">{section.id}.</span>
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

        <div className="mt-10 glass-panel rounded-xl p-6 border border-neon-purple/10 bg-neon-purple/[0.02] text-center">
          <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest mb-2">
            Refund Requests
          </p>
          <p className="font-sans text-sm text-white/60">
            Submit refund requests to{" "}
            <a
              href="mailto:deepmistry.solutions@gmail.com"
              className="text-neon-purple hover:text-white transition duration-300 font-semibold"
            >
              deepmistry.solutions@gmail.com
            </a>
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-[10px] text-white/30 uppercase tracking-wider">
          <Link href="/terms" className="hover:text-neon-purple transition duration-300">Terms &amp; Conditions</Link>
          <span className="text-white/10">•</span>
          <Link href="/privacy" className="hover:text-neon-purple transition duration-300">Privacy Policy</Link>
          <span className="text-white/10">•</span>
          <Link href="/cancellation-policy" className="hover:text-neon-purple transition duration-300">Cancellation Policy</Link>
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
