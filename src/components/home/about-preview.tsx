"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Languages,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { motion } from "motion/react";
import { mediaConfig } from "@/config/media";
import {
  motionDuration,
  motionEasing,
  motionOffset,
  motionScale,
  motionStagger,
} from "@/lib/motion";

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

const profileDetails = [
  { label: "Qualification", value: "B.A.M.S." },
  { label: "Role", value: "General Practitioner" },
  { label: "Practice", value: "Shani Peth, Jalgaon" },
] as const;

export function AboutPreview() {
  return (
    <section
      aria-labelledby="about-preview-heading"
      className="relative overflow-hidden bg-background pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-28"
    >
      <div
        id="about"
        className="site-container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24"
      >
        <motion.div
          className="relative mx-auto w-full max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={revealVariants}
        >
          <div className="relative min-h-[24rem] overflow-hidden rounded-[var(--radius-panel)] border border-primary/15 bg-soft-accent shadow-featured sm:min-h-[31rem]">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 size-56 rounded-full bg-accent/10 blur-3xl"
            />
            <Image
              src={mediaConfig.doctorPortrait.src}
              alt={
                mediaConfig.doctorPortrait.isPlaceholder
                  ? ""
                  : mediaConfig.doctorPortrait.alt
              }
              fill
              sizes="(max-width: 1023px) 92vw, 42vw"
              className="object-contain object-bottom"
            />

            {mediaConfig.doctorPortrait.isPlaceholder ? (
              <div
                className="absolute inset-0 grid place-items-center p-8 text-center"
                role="img"
                aria-label="Reserved space for the approved portrait of Dr. Ashok A. Patil"
              >
                <div>
                  <span className="mx-auto grid size-24 place-items-center rounded-[1.6rem] border border-primary/15 bg-surface/80 text-primary shadow-standard backdrop-blur-md sm:size-28">
                    <UserRound aria-hidden="true" className="size-12 sm:size-14" />
                  </span>
                  <p className="mt-4 text-sm font-extrabold text-primary-dark">
                    Approved portrait ready to add
                  </p>
                </div>
              </div>
            ) : null}
          </div>

          <div className="absolute -bottom-5 right-4 rounded-[1.1rem] border border-border bg-surface p-4 shadow-featured sm:-right-5 sm:bottom-7 sm:p-5">
            <p className="text-3xl font-extrabold tracking-[-0.05em] text-primary-dark sm:text-4xl">
              28
            </p>
            <p className="mt-1 max-w-28 text-xs leading-5 font-semibold text-muted">
              years in general practice
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: motionStagger.cards },
            },
          }}
        >
          <motion.p
            variants={revealVariants}
            className="flex items-center gap-2.5 text-[0.72rem] font-extrabold tracking-[0.14em] text-primary uppercase sm:text-xs"
          >
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            About Dr. Ashok Patil
          </motion.p>
          <motion.h2
            id="about-preview-heading"
            variants={revealVariants}
            className="mt-5 max-w-[14ch] font-display text-3xl leading-[1.07] font-[750] tracking-[-0.045em] text-text sm:text-4xl lg:text-[3rem]"
          >
            A familiar doctor, known across generations.
          </motion.h2>
          <motion.p
            variants={revealVariants}
            className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
          >
            Dr. Ashok A. Patil is a B.A.M.S. General Practitioner serving
            families in Shani Peth and Jalgaon with practical, patient-first
            care built over nearly three decades.
          </motion.p>
          <motion.p
            variants={revealVariants}
            className="mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7"
          >
            His approach centres on thoughtful assessment, clear guidance and
            appropriate specialist referral whenever focused care is needed.
          </motion.p>

          <motion.dl
            variants={revealVariants}
            className="mt-8 grid border-y border-border sm:grid-cols-3"
          >
            {profileDetails.map((detail) => (
              <div
                key={detail.label}
                className="border-b border-border py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
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

          <motion.div
            variants={revealVariants}
            className="mt-6 flex items-start gap-3 border-l-2 border-accent pl-4"
          >
            <Languages
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-primary"
            />
            <p className="text-sm leading-6 text-muted">
              <span className="font-extrabold text-primary-dark">
                Languages:
              </span>{" "}
              Marathi, Hindi and Hinglish, with some English, Marwari and
              Bengali.
            </p>
          </motion.div>

          <motion.div variants={revealVariants} className="mt-8">
            <motion.div
              className="inline-flex"
              whileHover={{ y: -2 }}
              whileTap={{ scale: motionScale.press }}
            >
              <Link
                href="/about"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-control bg-primary px-5 text-sm font-extrabold text-surface shadow-standard transition-colors duration-200 hover:bg-primary-dark focus-visible:outline-offset-4"
              >
                <Stethoscope aria-hidden="true" className="size-4" />
                Know more about Dr. Patil
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={revealVariants}
            className="mt-6 flex items-start gap-3 text-xs leading-5 text-muted sm:text-sm"
          >
            <BadgeCheck
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-primary"
            />
            <p>Trusted family healthcare rooted in the local community.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
