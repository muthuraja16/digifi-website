"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";
import { hoverLift, tap } from "./variants";

/**
 * Lifts its child 2px on hover and presses it on tap (Motion). Sets the `group/lift` hook that
 * <Card> uses for its hover glow border. Under reduced motion the lift is skipped.
 */
export function HoverLift({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <m.div
      className={`group/lift ${className}`}
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      whileTap={tap}
    >
      {children}
    </m.div>
  );
}
