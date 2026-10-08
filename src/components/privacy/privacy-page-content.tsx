"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ClipboardList,
  FileText,
  Mail,
  MessageSquareText,
  ShieldCheck,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { motion } from "motion/react";
import {
  motionDuration,
  motionEasing,
  motionOffset,
  motionScale,
  motionStagger,
} from "@/lib/motion";

const collectedDetails = [
  "Name",
  "Phone number",
  "Email, if provided",
  "Preferred consultation time, if provided",
  "Message or reason for enquiry",
] as const;

const medicalLimitations = [
  "Website content is general information, not a diagnosis.",
  "It is not a substitute for an in-person medical consultation.",
  "Treatment decisions depend on an individual clinical assessment.",
  "A website enquiry does not constitute a confirmed appointment.",
  "No treatment result or outcome is guaranteed.",
] as const;

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

export function PrivacyPageContent() {
  return (
    <>
      <section
        aria-labelledby="privacy-page-heading"
        className="relative isolate overflow-hidden bg-background pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pb-20"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_10%,var(--soft-accent),transparent_35%),radial-gradient(circle_at_92%_32%,color-mix(in_srgb,var(--accent)_11%,transparent),transparent_27%),linear-gradient(180deg,var(--background),var(--surface))]"
        />
        <div className="site-container grid items-end gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: motionStagger.cards } },
            }}
          >
            <motion.p
              variants={revealVariants}
              className="flex items-center gap-2.5 text-[0.72rem] font-extrabold tracking-[0.14em] text-primary uppercase sm:text-xs"
            >
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Website information
            </motion.p>
            <motion.h1
              id="privacy-page-heading"
              variants={revealVariants}
              className="mt-5 max-w-[13ch] font-display text-[clamp(2.5rem,10vw,3.75rem)] leading-[1.02] font-[750] tracking-[-0.055em] text-text lg:text-[clamp(3.35rem,4.7vw,4.35rem)]"
            >
              Privacy & Medical Disclaimer
            </motion.h1>
            <motion.p
              variants={revealVariants}
              className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
            >
              Plain-language guidance about website enquiries, medical
              information and when this website should not be used.
            </motion.p>
          </motion.div>

          <motion.nav
            aria-label="On this page"
            className="rounded-[var(--radius-card)] border border-primary/15 bg-surface/92 p-5 shadow-standard backdrop-blur-lg sm:p-6"
            initial={{ opacity: 0, y: motionOffset.revealY }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: motionDuration.reveal,
              delay: 0.12,
              ease: motionEasing.standard,
            }}
          >
            <p className="text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
              On this page
            </p>
            <div className="mt-4 grid gap-1">
              {[
                ["Enquiry privacy", "#enquiry-privacy"],
                ["Medical disclaimer", "#medical-disclaimer"],
                ["Emergency notice", "#emergency-notice"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex min-h-11 items-center justify-between rounded-[var(--radius-control)] px-3 text-sm font-bold text-primary-dark transition-colors hover:bg-soft-accent"
                >
                  {label}
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4 text-primary transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              ))}
            </div>
          </motion.nav>
        </div>
      </section>

      <section
        id="enquiry-privacy"
        aria-labelledby="enquiry-privacy-heading"
        className="scroll-mt-24 bg-surface py-16 sm:py-20 lg:py-24"
      >
        <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={revealVariants}
          >
            <span className="grid size-12 place-items-center rounded-[1rem] bg-soft-accent text-primary">
              <ShieldCheck aria-hidden="true" className="size-6" />
            </span>
            <p className="mt-8 text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
              Enquiry privacy
            </p>
            <h2
              id="enquiry-privacy-heading"
              className="mt-4 max-w-[13ch] font-display text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-text sm:text-4xl lg:text-[2.8rem]"
            >
              Only the details needed to respond.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
              Information submitted through the enquiry form is used to review
              and respond to the request. Submissions may be delivered to the
              clinic through email.
            </p>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-[var(--radius-panel)] border border-primary/15 bg-background shadow-standard"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={revealVariants}
          >
            <div className="flex items-center gap-3 border-b border-border px-5 py-4 sm:px-6">
              <ClipboardList aria-hidden="true" className="size-5 text-primary" />
              <h3 className="text-base font-extrabold text-primary-dark">
                What the form may collect
              </h3>
            </div>
            <ul className="grid list-none gap-0 p-0 sm:grid-cols-2">
              {collectedDetails.map((detail, index) => (
                <li
                  key={detail}
                  className={`flex min-h-16 items-center gap-3 border-border px-5 py-4 text-sm font-bold text-text sm:px-6 ${
                    index < collectedDetails.length - 1 ? "border-b" : ""
                  } ${index % 2 === 0 ? "sm:border-r" : ""} ${
                    index === collectedDetails.length - 1
                      ? "sm:col-span-2 sm:border-r-0"
                      : ""
                  }`}
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-soft-accent text-primary">
                    <Check aria-hidden="true" className="size-3.5" />
                  </span>
                  {detail}
                </li>
              ))}
            </ul>
            <div className="grid gap-4 border-t border-border bg-surface-muted p-5 sm:grid-cols-2 sm:p-6">
              <div className="flex items-start gap-3">
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-primary"
                />
                <p className="text-sm leading-6 text-muted">
                  Contact details and the message are used to respond to the
                  enquiry.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <UserRound
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-primary"
                />
                <p className="text-sm leading-6 text-muted">
                  The website does not intentionally request unnecessary
                  sensitive information.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="medical-disclaimer"
        aria-labelledby="medical-disclaimer-heading"
        className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-24"
      >
        <div className="site-container grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={revealVariants}
          >
            <span className="grid size-12 place-items-center rounded-[1rem] bg-primary text-surface shadow-standard">
              <Stethoscope aria-hidden="true" className="size-6" />
            </span>
            <p className="mt-8 text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
              Medical disclaimer
            </p>
            <h2
              id="medical-disclaimer-heading"
              className="mt-4 max-w-[13ch] font-display text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-text sm:text-4xl lg:text-[2.8rem]"
            >
              Information cannot replace an assessment.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
              Healthcare decisions are personal and depend on the patient&apos;s
              symptoms, history and clinical examination.
            </p>
          </motion.div>

          <motion.ol
            className="grid list-none gap-3 p-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: motionStagger.cards } },
            }}
          >
            {medicalLimitations.map((limitation, index) => (
              <motion.li
                key={limitation}
                variants={revealVariants}
                className="flex items-start gap-4 rounded-[var(--radius-card)] border border-primary/15 bg-surface p-4 shadow-standard sm:p-5"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-soft-accent text-xs font-extrabold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-sm leading-6 font-bold text-primary-dark sm:text-base sm:leading-7">
                  {limitation}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      <section
        id="emergency-notice"
        aria-labelledby="emergency-notice-heading"
        className="scroll-mt-24 bg-surface py-14 sm:py-16 lg:py-20"
      >
        <motion.div
          className="site-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={revealVariants}
        >
          <div className="relative isolate overflow-hidden rounded-[var(--radius-panel)] bg-primary-dark px-5 py-8 text-surface shadow-featured sm:px-8 sm:py-10 lg:grid lg:grid-cols-[auto_1fr] lg:gap-7 lg:px-10">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-28 -z-10 size-72 rounded-full bg-primary/50 blur-3xl"
            />
            <span className="grid size-12 place-items-center rounded-[1rem] border border-dark-border bg-dark-panel-strong text-accent">
              <AlertTriangle aria-hidden="true" className="size-6" />
            </span>
            <div className="mt-6 lg:mt-0">
              <p className="text-xs font-extrabold tracking-[0.12em] text-soft-accent uppercase">
                Emergency notice
              </p>
              <h2
                id="emergency-notice-heading"
                className="mt-3 max-w-[18ch] font-display text-2xl leading-tight font-[750] tracking-[-0.04em] sm:text-3xl"
              >
                Do not use this website for a medical emergency.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-dark-muted sm:text-base sm:leading-7">
                For an urgent or emergency situation, contact the appropriate
                local emergency medical services or visit the nearest emergency
                facility. Do not wait for a response to a website enquiry.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        aria-labelledby="website-limits-heading"
        className="bg-background py-16 sm:py-20"
      >
        <div className="site-container grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={revealVariants}
          >
            <p className="text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
              Website limitations
            </p>
            <h2
              id="website-limits-heading"
              className="mt-4 max-w-[15ch] font-display text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-text sm:text-4xl"
            >
              Clear boundaries for a practical website.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
              Website information may be updated as clinic details and service
              providers are finalised before production launch. This page does
              not claim a specific data-retention period, security certification
              or regulatory compliance that has not been independently verified.
            </p>
          </motion.div>

          <motion.aside
            className="rounded-[var(--radius-card)] border border-primary/15 bg-surface p-5 shadow-standard sm:p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={revealVariants}
          >
            <div className="flex items-start gap-3">
              <FileText
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-primary"
              />
              <div>
                <p className="text-sm font-extrabold text-primary-dark">
                  Practitioner information
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Dr. Ashok A. Patil
                  <br />
                  B.A.M.S.
                  <br />
                  General Practitioner
                </p>
              </div>
            </div>
            <div className="mt-6 border-t border-border pt-5">
              <motion.div whileTap={{ scale: motionScale.press }}>
                <Link
                  href="/contact#enquiry"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-control)] bg-primary px-5 text-sm font-extrabold text-surface shadow-standard transition-colors hover:bg-primary-dark focus-visible:outline-offset-4"
                >
                  <MessageSquareText aria-hidden="true" className="size-4" />
                  Go to enquiry form
                </Link>
              </motion.div>
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  );
}
