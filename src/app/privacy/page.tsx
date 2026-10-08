import type { Metadata } from "next";
import { PrivacyPageContent } from "@/components/privacy/privacy-page-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy & Medical Disclaimer",
  description:
    "Read how website enquiries are handled and understand the medical and emergency-use limitations of Dr. Ashok A. Patil's website.",
  path: "/privacy",
  socialTitle: "Privacy & Medical Disclaimer | Dr. Ashok A. Patil",
});

export default function PrivacyPage() {
  return <PrivacyPageContent />;
}
