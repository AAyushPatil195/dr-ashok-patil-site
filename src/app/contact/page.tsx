import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/contact-page-content";
import { EnquirySection } from "@/components/home/enquiry-section";
import { getSiteUrl, isPublicSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();
const hasPublicSiteUrl = isPublicSiteUrl(siteUrl);

export const metadata: Metadata = {
  title: "Contact & Visit the Clinic in Jalgaon",
  description:
    "Find Dr. Ashok Patil's clinic in Shani Peth, Jalgaon, near Phule Market. View clinic timings, open Google Maps or send an appointment enquiry.",
  keywords: [
    "Dr Ashok Patil Jalgaon",
    "doctor in Shani Peth Jalgaon",
    "general physician in Jalgaon",
    "clinic near Phule Market Jalgaon",
  ],
  ...(hasPublicSiteUrl
    ? {
        alternates: { canonical: "/contact" },
        openGraph: {
          title: "Contact & Visit | Dr. Ashok A. Patil",
          description:
            "Clinic address, timings, directions and appointment enquiries for Dr. Ashok A. Patil in Shani Peth, Jalgaon.",
          url: "/contact",
          type: "website",
        },
      }
    : {}),
};

export default function ContactPage() {
  return (
    <>
      <ContactPageContent />
      <EnquirySection />
    </>
  );
}
