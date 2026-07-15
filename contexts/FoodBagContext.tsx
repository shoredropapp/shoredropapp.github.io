"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type FoodBagLine = {
  key: string;
  menuItemId: string;
  restaurantId: string;
  restaurantName: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  optionLabel?: string;
};

type Ctx = {
  lines: FoodBagLine[];
  addLine: (line: Omit<FoodBagLine, "quantity"> & { quantity?: number }) => void;
  setQty: (key: string, quantity: number) => void;
  clear: () => void;
  subtotal: number;
};

const FoodBagContext = createContext<Ctx | null>(null);

export function FoodBagProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<FoodBagLine[]>([]);

  const value = useMemo<Ctx>(() => {
    const addLine: Ctx["addLine"] = (line) => {
      setLines((prev) => {
        const existing = prev.find((l) => l.key === line.key);
        if (existing) {
          return prev.map((l) =>
            l.key === line.key ? { ...l, quantity: l.quantity + (line.quantity ?? 1) } : l,
          );
        }
        return [...prev, { ...line, quantity: line.quantity ?? 1 }];
      });
    };
    const setQty: Ctx["setQty"] = (key, quantity) => {
      setLines((prev) =>
        quantity <= 0 ? prev.filter((l) => l.key !== key) : prev.map((l) => (l.key === key ? { ...l, quantity } : l)),
      );
    };
    const clear = () => setLines([]);
    const subtotal = lines.reduce((s, l) => s + l.price * l.quantity, 0);
    return { lines, addLine, setQty, clear, subtotal };
  }, [lines]);

  return <FoodBagContext.Provider value={value}>{children}</FoodBagContext.Provider>;
}

export function useFoodBag() {
  const ctx = useContext(FoodBagContext);
  if (!ctx) throw new Error("useFoodBag must be used within FoodBagProvider");
  return ctx;
}
