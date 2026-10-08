"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  AirVent,
  Armchair,
  ArrowRight,
  BedSingle,
  Building2,
  Clock3,
  MapPin,
  MessageSquareText,
  Navigation,
  ShieldCheck,
  Sparkles,
  Store,
  Stethoscope,
  UsersRound,
} from "lucide-react";
import { motion } from "motion/react";
import { clinicConfig } from "@/config/clinic";
import { mediaConfig } from "@/config/media";
import {
  motionDuration,
  motionEasing,
  motionOffset,
  motionScale,
  motionStagger,
} from "@/lib/motion";

type ClinicAsset = (typeof mediaConfig.clinicGallery)[number];

type GalleryFrameProps = {
  asset: ClinicAsset;
  icon: LucideIcon;
  layout: "feature" | "support" | "wide";
  reference: string;
};

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

const clinicSpaces = [
  {
    eyebrow: "Doctor's OPD",
    title: "Consultation Cabin",
    description:
      "A dedicated space for private general-practice consultation and clinical assessment.",
    note: "Air conditioning is available in this cabin only.",
    icon: Stethoscope,
    featured: true,
  },
  {
    eyebrow: "Treatment space",
    title: "IV / Saline Room",
    description:
      "A dedicated room for IV and saline care when clinically appropriate.",
    icon: BedSingle,
  },
  {
    eyebrow: "Patient comfort",
    title: "Waiting Area",
    description:
      "A spacious area where patients and accompanying family members can wait.",
    icon: Armchair,
  },
  {
    eyebrow: "Clinic team",
    title: "Support Staff",
    description:
      "Three medical staff support the day-to-day patient flow and clinic environment.",
    icon: UsersRound,
  },
] as const;

const galleryPresentation = {
  "consultation-cabin": {
    icon: Building2,
    layout: "feature",
    reference: "01",
  },
  "treatment-area": {
    icon: BedSingle,
    layout: "support",
    reference: "02",
  },
  "waiting-area": {
    icon: Armchair,
    layout: "support",
    reference: "03",
  },
  "clinic-environment": {
    icon: Sparkles,
    layout: "wide",
    reference: "04",
  },
} satisfies Record<
  ClinicAsset["key"],
  Omit<GalleryFrameProps, "asset">
>;

const galleryItems = mediaConfig.clinicGallery.map((asset) => ({
  asset,
  ...galleryPresentation[asset.key],
}));

function GalleryFrame({
  asset,
  icon: Icon,
  layout,
  reference,
}: GalleryFrameProps) {
  const layoutClass =
    layout === "feature"
      ? "col-span-2 min-h-[24rem] lg:col-span-7 lg:row-span-3 lg:min-h-0"
      : layout === "wide"
        ? "col-span-2 min-h-[15rem] lg:col-span-5 lg:row-span-1 lg:min-h-0"
        : "col-span-1 min-h-[16rem] lg:col-span-5 lg:row-span-1 lg:min-h-0";

  return (
    <motion.figure
      variants={revealVariants}
      className={`group relative isolate overflow-hidden rounded-[var(--radius-card)] border border-primary/15 bg-surface-muted shadow-standard transition-shadow duration-300 hover:shadow-featured ${layoutClass}`}
      whileHover={{ y: motionOffset.hoverLiftY }}
      whileTap={{ scale: motionScale.press }}
    >
      {asset.src ? (
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          sizes={
            layout === "feature"
              ? "(max-width: 1023px) 92vw, 58vw"
              : "(max-width: 639px) 46vw, (max-width: 1023px) 92vw, 42vw"
          }
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
        />
      ) : (
        <div
          className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_78%_18%,var(--surface),transparent_34%),linear-gradient(145deg,var(--soft-accent),var(--surface-muted))]"
          role="img"
          aria-label={`Reserved frame for a real photograph of the ${asset.label.toLowerCase()}`}
        >
          <span className="absolute top-5 left-5 text-[0.65rem] font-extrabold tracking-[0.14em] text-primary/65 uppercase sm:top-6 sm:left-6">
            Clinic space · {reference}
          </span>
          <Icon
            aria-hidden="true"
            className={`absolute text-primary/10 ${
              layout === "feature"
                ? "right-8 bottom-20 size-40 sm:size-52"
                : "right-4 bottom-20 size-24 sm:size-28"
            }`}
            strokeWidth={1.2}
          />
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[18%] w-px bg-primary/10"
          />
          <span
            aria-hidden="true"
            className="absolute top-[32%] right-0 left-0 h-px bg-primary/10"
          />
        </div>
      )}

      {asset.src ? (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-primary-dark/80 to-transparent"
        />
      ) : null}

      <figcaption className="absolute inset-x-3 bottom-3 rounded-[0.9rem] border border-surface/70 bg-surface/92 p-3.5 shadow-standard backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:p-4">
        <p className="text-sm font-extrabold text-primary-dark sm:text-base">
          {asset.label}
        </p>
        <p className="mt-1 text-[0.68rem] leading-4 font-semibold text-muted sm:text-xs sm:leading-5">
          {asset.detail}
        </p>
      </figcaption>
    </motion.figure>
  );
}

