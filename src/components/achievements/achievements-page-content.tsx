"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BriefcaseMedical,
  CalendarDays,
  Camera,
  FileBadge,
  FileCheck2,
  HeartHandshake,
  ImageIcon,
  Landmark,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { motion } from "motion/react";
import {
  communityHealthcare,
  professionalJourney,
  recognitionCategories,
  recognitionMediaFramework,
  type RecognitionCategoryKey,
  type RecognitionMediaKey,
} from "@/config/achievements";
import {
  motionDuration,
  motionEasing,
  motionOffset,
  motionScale,
  motionStagger,
} from "@/lib/motion";

const categoryIcons: Record<RecognitionCategoryKey, LucideIcon> = {
  leadership: BriefcaseMedical,
  associations: UsersRound,
  community: HeartHandshake,
  awards: Award,
  certificates: FileBadge,
  events: Landmark,
};

const mediaIcons: Record<RecognitionMediaKey, LucideIcon> = {
  documents: FileCheck2,
  "recognition-photos": ImageIcon,
  "community-photos": Camera,
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

export function AchievementsPageContent() {
  return (
    <>
      <section
        aria-labelledby="achievements-page-heading"
        className="relative isolate overflow-hidden bg-background pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pb-20"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_12%,var(--soft-accent),transparent_35%),radial-gradient(circle_at_92%_28%,color-mix(in_srgb,var(--accent)_13%,transparent),transparent_29%),linear-gradient(180deg,var(--background),var(--surface))]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-24 top-20 -z-10 size-72 rounded-full border border-primary/10"
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
              Achievements & Recognition
            </motion.p>
            <motion.h1
              id="achievements-page-heading"
              variants={revealVariants}
              className="mt-5 max-w-[13ch] font-display text-[clamp(2.55rem,10vw,3.8rem)] leading-[1.01] font-[750] tracking-[-0.055em] text-text lg:text-[clamp(3.4rem,4.8vw,4.45rem)]"
            >
              A career shaped by service and community.
            </motion.h1>
            <motion.p
              variants={revealVariants}
              className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
            >
              Nearly three decades of general practice, continued care for
              local families and involvement in community healthcare
              initiatives in Jalgaon.
            </motion.p>
            <motion.div
              variants={revealVariants}
              className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-primary-dark"
            >
              <span>Dr. Ashok A. Patil</span>
              <span className="text-border-strong" aria-hidden="true">
                / 
              </span>
              <span>B.A.M.S.</span>
              <span className="text-border-strong" aria-hidden="true">
                /
              </span>
              <span>General Practitioner</span>
            </motion.div>
          </motion.div>

          <motion.aside
            aria-label="Professional journey summary"
            className="relative overflow-hidden rounded-[var(--radius-panel)] border border-primary/15 bg-surface/92 p-6 shadow-featured backdrop-blur-lg sm:p-8"
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
              <span className="grid size-12 place-items-center rounded-[1rem] bg-primary text-surface shadow-standard">
                <BadgeCheck aria-hidden="true" className="size-6" />
              </span>
              <p className="mt-10 text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
                Clinical practice
              </p>
              <p className="mt-2 text-6xl leading-none font-extrabold tracking-[-0.075em] text-primary-dark sm:text-7xl">
                ~28
              </p>
              <p className="mt-2 text-lg font-extrabold text-text">
                years of general practice
              </p>
              <div className="mt-7 grid gap-3 border-t border-border pt-5 text-sm font-bold text-primary-dark sm:grid-cols-2">
                <span className="flex items-center gap-2.5">
                  <MapPin aria-hidden="true" className="size-4 text-primary" />
                  Shani Peth
                </span>
                <span className="flex items-center gap-2.5">
                  <UsersRound
                    aria-hidden="true"
                    className="size-4 text-primary"
                  />
                  Family practice
                </span>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section
        aria-labelledby="journey-heading"
        className="relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-24"
      >
        <div className="site-container">
          <motion.div
            className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-end"
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
                id="journey-heading"
                className="mt-4 max-w-[12ch] font-display text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-text sm:text-4xl lg:text-[2.9rem]"
              >
                Progress measured in continuity of care.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7 lg:justify-self-end">
              This timeline uses only the practice details currently verified.
              An exact starting year is intentionally not stated.
            </p>
          </motion.div>

          <motion.ol
            className="relative mt-10 grid list-none gap-4 p-0 md:grid-cols-2 lg:mt-12 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: motionStagger.cards } },
            }}
          >
            {professionalJourney.map((milestone, index) => (
              <motion.li
                key={milestone.title}
                variants={revealVariants}
                className="relative rounded-[var(--radius-card)] border border-primary/15 bg-background p-5 shadow-standard sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-primary text-xs font-extrabold text-surface shadow-standard">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {index < professionalJourney.length - 1 ? (
                    <ArrowRight
                      aria-hidden="true"
                      className="hidden size-4 text-border-strong lg:block"
                    />
                  ) : null}
                </div>
                <p className="mt-8 text-[0.68rem] font-extrabold tracking-[0.11em] text-accent uppercase">
                  {milestone.marker}
                </p>
                <h3 className="mt-2 text-lg leading-6 font-extrabold tracking-[-0.025em] text-primary-dark">
                  {milestone.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {milestone.description}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      <section
        aria-labelledby="community-heading"
        className="relative isolate overflow-hidden bg-primary-dark py-16 text-surface sm:py-20 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute -right-36 -top-36 -z-10 size-[28rem] rounded-full bg-primary/45 blur-3xl"
        />
        <div className="site-container grid gap-9 lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:gap-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={revealVariants}
          >
            <span className="grid size-12 place-items-center rounded-[1rem] border border-dark-border bg-dark-panel-strong text-accent">
              <HeartHandshake aria-hidden="true" className="size-6" />
            </span>
            <p className="mt-8 text-xs font-extrabold tracking-[0.12em] text-soft-accent uppercase">
              Community healthcare
            </p>
            <h2
              id="community-heading"
              className="mt-4 max-w-[12ch] font-display text-3xl leading-[1.06] font-[750] tracking-[-0.05em] text-surface sm:text-4xl lg:text-[3rem]"
            >
              Local involvement, described with care.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-6 text-dark-muted sm:text-base sm:leading-7">
              Community work is included only at the level currently supported
              by verified information. Programme frequency and dates will be
              added when confirmed.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: motionStagger.cards } },
            }}
          >
            {communityHealthcare.map((item, index) => (
              <motion.article
                key={item.title}
                variants={revealVariants}
                className="rounded-[var(--radius-card)] border border-dark-border bg-dark-panel p-5 backdrop-blur-sm sm:p-6"
              >
                {index === 0 ? (
                  <UsersRound aria-hidden="true" className="size-6 text-accent" />
                ) : (
                  <CalendarDays
                    aria-hidden="true"
                    className="size-6 text-accent"
                  />
                )}
                <h3 className="mt-8 text-xl font-extrabold tracking-[-0.03em] text-surface">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-dark-muted">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        aria-labelledby="recognition-framework-heading"
        className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
      >
        <div className="site-container">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={revealVariants}
          >
            <p className="text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
              Recognition framework
            </p>
            <h2
              id="recognition-framework-heading"
              className="mt-4 max-w-[15ch] font-display text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-text sm:text-4xl lg:text-[2.9rem]"
            >
              A clear home for every verified record.
            </h2>
            <p className="mt-5 text-sm leading-6 text-muted sm:text-base sm:leading-7">
              These categories define how richer career information can be
              added later. They do not imply that any unverified role, award or
              certificate is currently being claimed.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: motionStagger.cards } },
            }}
          >
            {recognitionCategories.map((category, index) => {
              const Icon = categoryIcons[category.key];

              return (
                <motion.article
                  key={category.key}
                  variants={revealVariants}
                  className={`group rounded-[var(--radius-card)] border border-primary/15 p-5 shadow-standard transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-featured sm:p-6 ${
                    index === 0 || index === 5
                      ? "bg-soft-accent/55"
                      : "bg-surface"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid size-11 place-items-center rounded-[0.9rem] bg-surface text-primary shadow-standard">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="text-[0.65rem] font-extrabold tracking-[0.12em] text-primary/55 uppercase">
                      Record {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-7 text-lg font-extrabold tracking-[-0.025em] text-primary-dark sm:text-xl">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {category.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 border-t border-primary/10 pt-4 text-xs font-bold text-primary">
                    <ShieldCheck aria-hidden="true" className="size-4" />
                    Published after verification
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section
        aria-labelledby="recognition-archive-heading"
        className="relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-24"
      >
        <div className="site-container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={revealVariants}
          >
            <p className="text-xs font-extrabold tracking-[0.12em] text-primary uppercase">
              Future media archive
            </p>
            <h2
              id="recognition-archive-heading"
              className="mt-4 max-w-[12ch] font-display text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-text sm:text-4xl lg:text-[2.9rem]"
            >
              Context will accompany every image.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
              Certificates, award photographs and event images can be added to
              this editorial archive once the source details are confirmed. No
              stock imagery is used here.
            </p>
            <div className="mt-7 flex items-start gap-3 rounded-[var(--radius-card)] border border-primary/15 bg-background p-4">
              <Sparkles
                aria-hidden="true"
                className="mt-0.5 size-5 shrink-0 text-accent"
              />
              <p className="text-sm leading-6 text-muted">
                Photographs involving public figures will identify the event
                and verified role neutrally, never as a medical credential.
              </p>
            </div>
          </motion.div>

          <motion.div
            aria-label="Recognition media record formats"
            className="relative grid gap-3 rounded-[var(--radius-panel)] border border-primary/15 bg-background p-4 shadow-featured sm:grid-cols-2 sm:p-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: motionStagger.cards } },
            }}
          >
            {recognitionMediaFramework.map((item, index) => {
              const Icon = mediaIcons[item.key];

              return (
                <motion.div
                  key={item.key}
                  variants={revealVariants}
                  className={`relative min-h-44 overflow-hidden rounded-[var(--radius-card)] border border-primary/12 p-5 ${
                    index === 0
                      ? "bg-primary text-surface sm:row-span-2 sm:min-h-0"
                      : "bg-surface text-text"
                  }`}
                >
                  <Icon
                    aria-hidden="true"
                    className={`size-7 ${
                      index === 0 ? "text-soft-accent" : "text-primary"
                    }`}
                  />
                  <p
                    className={`mt-12 text-lg font-extrabold tracking-[-0.025em] ${
                      index === 0 ? "text-surface" : "text-primary-dark"
                    }`}
                  >
                    {item.label}
                  </p>
                  <p
                    className={`mt-2 text-xs leading-5 font-semibold ${
                      index === 0 ? "text-surface/72" : "text-muted"
                    }`}
                  >
                    {item.detail}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section
        aria-labelledby="achievements-cta-heading"
        className="bg-background py-14 sm:py-16 lg:py-20"
      >
        <motion.div
          className="site-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={revealVariants}
        >
          <div className="relative overflow-hidden rounded-[var(--radius-panel)] bg-primary-dark px-5 py-8 text-surface shadow-featured sm:px-8 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-12">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-24 size-64 rounded-full bg-primary/45 blur-3xl"
            />
            <div className="relative">
              <p className="text-xs font-extrabold tracking-[0.12em] text-soft-accent uppercase">
                Plan a visit
              </p>
              <h2
                id="achievements-cta-heading"
                className="mt-3 font-display text-2xl leading-tight font-[750] tracking-[-0.04em] sm:text-3xl"
              >
                Looking for Dr. Patil&apos;s clinic?
              </h2>
            </div>
            <div className="relative mt-7 flex flex-col gap-3 min-[390px]:flex-row lg:mt-0">
              <motion.div whileTap={{ scale: motionScale.press }}>
                <Link
                  href="/clinic"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-control)] bg-surface px-5 text-sm font-extrabold text-primary-dark shadow-standard transition-colors hover:bg-soft-accent focus-visible:outline-offset-4"
                >
                  <MapPin aria-hidden="true" className="size-4 text-primary" />
                  Visit clinic
                </Link>
              </motion.div>
              <motion.div whileTap={{ scale: motionScale.press }}>
                <Link
                  href="/contact#enquiry"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-control)] border border-dark-border bg-dark-panel px-5 text-sm font-extrabold text-surface transition-colors hover:bg-dark-panel-strong focus-visible:outline-offset-4"
                >
                  <MessageSquareText aria-hidden="true" className="size-4" />
                  Send enquiry
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
