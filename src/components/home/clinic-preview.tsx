"use client";

import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Armchair,
  ArrowRight,
  BedSingle,
  Building2,
  ShieldCheck,
  Store,
  UsersRound,
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

type ClinicAsset = (typeof mediaConfig.clinicGallery)[number];

type ClinicImageCardProps = {
  asset: ClinicAsset;
  feature?: boolean;
  icon: LucideIcon;
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

function ClinicImageCard({ asset, feature = false, icon: Icon }: ClinicImageCardProps) {
  return (
    <motion.figure
      variants={revealVariants}
      whileHover={{ y: motionOffset.hoverLiftY }}
      whileTap={{ scale: motionScale.press }}
      className={`group relative isolate overflow-hidden rounded-[var(--radius-card)] border border-primary/15 bg-surface-muted shadow-standard transition-shadow duration-300 hover:shadow-featured ${
        feature
          ? "col-span-2 min-h-[25rem] lg:col-span-7 lg:row-span-2 lg:min-h-[37rem]"
          : "col-span-1 min-h-[14rem] sm:min-h-[17rem] lg:col-span-5 lg:min-h-0"
      }`}
    >
      {asset.src ? (
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          sizes={
            feature
              ? "(max-width: 1023px) 92vw, 58vw"
              : "(max-width: 639px) 46vw, (max-width: 1023px) 46vw, 42vw"
          }
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
        />
      ) : (
        <div
          className="absolute inset-0 grid place-items-center bg-surface-muted p-5 text-center"
          role="img"
          aria-label={`${asset.label} photograph ready to add`}
        >
          <div>
            <span className="mx-auto grid size-12 place-items-center rounded-[1rem] border border-primary/15 bg-surface text-primary shadow-standard sm:size-14">
              <Icon aria-hidden="true" className="size-6" />
            </span>
            <p className="mt-3 text-xs font-extrabold text-primary-dark sm:text-sm">
              Real clinic photo ready to add
            </p>
          </div>
        </div>
      )}

      {asset.src ? (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-primary-dark/80 to-transparent"
        />
      ) : null}

      <figcaption className="absolute inset-x-3 bottom-3 rounded-[0.9rem] border border-surface/70 bg-surface/90 p-3 shadow-standard backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:p-4">
        <p className="text-xs font-extrabold text-primary-dark sm:text-sm">
          {asset.label}
        </p>
        <p className="mt-1 text-[0.65rem] leading-4 font-semibold text-muted sm:text-xs sm:leading-5">
          {asset.detail}
        </p>
      </figcaption>
    </motion.figure>
  );
}

const galleryItems = [
  { asset: mediaConfig.clinicGallery[0], icon: Building2, feature: true },
  { asset: mediaConfig.clinicGallery[1], icon: BedSingle },
  { asset: mediaConfig.clinicGallery[2], icon: Armchair },
] as const;

const clinicDetails = [
  { icon: UsersRound, text: "Three clinic staff" },
  { icon: ShieldCheck, text: "Hygiene-focused setup" },
  {
    icon: Store,
    text: "Medical store in the same building, independently operated",
  },
] as const;

export function ClinicPreview() {
  return (
    <section
      aria-labelledby="clinic-preview-heading"
      className="relative overflow-hidden bg-surface pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-28"
    >
      <div id="clinic" className="site-container">
        <motion.div
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={revealVariants}
        >
          <div className="max-w-2xl">
            <p className="flex items-center gap-2.5 text-[0.72rem] font-extrabold tracking-[0.14em] text-primary uppercase sm:text-xs">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Inside the clinic
            </p>
            <h2
              id="clinic-preview-heading"
              className="mt-4 max-w-[17ch] font-display text-3xl leading-[1.08] font-[750] tracking-[-0.045em] text-text sm:text-4xl lg:text-[2.9rem]"
            >
              Designed for comfortable, practical care.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted sm:text-base sm:leading-7 lg:text-right">
            Purposeful spaces for consultation, treatment and comfortable
            waiting, with a focus on hygiene and practical patient care.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12 lg:grid-rows-2"
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
          {galleryItems.map((item) => (
            <ClinicImageCard
              key={item.asset.key}
              asset={item.asset}
              icon={item.icon}
              feature={"feature" in item ? item.feature : false}
            />
          ))}
        </motion.div>

        <motion.ul
          className="mt-6 grid list-none border-y border-border p-0 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.55 }}
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
                key={detail.text}
                variants={revealVariants}
                className="flex items-start gap-3 border-b border-border py-4 last:border-b-0 sm:border-r sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0"
              >
                <Icon
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-primary"
                />
                <span className="text-xs leading-5 font-bold text-primary-dark sm:text-sm">
                  {detail.text}
                </span>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          className="mt-8 flex justify-start sm:mt-10 sm:justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={revealVariants}
        >
          <motion.div
            className="inline-flex"
            whileHover={{ y: -2 }}
            whileTap={{ scale: motionScale.press }}
          >
            <Link
              href="/clinic"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-control border border-primary/25 bg-surface px-5 text-sm font-extrabold text-primary-dark shadow-standard transition-colors duration-200 hover:border-primary/45 hover:bg-soft-accent focus-visible:outline-offset-4"
            >
              Explore the clinic
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
