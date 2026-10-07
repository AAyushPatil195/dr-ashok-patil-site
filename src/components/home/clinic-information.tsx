"use client";

import type { LucideIcon } from "lucide-react";
import { BadgeCheck, Clock3, MapPinned, UsersRound } from "lucide-react";
import { motion } from "motion/react";
import {
  motionDuration,
  motionEasing,
  motionOffset,
  motionScale,
  motionStagger,
} from "@/lib/motion";

type ClinicDetail = {
  title: string;
  lines: string[];
  note: string;
  icon: LucideIcon;
  className: string;
  iconClassName: string;
};

const clinicDetails: ClinicDetail[] = [
  {
    title: "Clinic timings",
    lines: ["10:00 AM – 2:30 PM", "6:00 PM – 10:30 PM"],
    note: "Two convenient consultation windows",
    icon: Clock3,
    className: "col-span-2 bg-soft-accent border-primary/15 shadow-featured lg:col-span-4",
    iconClassName: "bg-surface text-primary",
  },
  {
    title: "Location",
    lines: ["Shani Peth, Jalgaon"],
    note: "Near Phule / Fule Market",
    icon: MapPinned,
    className: "col-span-1 bg-surface border-border shadow-standard lg:col-span-3",
    iconClassName: "bg-accent-soft text-accent",
  },
  {
    title: "Experience",
    lines: ["28 years"],
    note: "of clinical experience",
    icon: BadgeCheck,
    className: "col-span-1 bg-surface border-border shadow-standard lg:col-span-2",
    iconClassName: "bg-surface-muted text-primary",
  },
  {
    title: "Family care",
    lines: ["Children, adults", "and elderly"],
    note: "Care across life stages",
    icon: UsersRound,
    className: "col-span-2 bg-surface border-border shadow-standard lg:col-span-3",
    iconClassName: "bg-surface-muted text-primary",
  },
];

const cardVariants = {
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

export function ClinicInformation() {
  return (
    <section
      aria-labelledby="clinic-information-heading"
      className="relative overflow-hidden py-14 sm:py-16 lg:py-20"
    >
      <div className="site-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          className="mb-6 max-w-2xl sm:mb-8"
        >
          <p className="flex items-center gap-2.5 text-[0.72rem] font-extrabold tracking-[0.14em] text-primary uppercase sm:text-xs">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Clinic at a glance
          </p>
          <h2
            id="clinic-information-heading"
            className="mt-4 font-display text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-text sm:text-4xl lg:text-[2.75rem]"
          >
            Plan your visit.
          </h2>
        </motion.div>

        <motion.ul
          className="grid list-none grid-cols-2 gap-3 p-0 sm:gap-4 lg:grid-cols-12"
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
          {clinicDetails.map((detail) => {
            const Icon = detail.icon;

            return (
              <motion.li
                key={detail.title}
                variants={cardVariants}
                whileHover={{ y: motionOffset.hoverLiftY }}
                whileTap={{ scale: motionScale.press }}
                className={`group rounded-[var(--radius-card)] border p-4 transition-shadow duration-300 hover:shadow-featured sm:p-5 lg:min-h-48 lg:p-6 ${detail.className}`}
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-2.5 sm:gap-4">
                    <h3 className="text-xs font-extrabold tracking-[-0.015em] text-primary-dark sm:text-sm">
                      {detail.title}
                    </h3>
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-[0.8rem] border border-border/70 sm:size-10 lg:size-11 ${detail.iconClassName}`}
                    >
                      <Icon aria-hidden="true" className="size-[1.1rem] lg:size-5" />
                    </span>
                  </div>

                  <div className="mt-5 lg:mt-auto lg:pt-6">
                    {detail.lines.map((line) => (
                      <p
                        key={line}
                        className="text-[1.02rem] leading-6 font-extrabold tracking-[-0.035em] text-text sm:text-lg lg:text-xl lg:leading-7"
                      >
                        {line}
                      </p>
                    ))}
                    <p className="mt-1.5 text-[0.68rem] leading-4 font-semibold text-muted sm:text-xs lg:text-sm lg:leading-5">
                      {detail.note}
                    </p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