export function ClinicPageContent() {
  return (
    <>
      <section
        aria-labelledby="clinic-page-heading"
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

        <div className="site-container grid items-end gap-9 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16 xl:gap-20">
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
              The Clinic
            </motion.p>
            <motion.h1
              id="clinic-page-heading"
              variants={revealVariants}
              className="mt-5 max-w-[15ch] font-display text-[clamp(2.55rem,10vw,3.8rem)] leading-[1.01] font-[750] tracking-[-0.055em] text-text lg:text-[clamp(3.4rem,4.8vw,4.45rem)]"
            >
              A familiar practice, built for comfortable care.
            </motion.h1>
            <motion.p
              variants={revealVariants}
              className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
            >
              A long-standing General Practitioner clinic in Shani Peth, with
              dedicated spaces for consultation, treatment and patient waiting.
            </motion.p>
          </motion.div>

          <motion.aside
            aria-label="Clinic at a glance"
            className="overflow-hidden rounded-[var(--radius-panel)] border border-primary/15 bg-surface/90 shadow-featured backdrop-blur-lg"
            initial={{ opacity: 0, y: motionOffset.revealY }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: motionDuration.reveal,
              delay: 0.14,
              ease: motionEasing.standard,
            }}
          >
            <div className="p-6 sm:p-8">
              <span className="grid size-12 place-items-center rounded-[1rem] bg-primary text-surface shadow-standard">
                <Building2 aria-hidden="true" className="size-6" />
              </span>
              <p className="mt-8 text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
                Established in the same locality
              </p>
              <p className="mt-3 max-w-sm text-2xl leading-tight font-extrabold tracking-[-0.04em] text-primary-dark sm:text-3xl">
                A permanent clinic with a practical layout.
              </p>
            </div>
            <dl className="grid border-t border-border sm:grid-cols-2">
              <div className="border-b border-border p-5 sm:border-r sm:border-b-0">
                <dt className="text-[0.68rem] font-extrabold tracking-[0.1em] text-muted uppercase">
                  Clinic support
                </dt>
                <dd className="mt-1.5 text-sm font-extrabold text-primary-dark">
                  Three medical staff
                </dd>
              </div>
              <div className="p-5">
                <dt className="text-[0.68rem] font-extrabold tracking-[0.1em] text-muted uppercase">
                  Environment
                </dt>
                <dd className="mt-1.5 text-sm font-extrabold text-primary-dark">
                  Hygiene-focused interiors
                </dd>
              </div>
            </dl>
          </motion.aside>
        </div>
      </section>

      <section
        aria-labelledby="clinic-overview-heading"
        className="relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-24"
      >
        <div className="site-container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={revealVariants}
          >
            <p className="text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
              Clinic overview
            </p>
            <h2
              id="clinic-overview-heading"
              className="mt-4 max-w-[12ch] font-display text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-text sm:text-4xl lg:text-[2.9rem]"
            >
              Established care, still close to where it began.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-6 text-muted sm:text-base sm:leading-7">
              The practice first operated from a rented clinic nearby before
              moving into its current permanent, owned location in the same
              Shani Peth community.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-5 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.16 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: motionStagger.cards } },
            }}
          >
            <motion.article
              variants={revealVariants}
              className="relative overflow-hidden rounded-[var(--radius-panel)] border border-primary/15 bg-soft-accent p-6 shadow-featured sm:p-7"
            >
              <span className="text-xs font-extrabold tracking-[0.12em] text-accent uppercase">
                Then
              </span>
              <p className="mt-8 text-3xl font-extrabold tracking-[-0.05em] text-primary-dark">
                50–80 m
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                The earlier rented practice was approximately this distance
                from the current clinic.
              </p>
            </motion.article>

            <motion.article
              variants={revealVariants}
              className="rounded-[var(--radius-panel)] border border-border bg-surface p-6 shadow-standard sm:p-7"
            >
              <span className="text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
                Now
              </span>
              <p className="mt-8 text-xl leading-tight font-extrabold tracking-[-0.035em] text-primary-dark sm:text-2xl">
                A permanent clinic in the same locality.
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                Purposeful spaces support consultation, treatment, waiting and
                day-to-day clinic operations.
              </p>
            </motion.article>

            <motion.div
              variants={revealVariants}
              className="flex items-start gap-3 border-y border-border py-5 sm:col-span-2"
            >
              <ShieldCheck
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-primary"
              />
              <p className="text-sm leading-6 text-muted sm:text-base">
                <span className="font-extrabold text-primary-dark">
                  Practical and hygiene-focused:
                </span>{" "}
                the clinic is arranged around clear patient flow and supported
                by three clinic staff.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        aria-labelledby="clinic-spaces-heading"
        className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
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
              Purposeful spaces
            </p>
            <h2
              id="clinic-spaces-heading"
              className="mt-4 font-display text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-text sm:text-4xl lg:text-[2.9rem]"
            >
              A clear place for each part of the visit.
            </h2>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-4 lg:grid-cols-12 lg:gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: motionStagger.cards } },
            }}
          >
            {clinicSpaces.map((space) => {
              const Icon = space.icon;

              return (
                <motion.article
                  key={space.title}
                  variants={revealVariants}
                  className={
                    "featured" in space && space.featured
                      ? "relative isolate overflow-hidden rounded-[var(--radius-panel)] border border-primary/15 bg-soft-accent p-6 shadow-featured sm:p-8 lg:col-span-7 lg:row-span-2 lg:p-10"
                      : "rounded-[var(--radius-card)] border border-border bg-surface p-6 shadow-standard lg:col-span-5 lg:p-7"
                  }
                >
                  {"featured" in space && space.featured ? (
                    <div
                      aria-hidden="true"
                      className="absolute -right-20 -top-20 -z-10 size-64 rounded-full bg-surface/75 blur-3xl"
                    />
                  ) : null}
                  <span
                    className={`grid size-12 place-items-center rounded-[1rem] ${
                      "featured" in space && space.featured
                        ? "bg-primary text-surface shadow-standard"
                        : "bg-surface-muted text-primary"
                    }`}
                  >
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <p
                    className={`text-xs font-extrabold tracking-[0.12em] uppercase ${
                      "featured" in space && space.featured
                        ? "mt-12 text-accent sm:mt-16"
                        : "mt-8 text-primary"
                    }`}
                  >
                    {space.eyebrow}
                  </p>
                  <h3
                    className={`mt-3 font-extrabold tracking-[-0.04em] text-primary-dark ${
                      "featured" in space && space.featured
                        ? "text-3xl sm:text-4xl"
                        : "text-xl sm:text-2xl"
                    }`}
                  >
                    {space.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
                    {space.description}
                  </p>
                  {"note" in space ? (
                    <div className="mt-7 flex items-start gap-3 border-t border-primary/15 pt-5">
                      <AirVent
                        aria-hidden="true"
                        className="mt-0.5 size-5 shrink-0 text-primary"
                      />
                      <p className="text-sm leading-6 font-bold text-primary-dark">
                        {space.note}
                      </p>
                    </div>
                  ) : null}
                </motion.article>
              );
            })}
          </motion.div>

          <motion.aside
            className="mt-5 flex items-start gap-4 rounded-[var(--radius-card)] border border-primary/15 bg-surface-muted p-5 sm:p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={revealVariants}
          >
            <Store
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 text-primary"
            />
            <div>
              <p className="text-sm font-extrabold text-primary-dark">
                Medical store in the same building
              </p>
              <p className="mt-1 text-sm leading-6 text-muted">
                The medical store is independently operated and is not owned or
                managed by the clinic.
              </p>
            </div>
          </motion.aside>
        </div>
      </section>

      <section
        aria-labelledby="clinic-gallery-heading"
        className="relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-24"
      >
        <div className="site-container">
          <motion.div
            className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.28 }}
            variants={revealVariants}
          >
            <div>
              <p className="text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
                Clinic gallery
              </p>
              <h2
                id="clinic-gallery-heading"
                className="mt-4 max-w-[14ch] font-display text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-text sm:text-4xl lg:text-[2.9rem]"
              >
                A closer look at the spaces patients use.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted sm:text-base sm:leading-7 lg:text-right">
              These frames are ready for verified clinic photography as soon as
              the final images are approved.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12 lg:grid-rows-[repeat(3,minmax(12rem,1fr))]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: motionStagger.cards } },
            }}
          >
            {galleryItems.map((item) => (
              <GalleryFrame
                key={item.asset.key}
                asset={item.asset}
                icon={item.icon}
                layout={item.layout}
                reference={item.reference}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section
        aria-labelledby="clinic-practical-heading"
        className="relative isolate overflow-hidden bg-primary-dark py-16 text-surface sm:py-20 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 -z-10 size-96 rounded-full bg-primary/45 blur-3xl"
        />
        <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={revealVariants}
          >
            <p className="text-xs font-extrabold tracking-[0.12em] text-soft-accent uppercase">
              Clinic practical information
            </p>
            <h2
              id="clinic-practical-heading"
              className="mt-4 max-w-[12ch] font-display text-3xl leading-[1.06] font-[750] tracking-[-0.05em] text-surface sm:text-4xl lg:text-[3rem]"
            >
              Plan the visit before you leave.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-6 text-dark-muted sm:text-base sm:leading-7">
              The clinic is in Shani Peth near Phule / Fule Market and the main
              vegetable market area.
            </p>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-[var(--radius-panel)] border border-dark-border bg-dark-panel backdrop-blur-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealVariants}
          >
            <div className="grid sm:grid-cols-2">
              <address className="flex gap-3 border-b border-dark-border p-5 not-italic sm:border-r sm:border-b-0 sm:p-6">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-accent"
                />
                <div>
                  <p className="text-xs font-extrabold tracking-[0.1em] text-soft-accent uppercase">
                    Address
                  </p>
                  <p className="mt-2 text-sm leading-6 font-bold text-surface">
                    {clinicConfig.addressLines[0]}
                    <br />
                    {clinicConfig.addressLines[1]}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-dark-muted">
                    {clinicConfig.landmark}
                  </p>
                </div>
              </address>

              <div className="flex gap-3 p-5 sm:p-6">
                <Clock3
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-accent"
                />
                <div>
                  <p className="text-xs font-extrabold tracking-[0.1em] text-soft-accent uppercase">
                    Timings
                  </p>
                  <div className="mt-2 grid gap-1 text-sm leading-6 font-bold text-surface">
                    <time>{clinicConfig.morningHours}</time>
                    <time>{clinicConfig.eveningHours}</time>
                  </div>
                  <p className="mt-2 text-xs font-bold text-accent">
                    {clinicConfig.sundayNote}
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-dark-border p-5 sm:p-6">
              <motion.a
                href={clinicConfig.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-control)] bg-surface px-5 text-sm font-extrabold text-primary-dark shadow-standard transition-colors duration-200 hover:bg-soft-accent focus-visible:outline-offset-4 sm:w-auto"
                whileHover={{ y: -2 }}
                whileTap={{ scale: motionScale.press }}
              >
                <Navigation aria-hidden="true" className="size-4 text-primary" />
                Get directions
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        aria-labelledby="clinic-cta-heading"
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
              Visit the clinic
            </p>
            <h2
              id="clinic-cta-heading"
              className="mt-3 text-2xl leading-tight font-extrabold tracking-[-0.04em] text-primary-dark sm:text-3xl"
            >
              Planning a visit?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
              Open the clinic location in Google Maps or send an enquiry before
              visiting.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <motion.a
              href={clinicConfig.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-[var(--radius-control)] bg-primary px-5 text-sm font-extrabold text-surface shadow-standard transition-colors duration-200 hover:bg-primary-dark focus-visible:outline-offset-4"
              whileHover={{ y: -2 }}
              whileTap={{ scale: motionScale.press }}
            >
              <Navigation aria-hidden="true" className="size-4" />
              Get directions
            </motion.a>
            <motion.div
              className="inline-flex"
              whileHover={{ y: -2 }}
              whileTap={{ scale: motionScale.press }}
            >
              <Link
                href="/contact#enquiry"
                className="group inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-[var(--radius-control)] border border-primary/25 bg-surface px-5 text-sm font-extrabold text-primary-dark shadow-standard transition-colors duration-200 hover:border-primary/45 hover:bg-surface-muted focus-visible:outline-offset-4 sm:w-auto"
              >
                <MessageSquareText aria-hidden="true" className="size-4 text-primary" />
                Send enquiry
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
