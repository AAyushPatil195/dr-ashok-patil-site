import type { Metadata } from "next";
import { ClinicPageContent } from "@/components/clinic/clinic-page-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Clinic in Shani Peth, Jalgaon",
  description:
    "Explore Dr. Ashok A. Patil's established General Practitioner clinic in Shani Peth, Jalgaon, near Phule Market, with dedicated consultation, treatment and waiting spaces.",
  path: "/clinic",
  keywords: [
    "Dr Ashok Patil clinic Jalgaon",
    "clinic in Shani Peth Jalgaon",
    "general physician clinic Jalgaon",
    "doctor near Phule Market Jalgaon",
  ],
  socialTitle: "The Clinic | Dr. Ashok A. Patil",
});

export default function ClinicPage() {
  return <ClinicPageContent />;
}
