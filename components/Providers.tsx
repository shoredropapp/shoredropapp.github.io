"use client";

import type { ReactNode } from "react";
import { CustomerAuthProvider } from "../contexts/CustomerAuthContext";

export default function Providers({ children }: { children: ReactNode }) {
  return <CustomerAuthProvider>{children}</CustomerAuthProvider>;
}
