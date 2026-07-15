"use client";

import Hero from "./Hero";
import ValueStrip from "./ValueStrip";
import Features from "./Features";
import Services from "./Services";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";

export default function HomeClient() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <Hero />
      <ValueStrip />
      <div id="features">
        <Features />
      </div>
      <div id="services">
        <Services />
      </div>
      <SiteFooter />
    </div>
  );
}
