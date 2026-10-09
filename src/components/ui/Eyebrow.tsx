import type { ComponentProps } from "react";

/** Small uppercase label above a heading. Blue on light, sky-300 on dark. */
export function Eyebrow({ className = "", ...props }: ComponentProps<"p">) {
  return (
    <p
      className={`eyebrow text-blue-600 on-dark:text-sky-300 ${className}`}
      {...props}
    />
  );
}
