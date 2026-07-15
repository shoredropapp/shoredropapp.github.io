"use client";

import Link from "next/link";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { CUSTOM_GEAR, PACKAGES, getPackageStartingFrom } from "../lib/ordering/catalog";
import { useFoodBagOptional } from "../contexts/FoodBagContext";

const Services = () => {
  const foodBag = useFoodBagOptional();
  const foodCount = foodBag?.bagCount ?? 0;
  const foodTotal = foodBag?.subtotal ?? 0;

  return (
    <section className="py-24" style={{ backgroundColor: "#FFF7EE" }}>
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82b6]">Beach packages</p>
          <h2 className="mb-4 text-4xl font-semibold text-[#083b6c] sm:text-5xl">
            Pick a setup. We&apos;ll handle the rest.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Tiered pricing by time of day — starting from half-day rates. Book online or in the app.
          </p>
          {foodCount > 0 ? (
            <p className="mx-auto mt-4 max-w-xl rounded-2xl border border-[#083b6c]/20 bg-white/80 px-4 py-3 text-sm text-[#083b6c]">
              You have {foodCount} food item{foodCount === 1 ? "" : "s"} in your bag (${foodTotal.toFixed(2)}). Select a
              package below — food stays in your order through checkout.
            </p>
          ) : null}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((pkg) => {
            const from = getPackageStartingFrom(pkg.id);
            return (
              <Card
                key={pkg.id}
                className="relative overflow-hidden border-0 bg-white/90 shadow-soft transition-all hover:shadow-wave"
              >
                {pkg.popular ? (
                  <span className="absolute right-3 top-3 z-10 rounded-full bg-amber-400 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#083b6c]">
                    Most popular
                  </span>
                ) : null}
                <CardContent className="flex h-full flex-col gap-5 p-6">
                  <div className="h-40 overflow-hidden rounded-xl bg-[#e6f9ff]">
                    <img src={pkg.image} alt={pkg.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    <h3 className="text-xl font-semibold text-[#083b6c]">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#3b82b6]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-wide text-muted-foreground">From</p>
                        <p className="text-xl font-bold text-[#083b6c]">${from.toFixed(2)}</p>
                      </div>
                      <Button asChild className="rounded-full bg-[#083b6c] hover:bg-[#0a4a85]">
                        <Link href={`/booking?package=${pkg.id}`}>Select</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-20 rounded-3xl border border-dashed border-[#083b6c]/25 bg-white/70 p-8">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#3b82b6]">Build your own</p>
            <h3 className="text-3xl font-semibold text-[#083b6c]">Mix & match gear</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Half-day starting prices shown · $24.99 custom minimum · full & shore day priced higher at checkout
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {CUSTOM_GEAR.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center rounded-2xl border border-border/70 bg-white p-4 text-center shadow-soft"
              >
                <img src={item.image} alt={item.name} className="mb-3 h-20 w-20 object-contain" />
                <p className="text-sm font-semibold text-[#083b6c]">{item.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                <Button asChild variant="outline" size="sm" className="mt-3 rounded-full">
                  <Link href={`/booking?custom=${item.id}`}>Add</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
