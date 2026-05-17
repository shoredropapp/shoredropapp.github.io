import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import { Button } from "../../components/button";
import { IOS_APP_STORE_URL } from "../../lib/app-links";

export const metadata: Metadata = {
  title: "Account verified",
  description:
    "Your ShoreDrop account email has been verified. You can return to the app to continue.",
  alternates: { canonical: "/verified" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Account verified — ShoreDrop",
    description:
      "Your ShoreDrop account email has been verified. You can return to the app to continue.",
    url: "/verified",
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

export default function EmailVerifiedPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-xl text-center">
        <div className="rounded-2xl border border-gray-100 bg-white/90 p-10 shadow-sm space-y-6">
          <h1 className="text-3xl font-bold text-ocean-deep">Thanks for verifying your account</h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Your email is confirmed. Return to the ShoreDrop app to finish signing in or pick up where you left off.
          </p>
          <Button
            variant="default"
            size="lg"
            className="rounded-full bg-ocean-light hover:bg-ocean-deep text-white px-8"
            asChild
          >
            <a href={IOS_APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              Go back to the app
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            Need help?{" "}
            <a href="/support" className="text-ocean-deep font-medium underline underline-offset-2 hover:text-ocean-light">
              Contact support
            </a>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
