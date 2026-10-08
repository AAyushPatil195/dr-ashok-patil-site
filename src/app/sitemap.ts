import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    {
      url: siteUrl.href,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: new URL("/treatments", siteUrl).href,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
