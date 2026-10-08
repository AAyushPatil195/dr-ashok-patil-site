import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/about-page-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About Dr. Ashok A. Patil | General Practitioner in Jalgaon",
  absoluteTitle: true,
  description:
    "Learn about Dr. Ashok A. Patil, a B.A.M.S. General Practitioner with approximately 28 years of family practice in Shani Peth, Jalgaon.",
  path: "/about",
  keywords: [
    "Dr Ashok Patil Jalgaon",
    "General Practitioner Jalgaon",
    "family doctor Jalgaon",
  ],
  socialTitle: "About Dr. Ashok A. Patil",
  type: "profile",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
