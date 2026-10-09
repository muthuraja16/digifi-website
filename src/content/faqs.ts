import type { ServiceSlug } from "./services";

export type Faq = {
  id: string;
  question: string;
  answer: string;
  /**
   * false while the answer still has a [confirm] marker. Unconfirmed FAQs are hidden on the site
   * (and left out of FAQPage structured data) until DIGIFI confirms the answer.
   */
  confirmed: boolean;
};

/** General FAQs: homepage, growth assessment page. */
export const faqs: Faq[] = [
  {
    id: "how-soon-results",
    question: "How soon will I see results?",
    answer:
      "It depends on the service. Ads can start bringing enquiries soon after they go live, while Google profile rankings and reviews build up over a few months. In your free Growth Assessment we'll give you an honest picture for your business, not a promise we can't keep.",
    confirmed: true,
  },
  {
    id: "ad-budget",
    question: "What ad budget do I need?",
    answer:
      "[confirm: minimum monthly ad budget] We'll recommend a budget that fits your goals and your area. Ad spend is paid directly to Meta or Google, separate from our fee.",
    confirmed: false,
  },
  {
    id: "contract",
    question: "Do I have to sign a long contract?",
    answer:
      "[confirm: contract terms, e.g. monthly or minimum period, and notice to cancel]",
    confirmed: false,
  },
  {
    id: "how-know-working",
    question: "How will I know it's working?",
    answer:
      "Every month you get a report in plain language: how many enquiries came in, from where, what each one cost, and what we're changing next. If something isn't working, we'll tell you.",
    confirmed: true,
  },
  {
    id: "businesses-like-mine",
    question: "Do you work with businesses like mine?",
    answer:
      "Very likely. We've worked with 35+ local businesses across 10+ industries, including education, construction and real estate, retail, manufacturing, local services and automotive. If yours is different, ask us. We'll tell you honestly if we're a good fit.",
    confirmed: true,
  },
  {
    id: "tamil",
    question: "Can you talk to me in Tamil?",
    answer:
      "Yes. We're a local team, so you can talk to us in Tamil or English, whichever is easier for you.",
    confirmed: true,
  },
  {
    id: "outside-dindigul",
    question: "Do you work outside Dindigul?",
    answer:
      "[confirm: service area] We work with businesses across the Dindigul, Madurai and Trichy corridor.",
    confirmed: false,
  },
  {
    id: "assessment",
    question: "What happens in the free Growth Assessment?",
    answer:
      "We look at how your business shows up online today: your Google profile, social media, ads, WhatsApp and website. Then we talk you through what's working, what's missing and the first steps we'd take. It's free, with no obligation.",
    confirmed: true,
  },
  {
    id: "account-ownership",
    question: "Who owns my ad account and page?",
    answer:
      "[confirm: recommended answer] You do, always. Your ad accounts, pages and Google profile stay in your name, and we work on them with access you give us.",
    confirmed: false,
  },
];

/** Extra FAQs shown on each service page, alongside the general ones. */
export const serviceFaqs: Record<ServiceSlug, Faq[]> = {
  "meta-ads": [
    {
      id: "meta-ads-boost",
      question: "Isn't boosting a post the same thing?",
      answer:
        "Not quite. Boosting is a quick way to get more views. A proper campaign chooses who sees the ad, asks them to enquire, and is checked and adjusted every week based on what each enquiry costs.",
      confirmed: true,
    },
    {
      id: "meta-ads-tamil",
      question: "Can my ads be in Tamil?",
      answer:
        "Yes. We write ads in Tamil, English or both, depending on what works best for your customers.",
      confirmed: true,
    },
  ],
  "google-business-profile": [
    {
      id: "gbp-no-profile",
      question: "I don't have a Google profile yet. Can you help?",
      answer:
        "Yes. We help you create and verify it, then fill it with the right details, photos and services.",
      confirmed: true,
    },
    {
      id: "gbp-fake-reviews",
      question: "Will you post reviews for my business?",
      answer:
        "No. Fake reviews break Google's rules and can get a profile suspended. We help you ask real customers for reviews and reply to every one.",
      confirmed: true,
    },
  ],
  "whatsapp-marketing": [
    {
      id: "whatsapp-number",
      question: "Can I keep my current WhatsApp number?",
      answer:
        "Usually, yes. We'll check your current setup in the assessment and recommend the simplest option. [confirm]",
      confirmed: false,
    },
    {
      id: "whatsapp-spam",
      question: "Will my customers see this as spam?",
      answer:
        "Not if it's done right. We only message people who have contacted you or agreed to hear from you, and we keep messages useful and occasional.",
      confirmed: true,
    },
  ],
  "website-design": [
    {
      id: "website-timeline",
      question: "How long does a website take?",
      answer:
        "[confirm: typical timeline] It depends on the number of pages and how quickly content is ready.",
      confirmed: false,
    },
    {
      id: "website-edit",
      question: "Can I update the website myself later?",
      answer: "[confirm: how clients update their site]",
      confirmed: false,
    },
  ],
};

export const faqSection = {
  eyebrow: "FAQ",
  heading: "Questions local business owners ask us",
  moreQuestions: "Still have a question? Ask us on WhatsApp.",
};
