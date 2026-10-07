"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CheckCircle2, Clock3, Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { enquirySchema } from "@/lib/enquiry-schema";
import {
  motionDuration,
  motionEasing,
  motionOffset,
  motionScale,
  motionStagger,
} from "@/lib/motion";

type FormStatus = "idle" | "submitting" | "success" | "error";
type FieldErrors = Partial<
  Record<"name" | "phone" | "email" | "message" | "preferredTime", string>
>;

type ApiResponse = {
  success?: boolean;
  message?: string;
  fieldErrors?: Record<string, string[]>;
};

const inputClassName =
  "min-h-12 w-full rounded-control border border-border-strong bg-surface px-3.5 text-base text-text shadow-[inset_0_1px_0_var(--dark-panel)] outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-muted/60 hover:border-primary/35 focus:border-primary focus:ring-4 focus:ring-accent/15 disabled:cursor-wait disabled:bg-surface-muted disabled:opacity-70";

const revealVariants = {
  hidden: { opacity: 0, y: motionOffset.revealY },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDuration.reveal,
      ease: motionEasing.standard,
    },
  },
};

function getClientErrors(data: Record<string, string>) {
  const parsed = enquirySchema.safeParse(data);
  if (parsed.success) return {};

  const nextErrors: FieldErrors = {};

  for (const issue of parsed.error.issues) {
    const field = issue.path[0];
    if (
      typeof field === "string" &&
      field !== "website" &&
      !(field in nextErrors)
    ) {
      nextErrors[field as keyof FieldErrors] = issue.message;
    }
  }

  return nextErrors;
}

