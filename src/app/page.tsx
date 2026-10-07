import { AboutPreview } from "@/components/home/about-preview";
import { AchievementsPreview } from "@/components/home/achievements-preview";
import { ClinicInformation } from "@/components/home/clinic-information";
import { ClinicPreview } from "@/components/home/clinic-preview";
import { EnquirySection } from "@/components/home/enquiry-section";
import { Hero } from "@/components/home/hero";
import { TreatmentsPreview } from "@/components/home/treatments-preview";
import { TrustSection } from "@/components/home/trust-section";
import { VisitSection } from "@/components/home/visit-section";

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
