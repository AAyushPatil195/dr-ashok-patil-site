"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  Baby,
  Bandage,
  Check,
  Droplets,
  HeartHandshake,
  MapPin,
  MessageSquareText,
  ShieldPlus,
  Stethoscope,
  Syringe,
  Waypoints,
  Wind,
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

type CareGroup = {
  title: string;
  description: string;
  services: readonly string[];
  icon: LucideIcon;
};

const everydayCare: CareGroup = {
  title: "Everyday Medical Care",
  description:
    "A practical first point of care for new symptoms and common illnesses.",
  services: [
    "General medical consultation",
    "Fever & infections",
    "Respiratory problems",
    "Digestive problems",
    "Common allergies",
  ],
  icon: Stethoscope,
};

const ongoingCare: CareGroup = {
  title: "Chronic & Ongoing Care",
  description:
    "Regular assessment and practical follow-up for longer-term health needs.",
  services: [
    "Hypertension / BP",
    "Diabetes",
    "Chronic health concerns",
    "Elderly care",
  ],
  icon: Activity,
};

const familyCare: CareGroup = {
  title: "Children & Family Care",
  description:
    "General healthcare across age groups, including common childhood illnesses.",
  services: [
    "Common childhood illnesses",
    "General healthcare across age groups",
  ],
  icon: Baby,
};

const EverydayCareIcon = everydayCare.icon;
const OngoingCareIcon = ongoingCare.icon;
const FamilyCareIcon = familyCare.icon;

const skinServices = [
  "Common skin conditions",
  "Fungal infections",
  "Allergic skin concerns where appropriate",
] as const;

const procedureServices = [
  "Wound care",
  "Dressings",
  "Suturing / stitches",
  "Minor procedures",
] as const;

const clinicSupport = [
  {
    title: "Nebulisation",
    description: "In-clinic respiratory support when advised after assessment.",
    icon: Wind,
  },
  {
    title: "Injections",
    description: "Administration when clinically advised and appropriate.",
    icon: Syringe,
  },
  {
    title: "IV / saline",
    description: "Provided where clinically appropriate in the dedicated treatment area.",
    icon: Droplets,
  },
] as const;

