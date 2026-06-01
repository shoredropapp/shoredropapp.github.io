import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import { IOS_APP_STORE_URL } from "../../lib/app-links";
import { SITE_URL } from "../../lib/site-url";

const ARTICLE_TITLE = "Your Easiest Virginia Beach Day: A Simple ShoreDrop Guide";
const ARTICLE_DESCRIPTION =
  "Planning a beach day in Virginia Beach? Use this simple guide to reserve your setup, pick the right beach essentials, and skip hauling gear.";
const ARTICLE_URL = `${SITE_URL}/article`;
const PUBLISHED_DATE = "2026-05-31";
const UPDATED_DATE = "2026-05-31";

export const metadata: Metadata = {
  title: "Beach Day Guide",
  description: ARTICLE_DESCRIPTION,
  alternates: { canonical: "/article" },
  openGraph: {
    type: "article",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    url: "/article",
    publishedTime: `${PUBLISHED_DATE}T00:00:00.000Z`,
    modifiedTime: `${UPDATED_DATE}T00:00:00.000Z`,
    authors: ["ShoreDrop Team"],
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ShoreDrop beach day article",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
  },
};

export default function ArticlePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    datePublished: `${PUBLISHED_DATE}T00:00:00.000Z`,
    dateModified: `${UPDATED_DATE}T00:00:00.000Z`,
    author: {
      "@type": "Organization",
      name: "ShoreDrop Team",
    },
    publisher: {
      "@type": "Organization",
      name: "ShoreDrop",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/lovable-uploads/dbf79a37-c86d-49c9-af90-9fe7b44058fc.jpg`,
      },
    },
    mainEntityOfPage: ARTICLE_URL,
  };

  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-3xl">
        <article className="space-y-8">
          <header className="text-center space-y-3">
            <p className="text-xs tracking-wider uppercase text-muted-foreground">ShoreDrop Article</p>
            <h1 className="text-3xl md:text-4xl font-bold text-ocean-deep">{ARTICLE_TITLE}</h1>
            <p className="text-sm text-muted-foreground">Published: May 31, 2026</p>
          </header>

          <p className="text-base leading-relaxed text-muted-foreground">
            A great beach day should feel simple. This guide walks through the fastest way to plan your day,
            avoid the usual setup hassle, and spend more time enjoying the water.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ocean-deep">1) Book your setup before you leave home</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Reserve your essentials before you get to the beach so you do not spend your first hour carrying
              chairs, shade, and coolers. Early planning also helps with timing and availability.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ocean-deep">2) Pick only what you need</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Keep it simple: chairs, umbrellas, and coolers for most groups. Larger groups can choose bigger
              setups so everyone has shade and space from the start.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ocean-deep">3) Use your location details carefully</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Accurate location details help delivery happen smoothly. Add clear spot information so your setup
              reaches the right area without delays.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-ocean-deep">4) Focus on the day, not the logistics</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Once your setup is handled, your day is about relaxing, spending time with your group, and making
              the most of the beach.
            </p>
          </section>

          <div className="rounded-2xl border border-[#083b6c]/10 bg-[#e6f9ff]/50 p-6 text-center space-y-3">
            <h2 className="text-lg font-semibold text-[#083b6c]">Ready for a smoother beach day?</h2>
            <a
              href={IOS_APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#083b6c] px-6 py-3 text-sm font-semibold text-white hover:bg-[#062a4d]"
            >
              Download on the App Store
            </a>
          </div>
        </article>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
