"use client";

import Link from "next/link";
import { Button } from "./button";
import { Phone, ArrowRight, Star, Check } from "lucide-react";

/** Keep the current homepage photo — only layout/copy follow Lovable. */
const HERO_IMAGE = "/lovable-uploads/8cb1bdbc-787a-463c-9ad8-13203c8d57fa.png";

const Hero = () => {
  return (
    <section className="bg-hero-gradient pt-24 pb-16 lg:pt-28 lg:pb-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-7">
            <span className="inline-flex items-center rounded-full border border-[#bbefff] bg-white/80 px-3 py-1 text-xs font-semibold tracking-wide text-[#083b6c]">
              Live in Virginia Beach · Summer 2026
            </span>

            <div className="space-y-4">
              <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight text-[#083b6c] sm:text-6xl lg:text-7xl">
                Your Beach Day,
                <span className="block">Delivered.</span>
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                Premium beach gear set up before you arrive — plus local meals from Waterman&apos;s delivered
                right to your towel.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#083b6c] px-8 py-6 text-base text-white hover:bg-[#0a4a85]"
              >
                <Link href="/booking">
                  <Phone className="mr-2 h-5 w-5" />
                  Book Your Beach Day
                </Link>
              </Button>
              <button
                type="button"
                className="inline-flex items-center text-sm font-semibold text-[#083b6c] hover:underline"
                onClick={() => {
                  document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                See how it works
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </button>
            </div>

            <ul className="grid gap-2 text-sm text-[#083b6c]/90 sm:grid-cols-1">
              {[
                "Coverage along 42nd–86th Street",
                "Setup before you arrive · pack-up after",
                "Local & family-owned",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#3b82b6]" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-[#bbefff]/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-wave ring-1 ring-black/5">
              <img
                src={HERO_IMAGE}
                alt="ShoreDrop beach setup with chairs, umbrella, and cooler"
                className="aspect-[4/5] w-full object-cover object-center sm:aspect-[5/4]"
              />
            </div>
            <div className="absolute -bottom-4 left-4 hidden items-center gap-2 rounded-2xl border border-white/60 bg-white/95 px-4 py-3 shadow-soft backdrop-blur sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100">
                <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#083b6c]">4.9</p>
                <p className="text-xs text-muted-foreground">Loved by beachgoers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
