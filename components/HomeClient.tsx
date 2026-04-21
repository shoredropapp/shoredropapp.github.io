"use client";

import Hero from "../components/Hero";
import Features from "../components/Features";
import Services from "../components/Services";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import { CartProvider } from "../contexts/CartContext";

export default function HomeClient() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <SiteNav />
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="services">
          <Services />
        </div>
        <SiteFooter />
      </div>
    </CartProvider>
  );
}
