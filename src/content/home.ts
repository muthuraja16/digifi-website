// Homepage copy, in section order (docs/design.md §10).
// Services, industries, case studies, FAQs and the quiz come from their own content files.

export const home = {
  hero: {
    eyebrow:
      "Digital marketing for local businesses · Dindigul · Madurai · Trichy",
    headline:
      "More enquiries for your business. Proof you can see every month.",
    subheading:
      "Meta Ads, Google Business Profile, WhatsApp marketing and websites, run by a local team that shows you exactly what's working.",
    // Real results: figures come from caseStudies.ts, never typed here.
    reportCard: {
      title: "Growth report",
      caseStudy: "vision-plywoods-meta-ads",
      sourceNote: "Real client results from the ads dashboard.",
      chart: {
        label: "Average enquiries per month, by client",
        // Only clients with a true per-month figure. Mukilam Academy's 703 covers 5 weeks.
        caseStudies: [
          "dindigul-school-of-tnpsc-meta-ads",
          "vision-plywoods-meta-ads",
        ],
      },
    },
  },

  clientStrip: {
    heading: "Trusted by 35+ local businesses across 10+ industries",
    pauseLabel: "Pause scrolling client names",
    playLabel: "Play scrolling client names",
  },

  // Services bento: see services.ts and servicesSection.

  journey: {
    eyebrow: "How it works",
    heading: "How DIGIFI grows your business",
    intro:
      "Four steps that work together. Each one makes the next one work better, so you're not paying for pieces that don't connect.",
    // Steps come from services.ts (journey field), in this order:
    order: [
      "google-business-profile",
      "meta-ads",
      "whatsapp-marketing",
      "website-design",
    ] as const,
  },

  // Results: see caseStudies.ts and resultsSection.

  sampleReport: {
    eyebrow: "Transparent reporting",
    heading: "What your monthly report looks like",
    intro:
      "Every month you get one clear report in plain language. No jargon, no vanity numbers. Just what came in, what it cost, and what we're doing next.",
    sampleLabel: "Sample report",
    panels: {
      leadsBySource: "Leads by source",
      costPerLead: "Cost per lead trend",
      callsAndChats: "Calls and WhatsApp clicks",
      ranking: "Google Maps ranking",
    },
    sources: ["Meta Ads", "Google Business Profile", "Website", "WhatsApp"],
    placeholderValue: "[TBD]",
    points: [
      "Enquiries by source, so you know what's worth paying for",
      "Cost per enquiry, month by month",
      "Calls and WhatsApp chats",
      "What we changed this month, and what's next",
    ],
  },

  // Industries: see industries.ts and industriesSection.

  healthCheckTeaser: {
    eyebrow: "Digital Health Check",
    heading: "How strong is your business online?",
    body: "Find out in 60 seconds. Answer six quick questions and get your score with simple next steps.",
    cta: "Take the free health check",
    href: "/growth-assessment#health-check",
  },

  whyDigifi: {
    eyebrow: "Why DIGIFI",
    heading: "Why local businesses choose DIGIFI",
    items: [
      {
        title: "Local, across the corridor",
        icon: "MapPin",
        body: "Based in Dindigul, working with businesses in Dindigul, Madurai and Trichy. We know how customers here search and buy.",
      },
      {
        title: "Tamil-friendly",
        icon: "Languages",
        body: "Talk to us in Tamil or English. Your ads can be in either, or both.",
      },
      {
        title: "We know your industry",
        icon: "Briefcase",
        body: "35+ clients across 10+ industries, from academies and builders to jewellers and manufacturers.",
      },
      {
        title: "AI-powered, faster",
        icon: "Sparkles",
        body: "We use AI tools to research, write and test faster, so changes happen in days, not weeks.",
      },
      {
        title: "Transparent reporting",
        icon: "FileBarChart",
        body: "A plain-language report every month. You always know what your money is doing.",
      },
      {
        title: "15+ years of experience",
        icon: "Award",
        body: "15+ years of combined IT and marketing experience behind every campaign.",
      },
    ],
  },

  // FAQ: see faqs.ts and faqSection.

  finalCta: {
    heading: "Ready to get more enquiries?",
    body: "Book your free Growth Assessment. We'll show you where you stand online and the first steps to grow.",
  },
};