const carePathway = [
  {
    number: "01",
    title: "Assess",
    description: "Understand the concern and relevant history.",
  },
  {
    number: "02",
    title: "Care",
    description: "Plan practical treatment or ongoing follow-up.",
  },
  {
    number: "03",
    title: "Refer",
    description: "Guide onward when focused specialist care is required.",
  },
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

function ServiceList({
  services,
  compact = false,
}: {
  services: readonly string[];
  compact?: boolean;
}) {
  return (
    <ul
      className={`list-none p-0 ${
        compact ? "grid gap-2.5" : "grid gap-3 sm:grid-cols-2 sm:gap-x-6"
      }`}
    >
      {services.map((service) => (
        <li
          key={service}
          className="flex items-start gap-2.5 text-sm leading-6 font-semibold text-primary-dark sm:text-base"
        >
          <span className="mt-1.5 grid size-4 shrink-0 place-items-center rounded-full bg-primary text-surface">
            <Check aria-hidden="true" className="size-2.5" strokeWidth={3} />
          </span>
          <span>{service}</span>
        </li>
      ))}
    </ul>
  );
}

export function TreatmentsPageContent() {
  return (
    <>
      <section
        aria-labelledby="treatments-page-heading"
        className="relative isolate overflow-hidden bg-background pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pb-16"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_12%,var(--soft-accent),transparent_34%),radial-gradient(circle_at_92%_32%,color-mix(in_srgb,var(--accent)_13%,transparent),transparent_28%),linear-gradient(180deg,var(--background),var(--surface))]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-32 top-20 -z-10 size-80 rounded-full border border-primary/10"
        />

        <div className="site-container grid items-end gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
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
              Treatments & services
            </motion.p>
            <motion.h1
              id="treatments-page-heading"
              variants={revealVariants}
              className="mt-5 max-w-[15ch] font-display text-[clamp(2.55rem,10vw,3.75rem)] leading-[1.01] font-[750] tracking-[-0.055em] text-text lg:text-[clamp(3.3rem,4.5vw,4.25rem)]"
            >
              General healthcare for every stage of family life.
            </motion.h1>
            <motion.p
              variants={revealVariants}
              className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
            >
              As a General Practitioner, Dr. Ashok Patil provides practical
              care for common illnesses, ongoing health concerns, minor
              procedures and general family healthcare—with appropriate
              referrals when specialist care is needed.
            </motion.p>
          </motion.div>

          <motion.aside
            aria-label="Approach to care"
            className="overflow-hidden rounded-[var(--radius-panel)] border border-primary/15 bg-surface/88 shadow-featured backdrop-blur-lg"
            initial={{ opacity: 0, y: motionOffset.revealY }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: motionDuration.reveal,
              delay: 0.14,
              ease: motionEasing.standard,
            }}
          >
            <div className="border-b border-border px-5 py-4 sm:px-6">
              <p className="text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
                A clear care pathway
              </p>
            </div>
            <ol className="grid list-none p-0 sm:grid-cols-3 lg:grid-cols-1">
              {carePathway.map(({ number, title, description }) => (
                <li
                  key={number}
                  className="grid grid-cols-[2.25rem_1fr] gap-3 border-b border-border p-5 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0 lg:border-r-0 lg:border-b lg:last:border-b-0"
                >
                  <span className="text-xs font-extrabold tracking-[0.1em] text-accent">
                    {number}
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-primary-dark">
                      {title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-muted">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.aside>
        </div>
      </section>

      <section
        aria-labelledby="care-groups-heading"
        className="relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-24"
      >
        <div className="site-container">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={revealVariants}
          >
            <p className="text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
              Core consultations
            </p>
            <h2
              id="care-groups-heading"
              className="mt-4 font-display text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-text sm:text-4xl lg:text-[2.9rem]"
            >
              Care grouped around everyday needs.
            </h2>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-4 lg:grid-cols-12 lg:gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: motionStagger.cards } },
            }}
          >
            <motion.article
              variants={revealVariants}
              className="relative isolate overflow-hidden rounded-[var(--radius-panel)] border border-primary/15 bg-soft-accent p-6 shadow-featured sm:p-8 lg:col-span-7 lg:row-span-2 lg:p-10"
            >
              <div
                aria-hidden="true"
                className="absolute -bottom-24 -right-20 -z-10 size-72 rounded-full bg-primary/10 blur-3xl"
              />
              <span className="grid size-12 place-items-center rounded-[1rem] bg-primary text-surface shadow-standard">
                <EverydayCareIcon aria-hidden="true" className="size-6" />
              </span>
              <p className="mt-10 text-xs font-extrabold tracking-[0.12em] text-accent uppercase sm:mt-14">
                First-line general care
              </p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-primary-dark sm:text-3xl">
                {everydayCare.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                {everydayCare.description}
              </p>
              <div className="mt-7 border-t border-primary/15 pt-6">
                <ServiceList services={everydayCare.services} />
              </div>
            </motion.article>

            <motion.article
              variants={revealVariants}
              className="border-y border-border py-6 sm:py-8 lg:col-span-5 lg:px-7"
            >
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-[0.9rem] bg-surface-muted text-primary">
                  <OngoingCareIcon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="text-xl font-extrabold tracking-[-0.03em] text-primary-dark sm:text-2xl">
                    {ongoingCare.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {ongoingCare.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 pl-0 sm:pl-15">
                <ServiceList services={ongoingCare.services} compact />
              </div>
            </motion.article>

            <motion.article
              variants={revealVariants}
              className="rounded-[var(--radius-card)] border border-border bg-surface p-6 shadow-standard sm:p-7 lg:col-span-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold tracking-[0.1em] text-accent uppercase">
                    Across generations
                  </p>
                  <h3 className="mt-3 text-xl font-extrabold tracking-[-0.03em] text-primary-dark sm:text-2xl">
                    {familyCare.title}
                  </h3>
                </div>
                <FamilyCareIcon aria-hidden="true" className="size-6 shrink-0 text-primary" />
              </div>
              <p className="mt-4 text-sm leading-6 text-muted">
                {familyCare.description}
              </p>
              <div className="mt-6 border-t border-border pt-5">
                <ServiceList services={familyCare.services} compact />
              </div>
              <p className="mt-5 text-xs leading-5 font-semibold text-muted">
                Care is provided within general practice, with onward referral
                when focused child-health evaluation is needed.
              </p>
            </motion.article>
          </motion.div>
        </div>
      </section>

      <section
        aria-labelledby="focused-care-heading"
        className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
      >
        <div className="site-container">
          <motion.div
            className="grid gap-5 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: motionStagger.cards } },
            }}
          >
            <motion.article
              variants={revealVariants}
              className="flex flex-col border-l-2 border-accent py-2 pl-5 sm:pl-7 lg:py-7"
            >
              <span className="grid size-11 place-items-center rounded-[0.9rem] bg-soft-accent text-primary">
                <ShieldPlus aria-hidden="true" className="size-5" />
              </span>
              <p className="mt-8 text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
                Focused general care
              </p>
              <h2
                id="focused-care-heading"
                className="mt-3 max-w-[13ch] text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-text sm:text-4xl"
              >
                Skin-related concerns
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-muted sm:text-base sm:leading-7">
                Assessment and general-practice care for common skin concerns,
                with referral when a condition needs specialist evaluation.
              </p>
              <ul className="mt-7 list-none divide-y divide-border border-y border-border p-0">
                {skinServices.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-3 py-3.5 text-sm font-bold text-primary-dark sm:text-base"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                    {service}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs leading-5 font-semibold text-muted">
                Care is provided within general practice, with specialist
                referral advised when appropriate.
              </p>
            </motion.article>

            <motion.article
              variants={revealVariants}
              className="relative isolate overflow-hidden rounded-[var(--radius-panel)] border border-border bg-surface p-6 shadow-featured sm:p-8 lg:p-10"
            >
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-20 -z-10 size-56 rounded-full bg-soft-accent blur-3xl"
              />
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
                    Practical procedure support
                  </p>
                  <h2 className="mt-3 max-w-[16ch] text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-text sm:text-4xl">
                    Wound & Minor Procedure Care
                  </h2>
                </div>
                <span className="hidden size-12 shrink-0 place-items-center rounded-[1rem] bg-primary text-surface shadow-standard sm:grid">
                  <Bandage aria-hidden="true" className="size-6" />
                </span>
              </div>
              <p className="mt-5 max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                In-clinic care for wounds and verified minor procedures, based
                on clinical assessment and suitability.
              </p>
              <ol className="mt-8 list-none border-t border-border p-0">
                {procedureServices.map((service, index) => (
                  <li
                    key={service}
                    className="grid grid-cols-[2.5rem_1fr] items-center gap-3 border-b border-border py-4"
                  >
                    <span className="text-xs font-extrabold tracking-[0.1em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-extrabold text-primary-dark">
                      {service}
                    </span>
                  </li>
                ))}
              </ol>
            </motion.article>
          </motion.div>
        </div>
      </section>

      <section
        aria-labelledby="clinic-support-heading"
        className="relative isolate overflow-hidden bg-primary-dark py-16 text-surface sm:py-20 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 -z-10 size-96 rounded-full bg-primary/45 blur-3xl"
        />
        <div className="site-container">
          <motion.div
            className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={revealVariants}
          >
            <div>
              <p className="text-xs font-extrabold tracking-[0.12em] text-soft-accent uppercase">
                Treatment-room support
              </p>
              <h2
                id="clinic-support-heading"
                className="mt-4 max-w-[12ch] text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-surface sm:text-4xl lg:text-[2.9rem]"
              >
                In-clinic support when appropriate.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-dark-muted sm:text-base sm:leading-7 lg:justify-self-end">
              These services are provided only when clinically suitable after
              assessment. Availability does not replace emergency or specialist care.
            </p>
          </motion.div>

          <motion.ul
            className="mt-10 grid list-none overflow-hidden rounded-[var(--radius-panel)] border border-dark-border bg-dark-panel p-0 backdrop-blur-sm sm:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: motionStagger.cards } },
            }}
          >
            {clinicSupport.map((service) => {
              const Icon = service.icon;

              return (
                <motion.li
                  key={service.title}
                  variants={revealVariants}
                  className="border-b border-dark-border p-5 last:border-b-0 sm:border-r sm:border-b-0 sm:p-6 sm:last:border-r-0 lg:p-8"
                >
                  <Icon aria-hidden="true" className="size-6 text-accent" />
                  <h3 className="mt-7 text-lg font-extrabold text-surface sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-dark-muted">
                    {service.description}
                  </p>
                </motion.li>
              );
            })}
          </motion.ul>

          <motion.article
            className="mt-5 grid gap-6 rounded-[var(--radius-card)] border border-surface/70 bg-surface p-6 text-text shadow-featured sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={revealVariants}
          >
            <span className="grid size-12 place-items-center rounded-[1rem] bg-soft-accent text-primary">
              <Waypoints aria-hidden="true" className="size-6" />
            </span>
            <div>
              <h2 className="text-xl font-extrabold tracking-[-0.03em] text-primary-dark sm:text-2xl">
                Specialist Referral
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                When a concern needs focused evaluation or treatment, patients
                are advised to consult an appropriate specialist or higher-care facility.
              </p>
            </div>
            <HeartHandshake
              aria-hidden="true"
              className="hidden size-8 text-accent lg:block"
            />
          </motion.article>
        </div>
      </section>

      <section aria-labelledby="treatments-cta-heading" className="bg-soft-accent py-14 sm:py-16">
        <motion.div
          className="site-container flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={revealVariants}
        >
          <div>
            <p className="text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
              Start with a general consultation
            </p>
            <h2
              id="treatments-cta-heading"
              className="mt-3 text-2xl leading-tight font-extrabold tracking-[-0.04em] text-primary-dark sm:text-3xl"
            >
              Not sure which consultation you need?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
              Share your concern with the clinic, or plan your visit in Shani Peth.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <motion.div
              className="inline-flex"
              whileHover={{ y: -2 }}
              whileTap={{ scale: motionScale.press }}
            >
              <Link
                href="/#enquiry"
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
