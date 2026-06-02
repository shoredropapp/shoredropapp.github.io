import type { Metadata } from "next";
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
  const eventTypes = ["Birthdays", "Weddings & Proposals", "Corporate Outings", "Bachelor / Bachelorette"];

  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="container mx-auto max-w-7xl px-4 pt-32 pb-20 space-y-14">
        <header className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-light text-ocean-deep">Private Events</h1>
          <p className="text-muted-foreground">
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

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {eventTypes.map((eventType) => (
            <div
              key={eventType}
              className="rounded-xl border border-[#e8edf3] bg-white px-4 py-3 text-center shadow-[0_1px_6px_rgba(8,59,108,0.05)]"
            >
              <p className="text-base font-medium text-ocean-deep">{eventType}</p>
            </div>
          ))}
        </section>

        <section className="space-y-5">
          <h2 className="text-5xl font-light text-ocean-deep">Packages</h2>
          <p className="text-[28px] text-muted-foreground">
            Start with a package, then upgrade to a Mega Drop or fully customize.
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className={`rounded-2xl border bg-white p-7 shadow-[0_2px_10px_rgba(8,59,108,0.06)] ${
                  pkg.featured ? "border-[#1d7bd8]" : "border-[#e7edf5]"
                }`}
              >
                {pkg.featured ? (
                  <p className="mb-4 inline-block rounded-md bg-[#eaf4ff] px-3 py-1 text-xs font-semibold text-[#1d7bd8]">
                    Most Popular
                  </p>
                ) : null}
                <h3 className="text-[43px] leading-tight font-semibold text-ocean-deep">{pkg.name}</h3>
                <p className="mt-1 text-[34px] text-muted-foreground">{pkg.size}</p>
                <ul className="mt-5 space-y-2 text-[30px] leading-snug text-ocean-deep">
                  {pkg.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
                <p className="mt-5 text-base italic text-[#7d9ab6]">Upgrade to Mega Drop available.</p>
                <a
                  href="/support"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-full border px-5 py-3 text-base font-semibold transition-colors ${
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
          <h2 className="text-5xl font-light text-ocean-deep">What's Included</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {included.map((item) => (
              <p
                key={item}
                className="rounded-lg border border-[#e7edf5] bg-white px-4 py-3 text-[28px] text-ocean-deep shadow-[0_1px_6px_rgba(8,59,108,0.05)]"
              >
                {item}
              </p>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
