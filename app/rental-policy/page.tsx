import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Rental Equipment Policy",
  description:
    "Terms for rental, use, and return of ShoreDrop beach equipment.",
  alternates: { canonical: "/rental-policy" },
  openGraph: {
    title: "Rental Equipment Policy — ShoreDrop",
    description:
      "Terms for rental, use, and return of ShoreDrop beach equipment.",
    url: "/rental-policy",
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

export default function RentalPolicyPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-3xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-ocean-deep">Rental Equipment Policy</h1>
          <p className="text-sm text-muted-foreground mt-2">Last Updated: April 22, 2026</p>
        </header>

        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            This Rental Equipment Policy outlines the terms governing the rental, use, and return of equipment provided by ShoreDrop LLC (&quot;ShoreDrop,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
          </p>
          <p>
            This Policy is subject to ShoreDrop&apos;s Liability Waiver &amp; Assumption of Risk and Terms of Service.
          </p>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">1. Equipment Included</h2>
            <p className="mb-2">Rental packages may include items such as:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Beach chairs</li>
              <li>Umbrellas</li>
              <li>Coolers</li>
              <li>Other beach accessories offered by ShoreDrop</li>
            </ul>
            <p>
              Exact items will be confirmed at checkout. Customers must notify ShoreDrop immediately if items are missing or incorrect upon delivery (see Section 7).
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">2. Rental Period</h2>
            <p className="mb-2">Equipment is rented for the time period selected at checkout.</p>
            <p className="mb-2">Customers agree to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use equipment only within the rental period</li>
              <li>Return or make equipment available for pickup at the agreed time</li>
              <li>Request extensions in advance if needed</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">3. Equipment Condition</h2>
            <p className="mb-2">All equipment is inspected and cleaned prior to delivery.</p>
            <p className="mb-2">
              Equipment is provided on an &quot;as is&quot; basis and may show normal wear consistent with rental use.
            </p>
            <p className="mb-2">Customers agree to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use equipment responsibly</li>
              <li>Avoid misuse or unsafe handling</li>
              <li>Notify ShoreDrop immediately if equipment becomes damaged</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">4. Prohibited Use</h2>
            <p className="mb-2">Customers may not:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Modify or alter equipment</li>
              <li>Use equipment in unsafe or hazardous conditions</li>
              <li>Transfer, sub-rent, or assign equipment to third parties</li>
              <li>Use equipment for commercial purposes without written consent</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">5. Responsibility for Equipment</h2>
            <p className="mb-2">
              Customers are fully responsible for all rented equipment from the time of delivery until pickup confirmation. Responsibility transfers upon delivery confirmation.
            </p>
            <p className="mb-2">Customers agree:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Equipment should not be left unattended for extended periods</li>
              <li>Customers are responsible for loss, theft, or damage during the rental period</li>
              <li>ShoreDrop may charge replacement or repair costs at its sole discretion</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">6. Return &amp; Pickup</h2>
            <p className="mb-2">
              At the end of the rental period, ShoreDrop will retrieve equipment at the delivery location unless otherwise arranged.
            </p>
            <p className="mb-2">Customers agree to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Have all items accessible and ready for pickup</li>
              <li>Ensure items are reasonably free of sand and debris</li>
              <li>Cooperate with pickup scheduling</li>
            </ul>
            <p>Failure to make equipment available for pickup may result in additional rental charges or replacement fees.</p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">7. Incorrect or Missing Items</h2>
            <p className="mb-2">
              If equipment does not match the booking, customers must notify ShoreDrop within 30 minutes of delivery.
            </p>
            <p className="mb-2">After this window, equipment is considered accepted and correct.</p>
            <p className="mb-2">ShoreDrop may, at its discretion:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Replace missing items</li>
              <li>Issue partial credits</li>
              <li>Issue partial refunds</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">8. Weather &amp; Environmental Conditions</h2>
            <p className="mb-2">
              Beach environments involve inherent risks and rapidly changing conditions. Customers assume all risks associated with environmental factors, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Wind</li>
              <li>Heat</li>
              <li>Sand conditions</li>
              <li>Tides</li>
              <li>Weather changes</li>
            </ul>
            <p>
              ShoreDrop is not responsible for damages, injuries, or losses resulting from environmental conditions.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">9. Late Returns / Extended Use</h2>
            <p className="mb-2">
              Failure to make equipment available for pickup at the agreed time may result in:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Additional rental charges</li>
              <li>Extension fees</li>
              <li>Replacement charges if retrieval is not possible</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">10. Abandonment</h2>
            <p>
              If equipment cannot be retrieved due to customer unavailability or failure to cooperate with pickup arrangements, ShoreDrop may deem the equipment abandoned and charge full replacement costs.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">11. Damage &amp; Replacement Costs</h2>
            <p className="mb-2">Customers are responsible for:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Lost items</li>
              <li>Stolen items</li>
              <li>Damaged equipment beyond normal wear</li>
            </ul>
            <p>
              ShoreDrop reserves the right to charge repair or replacement costs, including applicable fees, at its sole discretion.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">12. Policy Integration</h2>
            <p>
              This Rental Equipment Policy is incorporated into and governed by ShoreDrop&apos;s Terms of Service and Liability Waiver.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
