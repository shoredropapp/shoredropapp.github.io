import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SUPPORT_EMAIL, SUPPORT_PHONE_TEL } from "../lib/contact";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shoredropapp.github.io"),
  title: {
    default: "ShoreDrop — Beach Day Delivery",
    template: "%s — ShoreDrop",
  },
  description:
    "On-demand delivery of beach essentials — chairs, umbrellas, coolers, snacks, and drinks. ShoreDrop brings beach-day comforts to your towel.",
  keywords: [
    "beach delivery",
    "beach chair rental",
    "umbrella rental",
    "on-demand beach gear",
    "ShoreDrop",
    "Virginia Beach delivery",
  ],
  authors: [{ name: "ShoreDrop LLC" }],
  openGraph: {
    type: "website",
    siteName: "ShoreDrop",
    title: "ShoreDrop — Beach Day Delivery",
    description:
      "On-demand delivery of beach essentials — chairs, umbrellas, coolers, snacks.",
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShoreDrop — Beach Day Delivery",
    description:
      "On-demand delivery of beach essentials — chairs, umbrellas, coolers, snacks.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ShoreDrop",
    legalName: "ShoreDrop LLC",
    description:
      "On-demand delivery of beach essentials — chairs, umbrellas, coolers, snacks, and drinks.",
    url: "https://shoredropapp.github.io",
    email: SUPPORT_EMAIL,
    telephone: SUPPORT_PHONE_TEL,
    areaServed: "US",
    sameAs: [
      "https://www.instagram.com/shoredropapp",
      "https://www.facebook.com/share/1HH6Ak5ptN/?mibextid=LQQJ4d",
      "https://www.tiktok.com/@shoredrop",
      "https://www.linkedin.com/company/shoredrop/",
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
