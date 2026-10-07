"use client";

import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  HeartHandshake,
  MessagesSquare,
  Waypoints,
} from "lucide-react";
import { motion } from "motion/react";
import {
  motionDuration,
  motionEasing,
  motionOffset,
  motionStagger,
} from "@/lib/motion";

type TrustPoint = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const trustPoints: TrustPoint[] = [
  {
    title: "Experience that stays practical",
    description:
      "Nearly three decades in general practice, focused on careful assessment and sensible care.",
    icon: BadgeCheck,
  },
  {
    title: "Care families return to",
    description:
      "A familiar local practice supporting children, adults and elderly family members.",
    icon: HeartHandshake,
  },
  {
    title: "Guidance you can understand",
    description:
      "Clear communication about the concern, treatment and next steps.",
    icon: MessagesSquare,
  },
  {
    title: "Referral when it is needed",
    description:
      "Appropriate specialist guidance when a concern needs focused care.",
    icon: Waypoints,
  },
];

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

export function TrustSection() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="relative isolate overflow-hidden bg-primary-dark py-16 text-surface sm:py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -right-28 -top-28 -z-10 size-96 rounded-full bg-primary/45 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 -z-10 size-96 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16 xl:gap-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: motionStagger.cards },
            },
          }}
          className="lg:sticky lg:top-32"
        >
          <motion.p
            variants={revealVariants}
            className="flex items-center gap-2.5 text-[0.72rem] font-extrabold tracking-[0.14em] text-soft-accent uppercase sm:text-xs"
          >
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Why patients trust him
          </motion.p>
          <motion.h2
            id="trust-heading"
            variants={revealVariants}
            className="mt-5 max-w-[12ch] font-display text-4xl leading-[1.02] font-[750] tracking-[-0.05em] text-surface sm:text-5xl lg:text-[3.6rem]"
          >
            Familiar care, backed by experience.
          </motion.h2>
          <motion.p
            variants={revealVariants}
            className="mt-6 max-w-xl text-base leading-7 text-dark-muted sm:text-lg sm:leading-8"
          >
            A patient-first approach built on listening carefully, explaining
            clearly and choosing practical next steps for each concern.
          </motion.p>

          <motion.div
            variants={revealVariants}
            className="mt-8 flex items-end gap-4 border-t border-dark-border pt-6"
          >
            <p className="text-5xl leading-none font-extrabold tracking-[-0.06em] text-surface sm:text-6xl">
              28
            </p>
            <p className="max-w-32 pb-1 text-sm leading-5 font-semibold text-dark-muted">
              years of clinical experience
            </p>
          </motion.div>
        </motion.div>

        <motion.ol
          className="list-none overflow-hidden rounded-[var(--radius-panel)] border border-dark-border bg-dark-panel p-0 shadow-floating backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: motionStagger.cards },
            },
          }}
        >
          {trustPoints.map((point, index) => {
            const Icon = point.icon;

            return (
              <motion.li
                key={point.title}
                variants={revealVariants}
                className="group grid gap-4 border-b border-dark-border p-5 last:border-b-0 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:p-7 lg:p-8"
              >
                <span className="grid size-11 place-items-center rounded-[0.9rem] bg-dark-panel-strong text-soft-accent transition-colors duration-300 group-hover:text-surface">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg leading-6 font-extrabold tracking-[-0.025em] text-surface sm:text-xl">
                      {point.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xs font-extrabold tracking-[0.12em] text-accent"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-dark-muted sm:text-base sm:leading-7">
                    {point.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
