import type { Metadata } from "next";
import { Heart, HeartHandshake, Sparkles, Compass } from "lucide-react";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import { Button } from "../../components/button";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "ShoreDrop exists to make the beach effortless—built on faith, delivered with care, in Virginia Beach and beyond.",
  alternates: { canonical: "/mission" },
  openGraph: {
    title: "Our Mission — ShoreDrop",
    description:
      "ShoreDrop exists to make the beach effortless—built on faith, delivered with care.",
    url: "/mission",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ShoreDrop — Beach Day Delivery",
      },
    ],
  },
};

const values = [
  {
    icon: Heart,
    title: "Faith",
    description: "We build on a foundation greater than ourselves.",
  },
  {
    icon: HeartHandshake,
    title: "Service",
    description: "Every guest is treated with care and warmth.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "Premium experiences, thoughtful in every detail.",
  },
  {
    icon: Compass,
    title: "Stewardship",
    description: "Caring for our shores, our team, and our community.",
  },
] as const;

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(210,60%,97%)] to-white">
      <SiteNav />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-4xl">
        <header className="mb-16 text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-light text-ocean-deep">Our Mission</h1>
          <p className="text-lg text-muted-foreground">Built on faith. Delivered with care.</p>
        </header>

        <section className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Why We Exist</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            ShoreDrop exists to make the beach effortless. We deliver premium, affordable beach experiences—chairs,
            umbrellas, and everything in between—so that families, friends, and travelers can simply show up and soak
            in the day. We do this with integrity, with excellence, and with the conviction that our work is meant to
            serve others well.
          </p>
        </section>

        <section className="mb-16 rounded-2xl border border-ocean-deep/10 bg-white/90 p-8 md:p-10 shadow-sm border-l-4 border-l-ocean-deep">
          <p className="text-xs font-semibold tracking-widest text-ocean-light uppercase mb-6 text-center">
            Our Foundation
          </p>
          <blockquote className="text-center space-y-4 text-sm md:text-base leading-relaxed text-muted-foreground italic">
            <p>
              <sup>1</sup> Unless the Lord builds the house, the builders labor in vain. Unless the Lord watches over
              the city, the guards stand watch in vain.
            </p>
            <p>
              <sup>2</sup> In vain you rise early and stay up late, toiling for food to eat—for he grants sleep to
              those he loves.
            </p>
          </blockquote>
          <p className="text-center text-xs text-muted-foreground mt-6 not-italic">
            Psalm 127:1–2 (New International Version)
          </p>
        </section>

        <section className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-ocean-deep mb-4">Our Story</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            ShoreDrop began with a simple observation: the best moments at the beach happen when you&apos;re not lugging
            gear, hunting for parking, or wrestling with an umbrella in the wind. We started ShoreDrop to take all of
            that off your plate—setting up before you arrive and packing up after you leave—so the only thing you have
            to do is enjoy the day. What started as a small local idea has grown into a service rooted in hospitality,
            hard work, and a desire to honor the people we serve.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-ocean-deep mb-8 text-center">Our Values</h2>
          <ValuesGrid />
        </section>

        <section className="text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-ocean-deep">Where We&apos;re Headed</h2>
          <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
            We dream of ShoreDrop on every shore where people gather to rest, play, and make memories. As we grow, our
            commitment stays the same: serve well, build with integrity, and never forget who builds the house.
          </p>
          <Button
            variant="default"
            size="lg"
            className="rounded-full bg-ocean-light hover:bg-ocean-deep text-white px-8"
            asChild
          >
            <a href="/#services">Explore Our Services</a>
          </Button>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function ValuesGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {values.map(({ icon: Icon, title, description }) => (
        <ValueCard key={title} Icon={Icon} title={title} description={description} />
      ))}
    </div>
  );
}

function ValueCard({
  Icon,
  title,
  description,
}: {
  Icon: typeof Heart;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm space-y-4">
      <div className="w-14 h-14 rounded-full bg-[hsl(210,60%,92%)] flex items-center justify-center mx-auto">
        <Icon className="h-7 w-7 text-ocean-deep" aria-hidden />
      </div>
      <h3 className="font-semibold text-ocean-deep">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
