"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { MessageSquareText } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motionDuration, motionEasing, motionStagger } from "@/lib/motion";

const navigationItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Treatments", href: "/#treatments" },
  { label: "Clinic", href: "/#clinic" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Contact", href: "/#contact" },
] as const;

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let animationFrame: number | undefined;

    const updateScrollState = () => {
      if (animationFrame !== undefined) return;

      animationFrame = window.requestAnimationFrame(() => {
        const nextIsScrolled = window.scrollY >= 50;
        setIsScrolled((current) =>
          current === nextIsScrolled ? current : nextIsScrolled,
        );
        animationFrame = undefined;
      });
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const panel = menuPanelRef.current;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;

    document.body.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => panel?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panel) return;

      const focusableElements = Array.from(
        panel.querySelectorAll<HTMLElement>(focusableSelector),
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (event.shiftKey && document.activeElement === panel) {
        event.preventDefault();
        lastElement?.focus();
      } else if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div
          className={`site-container pointer-events-auto transition-[padding] duration-300 ease-out ${
            isScrolled ? "pt-2.5" : "pt-0"
          }`}
        >
          <div
            className={`flex items-center justify-between transition-[height,border-radius,background-color,border-color,box-shadow,padding] duration-300 ease-out ${
              isScrolled
                ? "h-16 rounded-[1.15rem] border border-border bg-surface/90 px-3.5 shadow-floating backdrop-blur-xl sm:px-5"
                : "h-20 border-b border-border/80 bg-background/90 px-0 backdrop-blur-md"
            }`}
          >
            <Link
              href="/#home"
              className="group flex min-w-0 items-center gap-3 rounded-control focus-visible:outline-offset-4"
              aria-label="Dr. Ashok A. Patil, Home"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-[0.9rem] bg-primary-dark text-xs font-extrabold tracking-[0.08em] text-surface shadow-soft transition-transform duration-300 group-hover:-translate-y-0.5 sm:size-11">
                AP
              </span>
              <span className="min-w-0 leading-none">
                <span className="block truncate text-[0.86rem] font-extrabold tracking-[-0.02em] text-text sm:text-[0.95rem]">
                  Dr. Ashok A. Patil
                </span>
                <span className="mt-1.5 block truncate text-[0.7rem] font-semibold tracking-[0.04em] text-muted sm:text-xs">
                  B.A.M.S. · General Practitioner
                </span>
              </span>
            </Link>

            <nav
              className="hidden items-center gap-0.5 lg:flex"
              aria-label="Primary navigation"
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-control px-3 py-2 text-[0.82rem] font-semibold text-muted transition-colors duration-200 hover:bg-soft-accent hover:text-primary-dark focus-visible:text-primary-dark xl:px-3.5 xl:text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2.5">
              <Link
                href="/#enquiry"
                className="hidden min-h-11 items-center gap-2 rounded-control bg-primary px-4 text-sm font-bold text-surface shadow-soft transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-card active:translate-y-0 lg:flex"
              >
                <MessageSquareText aria-hidden="true" className="size-4" />
                Enquiry
              </Link>

              <button
                ref={menuButtonRef}
                type="button"
                className="relative grid h-11 w-12 place-items-center rounded-control border border-border-strong bg-surface text-primary-dark shadow-soft transition-[transform,border-color,box-shadow] duration-200 hover:border-primary/50 hover:shadow-card active:scale-[0.97] lg:hidden"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsMenuOpen((current) => !current)}
              >
                <span className="sr-only">
                  {isMenuOpen ? "Close menu" : "Open menu"}
                </span>
                <span aria-hidden="true" className="relative block h-4 w-5">
                  <motion.span
                    className="absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-current"
                    animate={
                      isMenuOpen
                        ? { y: 4, rotate: 45 }
                        : { y: 0, rotate: 0 }
                    }
                    transition={{ duration: motionDuration.fast }}
                  />
                  <motion.span
                    className="absolute bottom-1 left-0 block h-0.5 w-5 rounded-full bg-current"
                    animate={
                      isMenuOpen
                        ? { y: -4, rotate: -45 }
                        : { y: 0, rotate: 0 }
                    }
                    transition={{ duration: motionDuration.fast }}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence initial={false}>
        {isMenuOpen ? (
          <motion.div
            id="mobile-navigation"
            ref={menuPanelRef}
            className="fixed inset-0 z-40 overflow-y-auto bg-surface/98 px-[var(--container-gutter)] pb-8 pt-28 backdrop-blur-2xl focus:outline-none lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            tabIndex={-1}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              duration: motionDuration.base,
              ease: motionEasing.standard,
            }}
          >
            <div className="mx-auto flex min-h-full w-full max-w-2xl flex-col">
              <motion.nav
                aria-label="Mobile primary navigation"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: motionStagger.menuItems,
                    },
                  },
                }}
              >
                <ul className="divide-y divide-border border-y border-border">
                  {navigationItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 10,
                        },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="group flex min-h-16 items-center justify-between rounded-control px-1 py-3 text-2xl font-bold tracking-[-0.03em] text-text transition-colors hover:text-primary focus-visible:text-primary"
                      >
                        <span>{item.label}</span>
                        <span className="text-xs font-bold tracking-[0.12em] text-muted transition-colors group-hover:text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>

              <div className="mt-auto grid gap-5 pt-10 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="text-sm font-bold text-primary-dark">
                    Family healthcare in Jalgaon
                  </p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
                    B1/1019, Shani Peth, Kinara, near Phule Market, Jalgaon.
                  </p>
                </div>
                <Link
                  href="/#enquiry"
                  onClick={closeMenu}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-control bg-primary px-5 text-sm font-bold text-surface shadow-card transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-dark active:translate-y-0"
                >
                  <MessageSquareText aria-hidden="true" className="size-4" />
                  Send enquiry
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
