"use client";

import { AnimatePresence, motion } from "motion/react";
import { MapPin, MessageSquareText, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { clinicConfig } from "@/config/clinic";
import { motionDuration, motionEasing } from "@/lib/motion";

export function MobileActionBar() {
  const [hasPassedHeroActions, setHasPassedHeroActions] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const heroActions = document.getElementById("hero-actions");
    const footer = document.getElementById("site-footer");

    if (!heroActions) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setHasPassedHeroActions(
          !entry.isIntersecting && entry.boundingClientRect.bottom < 0,
        );
      },
      { threshold: 0 },
    );

    const footerObserver = footer
      ? new IntersectionObserver(
          ([entry]) => setIsNearFooter(entry.isIntersecting),
          { rootMargin: "0px 0px 96px 0px", threshold: 0 },
        )
      : null;

    heroObserver.observe(heroActions);
    if (footer && footerObserver) footerObserver.observe(footer);

    return () => {
      heroObserver.disconnect();
      footerObserver?.disconnect();
    };
  }, []);

  const shouldShow = hasPassedHeroActions && !isNearFooter;

  return (
    <AnimatePresence initial={false}>
      {shouldShow ? (
        <motion.nav
          aria-label="Quick clinic actions"
          className="fixed inset-x-3 bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] z-40 mx-auto grid max-w-md grid-cols-3 gap-1 rounded-[var(--radius-card)] border border-border-strong bg-surface/92 p-1.5 shadow-dock backdrop-blur-2xl sm:inset-x-4 md:hidden"
          initial={{ opacity: 0, y: 16, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.99 }}
          transition={{
            duration: motionDuration.base,
            ease: motionEasing.standard,
          }}
        >
          <button
            type="button"
            disabled
            title="Phone number will be added once confirmed"
            aria-describedby="mobile-call-pending"
            className="relative flex min-h-13 cursor-not-allowed flex-col items-center justify-center gap-1 rounded-[var(--radius-control)] bg-transparent px-2 text-[0.7rem] font-extrabold text-muted opacity-65 after:absolute after:inset-y-2.5 after:-right-0.5 after:w-px after:bg-border"
          >
            <Phone aria-hidden="true" className="size-[1.1rem]" />
            Call
          </button>
          <span id="mobile-call-pending" className="sr-only">
            Phone number will be added once confirmed.
          </span>
          <motion.a
            href="#enquiry"
            className="flex min-h-13 flex-col items-center justify-center gap-1 rounded-[var(--radius-control)] bg-transparent px-2 text-[0.7rem] font-extrabold text-primary transition-[background-color,color] duration-200 focus-visible:bg-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-1 focus-visible:ring-offset-surface active:bg-accent-soft"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              duration: motionDuration.fast,
              ease: motionEasing.standard,
            }}
          >
            <MessageSquareText aria-hidden="true" className="size-[1.1rem]" />
            Enquiry
          </motion.a>
          <motion.a
            href={clinicConfig.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="relative flex min-h-13 flex-col items-center justify-center gap-1 rounded-[var(--radius-control)] bg-transparent px-2 text-[0.7rem] font-extrabold text-primary-dark transition-[background-color,color] duration-200 before:absolute before:inset-y-2.5 before:-left-0.5 before:w-px before:bg-border focus-visible:bg-accent-soft focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-1 focus-visible:ring-offset-surface active:bg-accent-soft active:text-primary"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              duration: motionDuration.fast,
              ease: motionEasing.standard,
            }}
          >
            <MapPin aria-hidden="true" className="size-[1.1rem] text-primary" />
            Directions
          </motion.a>
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
}
