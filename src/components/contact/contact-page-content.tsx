"use client";

import {
  ArrowUpRight,
  Clock3,
  Landmark,
  MapPin,
  MessageCircle,
  MessageSquareText,
  Navigation,
  Phone,
  Stethoscope,
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

export function ContactPageContent() {
  return (
    <>
      <section
        aria-labelledby="contact-page-heading"
        className="relative isolate overflow-hidden bg-background pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pb-20"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_10%,var(--soft-accent),transparent_34%),radial-gradient(circle_at_92%_30%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_28%),linear-gradient(180deg,var(--background),var(--surface))]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-24 top-20 -z-10 size-72 rounded-full border border-primary/10"
        />

        <div className="site-container grid items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 xl:gap-20">
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
              Visit the clinic
            </motion.p>
            <motion.h1
              id="contact-page-heading"
              variants={revealVariants}
              className="mt-5 max-w-[10ch] font-display text-[clamp(2.7rem,12vw,4rem)] leading-[1.01] font-[750] tracking-[-0.055em] text-text lg:text-[clamp(3.5rem,5vw,4.5rem)]"
            >
              Easy to find. Easy to reach.
            </motion.h1>
            <motion.div
              variants={revealVariants}
              className="mt-6 flex items-start gap-3"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-[0.9rem] bg-soft-accent text-primary">
                <Stethoscope aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="text-base font-extrabold text-primary-dark sm:text-lg">
                  Dr. Ashok A. Patil
                </p>
                <p className="mt-1 text-sm font-semibold text-muted">
                  B.A.M.S. · General Practitioner
                </p>
                <p className="mt-1 text-sm text-muted">Shani Peth, Jalgaon</p>
              </div>
            </motion.div>
            <motion.div
              variants={revealVariants}
              className="mt-7 flex flex-col gap-3 min-[390px]:flex-row"
            >
              <motion.a
                href={clinicConfig.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-[var(--radius-control)] bg-primary px-5 text-sm font-extrabold text-surface shadow-standard transition-[background-color,box-shadow] duration-200 hover:bg-primary-dark hover:shadow-card focus-visible:outline-offset-4"
                whileHover={{ y: -2 }}
                whileTap={{ scale: motionScale.press }}
              >
                <Navigation aria-hidden="true" className="size-4" />
                Get Directions
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>
              <motion.a
                href="#enquiry"
                className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-[var(--radius-control)] border border-primary/20 bg-surface/80 px-5 text-sm font-extrabold text-primary shadow-subtle backdrop-blur-sm transition-[background-color,border-color] duration-200 hover:border-primary/35 hover:bg-soft-accent focus-visible:outline-offset-4"
                whileHover={{ y: -2 }}
                whileTap={{ scale: motionScale.press }}
              >
                <MessageSquareText aria-hidden="true" className="size-4" />
                Send enquiry
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="overflow-hidden rounded-[var(--radius-panel)] border border-primary/15 bg-surface/92 shadow-featured backdrop-blur-lg"
            initial={{ opacity: 0, y: motionOffset.revealY }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: motionDuration.reveal,
              delay: 0.12,
              ease: motionEasing.standard,
            }}
          >
            <div className="grid gap-5 border-b border-border p-5 sm:grid-cols-2 sm:p-6 lg:p-7">
              <address className="flex gap-3 not-italic">
                <span className="grid size-10 shrink-0 place-items-center rounded-[0.85rem] bg-soft-accent text-primary">
                  <MapPin aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-extrabold tracking-[0.1em] text-primary uppercase">
                    Clinic address
                  </p>
                  <p className="mt-2 text-sm leading-6 font-bold text-primary-dark">
                    {clinicConfig.addressLines[0]}
                    <br />
                    {clinicConfig.addressLines[1]}
                  </p>
                </div>
              </address>

              <div className="flex gap-3 sm:border-l sm:border-border sm:pl-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-[0.85rem] bg-soft-accent text-primary">
                  <Clock3 aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-extrabold tracking-[0.1em] text-primary uppercase">
                    Clinic timings
                  </p>
                  <div className="mt-2 grid gap-1 text-sm leading-6 font-bold text-primary-dark">
                    <time>{clinicConfig.morningHours}</time>
                    <time>{clinicConfig.eveningHours}</time>
                  </div>
                  <p className="mt-1 text-xs font-bold text-primary">
                    {clinicConfig.sundayNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-surface-muted px-5 py-4 sm:px-6 lg:px-7">
              <Landmark
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-accent"
              />
              <p className="text-sm leading-6 text-muted">
                <span className="font-extrabold text-primary-dark">Nearby:</span>{" "}
                Phule / Fule Market and the main vegetable market area.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        aria-labelledby="clinic-map-heading"
        className="relative overflow-hidden bg-surface py-14 sm:py-16 lg:py-20"
      >
        <div className="site-container grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-stretch lg:gap-10">
          <motion.div
            className="relative isolate min-h-[19rem] overflow-hidden rounded-[var(--radius-panel)] border border-primary/20 bg-primary-dark shadow-featured sm:min-h-[25rem] lg:min-h-[30rem]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={revealVariants}
          >
            <iframe
              src={clinicConfig.mapEmbedUrl}
              title={`Map showing ${clinicConfig.address}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.1] contrast-[1.02]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-primary-dark/60 to-transparent"
            />
            <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-[1rem] border border-surface/65 bg-surface/92 px-4 py-3 shadow-standard backdrop-blur-lg sm:inset-x-auto sm:left-5 sm:max-w-sm">
              <p className="text-xs font-extrabold tracking-[0.1em] text-primary uppercase">
                Shani Peth, Jalgaon
              </p>
              <p className="mt-1 text-sm font-bold text-primary-dark">
                Near Phule / Fule Market
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: motionStagger.cards } },
            }}
          >
            <motion.p
              variants={revealVariants}
              className="text-xs font-extrabold tracking-[0.12em] text-primary uppercase"
            >
              Map & directions
            </motion.p>
            <motion.h2
              id="clinic-map-heading"
              variants={revealVariants}
              className="mt-4 max-w-[12ch] font-display text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-text sm:text-4xl lg:text-[2.8rem]"
            >
              Plan a straightforward visit.
            </motion.h2>
            <motion.p
              variants={revealVariants}
              className="mt-5 max-w-lg text-sm leading-6 text-muted sm:text-base sm:leading-7"
            >
              The clinic is in Shani Peth near the Phule / Fule Market and main
              vegetable market area. Open the location in Google Maps for
              turn-by-turn directions.
            </motion.p>
            <motion.a
              variants={revealVariants}
              href={clinicConfig.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-[var(--radius-control)] bg-primary px-5 text-sm font-extrabold text-surface shadow-standard transition-colors duration-200 hover:bg-primary-dark focus-visible:outline-offset-4 sm:w-fit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: motionScale.press }}
            >
              <Navigation aria-hidden="true" className="size-4" />
              Get Directions
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>

            <motion.div
              variants={revealVariants}
              className="mt-8 border-t border-border pt-6"
            >
              <p className="text-xs font-extrabold tracking-[0.1em] text-muted uppercase">
                Direct contact
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  disabled
                  className="flex min-h-12 cursor-not-allowed items-center justify-center gap-2 rounded-[var(--radius-control)] border border-border bg-surface-muted px-3 text-xs font-extrabold text-muted opacity-70"
                >
                  <Phone aria-hidden="true" className="size-4" />
                  Call coming soon
                </button>
                <button
                  type="button"
                  disabled
                  className="flex min-h-12 cursor-not-allowed items-center justify-center gap-2 rounded-[var(--radius-control)] border border-border bg-surface-muted px-3 text-xs font-extrabold text-muted opacity-70"
                >
                  <MessageCircle aria-hidden="true" className="size-4" />
                  WhatsApp coming soon
                </button>
              </div>
              <p className="mt-3 text-xs leading-5 text-muted">
                Verified clinic phone and WhatsApp details will be added once
                finalized.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
