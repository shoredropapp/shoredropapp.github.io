import type { Metadata } from "next";
import BlogPostContent from "../../../components/BlogPostContent";
import { blogPosts } from "../../../lib/blog-posts";
import { blogPostJsonLd, blogPostMetadata } from "../../../lib/blog-seo";

const post = blogPosts.find((p) => p.slug === "how-to-plan-a-private-beach-event-in-virginia-beach")!;

export const metadata: Metadata = blogPostMetadata(post);

export default function PrivateEventsArticlePage() {
  return (
    <>
      <BlogPostContent post={post} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostJsonLd(post)) }}
      />
    </>
  );
}
