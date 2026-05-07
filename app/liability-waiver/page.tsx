import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Liability Waiver",
  description:
    "ShoreDrop liability waiver and assumption of risk for equipment and services.",
  alternates: { canonical: "/liability-waiver" },
  openGraph: {
    title: "Liability Waiver & Assumption of Risk — ShoreDrop",
    description:
      "ShoreDrop liability waiver and assumption of risk for equipment and services.",
    url: "/liability-waiver",
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

export default function LiabilityWaiverPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-3xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-ocean-deep">Liability Waiver &amp; Assumption of Risk</h1>
          <p className="text-sm text-muted-foreground mt-2">Last Updated: April 22, 2026</p>
        </header>

        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            This Liability Waiver &amp; Assumption of Risk (&quot;Waiver&quot;) governs your use of equipment and services provided by ShoreDrop LLC (&quot;ShoreDrop,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
          </p>
          <p>
            By renting, using, or accepting delivery of any equipment or services from ShoreDrop, you agree to the terms of this Waiver.
          </p>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">1. Assumption of Risk</h2>
            <p className="mb-2">
              You acknowledge and agree that the use of beach and outdoor equipment involves inherent risks, including but not limited to:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Wind-related movement, tipping, or displacement of umbrellas and equipment</li>
              <li>Uneven or unstable sand and terrain</li>
              <li>Exposure to sun, heat, water, and weather conditions</li>
              <li>Interaction with other individuals, objects, or environmental hazards</li>
            </ul>
            <p>You voluntarily assume all risks, known or unknown, associated with the use of ShoreDrop equipment and services.</p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">2. Release of Liability</h2>
            <p className="mb-2 font-medium text-foreground uppercase">
              To the fullest extent permitted by Virginia Law, you agree to release, waive, and hold harmless ShoreDrop LLC and its owners, members, officers, employees, contractors, and affiliates from any and all claims, liabilities, damages, losses, or expenses arising out of or related to:
            </p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Use or misuse of rented equipment</li>
              <li>Injuries, illness, or death occurring during the rental period</li>
              <li>Loss or damage to personal property</li>
              <li>Environmental conditions, including weather, wind, or beach hazards</li>
              <li>Acts or omissions of third parties</li>
            </ul>
            <p className="font-medium text-foreground mb-2">Important:</p>
            <p>
              This release does not apply to damages caused by ShoreDrop&apos;s gross negligence or willful misconduct, and nothing in this Waiver limits liability where prohibited by applicable law.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">3. No Guarantee of Conditions or Equipment</h2>
            <p className="mb-2">You acknowledge that ShoreDrop does not guarantee:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Weather conditions or environmental stability</li>
              <li>The performance or stability of equipment in outdoor environments</li>
              <li>Protection from wind, sand movement, or other natural elements</li>
            </ul>
            <p>All equipment is used at your own risk.</p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">4. Responsibility for Proper Use</h2>
            <p className="mb-2">You agree to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use all equipment only for its intended purpose</li>
              <li>Follow any instructions or guidelines provided by ShoreDrop</li>
              <li>Use equipment in a safe and reasonable manner</li>
              <li>Secure equipment appropriately where applicable</li>
              <li>Supervise all minors at all times</li>
              <li>Discontinue use and notify ShoreDrop if equipment appears unsafe or defective</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">5. Damage, Loss &amp; Theft</h2>
            <p className="mb-2">You are responsible for all equipment during the rental period, including:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Loss or theft</li>
              <li>Damage beyond normal wear and tear</li>
              <li>Misuse or negligence</li>
            </ul>
            <p>ShoreDrop reserves the right to charge you for reasonable repair or replacement costs.</p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">6. Delivery, Setup &amp; Post-Delivery Responsibility</h2>
            <p className="mb-2">Once equipment has been delivered and/or set up:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responsibility transfers to you</li>
              <li>ShoreDrop is not responsible for loss, theft, or damage occurring after delivery</li>
              <li>ShoreDrop is not responsible for conditions arising after setup, including weather changes or third-party interference</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">7. Minors</h2>
            <p className="mb-2">If you allow individuals under 18 to use ShoreDrop equipment:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>You represent that you are the parent or legal guardian, or have authority to act on their behalf</li>
              <li>You assume all risks and responsibilities described in this Waiver on behalf of the minor</li>
              <li>You agree to supervise minors at all times</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">8. Indemnification</h2>
            <p className="mb-2">
              You agree to indemnify, defend, and hold harmless ShoreDrop LLC and its affiliates from any claims, damages, liabilities, or expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Your use of the equipment or Services</li>
              <li>Your violation of this Waiver</li>
              <li>Your negligence or misconduct</li>
              <li>Any claims brought by third parties related to your use</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">9. Electronic Acceptance</h2>
            <p className="mb-2">
              By completing a rental through ShoreDrop&apos;s website or mobile application—including clicking &quot;Confirm Booking&quot; or checking an acceptance box—you provide a legally binding electronic signature.
            </p>
            <p>
              This agreement is enforceable under the Virginia Uniform Electronic Transactions Act (Va. Code sections 59.1-479 et seq.) and has the same legal effect as a handwritten signature.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">10. Governing Law &amp; Dispute Resolution</h2>
            <p className="mb-2">This Waiver shall be governed by the laws of the Commonwealth of Virginia.</p>
            <p>
              Any disputes arising from this Waiver shall be resolved in accordance with ShoreDrop&apos;s Terms of Service, including applicable arbitration provisions where enforceable.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">11. Severability</h2>
            <p>
              If any provision of this Waiver is found to be invalid or unenforceable, that provision shall be limited or removed to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">12. Acknowledgment &amp; Agreement</h2>
            <p className="mb-2">By using ShoreDrop services or equipment, you acknowledge that:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>You have read and understood this Waiver</li>
              <li>You understand the risks involved</li>
              <li>You voluntarily agree to be bound by its terms</li>
            </ul>
            <p>If you do not agree, you must not use ShoreDrop services or equipment.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
