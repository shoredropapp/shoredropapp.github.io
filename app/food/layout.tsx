"use client";

import { FoodBagProvider } from "../../contexts/FoodBagContext";

export default function FoodLayout({ children }: { children: React.ReactNode }) {
  return <FoodBagProvider>{children}</FoodBagProvider>;
}
