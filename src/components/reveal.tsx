"use client";

import { motion, type Variants } from "framer-motion";
import * as React from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Distance (px) the element travels while fading in. */
  y?: number;
  as?: "div" | "span";
}

const makeVariants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
});

/**
 * Fades + slides content into view once as it crosses the viewport.
 * Centralized here so every section animates with the same easing/timing --
 * consistency reads as "designed", inconsistency reads as "generated".
 */
export function Reveal({ children, className, delay = 0, y = 18 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={makeVariants(y)}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container for grids of cards / list items. */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 18,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div className={className} variants={makeVariants(y)}>
      {children}
    </motion.div>
  );
}
