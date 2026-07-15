"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

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
  bagCount: number;
};

const STORAGE_KEY = "shoredrop_web_food_bag_v1";

const FoodBagContext = createContext<Ctx | null>(null);

function readStoredLines(): FoodBagLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as FoodBagLine[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function FoodBagProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<FoodBagLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setLines(readStoredLines());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore quota */
    }
  }, [lines, hydrated]);

  const addLine = useCallback<Ctx["addLine"]>((line) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.key === line.key);
      if (existing) {
        return prev.map((l) =>
          l.key === line.key ? { ...l, quantity: l.quantity + (line.quantity ?? 1) } : l,
        );
      }
      return [...prev, { ...line, quantity: line.quantity ?? 1 }];
    });
  }, []);

  const setQty = useCallback<Ctx["setQty"]>((key, quantity) => {
    setLines((prev) =>
      quantity <= 0 ? prev.filter((l) => l.key !== key) : prev.map((l) => (l.key === key ? { ...l, quantity } : l)),
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<Ctx>(() => {
    const subtotal = lines.reduce((s, l) => s + l.price * l.quantity, 0);
    const bagCount = lines.reduce((n, l) => n + l.quantity, 0);
    return { lines, addLine, setQty, clear, subtotal, bagCount };
  }, [lines, addLine, setQty, clear]);

  return <FoodBagContext.Provider value={value}>{children}</FoodBagContext.Provider>;
}

export function useFoodBag() {
  const ctx = useContext(FoodBagContext);
  if (!ctx) throw new Error("useFoodBag must be used within FoodBagProvider");
  return ctx;
}

/** Safe for pages that may render outside the provider during SSR edge cases. */
export function useFoodBagOptional(): Ctx | null {
  return useContext(FoodBagContext);
}
