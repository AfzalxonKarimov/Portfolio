"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

/**
 * A row of day-cells shaped like a real consistency curve: strong, a slip,
 * a dip, then a climb back up. It's not a decorative sparkline -- it's the
 * same "dip and recover" mechanic described in the About and Projects copy,
 * made visible. Height encodes the score; color marks recovery in progress.
 */
const DAYS = [
  { h: 0.86, state: "steady" },
  { h: 0.94, state: "steady" },
  { h: 0.98, state: "steady" },
  { h: 0.62, state: "slip" },
  { h: 0.34, state: "slip" },
  { h: 0.22, state: "low" },
  { h: 0.28, state: "recover" },
  { h: 0.4, state: "recover" },
  { h: 0.56, state: "recover" },
  { h: 0.7, state: "recover" },
  { h: 0.82, state: "recover" },
  { h: 0.9, state: "steady" },
  { h: 0.97, state: "steady" },
  { h: 1, state: "steady" },
] as const;

const STATE_COLOR: Record<(typeof DAYS)[number]["state"], string> = {
  steady: "bg-accent",
  slip: "bg-border-strong",
  low: "bg-border-strong",
  recover: "bg-recover",
};

export function ConsistencyStrip({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-end gap-[3px] sm:gap-1", className)}>
      {DAYS.map((day, i) => (
        <motion.span
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5 + i * 0.035,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ height: `${day.h * 100}%`, transformOrigin: "bottom" }}
          className={cn(
            "w-[7px] rounded-[1.5px] sm:w-2.5",
            STATE_COLOR[day.state]
          )}
        />
      ))}
    </div>
  );
}
