// DRAFT — to be reviewed by a legal professional before launch.
import { LegalPage } from "@/components/sections/LegalPage";
import { termsOfUse } from "@/content/legal";
import { seo } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(seo.terms);

export default function TermsPage() {
  return <LegalPage document={termsOfUse} />;
}
