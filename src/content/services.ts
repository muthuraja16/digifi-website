import type { IndustrySlug } from "./industries";
import type { PackageSlug } from "./packages";

export type ServiceSlug =
  | "meta-ads"
  | "google-business-profile"
  | "whatsapp-marketing"
  | "website-design";

export type ProcessStep = { title: string; body: string };

export type Service = {
  slug: ServiceSlug;
  href: `/services/${ServiceSlug}`;
  name: string;
  /** Lucide icon name (lucide-react is installed in Stage 4). */
  icon: string;
  /** One outcome line for cards. */
  outcome: string;
  /** 2–3 bullets for the homepage bento card. */
  bullets: string[];
  /** Short line for the 4-step journey. */
  journey: { step: string; body: string };
  hero: { eyebrow: string; headline: string; subheading: string };
  problem: { heading: string; points: string[] };
  process: { heading: string; steps: ProcessStep[] };
  /** Drafted from the service scope; confirm it matches what DIGIFI delivers. */
  included: string[];
  industries: IndustrySlug[];
  packages: PackageSlug[];
  /** Pre-filled WhatsApp message for this page. */
  whatsappMessage: string;
  /** Optional extra CTA (Website Design: "Get a website quote"). */
  extraCta?: { label: string; href: string };
};

export const services: Service[] = [
  {
    slug: "meta-ads",
    href: "/services/meta-ads",
    name: "Meta Ads",
    icon: "Megaphone",
    outcome: "Steady enquiries from people nearby who need what you sell.",
    bullets: [
      "Facebook and Instagram ads aimed at your town and your customers",
      "Lead forms and WhatsApp buttons that make enquiring easy",
      "Weekly tuning so your budget goes to what works",
    ],
    journey: {
      step: "Get enquiries",
      body: "Facebook and Instagram ads put your offer in front of the right people in your area, and ask them to enquire.",
    },
    hero: {
      eyebrow: "Meta Ads · Facebook and Instagram",
      headline:
        "Turn Facebook and Instagram into a steady source of enquiries.",
      subheading:
        "Ads planned for your town, your customers and your budget, checked every week, and reported in plain language every month.",
    },
    problem: {
      heading: "Boosting posts isn't the same as getting enquiries",
      points: [
        "You've boosted posts and got likes, but very few calls.",
        "You're not sure who is seeing your ads or what each enquiry costs.",
        "Enquiries arrive, but many are the wrong people or never reply.",
      ],
    },
    process: {
      heading: "How we run your ads",
      steps: [
        {
          title: "Understand your business",
          body: "Who buys from you, where they live, what they ask before buying, and what a good customer is worth to you.",
        },
        {
          title: "Plan and build the campaign",
          body: "Audience, offer, ad creatives in English and Tamil where it helps, and a simple lead form or WhatsApp button.",
        },
        {
          title: "Launch and tune every week",
          body: "We watch cost per enquiry and lead quality, pause what doesn't work and put more behind what does.",
        },
        {
          title: "Report every month",
          body: "Enquiries, cost per enquiry and what we're changing next, in plain language.",
        },
      ],
    },
    included: [
      "Campaign strategy and audience planning",
      "Ad copy and creatives",
      "Lead form or click-to-WhatsApp setup",
      "Meta Pixel setup for tracking",
      "Weekly optimisation",
      "Monthly plain-language report",
    ],
    industries: [
      "education-coaching",
      "construction-real-estate",
      "retail-lifestyle",
      "automotive-ev",
    ],
    packages: ["local-starter", "local-growth", "local-dominance"],
    whatsappMessage: "Hi DIGIFI, I'm interested in Meta Ads for my business.",
  },
  {
    slug: "google-business-profile",
    href: "/services/google-business-profile",
    name: "Google Business Profile",
    icon: "MapPin",
    outcome: "Show up on Google Maps when nearby customers search for you.",
    bullets: [
      "Complete, verified profile with the right categories",
      "Fresh photos and regular posts",
      "A simple system to collect and reply to reviews",
    ],
    journey: {
      step: "Get found",
      body: "When someone nearby searches for what you sell, your Google profile shows up with photos, reviews and a call button.",
    },
    hero: {
      eyebrow: "Google Business Profile",
      headline: "Be the business people find first on Google Maps.",
      subheading:
        "We set up, fill and look after your Google profile so local searches turn into calls, directions and visits.",
    },
    problem: {
      heading: 'Customers search "near me". Are you there?',
      points: [
        "Your profile is missing, unverified or half-filled.",
        "Competitors with more reviews and photos show up above you.",
        "Old timings, wrong numbers or no replies to reviews put people off.",
      ],
    },
    process: {
      heading: "How we grow your Google profile",
      steps: [
        {
          title: "Audit and fix",
          body: "We check your profile, claim or verify it if needed, and correct categories, timings, contact details and services.",
        },
        {
          title: "Fill it with proof",
          body: "Real photos of your business, products and work, plus clear descriptions in the words customers search for.",
        },
        {
          title: "Keep it active",
          body: "Regular posts and offers, answers to questions, and timely replies to every review.",
        },
        {
          title: "Grow your reviews",
          body: "A simple WhatsApp-friendly way to ask happy customers for reviews, so your rating keeps getting stronger.",
        },
      ],
    },
    included: [
      "Profile audit, setup or verification help",
      "Categories, services and description written for local search",
      "Photo uploads and regular posts",
      "Review reply management",
      "Review request link and message",
      "Monthly report: searches, calls, direction requests",
    ],
    industries: [
      "retail-lifestyle",
      "local-services",
      "education-coaching",
      "automotive-ev",
    ],
    packages: ["local-starter", "local-growth", "local-dominance"],
    whatsappMessage:
      "Hi DIGIFI, I'd like help with my Google Business Profile.",
  },
  {
    slug: "whatsapp-marketing",
    href: "/services/whatsapp-marketing",
    name: "WhatsApp Marketing",
    icon: "MessageCircle",
    outcome:
      "Reply fast, follow up properly and turn more enquiries into customers.",
    bullets: [
      "WhatsApp Business set up with catalogue and quick replies",
      "Follow-up messages so no enquiry goes cold",
      "Offers and updates to customers who already know you",
    ],
    journey: {
      step: "Follow up fast",
      body: "Every enquiry gets a quick reply and a proper follow-up on WhatsApp, so fewer leads go cold.",
    },
    hero: {
      eyebrow: "WhatsApp Marketing",
      headline: "Stop losing enquiries in your WhatsApp inbox.",
      subheading:
        "We set up WhatsApp so every enquiry gets a fast reply, a proper follow-up, and a reason to come back.",
    },
    problem: {
      heading: "Most enquiries are lost after they arrive",
      points: [
        "Messages pile up and some customers never get a reply.",
        "There's no follow-up, so interested people quietly go elsewhere.",
        "Past customers never hear from you again.",
      ],
    },
    process: {
      heading: "How we set up WhatsApp to sell",
      steps: [
        {
          title: "Set up WhatsApp Business properly",
          body: "Business profile, catalogue, labels, greeting and away messages, and quick replies for common questions.",
        },
        {
          title: "Build your follow-up flow",
          body: "Simple message templates for first reply, follow-up and reminder, so your team knows exactly what to send.",
        },
        {
          title: "Connect it to your ads",
          body: "Click-to-WhatsApp ads and website buttons bring enquiries straight into the chat.",
        },
        {
          title: "Bring customers back",
          body: "Offers, festival greetings and updates to customers who have opted in.",
        },
      ],
    },
    included: [
      "WhatsApp Business setup and profile",
      "Catalogue, labels and quick replies",
      "Follow-up message templates",
      "Click-to-WhatsApp ad connection",
      "Broadcast messages to opted-in customers",
      "Monthly report on chats and follow-ups",
    ],
    industries: [
      "education-coaching",
      "construction-real-estate",
      "retail-lifestyle",
      "local-services",
      "automotive-ev",
    ],
    packages: ["local-growth", "local-dominance"],
    whatsappMessage:
      "Hi DIGIFI, I'd like to know more about WhatsApp marketing for my business.",
  },
  {
    slug: "website-design",
    href: "/services/website-design",
    name: "Website Design",
    icon: "MonitorSmartphone",
    outcome: "A fast, clear website that makes people trust you and enquire.",
    bullets: [
      "Designed for phones first, where your customers are",
      "Clear enquiry and WhatsApp buttons on every page",
      "See our work for Vision Plywoods and Wave Power Tech",
    ],
    journey: {
      step: "Build trust",
      body: "A clear, fast website shows your work and makes it easy to enquire, so people feel confident choosing you.",
    },
    hero: {
      eyebrow: "Website Design",
      headline:
        "A website that makes people trust you, then makes it easy to enquire.",
      subheading:
        "Fast, mobile-first websites for local businesses, with clear enquiry and WhatsApp buttons on every page.",
    },
    problem: {
      heading: "Your website might be costing you customers",
      points: [
        "It's slow or hard to use on a phone.",
        "It doesn't clearly say what you do, where you are or how to contact you.",
        "It looks out of date compared to your actual business.",
      ],
    },
    process: {
      heading: "How we build your website",
      steps: [
        {
          title: "Plan",
          body: "We agree the pages, the message on each one, and the one action you want visitors to take.",
        },
        {
          title: "Design",
          body: "A clean design in your brand, built for phones first, using real photos of your business.",
        },
        {
          title: "Build",
          body: "A fast website with enquiry forms, WhatsApp and call buttons, and the basics of Google search set up.",
        },
        {
          title: "Launch and support",
          body: "We connect your domain, test everything, and stay available for updates.",
        },
      ],
    },
    included: [
      "Page plan and copy guidance",
      "Mobile-first design in your brand",
      "Enquiry form, WhatsApp and call buttons",
      "Basic on-page SEO and Google Search Console setup",
      "Domain connection and launch",
      "[TBD: support period after launch]",
    ],
    industries: [
      "manufacturing-b2b",
      "construction-real-estate",
      "retail-lifestyle",
    ],
    packages: ["local-growth", "local-dominance"],
    whatsappMessage: "Hi DIGIFI, I'd like a quote for a new website.",
    extraCta: {
      label: "Get a website quote",
      href: "/growth-assessment?service=website-design#assessment-form",
    },
  },
];

export const websitePortfolio = {
  heading: "Websites we've built",
  intro:
    "Live sites for local manufacturers. Visit them and see how they work on your phone.",
  items: [
    {
      client: "Vision Plywoods",
      industry: "manufacturing-b2b" as IndustrySlug,
      url: "[TBD: Vision Plywoods website URL]",
      screenshot: "[TBD: /images/portfolio/vision-plywoods.png]",
    },
    {
      client: "Wave Power Tech",
      industry: "manufacturing-b2b" as IndustrySlug,
      url: "[TBD: Wave Power Tech website URL]",
      screenshot: "[TBD: /images/portfolio/wave-power-tech.png]",
    },
  ],
};

export const servicesSection = {
  eyebrow: "What we do",
  heading: "Four services that work together to bring you customers",
  intro:
    "Get found on Google, get enquiries from ads, follow up fast on WhatsApp, and win trust with a website that works.",
  linkLabel: "See how it works",
};

export function getService(slug: ServiceSlug): Service {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
