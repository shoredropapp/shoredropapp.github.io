import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";

const SUPPORT_MAIL_DISPLAY = "Admin@shoredropapp.com";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with ShoreDrop orders, deliveries, your account, and the mobile app.",
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Support — ShoreDrop",
    description:
      "Get help with ShoreDrop orders, deliveries, your account, and the mobile app.",
    url: "/support",
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

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-3xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-ocean-deep">Help &amp; support</h1>
        </header>

        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            ShoreDrop customers can get help with orders, deliveries, account issues, and the app.
          </p>
          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">Contact us</h2>
            <p className="mb-2">
              Email{" "}
              <a
                href={`mailto:${SUPPORT_MAIL_DISPLAY}`}
                className="text-ocean-deep font-medium underline underline-offset-2 hover:text-ocean-light transition-colors"
              >
                {SUPPORT_MAIL_DISPLAY}
              </a>
              .
            </p>
            <p>We typically respond within 1–2 business days.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
