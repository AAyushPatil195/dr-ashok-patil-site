export const professionalJourney = [
  {
    marker: "Nearly 28 years",
    title: "A long-standing clinical practice",
    description:
      "Approximately 28 years of general practice, with care shaped by day-to-day clinical experience.",
  },
  {
    marker: "Shani Peth",
    title: "Rooted in the same neighbourhood",
    description:
      "The practice has remained closely connected to patients and families in Shani Peth, Jalgaon.",
  },
  {
    marker: "A permanent clinic",
    title: "From a nearby rented practice",
    description:
      "After operating from an earlier rented clinic nearby, the practice moved into its present permanent space.",
  },
  {
    marker: "Across generations",
    title: "Continuity for local families",
    description:
      "The clinic continues to care for children, adults and elderly patients from families returning over many years.",
  },
] as const;

export const communityHealthcare = [
  {
    title: "Periodic community initiatives",
    description:
      "Periodic community and child-health initiatives form part of the practice's wider local involvement.",
  },
  {
    title: "Vaccination-related camps",
    description:
      "Vaccination-related camps have taken place. Programme details, dates and participation records remain to be verified before publication.",
  },
] as const;

export const recognitionCategories = [
  {
    key: "leadership",
    title: "Leadership roles",
    description:
      "For verified roles with the organisation, position, tenure and supporting record documented.",
  },
  {
    key: "associations",
    title: "Professional associations",
    description:
      "For confirmed memberships or service roles supported by reliable organisation details.",
  },
  {
    key: "community",
    title: "Community service",
    description:
      "For documented healthcare initiatives, camps and service activities with clear context.",
  },
  {
    key: "awards",
    title: "Awards & felicitations",
    description:
      "For recognitions published with the presenting body, occasion and verified date.",
  },
  {
    key: "certificates",
    title: "Certificates",
    description:
      "For relevant certificates shown with their issuer, subject and verified details.",
  },
  {
    key: "events",
    title: "Official healthcare & public events",
    description:
      "For factual event records that identify the occasion and Dr. Patil's verified role neutrally.",
  },
] as const;

export const recognitionMediaFramework = [
  {
    key: "documents",
    label: "Certificates & documents",
    detail: "Issuer, subject and verified date",
  },
  {
    key: "recognition-photos",
    label: "Recognition photographs",
    detail: "Event, presenting body and context",
  },
  {
    key: "community-photos",
    label: "Community event photographs",
    detail: "Activity, location and verified role",
  },
] as const;

export type RecognitionCategoryKey =
  (typeof recognitionCategories)[number]["key"];

export type RecognitionMediaKey =
  (typeof recognitionMediaFramework)[number]["key"];
