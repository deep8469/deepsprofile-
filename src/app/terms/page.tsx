"use client";

import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";

const sections = [
  {
    id: "01",
    title: "Agreement to Terms",
    content: [
      `By accessing this website or engaging any service offered by Deep Mistry Solutions ("Company", "we", "us"), you agree to be legally bound by these Terms & Conditions. If you do not agree with any part, you must refrain from using our services.`,
      `These terms apply to all clients, visitors, and users who engage with our website or any associated software, application, or digital product delivered by the Company.`,
    ],
  },
  {
    id: "02",
    title: "Scope of Services",
    content: [
      `Deep Mistry Solutions provides IT consultancy, custom software development, mobile application development, web design & development, cloud solutions, API integrations, AI/ML implementations, and business process automation.`,
      `The exact deliverables, technology stack, milestones, and timelines for each engagement will be documented in a mutually agreed Statement of Work (SOW) or Project Proposal prior to commencement.`,
    ],
  },
  {
    id: "03",
    title: "Client Responsibilities",
    content: [
      `Clients are responsible for providing accurate, complete, and timely information, assets, and access (e.g., hosting credentials, API keys, brand materials) required for project execution.`,
      `Delays caused by the client's failure to provide required resources, feedback, or approvals within the agreed review period may result in timeline extensions and/or additional charges.`,
    ],
  },
  {
    id: "04",
    title: "Intellectual Property",
    content: [
      `Upon receipt of full and final payment for a project, all custom-built code, UI/UX designs, databases, and related deliverables produced exclusively for the client will be fully transferred to the client.`,
      `Deep Mistry Solutions retains full ownership of pre-existing frameworks, reusable code libraries, proprietary tools, design systems, AI training pipelines, and boilerplate components used across multiple engagements.`,
      `We reserve the right to showcase completed work in our portfolio unless a mutual Non-Disclosure Agreement (NDA) has been signed prior to the project.`,
    ],
  },
  {
    id: "05",
    title: "Project Milestones & Approval",
    content: [
      `Projects are structured in defined phases. Upon completion of each milestone, the client will receive a live demo, staging environment link, or deliverable package for review.`,
      `The client has 5 business days to submit revision requests or approve the milestone. Silence beyond this window will be treated as implicit acceptance, and the project will advance to the next phase.`,
      `Minor revision requests within the agreed project scope are handled at no extra cost. Requests that alter the original scope will be assessed and quoted separately as Change Requests (CRs).`,
    ],
  },
  {
    id: "06",
    title: "Payment Terms",
    content: [
      `An advance/retainer payment (typically 30%–50% of the total project value) is required before work commences. Subsequent milestone payments are invoiced upon delivery of each phase.`,
      `Invoices are due within 7 calendar days of issuance unless otherwise stated in the SOW. Overdue payments may attract a late fee or result in a work stoppage until cleared.`,
      `All pricing is exclusive of applicable taxes (e.g., GST) unless explicitly stated otherwise.`,
    ],
  },
  {
    id: "07",
    title: "Third-Party Services",
    content: [
      `Some solutions may rely on third-party services such as cloud platforms (AWS, GCP, Firebase), payment gateways, CRM systems, or AI APIs. The client acknowledges and accepts the terms of these third parties.`,
      `Deep Mistry Solutions is not responsible for outages, data breaches, pricing changes, or service interruptions caused by third-party providers.`,
    ],
  },
  {
    id: "08",
    title: "Limitation of Liability",
    content: [
      `Under no circumstances shall Deep Mistry Solutions, its founders, employees, or contractors be liable for any indirect, incidental, consequential, or punitive damages—including loss of business, revenue, data, or reputation.`,
      `Total liability in connection with any specific project shall not exceed the total fees paid for that specific project milestone.`,
    ],
  },
  {
    id: "09",
    title: "Confidentiality",
    content: [
      `Both parties agree to keep confidential all non-public information shared during the engagement (business strategies, source code, client data, pricing). This obligation survives project termination.`,
      `A formal NDA may be signed separately if required by either party before discovery calls or detailed project scoping sessions.`,
    ],
  },
  {
    id: "10",
    title: "Governing Law & Jurisdiction",
    content: [
      `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Gujarat, India.`,
    ],
  },
  {
    id: "11",
    title: "Modifications",
    content: [
      `We reserve the right to update these Terms at any time. Changes will be reflected on this page with an updated "Last Updated" date. Continued use of our services after changes are published constitutes acceptance of the new Terms.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#050816] overflow-x-hidden selection:bg-neon-blue/30 selection:text-neon-blue flex flex-col">
      {/* BG Elements */}
      <div className="absolute inset-0 cyber-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="relative w-full border-b border-white/5 bg-black/20 backdrop-blur-md py-4 px-6 sm:px-12 z-20 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-neon-blue/60 text-white hover:text-neon-blue transition duration-300"
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
        {/* Page Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Scale className="text-neon-blue w-4 h-4" />
            <span className="font-mono text-[10px] text-neon-blue uppercase tracking-widest">
              Legal Document // DMS-TC-01
            </span>
          </div>
          <h1 className="font-space text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase mb-3 text-glow-blue">
            Terms &amp; Conditions
          </h1>
          <div className="flex items-center gap-3 font-mono text-[10px] text-white/35 uppercase tracking-wider">
            <span>Deep Mistry Solutions</span>
            <span className="text-white/15">•</span>
            <span>Last Updated: 05 July 2026</span>
          </div>
          <div className="w-16 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple mt-5" />
        </div>

        {/* Intro */}
        <div className="glass-panel rounded-xl p-6 border border-neon-blue/10 bg-neon-blue/[0.02] mb-8">
          <p className="font-sans text-sm text-white/60 leading-relaxed">
            Please read these Terms &amp; Conditions carefully before engaging with Deep Mistry Solutions. By accessing our website, requesting a consultation, or contracting our services, you confirm that you have read, understood, and agreed to be bound by these terms.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className="glass-panel rounded-xl p-6 sm:p-8 border border-white/5 bg-white/[0.02] hover:border-white/10 transition duration-300 relative overflow-hidden group"
            >
              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-neon-blue/60 via-neon-purple/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h2 className="font-space text-base font-bold text-white uppercase tracking-wider flex items-center gap-3 mb-4">
                <span className="font-mono text-neon-blue text-sm">{section.id}.</span>
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

        {/* Contact Nudge */}
        <div className="mt-10 glass-panel rounded-xl p-6 border border-neon-purple/10 bg-neon-purple/[0.02] text-center">
          <p className="font-mono text-[10px] text-white/35 uppercase tracking-widest mb-2">
            Questions?
          </p>
          <p className="font-sans text-sm text-white/60">
            For any queries regarding these Terms, reach out at{" "}
            <a
              href="mailto:deepmistry.solutions@gmail.com"
              className="text-neon-blue hover:text-white transition duration-300 font-semibold"
            >
              deepmistry.solutions@gmail.com
            </a>
          </p>
        </div>

        {/* Policy Nav */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-[10px] text-white/30 uppercase tracking-wider">
          <Link href="/privacy" className="hover:text-neon-blue transition duration-300">Privacy Policy</Link>
          <span className="text-white/10">•</span>
          <Link href="/refund-policy" className="hover:text-neon-blue transition duration-300">Refund Policy</Link>
          <span className="text-white/10">•</span>
          <Link href="/cancellation-policy" className="hover:text-neon-blue transition duration-300">Cancellation Policy</Link>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative border-t border-white/5 py-6 px-6 z-10 text-center">
        <p className="font-mono text-[9px] text-white/25 uppercase tracking-widest">
          © {new Date().getFullYear()} Deep Mistry Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
