"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { clinicCollageImages } from "@/config/clinic-images";
import { motionDuration, motionEasing, motionOffset, motionStagger } from "@/lib/motion";
import styles from "./clinic-collage.module.css";

export function ClinicCollage() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={styles.collage}
      role="group"
      aria-label="A first look inside the clinic"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: reducedMotion ? 0 : motionStagger.cards } } }}
    >
      {clinicCollageImages.map((image, index) => (
        <motion.div
          key={image.key}
          className={styles.tile}
          variants={{ hidden: { opacity: 0, y: reducedMotion ? 0 : motionOffset.revealY }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: reducedMotion ? 0 : motionDuration.reveal, ease: motionEasing.standard }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            sizes={index === 0
              ? "(max-width: 767px) 92vw, (max-width: 1023px) 46vw, (max-width: 1279px) 56vw, 700px"
              : index === 1
                ? "(max-width: 1023px) 44vw, (max-width: 1279px) 38vw, 500px"
                : "(max-width: 1023px) 44vw, (max-width: 1279px) 24vw, 300px"}
            style={{ objectPosition: image.objectPosition }}
            className={styles.image}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
