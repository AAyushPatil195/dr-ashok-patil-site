"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  HeartHandshake,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { mediaConfig } from "@/config/media";
import {
  motionDuration,
  motionEasing,
  motionOffset,
  motionScale,
  motionStagger,
} from "@/lib/motion";

const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=B1%2F1019%2C%20Shani%20Peth%2C%20Kinara%2C%20Jalgaon%2C%20Maharashtra%20425001";

export function Hero() {
  const revealItem = {
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

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:min-h-[min(900px,100svh)] lg:pb-24 lg:pt-36"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_8%,var(--soft-accent),transparent_34%),radial-gradient(circle_at_88%_28%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_28%),linear-gradient(180deg,var(--background),var(--surface))]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 top-28 -z-10 size-72 rounded-full border border-primary/10"
      />

      <div className="site-container grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-10 xl:gap-16">
        <motion.div
          className="relative z-10 max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: motionStagger.cards,
              },
            },
          }}
        >
          <motion.div
            variants={revealItem}
            className="inline-flex items-center gap-2.5 text-[0.72rem] font-extrabold tracking-[0.14em] text-primary uppercase sm:text-xs"
          >
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Family care in Shani Peth, Jalgaon
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={revealItem}
            className="mt-5 max-w-[12ch] font-display text-[clamp(2.65rem,12vw,4rem)] leading-[0.98] font-[750] tracking-[-0.055em] text-text lg:text-[clamp(3.8rem,5.8vw,5.35rem)]"
          >
            Experienced care. Grounded in{" "}
            <span className="text-primary">trust.</span>
          </motion.h1>

          <motion.div variants={revealItem} className="mt-6 sm:mt-7">
            <p className="text-lg font-extrabold tracking-[-0.02em] text-primary-dark sm:text-xl">
              Dr. Ashok A. Patil
            </p>
            <p className="mt-1 text-sm font-semibold tracking-[0.025em] text-muted sm:text-base">
              B.A.M.S. · General Practitioner
            </p>
          </motion.div>

          <motion.p
            variants={revealItem}
            className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
          >
            Around 28 years of practical, patient-first care for families in
            Jalgaon—with thoughtful diagnosis, clear guidance and appropriate
            specialist referrals when needed.
          </motion.p>

          <motion.div
            variants={revealItem}
            className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row"
          >
            <motion.a
              href="#enquiry"
              className="group inline-flex min-h-14 items-center justify-center gap-2.5 rounded-control bg-primary px-6 text-sm font-extrabold text-surface shadow-card transition-colors duration-200 hover:bg-primary-dark focus-visible:outline-offset-4"
              whileHover={{ y: -2 }}
              whileTap={{ scale: motionScale.press }}
            >
              <MessageSquareText aria-hidden="true" className="size-[1.1rem]" />
              Send enquiry
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>

            <motion.a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-control border border-border-strong bg-surface px-6 text-sm font-extrabold text-primary-dark shadow-soft transition-[border-color,background-color] duration-200 hover:border-primary/45 hover:bg-soft-accent focus-visible:outline-offset-4"
              whileHover={{ y: -2 }}
              whileTap={{ scale: motionScale.press }}
            >
              <MapPin aria-hidden="true" className="size-[1.1rem] text-accent" />
              Get directions
            </motion.a>
          </motion.div>

          <motion.div
            variants={revealItem}
            className="mt-7 flex items-start gap-3 border-t border-border pt-5 text-sm leading-6 text-muted sm:mt-9 sm:max-w-lg"
          >
            <ShieldCheck
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 text-primary"
            />
            <p>
              Established local practice with a patient-first, practical
              approach to everyday and ongoing healthcare.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
          initial={{
            opacity: 0,
            scale: 0.985,
            y: 12,
          }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.62,
            delay: 0.18,
            ease: motionEasing.standard,
          }}
        >
          <div className="relative isolate min-h-[27rem] overflow-hidden rounded-[2rem_2rem_4.5rem_2rem] border border-primary/10 bg-soft-accent shadow-[0_1.5rem_4rem_var(--shadow-color)] sm:min-h-[34rem] lg:min-h-[37rem]">
            <div
              aria-hidden="true"
              className="absolute -right-14 -top-16 size-56 rounded-full bg-accent/15 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-20 -left-12 size-64 rounded-full bg-primary/15 blur-3xl"
            />
            <span
              aria-hidden="true"
              className="absolute -right-5 top-8 select-none text-[10rem] leading-none font-black tracking-[-0.12em] text-primary/[0.045] sm:text-[13rem]"
            >
              AP
            </span>

            <Image
              src={mediaConfig.doctorPortrait.src}
              alt={
                mediaConfig.doctorPortrait.isPlaceholder
                  ? ""
                  : mediaConfig.doctorPortrait.alt
              }
              fill
              priority
              sizes="(max-width: 1023px) 92vw, 46vw"
              className="object-contain object-bottom"
            />

            {mediaConfig.doctorPortrait.isPlaceholder ? (
              <div
                className="absolute inset-0 grid place-items-center p-8 text-center"
                role="img"
                aria-label="Reserved space for the approved portrait of Dr. Ashok A. Patil"
              >
                <div>
                  <span className="mx-auto grid size-28 place-items-center rounded-[2rem] border border-primary/15 bg-surface/70 text-primary shadow-card backdrop-blur-md sm:size-36">
                    <UserRound aria-hidden="true" className="size-14 sm:size-16" />
                  </span>
                  <p className="mt-5 text-sm font-extrabold text-primary-dark">
                    Doctor portrait reserved
                  </p>
                  <p className="mt-1 text-xs font-semibold text-muted">
                    Ready for the approved photograph
                  </p>
                </div>
              </div>
            ) : null}

            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-primary-dark/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-[1.1rem] border border-surface/70 bg-surface/88 p-3.5 shadow-card backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
              <span className="grid size-10 shrink-0 place-items-center rounded-control bg-soft-accent text-primary-dark">
                <HeartHandshake aria-hidden="true" className="size-5" />
              </span>
              <p className="text-xs leading-5 font-semibold text-text sm:text-sm">
                Trusted by local families across generations
              </p>
            </div>
          </div>

          <div className="relative z-10 -mt-4 ml-4 grid max-w-md grid-cols-2 gap-2.5 sm:-mt-6 sm:ml-7 sm:gap-3">
            <div className="rounded-[1.15rem] border border-border bg-surface p-4 shadow-card sm:p-5">
              <p className="text-2xl font-extrabold tracking-[-0.04em] text-primary-dark sm:text-3xl">
                28
              </p>
              <p className="mt-1 text-xs leading-5 font-semibold text-muted sm:text-sm">
                Years of clinical experience
              </p>
            </div>
            <div className="rounded-[1.15rem] border border-border bg-primary-dark p-4 text-surface shadow-card sm:p-5">
              <p className="text-sm font-extrabold sm:text-base">Family practice</p>
              <p className="mt-1 text-xs leading-5 text-surface/70 sm:text-sm">
                Shani Peth, Jalgaon
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
