const clinicPhoneNumber = "+919405963994";

export const clinicConfig = {
  phone: {
    number: clinicPhoneNumber,
    display: "+91 94059 63994",
    href: `tel:${clinicPhoneNumber}`,
  },
  addressLines: [
    "B1/1019, Shani Peth, Kinara",
    "Jalgaon, Maharashtra 425001",
  ],
  address:
    "B1/1019, Shani Peth, Kinara, Jalgaon, Maharashtra 425001",
  landmark: "Near Phule / Fule Market and the main vegetable market area",
  morningHours: "10:00 AM – 2:30 PM",
  eveningHours: "6:00 PM – 10:30 PM",
  sundayNote: "Sunday morning closed",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=B1%2F1019%2C%20Shani%20Peth%2C%20Kinara%2C%20Jalgaon%2C%20Maharashtra%20425001",
  mapEmbedUrl:
    "https://www.google.com/maps?q=B1%2F1019%2C%20Shani%20Peth%2C%20Kinara%2C%20Jalgaon%2C%20Maharashtra%20425001&output=embed",
} as const;
