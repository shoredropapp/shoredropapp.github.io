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
  const chips = ["All", "Beach Tips", "Virginia Beach Tips", "Food Delivery", "Private Events"];

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

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {chips.map((chip, idx) => (
            <span
              key={chip}
              className={`px-4 py-2 rounded-full text-sm ${
                idx === 0
                  ? "bg-[#083b6c] text-white"
                  : "bg-[#e6f9ff] text-ocean-deep"
              }`}
            >
              {chip}
            </span>
          ))}
        </div>

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

        <section className="mt-12 max-w-3xl mx-auto rounded-2xl border border-[#083b6c]/10 bg-[#e6f9ff]/50 p-6 text-center space-y-4">
          <h2 className="text-3xl font-light text-ocean-deep">Get Virginia Beach tips delivered to your inbox.</h2>
          <form className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full sm:w-80 rounded-md border border-gray-200 px-3 py-2 text-sm"
              aria-label="Email"
            />
            <button
              type="submit"
              className="rounded-md bg-[#083b6c] px-5 py-2 text-sm font-semibold text-white hover:bg-[#062a4d]"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
