import type { Metadata } from "next";
import { ClinicPageContent } from "@/components/clinic/clinic-page-content";
import { getSiteUrl, isPublicSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();
const hasPublicSiteUrl = isPublicSiteUrl(siteUrl);

export const metadata: Metadata = {
  title: "Clinic in Shani Peth, Jalgaon",
  description:
    "Explore Dr. Ashok A. Patil's established General Practitioner clinic in Shani Peth, Jalgaon, near Phule Market, with dedicated consultation, treatment and waiting spaces.",
  keywords: [
    "Dr Ashok Patil clinic Jalgaon",
    "clinic in Shani Peth Jalgaon",
    "general physician clinic Jalgaon",
    "doctor near Phule Market Jalgaon",
  ],
  ...(hasPublicSiteUrl
    ? {
        alternates: { canonical: "/clinic" },
        openGraph: {
          title: "The Clinic | Dr. Ashok A. Patil",
          description:
            "A permanent, hygiene-focused General Practitioner clinic in Shani Peth, Jalgaon, with dedicated spaces for consultation, treatment and waiting.",
          url: "/clinic",
          type: "website",
        },
      }
    : {}),
};

export default function ClinicPage() {
  return <ClinicPageContent />;
}
