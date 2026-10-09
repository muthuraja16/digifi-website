import type { Transition, Variants } from "motion/react";

// Motion (motion/react) variants for UI states. GSAP owns scroll and data animation;
// Motion owns hover, tap, accordion, quiz steps and menus. Never both on one element.

const easeOut = [0.22, 1, 0.36, 1] as const;

export const transitions = {
  micro: { duration: 0.15, ease: easeOut },
  ui: { duration: 0.25, ease: easeOut },
} satisfies Record<string, Transition>;

/** Card hover lift: 2px up. */
export const hoverLift: Variants = {
  rest: { y: 0, transition: transitions.ui },
  hover: { y: -2, transition: transitions.ui },
};

/** Press feedback for tappable surfaces. */
export const tap = { scale: 0.98, transition: transitions.micro };

/** Accordion panel: fades and settles in (height snaps; only transform and opacity animate). */
export const accordion: Variants = {
  collapsed: { opacity: 0, y: -4, transition: transitions.micro },
  open: { opacity: 1, y: 0, transition: transitions.ui },
};

/** Step or view change (quiz steps, tab panels). Not used on full pages: heroes never animate in. */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: transitions.ui },
  exit: { opacity: 0, y: -8, transition: transitions.micro },
};
