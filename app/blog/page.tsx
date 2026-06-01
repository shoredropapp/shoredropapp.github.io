import type { Metadata } from "next";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import { blogPosts } from "../../lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "ShoreDrop blog articles on Virginia Beach tips, beach setup planning, and food delivery at the beach.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The ShoreDrop Blog — ShoreDrop",
    description:
      "Virginia Beach beach-day tips and practical guides from the ShoreDrop team.",
    url: "/blog",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "The ShoreDrop Blog",
      },
    ],
  },
};

function formatDate(date: string): string {
  return new Date(`${date}T00:00:00.000Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-6xl">
        <header className="text-center mb-12 space-y-3">
          <h1 className="text-4xl md:text-5xl font-light text-ocean-deep">The ShoreDrop Blog</h1>
          <p className="text-base text-muted-foreground">
            Your guide to easier beach days in Virginia Beach.
          </p>
        </header>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm"
            >
              <a href={`/blog/${post.slug}/`} className="block">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 space-y-3">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{post.category}</p>
                  <h2 className="text-xl font-semibold text-ocean-deep leading-tight">{post.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  <p className="text-xs text-muted-foreground">{formatDate(post.publishedAt)}</p>
                </div>
              </a>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
