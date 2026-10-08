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
    {
      url: new URL("/about", siteUrl).href,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: new URL("/clinic", siteUrl).href,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: new URL("/contact", siteUrl).href,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: new URL("/achievements", siteUrl).href,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: new URL("/privacy", siteUrl).href,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
