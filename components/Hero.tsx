"use client";

import Link from "next/link";
import { Button } from "./button";
import { ArrowRight, Star, Check } from "lucide-react";

/** Keep the current homepage photo — layout matches Lovable proportions. */
const HERO_IMAGE = "/lovable-uploads/8cb1bdbc-787a-463c-9ad8-13203c8d57fa.png";

const Hero = () => {
  return (
    <section className="bg-hero-gradient pt-24 pb-14 lg:pt-28 lg:pb-20">
      <div className="container mx-auto px-4">
        {/* ~42% copy / ~58% image, top-aligned like Lovable (not vertically centered) */}
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.18fr)] lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-start space-y-6 lg:pt-6 xl:pt-10">
            <span className="inline-flex w-fit items-center rounded-full border border-[#bbefff] bg-white/80 px-3 py-1 text-xs font-semibold tracking-wide text-[#083b6c]">
              Live in Virginia Beach · Summer 2026
            </span>

            <div className="space-y-4">
              <h1 className="max-w-[14ch] text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-[#083b6c] sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
                Your Beach Day,
                <span className="block">Delivered.</span>
              </h1>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
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
                <Link href="/#services">Book Your Beach Day</Link>
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

            <ul className="space-y-2 text-sm text-[#083b6c]/90">
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

          <div className="relative w-full lg:max-w-none">
            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[2rem] bg-[#bbefff]/35 blur-2xl lg:translate-x-3 lg:translate-y-3" />
            <div className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-wave ring-1 ring-black/5">
              <img
                src={HERO_IMAGE}
                alt="ShoreDrop beach setup with chairs, umbrella, and cooler"
                className="aspect-[4/5] w-full object-cover object-[center_40%] sm:aspect-[3/4] lg:min-h-[34rem] xl:min-h-[38rem]"
              />
            </div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-2xl border border-white/60 bg-white/95 px-4 py-3 shadow-soft backdrop-blur">
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
