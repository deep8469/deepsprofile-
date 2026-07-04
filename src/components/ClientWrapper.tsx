"use client";

import { useEffect, useRef, useState } from "react";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
