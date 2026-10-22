import {
  getMedicalPracticeStructuredData,
  serializeStructuredData,
} from "@/lib/structured-data";
import { isIndexingEnabled } from "@/lib/site-url";

export function SiteStructuredData() {
  // Medical/business schema stays deferred until verified content is launch-approved.
  if (!isIndexingEnabled()) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeStructuredData(getMedicalPracticeStructuredData()),
      }}
    />
  );
}
