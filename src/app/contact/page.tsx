import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/contact-page-content";
import { EnquirySection } from "@/components/home/enquiry-section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact & Visit the Clinic in Jalgaon",
  description:
    "Find Dr. Ashok Patil's clinic in Shani Peth, Jalgaon, near Phule Market. View clinic timings, open Google Maps or send an appointment enquiry.",
  path: "/contact",
  keywords: [
    "Dr Ashok Patil Jalgaon",
    "doctor in Shani Peth Jalgaon",
    "general physician in Jalgaon",
    "clinic near Phule Market Jalgaon",
  ],
  socialTitle: "Contact & Visit | Dr. Ashok A. Patil",
});

export default function ContactPage() {
  return (
    <>
      <ContactPageContent />
      <EnquirySection />
    </>
  );
}
