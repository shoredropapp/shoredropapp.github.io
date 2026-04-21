import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
