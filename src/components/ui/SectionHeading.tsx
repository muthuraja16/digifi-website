import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Heading level: h2 for sections (default), h1 only for a page's main heading. */
  as?: "h1" | "h2";
  align?: "start" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  as: Heading = "h2",
  align = "start",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading
        className={`${Heading === "h1" ? "type-display" : "type-h2"} text-navy-900 on-dark:text-white ${eyebrow ? "mt-3" : ""}`}
      >
        {title}
      </Heading>
      {intro ? (
        <p
          className={`mt-5 max-w-2xl type-body-lg text-body on-dark:text-on-dark ${centered ? "mx-auto" : ""}`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
