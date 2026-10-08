import type { Metadata } from "next";
import { AboutPreview } from "@/components/home/about-preview";
import { AchievementsPreview } from "@/components/home/achievements-preview";
import { ClinicInformation } from "@/components/home/clinic-information";
import { ClinicPreview } from "@/components/home/clinic-preview";
import { EnquirySection } from "@/components/home/enquiry-section";
import { Hero } from "@/components/home/hero";
import { TreatmentsPreview } from "@/components/home/treatments-preview";
import { TrustSection } from "@/components/home/trust-section";
import { VisitSection } from "@/components/home/visit-section";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.title,
  absoluteTitle: true,
  socialTitle: siteConfig.title,
  description:
    "Visit Dr. Ashok A. Patil, B.A.M.S., a trusted General Practitioner and family doctor providing practical healthcare in Shani Peth, Jalgaon.",
  path: "/",
  keywords: [
    "Dr Ashok Patil Jalgaon",
    "General Physician in Jalgaon",
    "General Practitioner in Jalgaon",
    "family doctor in Jalgaon",
    "doctor in Shani Peth Jalgaon",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClinicInformation />
      <TreatmentsPreview />
      <TrustSection />
      <AboutPreview />
      <ClinicPreview />
      <AchievementsPreview />
      <EnquirySection />
      <VisitSection />
    </>
  );
}
