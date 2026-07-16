import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import { SUPPORT_EMAIL_DISPLAY } from "../../lib/contact";

export const metadata: Metadata = {
  title: "Delete Account",
  description:
    "How to permanently delete your ShoreDrop account in the app or by email request.",
  alternates: { canonical: "/delete-account" },
  openGraph: {
    title: "Delete Account — ShoreDrop",
    description:
      "How to permanently delete your ShoreDrop account in the app or by email request.",
    url: "/delete-account",
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

export default function DeleteAccountPage() {
  const mailto = `mailto:${SUPPORT_EMAIL_DISPLAY}?subject=${encodeURIComponent(
    "Account deletion request",
  )}&body=${encodeURIComponent(
    "Please delete my ShoreDrop account.\n\nAccount email: \nPhone (optional): \n",
  )}`;

  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-3xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-ocean-deep">Delete your account</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Permanently remove your ShoreDrop login and associated personal data.
          </p>
        </header>

        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            You can delete your ShoreDrop account anytime. Deletion removes your login and anonymizes
            identifiable information on past orders tied to your account. Some records may be retained
            where required for legal, tax, fraud prevention, or dispute purposes.
          </p>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">Delete in the ShoreDrop app</h2>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Open the ShoreDrop app and sign in.</li>
              <li>Go to <span className="font-medium text-foreground">Profile</span>.</li>
              <li>Tap <span className="font-medium text-foreground">Delete account</span> and confirm.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">
              Request deletion without the app
            </h2>
            <p className="mb-2">
              Email us from the address on your account and ask us to delete it. Include the email (and
              phone, if you have one) linked to your ShoreDrop account.
            </p>
            <p className="mb-2">
              Email{" "}
              <a
                href={mailto}
                className="text-ocean-deep font-medium underline underline-offset-2 hover:text-ocean-light transition-colors"
              >
                {SUPPORT_EMAIL_DISPLAY}
              </a>{" "}
              with the subject line &quot;Account deletion request&quot;.
            </p>
            <p>We typically complete email deletion requests within 1–2 business days.</p>
          </section>

          <section>
            <h2 className="font-semibold text-base text-foreground mb-2">What happens after deletion</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>You will no longer be able to sign in with that account.</li>
              <li>Personal profile data tied to the account is removed or anonymized.</li>
              <li>Active or upcoming orders may still need to be handled separately — contact support if you have an open booking.</li>
            </ul>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
