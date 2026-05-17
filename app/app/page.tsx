import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import { Button } from "../../components/button";
import { IOS_APP_STORE_URL } from "../../lib/app-links";

export const metadata: Metadata = {
  title: "ShoreDrop App",
  description:
    "Bring premium beach chairs, umbrellas, coolers, snacks, drinks, and more to your towel with ShoreDrop on-demand delivery in Virginia Beach.",
  alternates: { canonical: "/app" },
  openGraph: {
    title: "ShoreDrop App — ShoreDrop",
    description:
      "Bring premium beach chairs, umbrellas, coolers, snacks, drinks, and more to your towel with ShoreDrop on-demand delivery in Virginia Beach.",
    url: "/app",
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

export default function ShoreDropAppMarketingPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-3xl">
        <header className="mb-10 text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-ocean-deep tracking-tight">
            ShoreDrop on iPhone
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            ShoreDrop is your on-demand beach companion: reserve gear packages or build your own setup, coordinate delivery to your beach spot, and—in supported areas—get snacks, drinks, and bites from participating local merchants brought with your order.
          </p>
        </header>

        <section className="space-y-4 mb-10">
          <h2 className="font-semibold text-lg text-ocean-deep">What you can do</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>Browse packages (chairs, umbrellas, coolers, and more) or mix individual items for your crew.</li>
            <li>Reserve or request delivery so your setup meets you at your beach location—timing and availability depend on service area coverage.</li>
            <li>Stay on top of your order flow in the app (confirmation and fulfillment details).</li>
            <li>Add food and beverage items offered through the platform where third-party merchants participate.</li>
          </ul>
        </section>

        <section className="space-y-3 mb-10">
          <h2 className="font-semibold text-lg text-ocean-deep">Who it&apos;s for</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            ShoreDrop is built for beachgoers who want less hassle hauling chairs, shade, and coolers—starting with our launch focus in{" "}
            <span className="text-foreground font-medium">Virginia Beach</span>. Service details, hours, and coverage can change; check the app for what&apos;s offered when you book.
          </p>
        </section>

        <section className="space-y-6 mb-12 rounded-2xl border border-gray-100 bg-white/80 p-8 shadow-sm">
          <div className="flex flex-col items-center text-center gap-3">
            <Button
              variant="default"
              size="lg"
              className="rounded-full bg-ocean-light hover:bg-ocean-deep text-white px-8 py-6 text-base"
              asChild
            >
              <a href={IOS_APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                Download on the App Store
              </a>
            </Button>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm" aria-label="Related links">
            <a href="/support" className="text-ocean-deep font-medium underline-offset-2 hover:underline">
              Support
            </a>
            <a href="/privacy" className="text-ocean-deep font-medium underline-offset-2 hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="text-ocean-deep font-medium underline-offset-2 hover:underline">
              Terms of Service
            </a>
          </nav>
        </section>

        <section className="space-y-5">
          <h2 className="font-semibold text-lg text-ocean-deep text-center">FAQ</h2>
          <dl className="space-y-6 text-sm text-muted-foreground">
            <div>
              <dt className="font-medium text-foreground mb-1">Is ShoreDrop available where I visit the beach?</dt>
              <dd>
                We&apos;re rolling out with a focus on{" "}
                <span className="text-foreground">Virginia Beach</span>. Availability, delivery zones, and schedules appear in the app and may change as we grow.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-foreground mb-1">Do you only deliver equipment?</dt>
              <dd>
                ShoreDrop centers on chairs, shade, coolers, and beach accessories. Where partners are connected, you can also order qualifying food and beverages for delivery through the platform.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-foreground mb-1">I need help with an order or my account.</dt>
              <dd>
                Visit our{" "}
                <a href="/support" className="text-ocean-deep underline underline-offset-2">
                  Support
                </a>
                {" "}page to reach the team by email.
              </dd>
            </div>
          </dl>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
