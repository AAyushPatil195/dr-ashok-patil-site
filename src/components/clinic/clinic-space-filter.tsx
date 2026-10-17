"use client";

import { Check, ChevronDown, SlidersHorizontal } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { clinicImageCategories, clinicImages, type ClinicImageCategory } from "@/config/clinic-images";
import { motionDuration, motionEasing } from "@/lib/motion";
import styles from "./clinic-gallery.module.css";

export type GalleryCategory = ClinicImageCategory | "all";

const options = [
  { key: "all" as const, label: "All Spaces", count: clinicImages.length },
  ...clinicImageCategories.map((category) => ({
    ...category,
    count: clinicImages.filter((image) => image.category === category.key).length,
  })),
];

type ClinicSpaceFilterProps = {
  category: GalleryCategory;
  onChange: (category: GalleryCategory) => void;
};

export function ClinicSpaceFilter({ category, onChange }: ClinicSpaceFilterProps) {
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reducedMotion = useReducedMotion();
  const selectedIndex = options.findIndex((option) => option.key === category);

  useEffect(() => {
    if (open) optionRefs.current[focusedIndex]?.focus();
  }, [open, focusedIndex]);

  useEffect(() => {
    if (!open) return;
    function dismiss(event: PointerEvent) {
      if (event.target instanceof Node && !wrapperRef.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [open]);

  function closeWithFocus() {
    setOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  }

  function handleMenuKey(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      closeWithFocus();
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      setFocusedIndex((index) => (index + (event.key === "ArrowDown" ? 1 : -1) + options.length) % options.length);
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      setFocusedIndex(event.key === "Home" ? 0 : options.length - 1);
    } else if (event.key.length === 1 && /\S/.test(event.key) && !event.altKey && !event.ctrlKey && !event.metaKey) {
      const match = options.findIndex((option, index) => index > focusedIndex && option.label.toLowerCase().startsWith(event.key.toLowerCase()));
      const firstMatch = options.findIndex((option) => option.label.toLowerCase().startsWith(event.key.toLowerCase()));
      if (firstMatch >= 0) {
        event.preventDefault();
        setFocusedIndex(match >= 0 ? match : firstMatch);
      }
    }
  }

  return (
    <div
      ref={wrapperRef}
      className={styles.filterWrapper}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <p id="clinic-filter-label" className={styles.filterLabel}>Filter by space</p>
      <button
        ref={triggerRef}
        id="clinic-filter-trigger"
        type="button"
        className={styles.filter}
        aria-label={`Filter by space: ${options[selectedIndex].label}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? "clinic-space-options" : undefined}
        onClick={() => {
          setFocusedIndex(selectedIndex);
          setOpen((current) => !current);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            setFocusedIndex(event.key === "ArrowUp" ? options.length - 1 : selectedIndex);
            setOpen(true);
          } else if (event.key === "Escape" && open) {
            event.preventDefault();
            closeWithFocus();
          }
        }}
      >
        <SlidersHorizontal aria-hidden="true" className="size-4 shrink-0" />
        <span className={styles.filterValue}>{options[selectedIndex].label}</span>
        <ChevronDown aria-hidden="true" className={`size-4 shrink-0 ${styles.chevron}`} />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="space-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : motionDuration.fast, ease: motionEasing.standard }}
            className={styles.menuReveal}
            aria-hidden={!open}
          >
            <div
              id="clinic-space-options"
              role="menu"
              aria-labelledby="clinic-filter-label"
              className={styles.menu}
              onKeyDown={handleMenuKey}
            >
              {options.map((option, index) => (
                <button
                  key={option.key}
                  ref={(element) => { optionRefs.current[index] = element; }}
                  type="button"
                  role="menuitemradio"
                  aria-checked={category === option.key}
                  aria-controls="clinic-photo-collection"
                  tabIndex={-1}
                  className={styles.option}
                  onFocus={() => setFocusedIndex(index)}
                  onClick={() => {
                    onChange(option.key);
                    closeWithFocus();
                  }}
                >
                  <span className={styles.optionCheck} aria-hidden="true">
                    {category === option.key ? <Check className="size-4" /> : null}
                  </span>
                  <span className={styles.filterValue}>{option.label}</span>
                  <span className={styles.count}>{option.count}</span>
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
