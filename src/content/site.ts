// Core site facts, contact details, navigation and shared CTA labels.
// Anything starting with "[TBD" is unknown and must be replaced before launch.

export type SocialLink = {
  name: "Instagram" | "Facebook" | "LinkedIn" | "YouTube";
  /** "[TBD: ...]" until DIGIFI confirms the URL. Hide links whose href starts with "[TBD". */
  href: string;
};

export type NavLink = { label: string; href: string };

const whatsappNumber = "918892834327";

export const site = {
  name: "DIGIFI",
  legalName: "[TBD: registered business name]",
  tagline: "innovate. impact. inspire.",
  description:
    "DIGIFI is a digital marketing agency in Dindigul, Tamil Nadu. We help local businesses across Dindigul, Madurai and Trichy get found, get enquiries and grow with Meta Ads, Google Business Profile, WhatsApp marketing and websites.",
  url: "https://www.digifi.in",
  expoUrl: "https://expo.digifi.in",

  contact: {
    phoneDisplay: "+91 88928 34327",
    phoneHref: "tel:+918892834327",
    whatsappNumber,
    whatsappDisplay: "+91 88928 34327",
    email: "hello@digifi.in",
  },

  // Until the office move: city and state only, no street address, no map.
  location: {
    display: "Dindigul, Tamil Nadu",
    locality: "Dindigul",
    region: "Tamil Nadu",
    country: "IN",
    streetAddress: null as string | null, // [TBD: new office address, next month]
    postalCode: null as string | null,
  },

  serviceArea: ["Dindigul", "Madurai", "Trichy"],
  serviceAreaLabel: "Dindigul · Madurai · Trichy",

  stats: {
    yearsInBusiness: "3",
    clients: "35+",
    industries: "10+",
    combinedExperienceYears: "15+",
  },

  trustLine:
    "35+ local businesses · 10+ industries · 15+ years of combined IT and marketing experience",

  social: [
    { name: "Instagram", href: "[TBD: Instagram URL]" },
    { name: "Facebook", href: "[TBD: Facebook URL]" },
    { name: "LinkedIn", href: "[TBD: LinkedIn URL]" },
    { name: "YouTube", href: "[TBD: YouTube URL]" },
  ] satisfies SocialLink[],

  ctas: {
    primary: "Book a free Growth Assessment",
    primaryShort: "Free Growth Assessment",
    primaryMobile: "Free Assessment",
    primaryHref: "/growth-assessment",
    whatsapp: "Chat on WhatsApp",
    whatsappShort: "WhatsApp",
    call: "Call us",
    reassurance:
      "No obligation. Practical recommendations, not a generic report.",
    formPrivacy: "Your data stays private. No spam calls.",
  },

  whatsapp: {
    defaultMessage:
      "Hi DIGIFI, I'd like to know how you can help my business grow.",
  },

  nav: {
    services: { label: "Services" },
    labels: {
      skipToContent: "Skip to content",
      main: "Main",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mobileMenu: "Menu",
      footer: "Footer",
      social: "Social media",
    },
    main: [
      { label: "Results", href: "/results" },
      { label: "Industries", href: "/industries" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ] satisfies NavLink[],
    company: [
      { label: "Results", href: "/results" },
      { label: "Industries", href: "/industries" },
      { label: "About", href: "/about" },
      { label: "Free Growth Assessment", href: "/growth-assessment" },
      { label: "Contact", href: "/contact" },
    ] satisfies NavLink[],
    legal: [
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms of use", href: "/terms" },
    ] satisfies NavLink[],
  },

  footer: {
    blurb:
      "Digital marketing for local businesses in Dindigul, Madurai and Trichy. Clear plans, real enquiries and a monthly report you can actually read.",
    servicesHeading: "Services",
    socialHeading: "Follow us",
    companyHeading: "Company",
    contactHeading: "Contact",
    copyright: "All rights reserved.",
  },

  notFound: {
    eyebrow: "Error 404",
    title: "This page doesn't exist",
    body: "The link may be old or mistyped. Head back home, or book your free Growth Assessment while you're here.",
    homeLabel: "Back to home",
  },
} as const;

/** wa.me link with a pre-filled message. */
export function whatsappHref(message: string = site.whatsapp.defaultMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
