import type { ComponentProps } from "react";

const tones = {
  neutral: "bg-surface text-navy-900 on-dark:bg-white/8 on-dark:text-white",
  brand: "bg-blue-50 text-blue-600 on-dark:bg-blue-600 on-dark:text-white",
  outline:
    "border border-border text-muted on-dark:border-white/20 on-dark:text-on-dark",
} as const;

/** Small status label, e.g. "Most popular" or "Sample report". Not interactive. */
export function Badge({
  tone = "neutral",
  className = "",
  ...props
}: ComponentProps<"span"> & { tone?: keyof typeof tones }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[13px] font-semibold ${tones[tone]} ${className}`}
      {...props}
    />
  );
}
