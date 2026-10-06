import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { siteConfig } from "@/config/site";
import { getSiteUrl, isIndexingEnabled, isPublicSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();
const hasPublicSiteUrl = isPublicSiteUrl(siteUrl);
const allowIndexing = isIndexingEnabled(siteUrl);

export const metadata: Metadata = {
  ...(hasPublicSiteUrl
    ? {
        metadataBase: siteUrl,
        alternates: { canonical: "/" },
      }
    : {}),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  robots: {
    index: allowIndexing,
    follow: allowIndexing,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={siteConfig.language} className="h-full antialiased">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
