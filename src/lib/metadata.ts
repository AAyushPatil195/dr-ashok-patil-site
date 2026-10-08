import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  keywords?: readonly string[];
  socialTitle?: string;
  type?: "website" | "profile";
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  socialTitle = `${title} | ${siteConfig.name}`,
  type = "website",
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
    },
  };
}
