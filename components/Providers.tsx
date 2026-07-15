"use client";

import type { ReactNode } from "react";
import { CustomerAuthProvider } from "../contexts/CustomerAuthContext";
import { FoodBagProvider } from "../contexts/FoodBagContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CustomerAuthProvider>
      <FoodBagProvider>{children}</FoodBagProvider>
    </CustomerAuthProvider>
  );
}
