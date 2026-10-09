import { ArrowRight, LoaderCircle } from "lucide-react";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const base =
  "group/btn relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold whitespace-nowrap transition-colors duration-150 ease-out select-none active:translate-y-px aria-disabled:pointer-events-none aria-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  // Fill sweep: a blue-700 layer scales in from the left on hover (transform only).
  primary:
    "bg-blue-600 text-white before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-blue-700 before:transition-transform before:duration-[250ms] before:ease-out hover:before:scale-x-100",
  whatsapp: "bg-whatsapp text-navy-900 hover:bg-whatsapp-hover",
  secondary:
    "border border-navy-900/20 text-navy-900 hover:border-navy-900 on-dark:border-white/25 on-dark:text-white on-dark:hover:border-white",
  ghost:
    "text-blue-600 hover:bg-blue-50 on-dark:text-white on-dark:hover:bg-white/8",
} as const;

// Every size keeps a 44px minimum tap target.
const sizes = {
  sm: "min-h-11 px-4 text-sm",
  md: "min-h-11 px-5 text-[15px]",
  lg: "min-h-13 px-7 text-base",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Trailing arrow that nudges right on hover (primary CTAs). */
  arrow?: boolean;
  /** Shows a spinner, sets aria-busy and blocks interaction. */
  loading?: boolean;
  /** Layout only (width, margins). Don't pass display, padding or colour: Tailwind resolves clashes by stylesheet order. */
  className?: string;
  children: ReactNode;
};

type LinkProps = CommonProps &
  Omit<ComponentProps<"a">, keyof CommonProps | "href"> & {
    href: string;
    disabled?: boolean;
  };
type NativeButtonProps = CommonProps &
  Omit<ComponentProps<"button">, keyof CommonProps> & { href?: undefined };

export type ButtonProps = LinkProps | NativeButtonProps;

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

export function buttonClasses({
  variant = "primary",
  size = "md",
  className = "",
}: Pick<CommonProps, "variant" | "size" | "className">) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

/** Renders a link when given `href`, otherwise a native button. */
export function Button({
  variant = "primary",
  size = "md",
  arrow,
  loading,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = buttonClasses({ variant, size, className });

  const content = (
    <>
      {loading ? (
        <LoaderCircle
          aria-hidden="true"
          strokeWidth={1.75}
          className="size-5 shrink-0 animate-spin"
        />
      ) : variant === "whatsapp" ? (
        <WhatsAppIcon className="size-5 shrink-0" />
      ) : null}
      {children}
      {arrow ? (
        <ArrowRight
          aria-hidden="true"
          strokeWidth={1.75}
          className="size-5 shrink-0 transition-transform duration-150 ease-out group-hover/btn:translate-x-1"
        />
      ) : null}
    </>
  );

  if (rest.href !== undefined) {
    const { href, disabled, ...anchorProps } = rest;
    const blocked = disabled || loading;
    const linkProps = {
      ...anchorProps,
      className: classes,
      "aria-disabled": blocked || undefined,
      "aria-busy": loading || undefined,
      tabIndex: blocked ? -1 : anchorProps.tabIndex,
    };
    if (isExternal(href)) {
      // WhatsApp and other web links open in a new tab; tel: and mailto: stay in place.
      const newTab = href.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};
      return (
        <a href={href} {...newTab} {...linkProps}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} {...linkProps}>
        {content}
      </Link>
    );
  }

  const { type = "button", disabled, ...buttonProps } = rest;
  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={classes}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
