import type { ComponentProps } from "react";

/**
 * Surface card. Light by default; inside an `on-dark` section it switches to navy-800 with a
 * hairline border and no shadow. Wrapped in <HoverLift>, it picks up the hover glow border.
 */
export function Card({ className = "", ...props }: ComponentProps<"div">) {
  return (
    <div
      className={`h-full rounded-card border border-border bg-white p-6 shadow-card transition-[border-color,box-shadow] duration-[250ms] ease-out group-hover/lift:border-blue-600/30 group-hover/lift:shadow-hover md:p-8 on-dark:border-white/8 on-dark:bg-navy-800 on-dark:shadow-none on-dark:group-hover/lift:border-sky-300/30 ${className}`}
      {...props}
    />
  );
}
