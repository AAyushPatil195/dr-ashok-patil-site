import { z } from "zod";

const optionalEmailSchema = z
  .string()
  .trim()
  .max(254, "Email is too long.")
  .refine(
    (value) => value.length === 0 || z.string().email().safeParse(value).success,
    "Enter a valid email address.",
  )
  .transform((value) => value || undefined);

const optionalTextSchema = z
  .string()
  .trim()
  .max(100, "Preferred time must be 100 characters or fewer.")
  .transform((value) => value || undefined);

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your name.")
    .max(80, "Name must be 80 characters or fewer."),
  phone: z
    .string()
    .trim()
    .min(8, "Enter a valid phone number.")
    .max(20, "Phone number must be 20 characters or fewer.")
    .regex(/^[+\d][\d\s()-]+$/, "Enter a valid phone number."),
  email: optionalEmailSchema,
  message: z
    .string()
    .trim()
    .min(10, "Please add a little more detail about your visit.")
    .max(1500, "Message must be 1,500 characters or fewer."),
  preferredTime: optionalTextSchema,
  website: z.string().max(200).optional().default(""),
});

export type EnquiryInput = z.input<typeof enquirySchema>;
export type EnquiryData = z.output<typeof enquirySchema>;
