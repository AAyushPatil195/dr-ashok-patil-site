import type { Metadata } from "next";
import { AchievementsPageContent } from "@/components/achievements/achievements-page-content";
import { getSiteUrl, isPublicSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();
const hasPublicSiteUrl = isPublicSiteUrl(siteUrl);

export const metadata: Metadata = {
  title: "Achievements & Community Service",
  description:
    "Explore the professional journey and community healthcare involvement of Dr. Ashok A. Patil, a long-standing General Practitioner in Jalgaon.",
  keywords: [
    "Dr Ashok Patil Jalgaon",
    "community healthcare Jalgaon",
    "Dr Ashok Patil achievements",
  ],
  ...(hasPublicSiteUrl
    ? {
        alternates: { canonical: "/achievements" },
        openGraph: {
          title: "Achievements & Recognition | Dr. Ashok A. Patil",
          description:
            "A verified, evidence-led view of Dr. Ashok A. Patil's professional journey and community contribution in Jalgaon.",
          url: "/achievements",
          type: "website",
        },
      }
    : {}),
};

export default function AchievementsPage() {
  return <AchievementsPageContent />;
}
