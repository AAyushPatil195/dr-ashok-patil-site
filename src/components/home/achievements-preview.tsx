"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Award,
  CalendarHeart,
  HeartHandshake,
  Milestone,
} from "lucide-react";
import { motion } from "motion/react";
import {
  motionDuration,
  motionEasing,
  motionOffset,
  motionScale,
  motionStagger,
} from "@/lib/motion";

type AchievementCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const categories: AchievementCategory[] = [
  {
    title: "Community healthcare",
    description:
      "Long-standing family healthcare rooted in Shani Peth and the wider Jalgaon community.",
    icon: HeartHandshake,
  },
  {
    title: "Periodic health & child-health camps",
    description:
      "Periodic Monday camps supporting community and child health in Jalgaon.",
    icon: CalendarHeart,
  },
  {
    title: "Professional milestones",
    description:
      "Nearly three decades of consistent general practice and patient service.",
    icon: Milestone,
  },
  {
    title: "Recognitions & certificates",
    description:
      "Recognitions and certificates, presented with clear context as details are verified.",
    icon: Award,
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

export function AchievementsPreview() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="relative min-h-[calc(100svh-var(--header-offset))] overflow-hidden bg-background pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-28"
    >
      <div
        aria-hidden="true"
        className="absolute -right-28 top-16 size-80 rounded-full bg-soft-accent/60 blur-3xl"
      />

      <div className="site-container relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16 xl:gap-24">
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
        >
          <motion.p
            variants={revealVariants}
            className="flex items-center gap-2.5 text-[0.72rem] font-extrabold tracking-[0.14em] text-primary uppercase sm:text-xs"
          >
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Achievements & community care
          </motion.p>
          <motion.h2
            id="achievements-heading"
            variants={revealVariants}
            className="mt-5 max-w-[13ch] font-display text-3xl leading-[1.07] font-[750] tracking-[-0.045em] text-text sm:text-4xl lg:text-[3rem]"
          >
            Service beyond the consultation room.
          </motion.h2>
          <motion.p
            variants={revealVariants}
            className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
          >
            A long-standing local practice shaped by everyday service,
            periodic health initiatives and professional milestones.
          </motion.p>

          <motion.div
            variants={revealVariants}
            className="mt-8 flex items-end gap-4 border-t border-border pt-6"
          >
            <p className="text-5xl leading-none font-extrabold tracking-[-0.06em] text-primary-dark">
              28
            </p>
            <p className="max-w-36 pb-1 text-sm leading-5 font-semibold text-muted">
              years of clinical service in Jalgaon
            </p>
          </motion.div>

          <motion.div variants={revealVariants} className="mt-8">
            <motion.div
              className="inline-flex"
              whileHover={{ y: -2 }}
              whileTap={{ scale: motionScale.press }}
            >
              <Link
                href="/achievements"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-control bg-primary px-5 text-sm font-extrabold text-surface shadow-standard transition-colors duration-200 hover:bg-primary-dark focus-visible:outline-offset-4"
              >
                View achievements
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.ol
          className="list-none overflow-hidden rounded-[var(--radius-panel)] border border-border bg-surface p-0 shadow-featured"
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
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.li
                key={category.title}
                variants={revealVariants}
                className="group grid gap-4 border-b border-border p-5 last:border-b-0 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:p-7"
              >
                <span className="grid size-11 place-items-center rounded-[0.9rem] bg-surface-muted text-primary transition-colors duration-300 group-hover:bg-soft-accent">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg leading-6 font-extrabold tracking-[-0.025em] text-primary-dark sm:text-xl">
                      {category.title}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-xs font-extrabold tracking-[0.12em] text-accent"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted sm:text-base sm:leading-7">
                    {category.description}
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
