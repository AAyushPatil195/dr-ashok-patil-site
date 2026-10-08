import type { Metadata } from "next";
import { AchievementsPageContent } from "@/components/achievements/achievements-page-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Achievements & Community Service",
  description:
    "Explore the professional journey and community healthcare involvement of Dr. Ashok A. Patil, a long-standing General Practitioner in Jalgaon.",
  path: "/achievements",
  keywords: [
    "Dr Ashok Patil Jalgaon",
    "community healthcare Jalgaon",
    "Dr Ashok Patil achievements",
  ],
  socialTitle: "Achievements & Recognition | Dr. Ashok A. Patil",
});

export default function AchievementsPage() {
  return <AchievementsPageContent />;
}
