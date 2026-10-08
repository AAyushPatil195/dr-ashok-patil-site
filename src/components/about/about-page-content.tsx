"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Ear,
  GraduationCap,
  HeartHandshake,
  Languages,
  MapPin,
  MessageSquareText,
  Milestone,
  Stethoscope,
  UsersRound,
  Waypoints,
} from "lucide-react";
import { motion } from "motion/react";
import { clinicConfig } from "@/config/clinic";
import {
  motionDuration,
  motionEasing,
  motionOffset,
  motionScale,
  motionStagger,
} from "@/lib/motion";

type CarePrinciple = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const profileDetails = [
  { label: "Qualification", value: "B.A.M.S." },
  { label: "Role", value: "General Practitioner" },
  { label: "Experience", value: "Approximately 28 years" },
] as const;

const journeySteps = [
  {
    number: "01",
    title: "A practice begins",
    description:
      "Dr. Patil began general practice approximately 28 years ago, serving patients in Shani Peth, Jalgaon.",
  },
  {
    number: "02",
    title: "Trust built nearby",
    description:
      "The earlier practice operated from a rented clinic roughly 50–80 metres from the present location.",
  },
  {
    number: "03",
    title: "A permanent clinic",
    description:
      "The practice later moved into its current permanent clinic while remaining rooted in the same locality.",
  },
  {
    number: "04",
    title: "Care across generations",
    description:
      "Today, the practice continues to support children, adults, elderly patients and families returning over many years.",
  },
] as const;

const carePrinciples: readonly CarePrinciple[] = [
  {
    title: "Listen carefully",
    description:
      "Give patients room to explain their concern, history and practical needs.",
    icon: Ear,
  },
  {
    title: "Assess practically",
    description:
      "Approach general health concerns with considered diagnosis and appropriate treatment.",
    icon: Stethoscope,
  },
  {
    title: "Guide clearly",
    description:
      "Explain treatment and follow-up in a direct, understandable way.",
    icon: BookOpenCheck,
  },
  {
    title: "Refer appropriately",
    description:
      "Recognise when focused specialist evaluation or higher-level care is required.",
    icon: Waypoints,
  },
];

