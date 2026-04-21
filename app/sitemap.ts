import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://shoredropapp.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE}/`,
      lastModified: "2026-04-21",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE}/privacy`,
      lastModified: "2026-01-13",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE}/terms`,
      lastModified: "2026-01-13",
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
