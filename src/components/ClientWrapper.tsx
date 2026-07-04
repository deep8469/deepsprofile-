"use client";

import { useEffect, useRef, useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";

const ReactLenisAny = ReactLenis as any;

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
