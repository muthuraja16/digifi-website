import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { HealthCheckTeaser } from "@/components/sections/home/HealthCheckTeaser";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { IndustriesSection } from "@/components/sections/home/IndustriesSection";
import { JourneySection } from "@/components/sections/home/JourneySection";
import { ResultsSection } from "@/components/sections/home/ResultsSection";
import { SampleReportSection } from "@/components/sections/home/SampleReportSection";
import { ServicesBento } from "@/components/sections/home/ServicesBento";
import { WhyDigifi } from "@/components/sections/home/WhyDigifi";
import { TestimonialsSection } from "@/components/sections/TrustElements";
import { faqs } from "@/content/faqs";
import { home } from "@/content/home";

// Section order: docs/design.md §10. Rhythm: dark → light ×4 → dark → light ×4 → dark.
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientStrip />
      <ServicesBento />
      <JourneySection />
      <ResultsSection />
      {/* Hidden until real testimonials exist (content/trust.ts). */}
      <TestimonialsSection />
      <SampleReportSection />
      <IndustriesSection />
      <HealthCheckTeaser />
      <WhyDigifi />
      <FaqSection items={faqs} />
      <FinalCtaBand {...home.finalCta} />
    </>
  );
}