export function EnquirySection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const clearFieldError = (fieldName: string) => {
    if (!(fieldName in fieldErrors)) return;
    setFieldErrors((current) => ({ ...current, [fieldName]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;
    const clientErrors = getClientErrors(payload);

    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      setStatus("error");
      setStatusMessage("Please correct the highlighted fields.");
      const firstInvalidField = form.querySelector<HTMLElement>(
        `[name="${Object.keys(clientErrors)[0]}"]`,
      );
      firstInvalidField?.focus();
      return;
    }

    setFieldErrors({});
    setStatus("submitting");
    setStatusMessage("Sending your enquiry…");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as ApiResponse;

      if (!response.ok || !result.success) {
        const serverErrors: FieldErrors = {};
        for (const [field, messages] of Object.entries(
          result.fieldErrors ?? {},
        )) {
          if (field !== "website" && messages[0]) {
            serverErrors[field as keyof FieldErrors] = messages[0];
          }
        }
        setFieldErrors(serverErrors);
        setStatus("error");
        setStatusMessage(
          result.message ?? "We could not send your enquiry. Please try again.",
        );
        return;
      }

      form.reset();
      setStatus("success");
      setStatusMessage(
        result.message ?? "Thank you. Your enquiry has been sent.",
      );
    } catch {
      setStatus("error");
      setStatusMessage(
        "We could not connect to the enquiry service. Please try again shortly.",
      );
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <section
      aria-labelledby="enquiry-heading"
      className="relative overflow-hidden bg-soft-accent py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute -left-28 top-12 size-80 rounded-full bg-surface/55 blur-3xl"
      />
      <div
        id="enquiry"
        className="site-container relative grid overflow-hidden rounded-[var(--radius-panel)] border border-primary/15 bg-surface shadow-featured lg:grid-cols-[0.82fr_1.18fr]"
      >
        <motion.div
          className="relative isolate overflow-hidden bg-primary-dark p-6 text-surface sm:p-9 lg:p-10 xl:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: motionStagger.cards } },
          }}
        >
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 -z-10 size-64 rounded-full bg-accent/20 blur-3xl"
          />
          <motion.p
            variants={revealVariants}
            className="flex items-center gap-2.5 text-[0.72rem] font-extrabold tracking-[0.14em] text-surface/80 uppercase sm:text-xs"
          >
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Appointment & enquiry
          </motion.p>
          <motion.h2
            id="enquiry-heading"
            variants={revealVariants}
            className="mt-5 max-w-[12ch] font-display text-3xl leading-[1.08] font-[750] tracking-[-0.045em] sm:text-4xl lg:text-[2.8rem]"
          >
            Tell us how we can help.
          </motion.h2>
          <motion.p
            variants={revealVariants}
            className="mt-5 max-w-md text-sm leading-6 text-surface/75 sm:text-base sm:leading-7"
          >
            Send a request with your preferred time. This is an enquiry, not a
            confirmed appointment; the clinic will respond when available.
          </motion.p>

          <motion.ul
            variants={revealVariants}
            className="mt-8 grid list-none gap-4 border-t border-dark-border pt-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
          >
            <li className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-control bg-dark-panel-strong text-accent">
                <Clock3 aria-hidden="true" className="size-5" />
              </span>
              <span className="text-sm leading-6 font-semibold text-surface/85">
                Share a convenient time for a callback.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-control bg-dark-panel-strong text-accent">
                <Mail aria-hidden="true" className="size-5" />
              </span>
              <span className="text-sm leading-6 font-semibold text-surface/85">
                Requests are delivered privately by email.
              </span>
            </li>
          </motion.ul>
        </motion.div>

        <motion.form
          className="p-5 sm:p-8 lg:p-10 xl:p-12"
          onSubmit={handleSubmit}
          onChange={(event) => {
            const target = event.target as unknown as
              | HTMLInputElement
              | HTMLTextAreaElement;
            if (target.name) clearFieldError(target.name);
          }}
          noValidate
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: motionStagger.menuItems } },
          }}
        >
          <fieldset disabled={isSubmitting} className="grid gap-5 sm:grid-cols-2">
            <legend className="sr-only">Appointment and enquiry details</legend>

            <motion.div variants={revealVariants}>
              <label htmlFor="enquiry-name" className="text-sm font-extrabold text-primary-dark">
                Name <span aria-hidden="true" className="text-primary">*</span>
              </label>
              <input
                id="enquiry-name"
                name="name"
                type="text"
                autoComplete="name"
                maxLength={80}
                required
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? "enquiry-name-error" : undefined}
                className={`${inputClassName} mt-2`}
              />
              {fieldErrors.name ? (
                <p id="enquiry-name-error" className="mt-1.5 text-xs font-bold text-primary-dark">
                  {fieldErrors.name}
                </p>
              ) : null}
            </motion.div>

            <motion.div variants={revealVariants}>
              <label htmlFor="enquiry-phone" className="text-sm font-extrabold text-primary-dark">
                Phone Number <span aria-hidden="true" className="text-primary">*</span>
              </label>
              <input
                id="enquiry-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                maxLength={20}
                required
                aria-invalid={Boolean(fieldErrors.phone)}
                aria-describedby={fieldErrors.phone ? "enquiry-phone-error" : undefined}
                className={`${inputClassName} mt-2`}
              />
              {fieldErrors.phone ? (
                <p id="enquiry-phone-error" className="mt-1.5 text-xs font-bold text-primary-dark">
                  {fieldErrors.phone}
                </p>
              ) : null}
            </motion.div>

            <motion.div variants={revealVariants}>
              <label htmlFor="enquiry-email" className="text-sm font-extrabold text-primary-dark">
                Email <span className="font-semibold text-muted">(optional)</span>
              </label>
              <input
                id="enquiry-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                maxLength={254}
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? "enquiry-email-error" : undefined}
                className={`${inputClassName} mt-2`}
              />
              {fieldErrors.email ? (
                <p id="enquiry-email-error" className="mt-1.5 text-xs font-bold text-primary-dark">
                  {fieldErrors.email}
                </p>
              ) : null}
            </motion.div>

            <motion.div variants={revealVariants}>
              <label htmlFor="enquiry-time" className="text-sm font-extrabold text-primary-dark">
                Preferred Time <span className="font-semibold text-muted">(optional)</span>
              </label>
              <input
                id="enquiry-time"
                name="preferredTime"
                type="text"
                autoComplete="off"
                maxLength={100}
                placeholder="For example, evening"
                aria-invalid={Boolean(fieldErrors.preferredTime)}
                aria-describedby={fieldErrors.preferredTime ? "enquiry-time-error" : undefined}
                className={`${inputClassName} mt-2`}
              />
              {fieldErrors.preferredTime ? (
                <p id="enquiry-time-error" className="mt-1.5 text-xs font-bold text-primary-dark">
                  {fieldErrors.preferredTime}
                </p>
              ) : null}
            </motion.div>

            <motion.div variants={revealVariants} className="sm:col-span-2">
              <label htmlFor="enquiry-message" className="text-sm font-extrabold text-primary-dark">
                Reason for Visit / Message <span aria-hidden="true" className="text-primary">*</span>
              </label>
              <textarea
                id="enquiry-message"
                name="message"
                rows={4}
                maxLength={1500}
                required
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby={fieldErrors.message ? "enquiry-message-error" : "enquiry-message-help"}
                className={`${inputClassName} mt-2 min-h-32 resize-y py-3`}
              />
              {fieldErrors.message ? (
                <p id="enquiry-message-error" className="mt-1.5 text-xs font-bold text-primary-dark">
                  {fieldErrors.message}
                </p>
              ) : (
                <p id="enquiry-message-help" className="mt-1.5 text-xs leading-5 text-muted">
                  Please do not include highly sensitive medical information.
                </p>
              )}
            </motion.div>

            <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
              <label htmlFor="enquiry-website">Website</label>
              <input id="enquiry-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <motion.div variants={revealVariants} className="sm:col-span-2">
              <AnimatePresence mode="wait" initial={false}>
                {statusMessage ? (
                  <motion.div
                    key={`${status}-${statusMessage}`}
                    role={status === "error" ? "alert" : "status"}
                    aria-live={status === "error" ? "assertive" : "polite"}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: motionDuration.fast }}
                    className={`mb-4 flex items-start gap-2.5 rounded-control border px-3.5 py-3 text-sm leading-6 font-semibold ${
                      status === "success"
                        ? "border-primary/25 bg-soft-accent text-primary-dark"
                        : status === "error"
                          ? "border-accent/35 bg-accent-soft text-primary-dark"
                          : "border-border bg-surface-muted text-muted"
                    }`}
                  >
                    {status === "success" ? (
                      <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
                    ) : null}
                    <span>{statusMessage}</span>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-control bg-primary px-6 text-sm font-extrabold text-surface shadow-standard transition-[background-color,box-shadow,opacity] duration-200 hover:bg-primary-dark hover:shadow-card disabled:cursor-wait disabled:opacity-65 sm:w-auto"
                whileHover={isSubmitting ? undefined : { y: -2 }}
                whileTap={isSubmitting ? undefined : { scale: motionScale.press }}
              >
                <Send aria-hidden="true" className="size-4" />
                {isSubmitting ? "Sending…" : "Send enquiry"}
                {!isSubmitting ? (
                  <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
                ) : null}
              </motion.button>
            </motion.div>
          </fieldset>
        </motion.form>
      </div>
    </section>
  );
}
