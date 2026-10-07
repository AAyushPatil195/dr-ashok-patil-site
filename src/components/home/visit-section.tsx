"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Clock3,
  Landmark,
  MapPin,
  Navigation,
} from "lucide-react";
import { clinicConfig } from "@/config/clinic";
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

export function VisitSection() {
  return (
    <section
      aria-labelledby="visit-heading"
      className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24"
    >
      <div id="contact" className="site-container">
        <motion.div
          className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: motionStagger.cards } },
          }}
        >
          <motion.div variants={revealVariants} className="flex flex-col">
            <p className="flex items-center gap-2.5 text-[0.72rem] font-extrabold tracking-[0.14em] text-primary uppercase sm:text-xs">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Visit the clinic
            </p>
            <h2
              id="visit-heading"
              className="mt-5 max-w-[12ch] font-display text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-text sm:text-4xl lg:text-[2.9rem]"
            >
              Practical care, close to central Jalgaon.
            </h2>

            <address className="mt-7 flex gap-3 not-italic">
              <span className="grid size-11 shrink-0 place-items-center rounded-[0.9rem] bg-soft-accent text-primary">
                <MapPin aria-hidden="true" className="size-5" />
              </span>
              <div>
                {clinicConfig.addressLines.map((line) => (
                  <p key={line} className="text-base leading-7 font-bold text-primary-dark">
                    {line}
                  </p>
                ))}
                <p className="mt-2 text-sm leading-6 text-muted">
                  <Landmark aria-hidden="true" className="mr-1.5 inline size-4 text-accent" />
                  {clinicConfig.landmark}
                </p>
              </div>
            </address>

            <div className="mt-7 border-y border-border py-5">
              <div className="flex items-start gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-[0.9rem] bg-surface text-primary shadow-standard">
                  <Clock3 aria-hidden="true" className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-extrabold text-primary-dark">Clinic timings</p>
                  <div className="mt-2 grid gap-1 text-sm leading-6 text-muted min-[390px]:grid-cols-2 min-[390px]:gap-3">
                    <time>{clinicConfig.morningHours}</time>
                    <time>{clinicConfig.eveningHours}</time>
                  </div>
                  <p className="mt-2 text-xs font-bold text-primary">
                    {clinicConfig.sundayNote}
                  </p>
                </div>
              </div>
            </div>

            <motion.a
              href={clinicConfig.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-control bg-primary px-5 text-sm font-extrabold text-surface shadow-standard transition-[background-color,box-shadow] duration-200 hover:bg-primary-dark hover:shadow-card focus-visible:outline-offset-4 sm:w-fit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: motionScale.press }}
            >
              <Navigation aria-hidden="true" className="size-4" />
              Get directions
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>

            <p className="mt-4 text-xs leading-5 text-muted">
              Phone and WhatsApp details will be added once confirmed.
            </p>
          </motion.div>

          <motion.div
            variants={revealVariants}
            className="relative isolate min-h-[22rem] overflow-hidden rounded-[var(--radius-panel)] border border-primary/20 bg-primary-dark shadow-featured sm:min-h-[28rem] lg:min-h-[32rem]"
          >
            <iframe
              src={clinicConfig.mapEmbedUrl}
              title={`Map showing ${clinicConfig.address}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.12] contrast-[1.02]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary-dark/65 to-transparent"
            />
            <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 sm:inset-x-6 sm:bottom-6">
              <div className="rounded-[1rem] border border-surface/60 bg-surface/92 px-4 py-3 shadow-card backdrop-blur-lg">
                <p className="text-xs font-extrabold tracking-[0.08em] text-primary uppercase">
                  Shani Peth
                </p>
                <p className="mt-1 text-sm font-bold text-primary-dark">
                  Near Phule / Fule Market
                </p>
              </div>
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary text-surface shadow-card">
                <MapPin aria-hidden="true" className="size-5" />
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
