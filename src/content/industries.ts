import type { ServiceSlug } from "./services";

export type IndustrySlug =
  | "education-coaching"
  | "construction-real-estate"
  | "retail-lifestyle"
  | "manufacturing-b2b"
  | "local-services"
  | "automotive-ev";

export type Industry = {
  slug: IndustrySlug;
  name: string;
  /** Lucide icon name (lucide-react is installed in Stage 4). */
  icon: string;
  /** What this group covers, in a few words. */
  covers: string;
  /** Client names: shown as text only. Logos only with written permission [TBD]. */
  clients: string[];
  problem: string;
  howWeHelp: string;
  services: ServiceSlug[];
};

export const industries: Industry[] = [
  {
    slug: "education-coaching",
    name: "Education & Coaching",
    icon: "GraduationCap",
    covers: "Academies, coaching centres, schools and training institutes",
    clients: [
      "Mukilam Academy",
      "Vanji Academy",
      "Dindigul School of TNPSC",
      "Tamil Info Technology",
      "London Kids",
    ],
    problem:
      "Admissions come in waves. When the season starts, parents and students are comparing several institutes at once, and the one they find first and trust most gets the call.",
    howWeHelp:
      "We run admission-season ads to the right age groups and areas, keep your Google profile full of fresh photos and reviews, and make sure every enquiry gets a quick WhatsApp reply.",
    services: ["meta-ads", "google-business-profile", "whatsapp-marketing"],
  },
  {
    slug: "construction-real-estate",
    name: "Construction & Real Estate",
    icon: "Building2",
    covers: "Builders, promoters and plot developers",
    clients: [
      "Raj Shree Builders",
      "Sanya Builders",
      "SRK Promoters",
      "Hi Tech Promoters",
      "Star Promoters",
    ],
    problem:
      "Buyers take months to decide and check you out carefully before they ever visit a site. Many enquiries are just browsing, so your team spends time on people who aren't ready.",
    howWeHelp:
      "We run project ads that ask the right questions up front, follow up on WhatsApp with site photos and brochures, and build a website and Google profile that make you look as solid as your projects.",
    services: ["meta-ads", "whatsapp-marketing", "website-design"],
  },
  {
    slug: "retail-lifestyle",
    name: "Retail & Lifestyle",
    icon: "ShoppingBag",
    covers: "Jewellery, fashion and furniture stores",
    clients: [
      "Aishwaryam Jewellers",
      "Isha Boutique",
      "Royal Oak Furniture",
      "JD Leathers",
    ],
    problem:
      'Shoppers search "near me" and walk into the store that shows up with good photos and reviews. Festival and wedding seasons are short, and missing them costs a year.',
    howWeHelp:
      "We keep your Google profile ranking for local searches, run season and new-collection ads to nearby shoppers, and send WhatsApp offers to customers who already know you.",
    services: ["google-business-profile", "meta-ads", "whatsapp-marketing"],
  },
  {
    slug: "manufacturing-b2b",
    name: "Manufacturing & B2B",
    icon: "Factory",
    covers: "Manufacturers, distributors and industrial suppliers",
    clients: ["Vision Plywoods", "Wave Power Tech"],
    problem:
      "Dealers and business buyers look you up online before they call. An old website or an empty Google listing makes a capable company look small.",
    howWeHelp:
      "We build a clear, fast website that shows your products and capacity, set up your Google profile properly, and run targeted ads to reach dealers and buyers.",
    services: ["website-design", "google-business-profile", "meta-ads"],
  },
  {
    slug: "local-services",
    name: "Local Services",
    icon: "Store",
    covers: "Photography studios, laundry and other everyday services",
    clients: ["Poetic Tales Studio", "Kuttyz Pixel Studio", "U Clean Laundry"],
    problem:
      "Most of your customers live within a few kilometres. If you don't show up on Google Maps with good reviews, they book whoever does.",
    howWeHelp:
      "We make your Google profile your best salesperson, show your work on Instagram and Facebook to nearby customers, and set up WhatsApp so bookings are quick and easy.",
    services: ["google-business-profile", "meta-ads", "whatsapp-marketing"],
  },
  {
    slug: "automotive-ev",
    name: "Automotive & EV",
    icon: "Car",
    covers: "Vehicle and EV dealers and service centres",
    clients: ["Murugu Motors"],
    problem:
      "Vehicle buyers compare models, prices and dealers online for weeks. Test-drive enquiries go cold fast if nobody follows up.",
    howWeHelp:
      "We run model and offer ads to buyers in your area, keep your Google profile up to date, and follow up every test-drive enquiry on WhatsApp.",
    services: ["meta-ads", "google-business-profile", "whatsapp-marketing"],
  },
];

export const industriesSection = {
  eyebrow: "Industries",
  heading: "We know how customers in your industry decide",
  intro:
    "35+ local businesses across 10+ industries. Here are the six groups we work with most.",
  clientsLabel: "Clients include",
  ctaLine: "Don't see your industry? Let's talk.",
  whatsappMessage:
    "Hi DIGIFI, my business is in a different industry. Can you help us grow?",
};
