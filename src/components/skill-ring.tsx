"use client";

import { motion, useReducedMotion } from "motion/react";

const RADIUS = 46;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * Circular progress ring — the stat widget from the dashboard reference.
 * `color` takes a CSS colour, typically one of the palette custom properties.
 */
export function SkillRing({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  const reduceMotion = useReducedMotion();
  const offset = CIRCUMFERENCE * (1 - value / 100);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-28 w-28">
        <svg viewBox="0 0 112 112" className="h-full w-full -rotate-90">
          <circle
            cx="56"
            cy="56"
            r={RADIUS}
            fill="none"
            strokeWidth="9"
            className="stroke-border"
          />
          <motion.circle
            cx="56"
            cy="56"
            r={RADIUS}
            fill="none"
            strokeWidth="9"
            strokeLinecap="round"
            stroke={color}
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: reduceMotion ? offset : CIRCUMFERENCE }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-display text-xl font-semibold">
          {value}%
        </span>
      </div>
      <span className="text-sm text-muted">{label}</span>
    </div>
  );
}
