export const mediaConfig = {
  doctorPortrait: {
    src: "/images/dr-ashok-patil-placeholder.svg",
    alt: "Portrait of Dr. Ashok A. Patil",
    isPlaceholder: true,
  },
  clinicGallery: [
    {
      key: "consultation-cabin",
      src: null as string | null,
      alt: "Consultation cabin at Dr. Ashok A. Patil's clinic",
      label: "Consultation cabin",
      detail: "Dedicated cabin · AC available here",
    },
    {
      key: "treatment-area",
      src: null as string | null,
      alt: "Saline and treatment area at Dr. Ashok A. Patil's clinic",
      label: "Saline & treatment area",
      detail: "Dedicated space for IV and saline care",
    },
    {
      key: "waiting-area",
      src: null as string | null,
      alt: "Waiting area at Dr. Ashok A. Patil's clinic",
      label: "Waiting area",
      detail: "Spacious seating for patients and families",
    },
  ],
} as const;
