import { ClinicInformation } from "@/components/home/clinic-information";
import { Hero } from "@/components/home/hero";
import { TreatmentsPreview } from "@/components/home/treatments-preview";
import { TrustSection } from "@/components/home/trust-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClinicInformation />
      <TreatmentsPreview />
      <TrustSection />
    </>
  );
}
