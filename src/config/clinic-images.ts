export const clinicImageCategories = [
  { key: "consultation", label: "Consultation" },
  { key: "treatment", label: "Treatment / Examination" },
  { key: "saline", label: "IV / Saline Room" },
  { key: "waiting", label: "Waiting Area" },
  { key: "interior", label: "Interior" },
] as const;

export type ClinicImageCategory = (typeof clinicImageCategories)[number]["key"];

export type ClinicImage = {
  key: string;
  src: string;
  originalSrc: string;
  width: number;
  height: number;
  category: ClinicImageCategory;
  label: string;
  detail: string;
  alt: string;
  objectPosition: string;
  presentation: "lead" | "tall" | "wide" | "portrait";
  isProvisional: true;
};

export const clinicImageNotice =
  "Provisional images: digitally altered, including furniture and fixtures. Subject to verification against the actual clinic.";

// Preserve the supplied PNGs. Lossless WebP copies retain their full resolution;
// next/image serves responsive derivatives without changing either source.
// The all-spaces sequence separates similar consultation and examination angles.
export const clinicImages = [
  {
    key: "consultation-overview",
    src: "/images/clinic/optimized/imgConsultation_01.webp",
    originalSrc: "/images/imgConsultation_01.png",
    width: 1086,
    height: 1448,
    category: "consultation",
    label: "Consultation cabin",
    detail: "A view across the consultation desk",
    alt: "Edited consultation-room view showing a desk and chairs beside a blue wall",
    objectPosition: "50% 66%",
    presentation: "lead",
    isProvisional: true,
  },
  {
    key: "examination-overview",
    src: "/images/clinic/optimized/imgExamination_01.webp",
    originalSrc: "/images/imgExamination_01.png",
    width: 1086,
    height: 1448,
    category: "treatment",
    label: "Treatment / examination area",
    detail: "An overview of the examination space",
    alt: "Edited examination-area view with a blue privacy curtain and counter",
    objectPosition: "50% 50%",
    presentation: "tall",
    isProvisional: true,
  },
  {
    key: "saline-room",
    src: "/images/clinic/optimized/imgSalineRoom_01.webp",
    originalSrc: "/images/imgSalineRoom_01.png",
    width: 1448,
    height: 1086,
    category: "saline",
    label: "IV / saline room",
    detail: "A wider view of the room",
    alt: "Edited IV and saline-room view showing beds along the walls",
    objectPosition: "50% 60%",
    presentation: "wide",
    isProvisional: true,
  },
  {
    key: "waiting-overview",
    src: "/images/clinic/optimized/imgWaitingArea_01.webp",
    originalSrc: "/images/imgWaitingArea_01.png",
    width: 1448,
    height: 1086,
    category: "waiting",
    label: "Waiting area",
    detail: "A view from the seating area",
    alt: "Edited waiting-area view with wall-side seating and an interior doorway",
    objectPosition: "50% 55%",
    presentation: "wide",
    isProvisional: true,
  },
  {
    key: "consultation-alternate",
    src: "/images/clinic/optimized/imgConsultation_02.webp",
    originalSrc: "/images/imgConsultation_02.png",
    width: 1448,
    height: 1086,
    category: "consultation",
    label: "Consultation room · another perspective",
    detail: "The desk viewed from the opposite side",
    alt: "Edited alternate consultation-room view showing the desk and visitor chairs",
    objectPosition: "50% 60%",
    presentation: "wide",
    isProvisional: true,
  },
  {
    key: "waiting-alternate",
    src: "/images/clinic/optimized/imgWaitingArea_02.webp",
    originalSrc: "/images/imgWaitingArea_02.png",
    width: 1086,
    height: 1448,
    category: "waiting",
    label: "Waiting area · seating view",
    detail: "A second perspective of the waiting space",
    alt: "Edited waiting-area view showing seating beneath a window",
    objectPosition: "50% 55%",
    presentation: "tall",
    isProvisional: true,
  },
  {
    key: "treatment-counter",
    src: "/images/clinic/optimized/imgTreatmentPrep_01.webp",
    originalSrc: "/images/imgTreatmentPrep_01.png",
    width: 1086,
    height: 1448,
    category: "treatment",
    label: "Treatment area · counter view",
    detail: "A closer view of the treatment counter",
    alt: "Edited treatment-counter view beside a blue curtain",
    objectPosition: "50% 48%",
    presentation: "wide",
    isProvisional: true,
  },
  {
    key: "consultation-detail",
    src: "/images/clinic/optimized/imgConsultation_03.webp",
    originalSrc: "/images/imgConsultation_03.png",
    width: 1086,
    height: 1448,
    category: "consultation",
    label: "Consultation desk · closer view",
    detail: "A detail from the consultation room",
    alt: "Edited close view of the consultation desk and doctor's chair",
    objectPosition: "50% 50%",
    presentation: "portrait",
    isProvisional: true,
  },
  {
    key: "examination-detail",
    src: "/images/clinic/optimized/imgExamination_02.webp",
    originalSrc: "/images/imgExamination_02.png",
    width: 1086,
    height: 1448,
    category: "treatment",
    label: "Examination area · closer view",
    detail: "Another perspective of the examination space",
    alt: "Edited examination-area view showing a couch alongside a blue curtain",
    objectPosition: "50% 50%",
    presentation: "portrait",
    isProvisional: true,
  },
  {
    key: "interior-corridor",
    src: "/images/clinic/optimized/imgCorridor_01.webp",
    originalSrc: "/images/imgCorridor_01.png",
    width: 1086,
    height: 1448,
    category: "interior",
    label: "Clinic interior",
    detail: "A view along the interior corridor",
    alt: "Edited clinic-interior view looking along a corridor with doorways",
    objectPosition: "50% 50%",
    presentation: "portrait",
    isProvisional: true,
  },
] as const satisfies readonly ClinicImage[];

export const clinicPreviewImages: readonly ClinicImage[] = [
  clinicImages[0],
  clinicImages[2],
  clinicImages[3],
];
