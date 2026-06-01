import type { Metadata } from "next";
import BlogPostContent from "../../../components/BlogPostContent";
import { blogPosts } from "../../../lib/blog-posts";
import { blogPostJsonLd, blogPostMetadata } from "../../../lib/blog-seo";

const post = blogPosts.find((p) => p.slug === "beach-chair-rental-virginia-beach")!;

export const metadata: Metadata = blogPostMetadata(post);

export default function BeachChairRentalArticlePage() {
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
