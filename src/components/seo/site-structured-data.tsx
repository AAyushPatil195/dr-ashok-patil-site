import {
  getMedicalPracticeStructuredData,
  serializeStructuredData,
} from "@/lib/structured-data";

export function SiteStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeStructuredData(getMedicalPracticeStructuredData()),
      }}
    />
  );
}
