import type { Metadata } from "next";
import { PrivacyPageContent } from "@/components/privacy/privacy-page-content";
import { getSiteUrl, isPublicSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();
const hasPublicSiteUrl = isPublicSiteUrl(siteUrl);

export const metadata: Metadata = {
  title: "Privacy & Medical Disclaimer",
  description:
    "Read how website enquiries are handled and understand the medical and emergency-use limitations of Dr. Ashok A. Patil's website.",
  ...(hasPublicSiteUrl
    ? {
        alternates: { canonical: "/privacy" },
        openGraph: {
          title: "Privacy & Medical Disclaimer | Dr. Ashok A. Patil",
          description:
            "Plain-language information about enquiry privacy, medical information and emergency-use limitations.",
          url: "/privacy",
          type: "website",
        },
      }
    : {}),
};

export default function PrivacyPage() {
  return <PrivacyPageContent />;
}
