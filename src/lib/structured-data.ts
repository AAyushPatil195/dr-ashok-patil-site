import { clinicConfig } from "@/config/clinic";
import { siteConfig } from "@/config/site";
import { getSiteUrl } from "@/lib/site-url";

const weekdays = [
  "https://schema.org/Monday",
  "https://schema.org/Tuesday",
  "https://schema.org/Wednesday",
  "https://schema.org/Thursday",
  "https://schema.org/Friday",
  "https://schema.org/Saturday",
] as const;

const everyDay = [...weekdays, "https://schema.org/Sunday"] as const;

export function getMedicalPracticeStructuredData() {
  const siteUrl = getSiteUrl();
  const clinicId = new URL("/#clinic", siteUrl).href;
  const doctorId = new URL("/#doctor", siteUrl).href;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": clinicId,
        name: siteConfig.name,
        url: siteUrl.href,
        description: siteConfig.description,
        address: {
          "@type": "PostalAddress",
          streetAddress: "B1/1019, Shani Peth, Kinara",
          addressLocality: "Jalgaon",
          addressRegion: "Maharashtra",
          postalCode: "425001",
          addressCountry: "IN",
        },
        areaServed: {
          "@type": "City",
          name: "Jalgaon",
        },
        employee: { "@id": doctorId },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: weekdays,
            opens: "10:00",
            closes: "14:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: everyDay,
            opens: "18:00",
            closes: "22:30",
          },
        ],
      },
      {
        "@type": "Person",
        "@id": doctorId,
        name: siteConfig.practitioner.name,
        honorificPrefix: "Dr.",
        jobTitle: siteConfig.practitioner.role,
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          name: siteConfig.practitioner.qualification,
          credentialCategory: siteConfig.practitioner.qualification,
        },
        worksFor: { "@id": clinicId },
        address: {
          "@type": "PostalAddress",
          streetAddress: clinicConfig.addressLines[0],
          addressLocality: "Jalgaon",
          addressRegion: "Maharashtra",
          postalCode: "425001",
          addressCountry: "IN",
        },
      },
    ],
  };
}

export function serializeStructuredData(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
