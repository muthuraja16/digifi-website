// DRAFT — to be reviewed by a legal professional before launch.
import { LegalPage } from "@/components/sections/LegalPage";
import { privacyPolicy } from "@/content/legal";
import { seo } from "@/content/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(seo.privacyPolicy);

export default function PrivacyPolicyPage() {
  return <LegalPage document={privacyPolicy} />;
}
