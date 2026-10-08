import type { Metadata } from "next";
import { TreatmentsPageContent } from "@/components/treatments/treatments-page-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Treatments & Services in Jalgaon",
  description:
    "General medical care in Jalgaon from Dr. Ashok A. Patil, B.A.M.S., including common illnesses, chronic care, family healthcare, minor procedures and appropriate specialist referrals.",
  path: "/treatments",
  keywords: [
    "general physician in Jalgaon",
    "general practitioner in Jalgaon",
    "family doctor in Jalgaon",
    "general medical care in Jalgaon",
  ],
  socialTitle: "Treatments & Services | Dr. Ashok A. Patil",
});

export default function TreatmentsPage() {
  return <TreatmentsPageContent />;
}
