import { siteConfig } from "@/config/site";

export function getSiteUrl(): URL {
  return new URL(siteConfig.url);
}

export function isIndexingEnabled(): boolean {
  return process.env.NEXT_PUBLIC_SITE_INDEXING_ENABLED === "true";
}
