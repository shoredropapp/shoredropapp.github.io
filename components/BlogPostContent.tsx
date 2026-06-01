import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import { IOS_APP_STORE_URL } from "../lib/app-links";
import type { BlogPost } from "../lib/blog-posts";

function formatDate(date: string): string {
  return new Date(`${date}T00:00:00.000Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-3xl">
        <article className="space-y-8">
          <header className="space-y-4">
            <a href="/blog/" className="text-sm text-muted-foreground hover:text-ocean-deep">
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
      </main>
      <SiteFooter />
    </div>
  );
}
