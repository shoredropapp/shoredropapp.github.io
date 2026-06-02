import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import { IOS_APP_STORE_URL } from "../lib/app-links";
import { blogPosts, type BlogPost } from "../lib/blog-posts";

function formatDate(date: string): string {
  return new Date(`${date}T00:00:00.000Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogPostContent({ post }: { post: BlogPost }) {
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
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

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-ocean-deep">You may also like</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((item) => (
                <article key={item.slug} className="rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm">
                  <a href={`/blog/${item.slug}/`} className="block">
                    <img src={item.image} alt={item.imageAlt} className="w-full h-36 object-cover" />
                    <div className="p-4 space-y-2">
                      <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{item.category}</p>
                      <h3 className="text-base font-semibold text-ocean-deep leading-tight">{item.title}</h3>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
