import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/about-page-content";
import { getSiteUrl, isPublicSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();
const hasPublicSiteUrl = isPublicSiteUrl(siteUrl);

export const metadata: Metadata = {
  title: "About Dr. Ashok A. Patil",
  description:
    "Learn about Dr. Ashok A. Patil, a B.A.M.S. General Practitioner with approximately 28 years of family practice in Shani Peth, Jalgaon.",
  keywords: [
    "Dr Ashok Patil Jalgaon",
    "General Practitioner Jalgaon",
    "family doctor Jalgaon",
  ],
  ...(hasPublicSiteUrl
    ? {
        alternates: { canonical: "/about" },
        openGraph: {
          title: "About Dr. Ashok A. Patil",
          description:
            "Nearly three decades of practical, patient-first family healthcare in Shani Peth, Jalgaon.",
          url: "/about",
          type: "profile",
        },
      }
    : {}),
};

export default function AboutPage() {
  return <AboutPageContent />;
}
