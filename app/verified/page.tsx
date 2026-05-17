import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import { IOS_APP_STORE_URL } from "../../lib/app-links";

const APP_PROMO_IMAGE = "/lovable-uploads/8cb1bdbc-787a-463c-9ad8-13203c8d57fa.png";
const LOGO_IMAGE = "/lovable-uploads/dbf79a37-c86d-49c9-af90-9fe7b44058fc.jpg";

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
          <img
            src={LOGO_IMAGE}
            alt="ShoreDrop"
            className="w-16 h-16 mx-auto rounded-xl"
          />
          <div className="flex justify-center">
            <CheckCircle2 className="h-10 w-10 text-[#083b6c]" aria-hidden />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#083b6c]">
            Thanks for verifying your account
          </h1>
          <p className="text-sm leading-relaxed text-[#6C7A89]">
            Your email is confirmed. Tap below to return to ShoreDrop and finish signing in.
          </p>

          <a
            href={IOS_APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl border border-[#083b6c]/15 shadow-md transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#083b6c] focus-visible:ring-offset-2"
            aria-label="Go back to the ShoreDrop app"
          >
            <div className="relative w-full">
              <img
                src={APP_PROMO_IMAGE}
                alt="ShoreDrop beach delivery"
                width={1200}
                height={800}
                className="block w-full h-[220px] sm:h-[260px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#083b6c]/90 via-[#083b6c]/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white">
                <p className="text-base sm:text-lg font-semibold mb-3">Go back to the app</p>
                <span className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#083b6c] shadow-sm">
                  Open ShoreDrop
                </span>
              </div>
            </div>
          </a>

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
