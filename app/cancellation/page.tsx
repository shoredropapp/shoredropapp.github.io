import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description:
    "ShoreDrop customer cancellation, refunds, and weather-related adjustments.",
  alternates: { canonical: "/cancellation" },
  openGraph: {
    title: "Cancellation Policy — ShoreDrop",
    description:
      "ShoreDrop customer cancellation, refunds, and weather-related adjustments.",
    url: "/cancellation",
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

export default function CancellationPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-3xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-ocean-deep">Customer Cancellation Policy</h1>
          <p className="text-sm text-muted-foreground mt-2">Last Updated: April 22, 2026</p>
        </header>

        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            This Customer Cancellation Policy (&quot;Policy&quot;) governs cancellations, refunds, and weather-related adjustments for services provided by ShoreDrop LLC (&quot;ShoreDrop,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
          </p>
          <p>By placing an order with ShoreDrop, you acknowledge and agree to this Policy.</p>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">1. Pre-Order Cancellation Deadline (8:00 AM Cutoff)</h2>
            <p className="mb-2">For all scheduled beach setups:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Customers may cancel their reservation for a full refund if cancellation is completed before 8:00 AM on the day of the reservation</li>
              <li>Cancellations made after 8:00 AM are not eligible for a refund</li>
              <li>Reservations canceled after the cutoff time are considered confirmed and scheduled for fulfillment</li>
            </ul>
            <p>This cutoff is required to allow operational planning, staffing, and equipment deployment.</p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">2. Weather Monitoring &amp; Notifications</h2>
            <p className="mb-2">
              ShoreDrop actively monitors local weather conditions for safety and operational purposes. Where significant weather risks are anticipated, ShoreDrop may notify customers via the app encouraging them to review conditions and cancel before the 8:00 AM cutoff.
            </p>
            <p className="mb-2">Examples of significant weather conditions may include:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Severe storms or widespread washout conditions</li>
              <li>High sustained winds</li>
              <li>Coastal flooding, storm surge, or hazardous beach conditions</li>
            </ul>
            <p className="font-medium text-foreground mb-2">Important:</p>
            <p>
              The responsibility to cancel remains with the customer. Eligibility for a refund requires cancellation prior to the 8:00 AM cutoff, regardless of weather forecasts or notifications.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">3. Partial-Day Weather Conditions</h2>
            <p className="mb-2">Beach weather is inherently variable and may change during the course of a reservation.</p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
              <li>No refunds or credits will be issued for weather changes occurring after equipment has been delivered and the reservation has begun</li>
              <li>Once a reservation has commenced, it is considered fulfilled for the purposes of this Policy</li>
            </ul>
            <p>This includes situations where weather deteriorates after initial setup or use has begun.</p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">4. Service Fulfillment &amp; Timing</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Beach setups are delivered at the scheduled reservation time selected by the customer</li>
              <li>ShoreDrop is not responsible for unused time due to late customer arrival or absence</li>
              <li>Delivery timing is an estimate and may vary due to traffic, weather, or beach conditions</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">5. Location Accuracy</h2>
            <p className="mb-2 font-medium text-foreground">Customers are solely responsible for:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Providing accurate delivery location information</li>
              <li>Selecting correct GPS pins or descriptive locations</li>
              <li>Ensuring delivery access to the designated area</li>
            </ul>
            <p>
              ShoreDrop is not responsible for delays, failed deliveries, or service issues caused by inaccurate or incomplete location information.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">6. Equipment Responsibility</h2>
            <p className="mb-2">Customers are responsible for reasonable care of all equipment during the reservation period. This includes:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Preventing loss, theft, or damage</li>
              <li>Ensuring safe and appropriate use</li>
            </ul>
            <p className="mb-2">ShoreDrop reserves the right to charge replacement or repair fees for:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Missing items</li>
              <li>Lost or stolen equipment</li>
              <li>Damage beyond normal wear and tear</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">7. Safety &amp; Severe Weather Exceptions</h2>
            <p className="mb-2">
              In rare circumstances where ShoreDrop determines that weather or environmental conditions pose a safety risk, ShoreDrop may:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Delay service</li>
              <li>Modify service</li>
              <li>Cancel a reservation</li>
            </ul>
            <p className="mb-2">In such cases, customers will be notified as soon as reasonably possible and will be offered:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>A full refund, or</li>
              <li>The option to reschedule (if available)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">8. No Waiver of Other Terms</h2>
            <p>
              This Policy is incorporated into and subject to ShoreDrop&apos;s Terms of Service and all other applicable agreements. In the event of any conflict, the Terms of Service shall govern.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">9. Acceptance of Policy</h2>
            <p className="mb-2">By placing a reservation with ShoreDrop, you acknowledge that:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>You have read and understood this Policy</li>
              <li>You agree to be bound by its terms</li>
              <li>You understand the cancellation rules and refund limitations</li>
            </ul>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
