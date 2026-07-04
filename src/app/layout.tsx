import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deep Mistry | Founder, Deep Mistry Solutions",
  description: "Explore the futuristic digital headquarters and portfolio of Deep Mistry. Specializing in Web Development, Mobile Apps, Custom Software, and AI Business Automation.",
  keywords: "Deep Mistry, Deep Mistry Solutions, Founder, Web Development, Mobile Apps, AI Automation, Custom Software, Business growth solutions",
  authors: [{ name: "Deep Mistry" }],
  openGraph: {
    title: "Deep Mistry | Founder, Deep Mistry Solutions",
    description: "Enter the futuristic digital headquarters of Deep Mistry. High-end Web, Mobile & AI Solutions.",
    type: "website",
    locale: "en_US",
    siteName: "Deep Mistry Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Mistry | Founder, Deep Mistry Solutions",
    description: "Enter the futuristic digital headquarters of Deep Mistry.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="bg-bg-dark text-white min-h-full font-sans antialiased selection:bg-neon-blue/30 selection:text-neon-blue">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
