import type { Metadata } from "next";
import Script from "next/script";
import { SiteShell } from "@/components/layout/site-shell";
import { SiteStructuredData } from "@/components/seo/site-structured-data";
import { siteConfig } from "@/config/site";
import { getSiteUrl, isIndexingEnabled } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();
const allowIndexing = isIndexingEnabled();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.practitioner.name }],
  creator: siteConfig.practitioner.name,
  publisher: siteConfig.practitioner.name,
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  robots: {
    index: allowIndexing,
    follow: allowIndexing,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.language}
      className="h-full antialiased"
      data-scroll-behavior="smooth"
    >
      <body>
        <SiteStructuredData />
        <SiteShell>{children}</SiteShell>
        <Script id="contact-page-entry" strategy="beforeInteractive">
          {`(() => {
            if (
              window.location.pathname !== "/contact" ||
              window.location.hash ||
              !("scrollRestoration" in window.history)
            ) return;

            document.documentElement.dataset.contactEntry = "true";
            window.history.scrollRestoration = "manual";
          })();`}
        </Script>
      </body>
    </html>
  );
}
