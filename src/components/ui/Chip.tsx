import type { ComponentProps } from "react";

const surface =
  "inline-flex items-center gap-2 rounded-full border border-border bg-white text-sm font-medium text-navy-900 on-dark:border-white/20 on-dark:bg-transparent on-dark:text-white";

/** Static pill label (industries, tags, client names). */
export function Chip({ className = "", ...props }: ComponentProps<"span">) {
  return <span className={`${surface} min-h-9 px-4 ${className}`} {...props} />;
}

/** Toggle pill for filters. Set `aria-pressed` for the selected state. */
export function ChipButton({
  className = "",
  type = "button",
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      type={type}
      className={`${surface} min-h-11 px-4 transition-colors duration-150 hover:border-navy-900/40 aria-pressed:border-navy-900 aria-pressed:bg-navy-900 aria-pressed:text-white on-dark:hover:border-white/50 on-dark:aria-pressed:border-white on-dark:aria-pressed:bg-white on-dark:aria-pressed:text-navy-900 ${className}`}
      {...props}
    />
  );
}
