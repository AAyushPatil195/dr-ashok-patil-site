import type { Metadata } from "next";
import { TreatmentsPageContent } from "@/components/treatments/treatments-page-content";
import { getSiteUrl, isPublicSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();
const hasPublicSiteUrl = isPublicSiteUrl(siteUrl);

export const metadata: Metadata = {
  title: "Treatments & Services in Jalgaon",
  description:
    "General medical care in Jalgaon from Dr. Ashok A. Patil, B.A.M.S., including common illnesses, chronic care, family healthcare, minor procedures and appropriate specialist referrals.",
  keywords: [
    "general physician in Jalgaon",
    "general practitioner in Jalgaon",
    "family doctor in Jalgaon",
    "general medical care in Jalgaon",
  ],
  ...(hasPublicSiteUrl
    ? {
        alternates: { canonical: "/treatments" },
        openGraph: {
          title: "Treatments & Services | Dr. Ashok A. Patil",
          description:
            "Practical general and family healthcare in Shani Peth, Jalgaon, with ongoing care and appropriate specialist referrals.",
          url: "/treatments",
          type: "website",
        },
      }
    : {}),
};

export default function TreatmentsPage() {
  return <TreatmentsPageContent />;
}
