import type { Metadata } from "next";
import { BriefcaseBusiness, Cake, Check, Heart, PartyPopper } from "lucide-react";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Private Events",
  description:
    "Plan birthdays, weddings, corporate outings, and custom beach events in Virginia Beach with ShoreDrop setup and coordination.",
  alternates: { canonical: "/private-events" },
  openGraph: {
    title: "Private Events — ShoreDrop",
    description:
      "From birthdays to weddings, ShoreDrop helps plan and coordinate private beach events in Virginia Beach.",
    url: "/private-events",
  },
};

const packages = [
  {
    name: "Birthday Beach Party",
    size: "Up to 20 guests",
    items: [
      "Full chair & umbrella setup",
      "Themed decor & signage",
      "Food & cake catering",
      "Beach games (cornhole, spikeball, volleyball)",
      "Setup, host & teardown",
    ],
    featured: false,
  },
  {
    name: "Corporate Beach Outing",
    size: "25-75 guests",
    items: [
      "Large group lounge & shade zones",
      "Catered food & beverage stations",
      "Custom branding (flags, signage, tents)",
      "Team-building beach activities",
      "Dedicated event lead & on-site host",
    ],
    featured: true,
  },
  {
    name: "Family Reunion Package",
    size: "20-50 guests",
    items: [
      "Multi-chair & multi-umbrella layout",
      "Kids gear (toys, sand tools, shade tent)",
      "Full catering with family-style menu",
      "Group photo coordination",
      "Setup, host & full teardown",
    ],
    featured: false,
  },
];

const included = [
  "Delivery & professional setup",
  "Premium ShoreDrop gear",
  "Full teardown & cleanup",
  "On-call host during event",
  "Food & drink coordination",
  "Custom signage available",
];

export default function PrivateEventsPage() {
  const eventTypes = [
    { name: "Birthdays", icon: Cake },
    { name: "Weddings & Proposals", icon: Heart },
    { name: "Corporate Outings", icon: BriefcaseBusiness },
    { name: "Bachelor / Bachelorette", icon: PartyPopper },
  ];

  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="container mx-auto max-w-6xl px-4 pt-32 pb-20 space-y-14">
        <header className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-light text-ocean-deep">Private Events</h1>
          <p className="text-base text-muted-foreground">
            From birthdays to weddings - your day, your shore, your way. We bring the beach to
            life with curated setups, Mega Drops, and fully custom experiences.
          </p>
          <a
            href="/support"
            className="inline-flex items-center justify-center rounded-full bg-[#083b6c] px-6 py-3 text-sm font-semibold text-white hover:bg-[#062a4d]"
          >
            Start Planning Your Event
          </a>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {eventTypes.map((eventType) => {
            const Icon = eventType.icon;
            return (
              <div
                key={eventType.name}
                className="rounded-xl border border-[#e7edf5] bg-white px-4 py-5 text-center shadow-[0_1px_6px_rgba(8,59,108,0.05)]"
              >
                <span className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#eff7ff] text-[#1d7bd8]">
                  <Icon size={18} />
                </span>
                <p className="text-sm font-medium text-ocean-deep">{eventType.name}</p>
              </div>
            );
          })}
        </section>

        <section className="space-y-5">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-light text-ocean-deep">Packages</h2>
            <p className="text-sm text-muted-foreground">
              Start with a package, then upgrade to a Mega Drop or fully customize.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className={`flex flex-col rounded-2xl border bg-white p-6 shadow-[0_2px_10px_rgba(8,59,108,0.06)] ${
                  pkg.featured ? "border-[#1d7bd8]" : "border-[#e7edf5]"
                }`}
              >
                {pkg.featured ? (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[#1d7bd8]">
                    Most Popular
                  </p>
                ) : (
                  <span className="mb-3 block h-5" aria-hidden />
                )}
                <h3 className="text-2xl font-medium text-ocean-deep leading-tight">{pkg.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{pkg.size}</p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-ocean-deep">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={14} className="mt-0.5 shrink-0 text-[#1d7bd8]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm italic text-[#7d9ab6]">Upgrade to Mega Drop available.</p>
                <a
                  href="/support"
                  className={`mt-4 inline-flex w-full items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                    pkg.featured
                      ? "border-[#1d7bd8] bg-[#1d7bd8] text-white hover:bg-[#1366b8]"
                      : "border-[#e7edf5] bg-white text-ocean-deep hover:bg-[#f6fbff]"
                  }`}
                >
                  Inquire
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-center text-4xl font-light text-ocean-deep">What's Included</h2>
          <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-[#e7edf5] bg-white px-4 py-3 text-sm text-ocean-deep shadow-[0_1px_6px_rgba(8,59,108,0.05)]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eff7ff] text-[#1d7bd8]">
                  <Check size={14} />
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
