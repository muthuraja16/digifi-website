import Link from "next/link";
import type { ComponentProps } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

// Minimal CTA link for the site shell. Stage 4 grows this into the full Button component.

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full text-[15px] font-semibold whitespace-nowrap transition-colors duration-150 ease-out";

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  whatsapp: "bg-whatsapp text-navy-900 hover:bg-whatsapp-hover",
} as const;

const sizes = {
  md: "px-5",
  compact: "px-3",
} as const;

// className is for layout only (width, margins). Tailwind resolves clashing utilities by
// stylesheet order, not class order, so never pass display or padding here.
type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function ButtonLink({
  variant,
  size = "md",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  // WhatsApp opens the app or web.whatsapp.com; keep the site open behind it.
  const external =
    variant === "whatsapp"
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
  return (
    <Link
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...external}
      {...props}
    >
      {variant === "whatsapp" ? (
        <WhatsAppIcon className="size-5 shrink-0" />
      ) : null}
      {children}
    </Link>
  );
}
