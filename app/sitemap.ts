import type { MetadataRoute } from "next";

export const dynamic = "force-static";

import { SITE_URL } from "../lib/site-url";

const BASE = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE}/`,
      lastModified: "2026-04-21",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE}/support`,
      lastModified: "2026-05-07",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/app`,
      lastModified: "2026-06-15",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/mission`,
      lastModified: "2026-06-26",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE}/blog`,
      lastModified: "2026-05-31",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/blog/beach-chair-rental-virginia-beach`,
      lastModified: "2026-05-27",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/blog/what-to-bring-to-virginia-beach`,
      lastModified: "2026-05-27",
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${BASE}/blog/food-delivery-to-the-beach`,
      lastModified: "2026-05-27",
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${BASE}/privacy`,
      lastModified: "2026-04-22",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE}/terms`,
      lastModified: "2026-04-22",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE}/cancellation`,
      lastModified: "2026-04-22",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE}/rental-policy`,
      lastModified: "2026-04-22",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE}/liability-waiver`,
      lastModified: "2026-04-22",
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
