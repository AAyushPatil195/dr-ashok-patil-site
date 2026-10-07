"use client";

import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  Baby,
  Droplets,
  Stethoscope,
  Thermometer,
  Utensils,
  Wind,
} from "lucide-react";
import { motion } from "motion/react";
import {
  motionDuration,
  motionEasing,
  motionOffset,
  motionScale,
  motionStagger,
} from "@/lib/motion";

type Treatment = {
  title: string;
  description: string;
  icon: LucideIcon;
  className: string;
};

const treatments: Treatment[] = [
  {
    title: "Fever & infections",
    description: "Common acute illness care.",
    icon: Thermometer,
    className: "lg:col-span-3",
  },
  {
    title: "Respiratory problems",
    description: "Cough, cold and breathing concerns.",
    icon: Wind,
    className: "lg:col-span-4",
  },
  {
    title: "Digestive problems",
    description: "Common digestive concerns.",
    icon: Utensils,
    className: "lg:col-span-4",
  },
  {
    title: "BP & hypertension",
    description: "Evaluation and ongoing monitoring.",
    icon: Activity,
    className: "lg:col-span-3",
  },
  {
    title: "Diabetes & chronic care",
    description: "Long-term chronic care support.",
    icon: Droplets,
    className: "lg:col-span-5",
  },
  {
    title: "Child healthcare",
    description: "Common childhood health concerns.",
    icon: Baby,
    className: "lg:col-span-7",
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

export function TreatmentsPreview() {
  return (
    <section
      id="treatments"
      aria-labelledby="treatments-heading"
      className="relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-80 w-80 rounded-full bg-soft-accent/65 blur-3xl"
      />

      <div className="site-container relative">
        <motion.div
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={revealVariants}
        >
          <div className="max-w-2xl">
            <p className="flex items-center gap-2.5 text-[0.72rem] font-extrabold tracking-[0.14em] text-primary uppercase sm:text-xs">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Treatments & services
            </p>
            <h2
              id="treatments-heading"
              className="mt-4 max-w-[15ch] font-display text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-text sm:text-4xl lg:text-[2.9rem]"
            >
              Care for everyday health needs.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted sm:text-base sm:leading-7 lg:text-right">
            From a new concern to ongoing care, each visit begins with a
            thoughtful assessment and clear next steps.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12 lg:auto-rows-[minmax(10.5rem,auto)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: motionStagger.cards },
            },
          }}
        >
          <motion.article
            variants={revealVariants}
            whileHover={{ y: motionOffset.hoverLiftY }}
            whileTap={{ scale: motionScale.press }}
            className="group relative isolate col-span-2 overflow-hidden rounded-[var(--radius-panel)] border border-primary/15 bg-soft-accent p-6 shadow-featured transition-shadow duration-300 sm:p-8 lg:col-span-5 lg:row-span-2"
          >
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-16 -z-10 size-56 rounded-full bg-primary/10 blur-2xl"
            />
            <span className="grid size-12 place-items-center rounded-[1rem] bg-primary text-surface shadow-card">
              <Stethoscope aria-hidden="true" className="size-6" />
            </span>
            <div className="mt-14 sm:mt-20 lg:mt-24">
              <p className="text-xs font-extrabold tracking-[0.12em] text-accent uppercase">
                Complete first-line care
              </p>
              <h3 className="mt-3 text-2xl leading-tight font-extrabold tracking-[-0.04em] text-primary-dark sm:text-3xl">
                General medical care
              </h3>
              <p className="mt-4 max-w-md text-sm leading-6 text-muted sm:text-base sm:leading-7">
                Practical care for common illnesses, recurring concerns and
                ongoing health needs across the family.
              </p>
              <p className="mt-6 border-t border-primary/15 pt-5 text-sm leading-6 font-semibold text-primary-dark">
                Appropriate specialist referrals are advised when needed.
              </p>
            </div>
          </motion.article>

          {treatments.map((treatment) => {
            const Icon = treatment.icon;

            return (
              <motion.article
                key={treatment.title}
                variants={revealVariants}
                whileHover={{ y: motionOffset.hoverLiftY }}
                whileTap={{ scale: motionScale.press }}
                className={`group min-h-40 rounded-[var(--radius-card)] border border-border bg-surface p-4 shadow-standard transition-[border-color,box-shadow] duration-300 hover:border-primary/25 hover:shadow-featured sm:min-h-44 sm:p-5 lg:min-h-0 lg:p-6 ${treatment.className}`}
              >
                <div className="flex h-full flex-col justify-between gap-5 sm:gap-6">
                  <Icon
                    aria-hidden="true"
                    className="size-5 text-primary transition-transform duration-300 group-hover:scale-105 sm:size-6"
                  />
                  <div>
                    <h3 className="text-[0.94rem] leading-5 font-extrabold tracking-[-0.025em] text-primary-dark sm:text-base sm:leading-6 lg:text-lg">
                      {treatment.title}
                    </h3>
                    <p className="mt-1.5 text-[0.7rem] leading-[1.15rem] text-muted sm:text-xs sm:leading-5 lg:text-sm lg:leading-6">
                      {treatment.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-8 flex justify-start sm:mt-10 sm:justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={revealVariants}
        >
          <motion.a
            href="/treatments"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-control border border-primary/25 bg-surface px-5 text-sm font-extrabold text-primary-dark shadow-standard transition-colors duration-200 hover:border-primary/45 hover:bg-soft-accent focus-visible:outline-offset-4"
            whileHover={{ y: -2 }}
            whileTap={{ scale: motionScale.press }}
          >
            View all treatments
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
