"use client";

// Single GSAP entry point: import gsap, ScrollTrigger and useGSAP from here, never from "gsap"
// directly, so plugins are registered exactly once. Client components only.
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase);

// Motion tokens from docs/design.md.
export const ease = {
  out: CustomEase.create("digifi-out", "0.22,1,0.36,1"),
  inOut: CustomEase.create("digifi-in-out", "0.65,0,0.35,1"),
};

export const duration = {
  reveal: 0.6,
  counter: 1.4,
  chart: 1.2,
  stagger: 0.08,
};

/** Animations only run for people who haven't asked for reduced motion. */
export const motionOK = "(prefers-reduced-motion: no-preference)";

/** Default scroll trigger: play once when the element's top reaches 85% of the viewport. */
export const onceInView = (trigger: Element) => ({
  trigger,
  start: "top 85%",
  once: true,
});

export { gsap, ScrollTrigger, useGSAP };
