import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import { SUPPORT_EMAIL } from "../../lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ShoreDrop collects, uses, shares, and protects your personal information.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — ShoreDrop",
    description:
      "How ShoreDrop collects, uses, shares, and protects your personal information.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-3xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-ocean-deep">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mt-2">Last Updated: 01/13/2026</p>
        </header>

        <div className="space-y-6 text-sm leading-relaxed">
          <p>
            ShoreDrop LLC (&quot;ShoreDrop,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and protect information when you use our website, mobile application, and related services (collectively, the &quot;Services&quot;).
          </p>
          <p>
            By using ShoreDrop, you agree to the practices described in this Privacy Policy.
          </p>

          <section>
            <h2 className="font-semibold text-base mb-2">1. Information We Collect</h2>

            <h3 className="font-medium mb-1">a. Information You Provide</h3>
            <p className="mb-2">We may collect information you voluntarily provide, including:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Delivery location</li>
              <li>Payment information (processed securely by third-party payment providers)</li>
              <li>Account login details</li>
            </ul>

            <h3 className="font-medium mb-1">b. Automatically Collected Information</h3>
            <p className="mb-2">When you use ShoreDrop, we may automatically collect:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Device type and operating system</li>
              <li>IP address</li>
              <li>Location data (to enable delivery services)</li>
              <li>Usage data and app interactions</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-2">2. How We Use Your Information</h2>
            <p className="mb-2">We use your information to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide and operate ShoreDrop services</li>
              <li>Process orders and payments</li>
              <li>Enable deliveries and location-based services</li>
              <li>Communicate updates, confirmations, and support messages</li>
              <li>Improve our app, website, and customer experience</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-2">3. Location Information</h2>
            <p className="mb-2">ShoreDrop uses location data to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Identify nearby delivery areas</li>
              <li>Facilitate accurate delivery</li>
            </ul>
            <p>You can disable location services through your device settings, but doing so may limit functionality.</p>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-2">4. Sharing of Information</h2>
            <p className="font-medium mb-2">We do not sell your personal information.</p>
            <p className="mb-2">We may share information with:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Delivery partners and service providers necessary to fulfill orders</li>
              <li>Payment processors to complete transactions</li>
              <li>Legal authorities if required by law or to protect rights and safety</li>
            </ul>
            <p>All third-party partners are required to handle data securely.</p>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-2">5. Payment Information</h2>
            <p>ShoreDrop does not store full payment card details. Payments are processed through secure, third-party payment providers that comply with industry security standards.</p>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-2">6. Data Security</h2>
            <p>We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no system is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-2">7. Data Retention</h2>
            <p>We retain personal information only as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce agreements.</p>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-2">8. Your Rights &amp; Choices</h2>
            <p className="mb-2">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Access or update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p>Requests can be made by contacting us at the email below.</p>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-2">9. Children&apos;s Privacy</h2>
            <p>ShoreDrop is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-2">10. Third-Party Links</h2>
            <p>Our Services may contain links to third-party websites. ShoreDrop is not responsible for the privacy practices of those sites.</p>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-2">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Updates will be posted on our website, and continued use of the Services constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="font-semibold text-base mb-2">12. Contact Us</h2>
            <p className="mb-2">If you have questions about this Privacy Policy, contact us at:</p>
            <p>📧 {SUPPORT_EMAIL}</p>
            <p>🌐 www.shoredropapp.com</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
