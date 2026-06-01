import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteNav from "../../../components/SiteNav";
import SiteFooter from "../../../components/SiteFooter";
import { IOS_APP_STORE_URL } from "../../../lib/app-links";
import { blogPosts, getBlogPost } from "../../../lib/blog-posts";
import { SITE_URL } from "../../../lib/site-url";

type Params = { slug: string };

function formatDate(date: string): string {
  return new Date(`${date}T00:00:00.000Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function generateStaticParams(): Params[] {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  const articleUrl = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: `${post.publishedAt}T00:00:00.000Z`,
      modifiedTime: `${post.publishedAt}T00:00:00.000Z`,
      authors: ["ShoreDrop Team"],
      images: [
        {
          url: post.image,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    other: {
      "article:published_time": `${post.publishedAt}T00:00:00.000Z`,
      "article:section": post.category,
      "article:url": articleUrl,
    },
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: `${post.publishedAt}T00:00:00.000Z`,
    dateModified: `${post.publishedAt}T00:00:00.000Z`,
    articleSection: post.category,
    image: [`${SITE_URL}${post.image}`],
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
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-3xl">
        <article className="space-y-8">
          <header className="space-y-4">
            <a href="/blog" className="text-sm text-muted-foreground hover:text-ocean-deep">
              ← All posts
            </a>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">{post.category}</p>
            <h1 className="text-3xl md:text-5xl font-light text-ocean-deep leading-tight">{post.title}</h1>
            <p className="text-sm text-muted-foreground">ShoreDrop Team · {formatDate(post.publishedAt)}</p>
          </header>

          <img
            src={post.image}
            alt={post.imageAlt}
            className="w-full h-[260px] sm:h-[380px] object-cover rounded-2xl"
          />

          <section className="space-y-8">
            {post.sections.map((section) => (
              <div key={section.heading} className="space-y-3">
                <h2 className="text-2xl font-semibold text-ocean-deep">{section.heading}</h2>
                {section.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-base leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </section>

          <div className="rounded-2xl border border-[#083b6c]/10 bg-[#e6f9ff]/60 p-6 text-center space-y-3">
            <h2 className="text-xl font-semibold text-[#083b6c]">Ready to skip the hauling?</h2>
            <p className="text-sm text-muted-foreground">
              Download the ShoreDrop app and reserve your setup in minutes.
            </p>
            <a
              href={IOS_APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#083b6c] px-6 py-3 text-sm font-semibold text-white hover:bg-[#062a4d]"
            >
              Download ShoreDrop on the App Store
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
