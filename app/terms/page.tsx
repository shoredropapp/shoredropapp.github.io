import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import { SUPPORT_EMAIL } from "../../lib/contact";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your access to and use of the ShoreDrop website, mobile app, and delivery services.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service — ShoreDrop",
    description:
      "The terms that govern your access to and use of the ShoreDrop website, mobile app, and delivery services.",
    url: "/terms",
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

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-3xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-ocean-deep">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mt-2">Last Updated: 01/13/2026</p>
        </header>

        <div className="space-y-6 text-foreground">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Welcome to ShoreDrop. These Terms of Service (&quot;Terms&quot;) govern your access to and use of the ShoreDrop website, mobile application, and related services (collectively, the &quot;Service&quot;). By accessing or using ShoreDrop, you agree to be bound by these Terms.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            If you do not agree, please do not use the Service.
          </p>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">1. About ShoreDrop</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ShoreDrop is an on-demand delivery platform designed to provide beachgoers with convenient access to beach essentials such as chairs, umbrellas, coolers, towels, snacks, drinks, and other related items. Services may be provided directly by ShoreDrop or through third-party partners.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">2. Eligibility</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You must be at least 18 years old to use ShoreDrop. Certain items (such as alcohol, if offered) may require legal age verification and valid identification at delivery.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">3. User Accounts</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              To use certain features, you may need to create an account. You agree to:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
              <li>Provide accurate and complete information</li>
              <li>Keep your login credentials secure</li>
              <li>Be responsible for all activity under your account</li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              ShoreDrop reserves the right to suspend or terminate accounts for misuse or violation of these Terms.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">4. Orders &amp; Delivery</h3>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
              <li>Orders are subject to availability and location</li>
              <li>Delivery times are estimates and not guaranteed</li>
              <li>Risk of loss transfers to you upon delivery</li>
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              You are responsible for ensuring someone is available to receive the order at the designated delivery location.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">5. Pricing &amp; Payments</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Prices, fees, taxes, and delivery charges are displayed at checkout. By placing an order, you authorize ShoreDrop to charge your selected payment method.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              All sales are final, unless otherwise stated.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">6. Cancellations &amp; Refunds</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Refunds or credits may be issued at ShoreDrop&apos;s discretion for issues such as incorrect or damaged items. Cancellations may not be possible once an order is in progress.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">7. Third-Party Partners</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ShoreDrop may work with third-party vendors, drivers, or merchants. ShoreDrop is not responsible for the actions or omissions of third parties, except as required by law.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">8. Prohibited Conduct</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              You agree not to:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
              <li>Use the Service for unlawful purposes</li>
              <li>Interfere with operations or security</li>
              <li>Misuse or damage delivered equipment</li>
              <li>Attempt to reverse engineer the app</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">9. Intellectual Property</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All content, logos, trademarks, and designs—including the ShoreDrop name and branding—are owned by ShoreDrop LLC and may not be used without permission.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">10. Disclaimer of Warranties</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Service is provided &quot;as is&quot; and &quot;as available.&quot; ShoreDrop makes no warranties regarding uninterrupted service, accuracy, or suitability for a particular purpose.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">11. Limitation of Liability</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, ShoreDrop shall not be liable for indirect, incidental, or consequential damages arising from your use of the Service.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">12. Indemnification</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              You agree to indemnify and hold harmless ShoreDrop LLC, its members, officers, and employees from any claims arising from your use of the Service or violation of these Terms.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">13. Governing Law</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              These Terms are governed by the laws of the Commonwealth of Virginia, without regard to conflict-of-law principles.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">14. Changes to These Terms</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ShoreDrop may update these Terms at any time. Continued use of the Service after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-foreground mb-2">15. Contact Us</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For questions or support, contact:
            </p>
            <div className="text-sm text-muted-foreground mt-2 space-y-1">
              <p>📧 {SUPPORT_EMAIL}</p>
              <p>🌐 www.shoredropapp.com</p>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
