"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  clinicImageCategories,
  clinicImages,
  clinicImageNotice,
} from "@/config/clinic-images";
import { motionDuration, motionEasing, motionOffset } from "@/lib/motion";
import { ClinicSpaceFilter, type GalleryCategory } from "./clinic-space-filter";
import styles from "./clinic-gallery.module.css";

export function ClinicGallery() {
  const [category, setCategory] = useState<GalleryCategory>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const reducedMotion = useReducedMotion();
  const images = clinicImages.filter(
    (image) => category === "all" || image.category === category,
  );
  const selectedImage = selectedIndex === null ? null : images[selectedIndex];
  const isOpen = selectedIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      const padding = parseFloat(window.getComputedStyle(document.body).paddingRight);
      document.body.style.paddingRight = `${padding + scrollbarWidth}px`;
    }
    dialog.showModal();
    closeRef.current?.focus({ preventScroll: true });

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  function navigate(offset: number) {
    setSelectedIndex((current) =>
      current === null ? null : (current + offset + images.length) % images.length,
    );
  }

  return (
    <>
      <ClinicSpaceFilter category={category} onChange={setCategory} />
      <p className="mt-4 text-xs leading-5 text-muted" role="status">
        {images.length} {images.length === 1 ? "image" : "images"} · Select a photograph to view it in full.
      </p>

      <div
        id="clinic-photo-collection"
        className={`${styles.collection} ${category !== "all" ? styles.filtered : ""}`}
      >
        {images.map((image, index) => {
          const categoryLabel = clinicImageCategories.find(
            (item) => item.key === image.category,
          )?.label;

          return (
            <motion.figure
              key={image.key}
              className={`${styles.card} ${styles[image.presentation]}`}
              initial={{ opacity: 0, y: reducedMotion ? 0 : motionOffset.revealY }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: motionDuration.reveal, ease: motionEasing.standard }}
            >
              <button
                type="button"
                className={styles.photo}
                aria-label={`View ${image.label.toLowerCase()} in full`}
                aria-haspopup="dialog"
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  sizes={
                    image.presentation === "lead"
                      ? "(max-width: 767px) 92vw, (max-width: 1279px) calc(100vw - 64px), 1216px"
                      : category !== "all"
                        ? images.length === 1
                          ? "(max-width: 767px) 92vw, 576px"
                          : category === "consultation" || images.length === 2
                            ? "(max-width: 767px) 92vw, (max-width: 1279px) 44vw, 596px"
                            : "(max-width: 767px) 92vw, (max-width: 1023px) 44vw, 392px"
                        : image.presentation === "wide"
                          ? "(max-width: 767px) 92vw, (max-width: 1279px) 62vw, 800px"
                          : "(max-width: 767px) 92vw, (max-width: 1279px) 31vw, 392px"
                  }
                  style={{ objectPosition: image.objectPosition }}
                  className={styles.image}
                />
                <span className={styles.expand} aria-hidden="true">
                  <Expand className="size-4" />
                </span>
              </button>
              <figcaption className={styles.caption}>
                <div className="min-w-0">
                  <p className="text-[0.65rem] leading-4 font-extrabold tracking-[0.1em] text-primary-ink uppercase">
                    {categoryLabel}
                  </p>
                  <p className="mt-1 text-sm leading-5 font-extrabold text-primary-dark sm:text-base">
                    {image.label}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted">{image.detail}</p>
                </div>
                <span className="text-xs font-semibold text-muted" aria-hidden="true">
                  {String(clinicImages.indexOf(image) + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </motion.figure>
          );
        })}
      </div>

      <dialog
        ref={dialogRef}
        className={styles.lightbox}
        aria-labelledby="clinic-lightbox-title"
        aria-describedby="clinic-lightbox-notice"
        onCancel={() => setSelectedIndex(null)}
        onClose={() => setSelectedIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelectedIndex(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            navigate(1);
          } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            navigate(-1);
          } else if (event.key === "Home") {
            event.preventDefault();
            setSelectedIndex(0);
          } else if (event.key === "End") {
            event.preventDefault();
            setSelectedIndex(images.length - 1);
          }
        }}
      >
        {selectedImage ? (
          <div className={styles.lightboxPanel}>
            <div className={styles.lightboxHeader}>
              <p className="text-sm font-extrabold">Clinic gallery</p>
              <button
                ref={closeRef}
                type="button"
                className={styles.control}
                aria-label="Close image viewer"
                onClick={() => setSelectedIndex(null)}
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>
            <div
              className={styles.lightboxPhoto}
              onTouchStart={(event) => {
                const touch = event.touches[0];
                touchStart.current = event.touches.length === 1 ? { x: touch.clientX, y: touch.clientY } : null;
              }}
              onTouchEnd={(event) => {
                const start = touchStart.current;
                touchStart.current = null;
                const touch = event.changedTouches[0];
                if (!start || !touch) return;
                const deltaX = touch.clientX - start.x;
                const deltaY = touch.clientY - start.y;
                if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
                  navigate(deltaX < 0 ? 1 : -1);
                }
              }}
            >
              <Image
                key={selectedImage.key}
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                loading="eager"
                sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) 85vw, 1120px"
                className="object-contain"
              />
            </div>
            <div className={styles.lightboxFooter}>
              <div className="min-w-0" aria-live="polite" aria-atomic="true">
                <p className="text-xs text-muted">{(selectedIndex ?? 0) + 1} / {images.length}</p>
                <h3 id="clinic-lightbox-title" className="mt-1 text-base leading-6 font-extrabold text-primary-dark">
                  {selectedImage.label}
                </h3>
                <p className="mt-1 text-xs leading-5 text-muted">{selectedImage.detail}</p>
              </div>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  className={styles.control}
                  aria-label="Previous photograph"
                  disabled={images.length < 2}
                  onClick={() => navigate(-1)}
                >
                  <ChevronLeft aria-hidden="true" className="size-5" />
                </button>
                <button
                  type="button"
                  className={styles.control}
                  aria-label="Next photograph"
                  disabled={images.length < 2}
                  onClick={() => navigate(1)}
                >
                  <ChevronRight aria-hidden="true" className="size-5" />
                </button>
              </div>
            </div>
            <p id="clinic-lightbox-notice" className="px-4 pb-4 text-xs leading-5 text-muted sm:px-6 sm:pb-6">
              {clinicImageNotice}
            </p>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
