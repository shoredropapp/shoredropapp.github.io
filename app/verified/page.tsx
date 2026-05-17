import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import AppStoreCta from "../../components/AppStoreCta";

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
    <div className="min-h-screen bg-gradient-to-b from-[#e6f9ff] to-white">
      <SiteNav />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-lg">
        <div className="rounded-2xl border border-[#083b6c]/10 bg-white p-6 sm:p-8 shadow-sm space-y-6 text-center">
          <div className="flex justify-center">
            <CheckCircle2 className="h-10 w-10 text-[#083b6c]" aria-hidden />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#083b6c]">
            Thanks for verifying your account
          </h1>
          <p className="text-sm leading-relaxed text-[#6C7A89]">
            Your email is confirmed. Return to the ShoreDrop app to finish signing in.
          </p>

          <AppStoreCta buttonLabel="Go back to the app" />

          <p className="text-sm text-[#6C7A89]">
            Need help?{" "}
            <a
              href="/support"
              className="font-medium text-[#083b6c] underline underline-offset-2 hover:text-[#3586ff]"
            >
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
