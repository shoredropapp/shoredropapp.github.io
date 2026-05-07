import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import { SUPPORT_EMAIL } from "../../lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ShoreDrop collects, uses, discloses, and safeguards your information.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — ShoreDrop",
    description:
      "How ShoreDrop collects, uses, discloses, and safeguards your information.",
    url: "/privacy",
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

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-3xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-ocean-deep">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mt-2">Last Updated: April 22, 2026</p>
        </header>

        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            ShoreDrop LLC (&quot;ShoreDrop,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, and related services (collectively, the &quot;Services&quot;).
          </p>
          <p>
            By accessing or using the Services, you acknowledge that you have read and understand this Privacy Policy.
          </p>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">1. Information We Collect</h2>
            <h3 className="font-medium text-foreground mb-1">A. Information You Provide</h3>
            <p className="mb-2">We may collect information you voluntarily provide, including:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Delivery address and location details</li>
              <li>Account login credentials</li>
              <li>Communications with ShoreDrop (e.g., support inquiries, feedback)</li>
            </ul>

            <h3 className="font-medium text-foreground mb-1">B. Payment Information</h3>
            <p className="mb-3">
              Payments are processed by third-party providers, including Stripe. ShoreDrop does not store full payment card details. We may receive limited information such as payment status, billing metadata, and the last four digits of a card.
            </p>

            <h3 className="font-medium text-foreground mb-1">C. Automatically Collected Information</h3>
            <p className="mb-2">When you use the Services, we may automatically collect:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Device type, operating system, and browser type</li>
              <li>IP address</li>
              <li>Usage data and app interactions</li>
              <li>Log files and diagnostic information</li>
            </ul>

            <h3 className="font-medium text-foreground mb-1">D. Location Data</h3>
            <p className="mb-2">We collect precise or approximate location data to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Enable delivery services</li>
              <li>Identify nearby service areas</li>
              <li>Improve logistics and user experience</li>
            </ul>
            <p>You may disable location services through your device settings, but doing so may limit functionality.</p>

            <h3 className="font-medium text-foreground mb-1">E. Delivery Confirmation Data</h3>
            <p className="mb-2">To verify fulfillment and prevent fraud, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Delivery confirmation photos</li>
              <li>GPS coordinates and timestamps</li>
              <li>Order completion status</li>
            </ul>

            <h3 className="font-medium text-foreground mb-1">F. Cookies &amp; Tracking Technologies</h3>
            <p className="mb-2">
              We use cookies, web beacons, and similar technologies to enhance your experience, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Essential cookies — required for core functionality</li>
              <li>Analytics cookies — help us understand usage (e.g., analytics tools)</li>
              <li>Preference cookies — remember your settings</li>
            </ul>
            <p>
              You may disable cookies through your browser settings; however, this may impact functionality. Where required by law, we will obtain consent before using non-essential cookies.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">2. How We Use Your Information</h2>
            <p className="mb-2">We use your information to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide, operate, and maintain the Services</li>
              <li>Process transactions and fulfill orders</li>
              <li>Enable deliveries and location-based services</li>
              <li>Communicate updates, confirmations, and customer support</li>
              <li>Improve our app, website, and user experience</li>
              <li>Send marketing and promotional communications (you may opt out)</li>
              <li>Detect, prevent, and investigate fraud or misuse</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">3. How We Share Information</h2>
            <p className="font-medium text-foreground mb-2">We do not sell your personal information.</p>
            <p className="mb-2">We may share information with:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Service providers and partners, including delivery personnel and vendors</li>
              <li>Payment processors, including Stripe, to complete transactions</li>
              <li>Analytics providers to understand usage and improve performance</li>
              <li>Legal authorities when required by law or to protect rights, safety, or property</li>
            </ul>
            <p>
              All third parties are contractually required to safeguard your information and use it only for authorized purposes.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">4. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect your information, including encryption in transit (TLS/SSL) and access controls.
              However, no system is completely secure, and we cannot guarantee absolute security. In the event of a data breach, we will provide notice as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">5. Data Retention</h2>
            <p className="mb-2">We retain personal information only as long as necessary to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Provide the Services</li>
              <li>Complete transactions</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce agreements</li>
            </ul>
            <p>When data is no longer needed, we will securely delete or anonymize it.</p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">6. Your Rights &amp; Choices (Virginia Residents)</h2>
            <p className="mb-2">
              If you are a resident of Virginia, you have rights under the Virginia Consumer Data Protection Act (CDPA), including:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Right to Access — confirm and access your personal data</li>
              <li>Right to Correct — request correction of inaccuracies</li>
              <li>Right to Delete — request deletion of your data</li>
              <li>Right to Data Portability — receive your data in a portable format</li>
              <li>Right to Opt Out — opt out of targeted advertising, sale of personal data, or certain profiling</li>
              <li>Right to Appeal — appeal our decision if we deny your request</li>
            </ul>
            <p className="mb-2">To exercise your rights, contact us using the information below.</p>
            <p className="mb-2">
              We will respond within 45 days, with a possible extension of an additional 45 days where permitted by law.
            </p>
            <p className="mb-3">We will not discriminate against you for exercising your rights.</p>
            <h3 className="font-medium text-foreground mb-1">Marketing Opt-Out</h3>
            <p className="mb-2">You may opt out of marketing emails at any time by:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Clicking &quot;unsubscribe&quot; in emails</li>
              <li>Contacting us directly</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">7. Communications</h2>
            <p className="mb-2">By using the Services, you consent to receive:</p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>Transactional communications (orders, updates, support)</li>
              <li>Service-related notifications</li>
              <li>Promotional communications (subject to opt-out)</li>
            </ul>
            <p>Message and data rates may apply.</p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">8. Children&apos;s Privacy</h2>
            <p>
              The Services are not intended for individuals under 18. We do not knowingly collect personal information from children. If we become aware that such data has been collected, we will delete it.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">9. Third-Party Links</h2>
            <p>
              Our Services may contain links to third-party websites. ShoreDrop is not responsible for their privacy practices and encourages you to review their policies.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When material changes are made, we may notify you via email or in-app notice.
              The updated policy will include a revised &quot;Last Updated&quot; date. Continued use of the Services constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">11. Contact Information</h2>
            <p className="mb-2">If you have questions or wish to exercise your privacy rights, contact us:</p>
            <p className="mb-1">📧 {SUPPORT_EMAIL}</p>
            <p className="mb-1">🌐 www.shoredropapp.com</p>
            <p className="mt-3">ShoreDrop LLC</p>
            <p>Mailing Address: 3305 Kensington Street, Virginia Beach, VA 23452</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
