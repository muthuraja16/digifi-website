import type { Metadata } from "next";
import type { PageSeo } from "@/content/pages";

/** Page metadata from its SEO entry in src/content/pages.ts. Canonical, OG and Twitter come in Stage 13. */
export function pageMetadata(page: PageSeo): Metadata {
  return {
    title: page.title,
    description: page.description || undefined,
    robots: page.noindex ? { index: false, follow: false } : undefined,
  };
}
