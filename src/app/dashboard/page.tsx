import { PageHero } from "@/components/sections/PageHero";
import { pages, seo } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(seo.dashboard);

// Placeholder. Stage 10 adds Supabase sign-in, which makes this route dynamic (per request).
export default function DashboardPage() {
  return <PageHero {...pages.dashboard} />;
}