const primaryLanguages = ["Marathi", "Hindi", "Hinglish"] as const;
const additionalLanguages = ["English", "Marwari", "Bengali"] as const;
const patientGroups = [
  "Children",
  "Adults",
  "Elderly patients",
  "Chronic-care patients",
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

export function AboutPageContent() {
  return (
    <>
      <section
        aria-labelledby="about-page-heading"
        className="relative isolate overflow-hidden bg-background pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pb-20"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_10%_12%,var(--soft-accent),transparent_35%),radial-gradient(circle_at_94%_28%,color-mix(in_srgb,var(--accent)_14%,transparent),transparent_30%),linear-gradient(180deg,var(--background),var(--surface))]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-28 top-20 -z-10 size-80 rounded-full border border-primary/10"
        />

        <div className="site-container grid items-end gap-9 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 xl:gap-20">
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
              About Dr. Ashok Patil
            </motion.p>
            <motion.h1
              id="about-page-heading"
              variants={revealVariants}
              className="mt-5 max-w-[14ch] font-display text-[clamp(2.55rem,10vw,3.8rem)] leading-[1.01] font-[750] tracking-[-0.055em] text-text lg:text-[clamp(3.4rem,4.8vw,4.45rem)]"
            >
              Nearly three decades of care, rooted in Jalgaon.
            </motion.h1>
            <motion.p
              variants={revealVariants}
              className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
            >
              Dr. Ashok Arjun Patil is a B.A.M.S. General Practitioner with a
              long-standing family practice in Shani Peth, built around
              practical, patient-first care.
            </motion.p>

            <motion.dl
              variants={revealVariants}
              className="mt-8 grid border-y border-border sm:grid-cols-3"
            >
              {profileDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="border-b border-border py-4 last:border-b-0 sm:border-r sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:border-r-0"
                >
                  <dt className="text-[0.68rem] font-extrabold tracking-[0.1em] text-muted uppercase">
                    {detail.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-extrabold text-primary-dark">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.aside
            aria-label="Practice overview"
            className="relative overflow-hidden rounded-[var(--radius-panel)] border border-primary/15 bg-surface/90 p-6 shadow-featured backdrop-blur-lg sm:p-8 lg:p-9"
            initial={{ opacity: 0, y: motionOffset.revealY }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: motionDuration.reveal,
              delay: 0.14,
              ease: motionEasing.standard,
            }}
          >
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-20 size-56 rounded-full bg-soft-accent blur-3xl"
            />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-[1rem] bg-primary text-surface shadow-standard">
                  <HeartHandshake aria-hidden="true" className="size-6" />
                </span>
                <span className="text-xs font-extrabold tracking-[0.12em] text-accent uppercase">
                  Shani Peth · Jalgaon
                </span>
              </div>
              <p className="mt-12 text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
                Approximately
              </p>
              <p className="mt-2 text-6xl leading-none font-extrabold tracking-[-0.075em] text-primary-dark sm:text-7xl">
                28
              </p>
              <p className="mt-2 max-w-xs text-lg leading-7 font-extrabold text-text sm:text-xl">
                years in general practice
              </p>
              <p className="mt-5 max-w-md text-sm leading-6 text-muted sm:text-base sm:leading-7">
                A familiar first point of care for common concerns, continuing
                health needs and families at different stages of life.
              </p>
              <div className="mt-7 flex items-center gap-3 border-t border-border pt-5 text-sm font-bold text-primary-dark">
                <UsersRound aria-hidden="true" className="size-5 text-primary" />
                Family practice across generations
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section
        aria-labelledby="professional-journey-heading"
        className="relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-24"
      >
        <div className="site-container">
          <motion.div
            className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={revealVariants}
          >
            <div>
              <p className="text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
                Professional journey
              </p>
              <h2
                id="professional-journey-heading"
                className="mt-4 max-w-[11ch] font-display text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-text sm:text-4xl lg:text-[2.9rem]"
              >
                A practice that stayed close to home.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7 lg:justify-self-end">
              The clinic has evolved from a nearby rented space into a
              permanent practice, without leaving the Shani Peth community it
              has served for many years.
            </p>
          </motion.div>

          <motion.ol
            className="relative mt-10 grid list-none gap-0 border-y border-border p-0 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: motionStagger.cards } },
            }}
          >
            {journeySteps.map((step, index) => (
              <motion.li
                key={step.number}
                variants={revealVariants}
                className="relative grid grid-cols-[2.5rem_1fr] gap-4 border-b border-border py-6 last:border-b-0 lg:block lg:border-r lg:border-b-0 lg:px-6 lg:py-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <div className="relative z-10 grid size-10 place-items-center rounded-full border border-primary/20 bg-soft-accent text-xs font-extrabold text-primary">
                  {step.number}
                </div>
                {index < journeySteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute top-16 bottom-0 left-5 w-px bg-border lg:top-12 lg:right-0 lg:bottom-auto lg:left-16 lg:h-px lg:w-auto"
                  />
                ) : null}
                <div className="lg:mt-8">
                  <h3 className="text-lg font-extrabold tracking-[-0.025em] text-primary-dark sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      <section
        aria-labelledby="care-approach-heading"
        className="relative overflow-hidden bg-soft-accent py-16 sm:py-20 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute -left-32 top-10 size-80 rounded-full bg-surface/70 blur-3xl"
        />
        <div className="site-container relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
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
              Approach to care
            </p>
            <h2
              id="care-approach-heading"
              className="mt-4 max-w-[12ch] font-display text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-text sm:text-4xl lg:text-[2.9rem]"
            >
              Practical care begins with understanding.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-6 text-muted sm:text-base sm:leading-7">
              The aim is straightforward: understand the concern, offer clear
              general-practice guidance and help the patient take the right
              next step.
            </p>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-[var(--radius-panel)] border border-primary/15 bg-surface shadow-featured"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.14 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: motionStagger.cards } },
            }}
          >
            {carePrinciples.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <motion.article
                  key={principle.title}
                  variants={revealVariants}
                  className="grid grid-cols-[2.75rem_1fr_auto] gap-4 border-b border-border p-5 last:border-b-0 sm:p-6"
                >
                  <span className="grid size-11 place-items-center rounded-[0.9rem] bg-surface-muted text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-primary-dark sm:text-lg">
                      {principle.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted">
                      {principle.description}
                    </p>
                  </div>
                  <span className="pt-1 text-[0.68rem] font-extrabold tracking-[0.1em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
        <div className="site-container grid gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:gap-8">
          <motion.article
            aria-labelledby="credentials-heading"
            className="relative isolate overflow-hidden rounded-[var(--radius-panel)] border border-primary/15 bg-surface p-6 shadow-featured sm:p-8 lg:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealVariants}
          >
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 -z-10 size-64 rounded-full bg-soft-accent blur-3xl"
            />
            <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-stretch">
              <div>
                <span className="grid size-12 place-items-center rounded-[1rem] bg-soft-accent text-primary">
                  <GraduationCap aria-hidden="true" className="size-6" />
                </span>
                <p className="mt-8 text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
                  Qualifications & credentials
                </p>
                <h2
                  id="credentials-heading"
                  className="mt-4 text-4xl font-extrabold tracking-[-0.055em] text-primary-dark sm:text-5xl"
                >
                  B.A.M.S.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-muted sm:text-base sm:leading-7">
                  Dr. Patil practises as a General Practitioner. Professional
                  registration and certification are available, while
                  sensitive identifying numbers are not published here.
                </p>
              </div>

              <div className="flex min-h-56 flex-col justify-between rounded-[var(--radius-card)] border border-primary/15 bg-soft-accent p-5 sm:p-6">
                <BadgeCheck aria-hidden="true" className="size-7 text-primary" />
                <div>
                  <p className="text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
                    Credential documentation
                  </p>
                  <p className="mt-3 text-sm leading-6 font-bold text-primary-dark">
                    Reserved for an approved certificate or registration image.
                  </p>
                  <p className="mt-2 text-xs leading-5 text-muted">
                    The layout is ready for verified media without exposing
                    private certificate details.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article
            aria-labelledby="languages-heading"
            className="border-y border-border py-7 lg:px-6 lg:py-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={revealVariants}
          >
            <Languages aria-hidden="true" className="size-7 text-primary" />
            <p className="mt-8 text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
              Patient communication
            </p>
            <h2
              id="languages-heading"
              className="mt-4 max-w-[12ch] text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-text sm:text-4xl"
            >
              Familiar languages make care clearer.
            </h2>

            <div className="mt-7">
              <p className="text-xs font-extrabold tracking-[0.1em] text-muted uppercase">
                Primary languages
              </p>
              <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
                {primaryLanguages.map((language) => (
                  <li
                    key={language}
                    className="rounded-full bg-primary px-3.5 py-2 text-sm font-extrabold text-surface"
                  >
                    {language}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 border-t border-border pt-6">
              <p className="text-xs font-extrabold tracking-[0.1em] text-muted uppercase">
                Additional conversational ability
              </p>
              <p className="mt-3 text-sm leading-7 font-semibold text-primary-dark sm:text-base">
                {additionalLanguages.join(" · ")}
              </p>
              <p className="mt-2 text-xs leading-5 text-muted">
                Communication ability in these languages is more limited.
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      <section
        aria-labelledby="family-practice-heading"
        className="relative isolate overflow-hidden bg-primary-dark py-16 text-surface sm:py-20 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 -z-10 size-96 rounded-full bg-primary/45 blur-3xl"
        />
        <div className="site-container">
          <motion.div
            className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealVariants}
          >
            <div>
              <p className="text-xs font-extrabold tracking-[0.12em] text-soft-accent uppercase">
                A long-standing family practice
              </p>
              <h2
                id="family-practice-heading"
                className="mt-4 max-w-[13ch] font-display text-3xl leading-[1.06] font-[750] tracking-[-0.05em] text-surface sm:text-4xl lg:text-[3.2rem]"
              >
                Care that continues across generations.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-dark-muted sm:text-base sm:leading-7 lg:justify-self-end">
              Many families return over the years as their healthcare needs
              change. That continuity helps keep care personal, practical and
              grounded in an understanding of the family context.
            </p>
          </motion.div>

          <motion.ul
            className="mt-10 grid list-none overflow-hidden rounded-[var(--radius-panel)] border border-dark-border bg-dark-panel p-0 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: motionStagger.cards } },
            }}
          >
            {patientGroups.map((group, index) => (
              <motion.li
                key={group}
                variants={revealVariants}
                className="border-b border-dark-border p-5 last:border-b-0 sm:border-r sm:p-6 sm:nth-[2]:border-r-0 sm:nth-[3]:border-b-0 lg:border-b-0 lg:nth-[2]:border-r lg:last:border-r-0"
              >
                <span className="text-xs font-extrabold tracking-[0.1em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-6 text-base font-extrabold text-surface sm:text-lg">
                  {group}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-6 flex items-start gap-3 border-l-2 border-accent pl-4 text-sm leading-6 text-dark-muted"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={revealVariants}
          >
            <Milestone
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 text-accent"
            />
            <p>
              General healthcare is provided across age groups, with
              appropriate specialist referral when focused care is required.
            </p>
          </motion.div>
        </div>
      </section>

      <section
        aria-labelledby="about-cta-heading"
        className="bg-soft-accent py-14 sm:py-16"
      >
        <motion.div
          className="site-container flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={revealVariants}
        >
          <div>
            <p className="text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
              Plan your visit
            </p>
            <h2
              id="about-cta-heading"
              className="mt-3 text-2xl leading-tight font-extrabold tracking-[-0.04em] text-primary-dark sm:text-3xl"
            >
              Need to visit Dr. Patil?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
              Send an enquiry or open directions to the clinic in Shani Peth,
              Jalgaon.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <motion.div
              className="inline-flex"
              whileHover={{ y: -2 }}
              whileTap={{ scale: motionScale.press }}
            >
              <Link
                href="/contact#enquiry"
                className="group inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-[var(--radius-control)] bg-primary px-5 text-sm font-extrabold text-surface shadow-standard transition-colors duration-200 hover:bg-primary-dark focus-visible:outline-offset-4 sm:w-auto"
              >
                <MessageSquareText aria-hidden="true" className="size-4" />
                Send enquiry
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
            <motion.a
              href={clinicConfig.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-[var(--radius-control)] border border-primary/25 bg-surface px-5 text-sm font-extrabold text-primary-dark shadow-standard transition-colors duration-200 hover:border-primary/45 hover:bg-surface-muted focus-visible:outline-offset-4"
              whileHover={{ y: -2 }}
              whileTap={{ scale: motionScale.press }}
            >
              <MapPin aria-hidden="true" className="size-4 text-primary" />
              Get directions
            </motion.a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
