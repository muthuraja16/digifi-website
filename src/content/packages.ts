// DIGIFI's plans and prices, from DIGIFI's own service sheets (October 2026).
// Prices are digits only (shown in Geist Mono with "₹"). Plan fees never include ad budget.

import type { ServiceSlug } from "./services";

export type OfferingSlug =
  ServiceSlug | "digital-foundation" | "digital-growth-assessment";

export type PlanFeatureGroup = {
  heading: string;
  items: { title: string; detail?: string }[];
};

export type Plan = {
  id: string;
  offering: OfferingSlug;
  name: string;
  tagline: string;
  /** Digits with Indian grouping, e.g. "12,000". */
  price: string;
  /** true shows "Starts from". */
  priceFrom: boolean;
  billing: "one-time" | "monthly";
  /** Small print under the price. */
  priceNote?: string;
  /** Meta Ads only: recommended ad budget, paid directly to Meta. */
  adBudget?: string;
  /** Short label for a highlighted plan, e.g. "Most popular". */
  badge?: string;
  bestFor: string[];
  /** "Everything in Start, plus:" */
  includesPrevious?: string;
  features: PlanFeatureGroup[];
  /** Extra work available at additional cost. */
  addOns?: string[];
  delivery?: string;
  terms?: string;
  summary: string;
  whatsappMessage: string;
};

export type Offering = {
  slug: OfferingSlug;
  name: string;
  intro: string;
  /** Shown once under the plan cards. */
  note?: string;
};

export const offerings: Record<OfferingSlug, Offering> = {
  "meta-ads": {
    slug: "meta-ads",
    name: "Meta Ads plans",
    intro:
      "Three monthly plans, matched to where your business is today and where you want it to go.",
    note: "Plan fees are DIGIFI's service charges. Your ad budget is paid separately and directly to Meta (Facebook and Instagram), so all of it goes into running your ads. We never take a cut of it.",
  },
  "google-business-profile": {
    slug: "google-business-profile",
    name: "Google Business Profile plans",
    intro:
      "Set your profile up properly once, then keep it active and growing every month.",
    note: "GBP Launch is a one-time setup. Maps Growth System is a monthly plan with no lock-in.",
  },
  "whatsapp-marketing": {
    slug: "whatsapp-marketing",
    name: "WhatsApp plans",
    intro:
      "From launching on the official WhatsApp Business API to automation and managed monthly campaigns.",
    note: "API Setup and Automation are one-time services. WhatsApp Marketing is a monthly plan with no lock-in. Automation and Marketing need the API Setup first.",
  },
  "website-design": {
    slug: "website-design",
    name: "Website plans",
    intro:
      "Start with a complete online setup including a one-page website, or ask us to quote for a custom website.",
  },
  "digital-foundation": {
    slug: "digital-foundation",
    name: "Digital Foundation™",
    intro:
      "Your complete online presence, built once and built properly: 6 platforms plus a one-page website.",
  },
  "digital-growth-assessment": {
    slug: "digital-growth-assessment",
    name: "Digital Growth Assessment™",
    intro:
      "The full, written audit of your business online, with a score, a 30-day action plan and a review call.",
  },
};

export const plans: Plan[] = [
  // ── Meta Ads ──────────────────────────────────────────────
  {
    id: "meta-ads-start",
    offering: "meta-ads",
    name: "Start",
    tagline: "Build visibility and get your first enquiries.",
    price: "12,000",
    priceFrom: false,
    billing: "monthly",
    adBudget: "5,000",
    bestFor: [
      "New businesses and startups",
      "Shops, clinics and restaurants",
      "First-time Meta advertisers",
      "Businesses building visibility",
    ],
    features: [
      {
        heading: "Strategy",
        items: [
          {
            title: "Monthly marketing strategy call",
            detail: "Campaigns aligned with your business goals",
          },
          {
            title: "Business goal planning",
            detail: "Built around real outcomes, not likes and views",
          },
          {
            title: "Competitor research",
            detail: "How competitors target and position before we launch",
          },
        ],
      },
      {
        heading: "Advertising",
        items: [
          {
            title: "1 campaign",
            detail: "Awareness or lead generation, matched to your goal",
          },
          {
            title: "Audience research and targeting",
            detail: "Location, age, interests and behaviour",
          },
          {
            title: "Weekly campaign checks",
            detail: "Spend, reach and performance reviewed every week",
          },
        ],
      },
      {
        heading: "Creatives",
        items: [
          {
            title: "Monthly creative plan",
            detail: "Ad ideas planned together each month",
          },
          { title: "2 static ad designs" },
          {
            title: "2 short video ads",
            detail: "Hook, offer, call to action; edited and subtitled",
          },
          { title: "Ad copy in Tamil and English" },
        ],
      },
      {
        heading: "Tracking and reporting",
        items: [
          { title: "Meta Pixel setup", detail: "If you have a website" },
          {
            title: "Monthly performance report",
            detail: "Reach, clicks, leads and spend in one report",
          },
          { title: "3 clear next steps in every report" },
        ],
      },
      {
        heading: "Also included",
        items: [
          {
            title: "Click-to-WhatsApp setup",
            detail: "Every ad can open a WhatsApp chat with you",
          },
          { title: "Basic Google Business Profile advice" },
        ],
      },
    ],
    terms: "Minimum 3 months, then 1 month's notice to stop.",
    summary:
      "For businesses that want more visibility and steady first enquiries.",
    whatsappMessage: "Hi DIGIFI, I'm interested in the Meta Ads Start plan.",
  },
  {
    id: "meta-ads-grow",
    offering: "meta-ads",
    name: "Grow",
    tagline: "Get consistent, quality leads every month.",
    price: "20,000",
    priceFrom: false,
    billing: "monthly",
    adBudget: "10,000",
    badge: "Most popular",
    bestFor: [
      "Education and healthcare",
      "Real estate and builders",
      "Interior designers and service businesses",
      "Retail stores with offers",
    ],
    includesPrevious: "Everything in Start, plus:",
    features: [
      {
        heading: "Strategy",
        items: [
          {
            title: "Monthly growth consultation",
            detail: "Review results and plan next month",
          },
          {
            title: "Offer strategy",
            detail: "The right offer for your audience each month",
          },
          {
            title: "Competitor ad analysis",
            detail: "Monthly review using the Meta Ads Library",
          },
        ],
      },
      {
        heading: "Advertising: up to 2 campaigns",
        items: [
          {
            title: "Awareness campaign",
            detail: "Reach your local audience and build recognition",
          },
          {
            title: "Lead generation campaign",
            detail: "WhatsApp leads, instant forms or a landing page",
          },
        ],
      },
      {
        heading: "Creatives",
        items: [
          { title: "Monthly content strategy" },
          {
            title: "4 static ad designs",
            detail: "Offer-led and tested against each other",
          },
          {
            title: "4 video ads",
            detail:
              "Hook, problem, offer, call to action; edited and subtitled",
          },
          { title: "Multiple headline and copy versions, tested" },
        ],
      },
      {
        heading: "Testing",
        items: [
          {
            title: "Audience testing",
            detail: "Interests vs lookalike vs broad",
          },
          { title: "Creative testing", detail: "Image vs video vs reel" },
          { title: "Message testing", detail: "Practical vs emotional" },
        ],
      },
      {
        heading: "Tracking and reporting",
        items: [
          {
            title: "Conversion tracking",
            detail: "Form submissions, WhatsApp clicks and calls",
          },
          { title: "Performance review every two weeks" },
        ],
      },
      {
        heading: "Growth support",
        items: [
          {
            title: "Lead quality review",
            detail: "Are the right people enquiring? We adjust targeting",
          },
          {
            title: "Follow-up suggestions",
            detail: "Respond to leads faster and close more",
          },
          { title: "Google review strategy" },
        ],
      },
    ],
    terms: "Minimum 3 months, then 1 month's notice to stop.",
    summary: "For businesses that want qualified leads every month.",
    whatsappMessage: "Hi DIGIFI, I'm interested in the Meta Ads Grow plan.",
  },
  {
    id: "meta-ads-dominate",
    offering: "meta-ads",
    name: "Dominate",
    tagline: "A complete customer acquisition system.",
    price: "30,000",
    priceFrom: false,
    billing: "monthly",
    adBudget: "20,000",
    bestFor: [
      "Businesses ready to scale",
      "Multi-service clinics and hospitals",
      "Builders and real estate projects",
      "Businesses that want predictable growth",
    ],
    includesPrevious: "Everything in Grow, plus:",
    features: [
      {
        heading: "Strategy",
        items: [
          {
            title: "Monthly planning session",
            detail:
              "Campaigns, creatives, offers and budgets mapped for the month",
          },
          {
            title: "Sales funnel strategy",
            detail: "From first view to enquiry to customer",
          },
          {
            title: "Seasonal campaign planning",
            detail:
              "Pongal, Karthigai, festivals and sale seasons, planned ahead",
          },
        ],
      },
      {
        heading: "Full funnel: up to 4 campaigns",
        items: [
          {
            title: "Awareness, engagement, lead generation and retargeting",
            detail: "Each stage running in parallel",
          },
        ],
      },
      {
        heading: "Creatives",
        items: [
          {
            title: "Monthly content calendar",
            detail: "Everything planned and approved in advance",
          },
          { title: "5 static ad designs" },
          { title: "5 video ads" },
          { title: "Unlimited ad copy variations" },
        ],
      },
      {
        heading: "Retargeting",
        items: [
          { title: "Website visitors" },
          { title: "People who watched your video ads" },
          { title: "Instagram and Facebook engagers" },
          { title: "Past leads who didn't book" },
        ],
      },
      {
        heading: "Automation guidance",
        items: [
          { title: "Automatic replies for new WhatsApp leads" },
          { title: "Facebook Messenger reply flows" },
        ],
      },
      {
        heading: "Tracking and reporting",
        items: [
          { title: "Weekly campaign optimisation" },
          { title: "Weekly report and strategy call" },
          {
            title: "Meta Pixel and Conversions API",
            detail: "Where applicable",
          },
          {
            title: "Custom and lookalike audiences",
            detail: "Find more people like your best customers",
          },
        ],
      },
      {
        heading: "Business growth consulting",
        items: [
          { title: "Monthly competitor analysis" },
          { title: "Offer and sales process review" },
          { title: "Lead conversion review and recommendations" },
          { title: "Google review and Google Business Profile guidance" },
        ],
      },
    ],
    terms: "Minimum 3 months, then 1 month's notice to stop.",
    summary:
      "For businesses serious about predictable growth and long-term customer acquisition.",
    whatsappMessage: "Hi DIGIFI, I'm interested in the Meta Ads Dominate plan.",
  },

  // ── Google Business Profile ───────────────────────────────
  {
    id: "gbp-launch",
    offering: "google-business-profile",
    name: "GBP Launch",
    tagline: "One-time setup and local SEO foundation.",
    price: "6,000",
    priceFrom: false,
    billing: "one-time",
    priceNote: "No monthly fees.",
    bestFor: [
      "New businesses",
      "Businesses without a Google profile",
      "Poorly set-up profiles",
      "Unverified listings",
    ],
    features: [
      {
        heading: "Verification and setup",
        items: [
          {
            title: "Create or claim your profile",
            detail: "Verification support included",
          },
          {
            title: "Business information",
            detail: "Name, address, phone, website, hours and special hours",
          },
        ],
      },
      {
        heading: "Google Maps and local SEO",
        items: [
          { title: "Primary and secondary categories, researched" },
          { title: "Service area, attributes and links" },
          {
            title: "Local keyword research",
            detail: "The words your customers actually search for",
          },
          { title: "Competitor category analysis" },
          { title: "Search-friendly business description" },
        ],
      },
      {
        heading: "Services, products and photos",
        items: [
          { title: "All services added and described" },
          { title: "Product listings", detail: "If applicable" },
          { title: "Logo, cover photo and first photos uploaded" },
        ],
      },
      {
        heading: "Customer engagement",
        items: [
          { title: "10–15 questions and answers added" },
          { title: "First post published" },
          {
            title: "Messaging switched on",
            detail: "Customers can message you from Google Maps",
          },
        ],
      },
      {
        heading: "Reviews",
        items: [
          { title: "Google review link" },
          {
            title: "Print-ready review QR code",
            detail: "For your counter, table or invoice",
          },
          { title: "WhatsApp review request message" },
          { title: "Step-by-step review collection plan" },
        ],
      },
    ],
    summary: "Done once, built to last. Pairs well with the monthly plan.",
    whatsappMessage: "Hi DIGIFI, I'm interested in the GBP Launch setup.",
  },
  {
    id: "gbp-maps-growth",
    offering: "google-business-profile",
    name: "Maps Growth System",
    tagline: "Stay visible, trusted and competitive on Google Maps.",
    price: "5,000",
    priceFrom: false,
    billing: "monthly",
    badge: "Monthly plan",
    bestFor: [
      "More visibility on Google Maps",
      "More local customers",
      "Keeping up with competitors",
      "Building reviews steadily",
    ],
    features: [
      {
        heading: "Rankings and profile health",
        items: [
          { title: "Ranking tracking for your key searches" },
          {
            title: "Monthly accuracy check",
            detail: "Hours, contact details, address, website, service area",
          },
          {
            title: "Watch for automatic Google edits",
            detail: "We spot and correct changes Google makes to your profile",
          },
          {
            title: "Ongoing optimisation",
            detail: "Categories, services, description and attributes",
          },
        ],
      },
      {
        heading: "Competitors and local SEO",
        items: [
          {
            title: "Monthly competitor comparison",
            detail: "Reviews, ratings, categories and activity",
          },
          { title: "Local keyword and trend review" },
          { title: "Location-specific optimisation" },
        ],
      },
      {
        heading: "Activity and reviews",
        items: [
          {
            title: "1–2 Google posts a month",
            detail: "Offers, updates, events and holiday hours",
          },
          { title: "Photo updates", detail: "When you provide new photos" },
          {
            title: "Monthly review plan",
            detail: "Request templates and QR code support",
          },
          {
            title: "Review reply guidance",
            detail: "Including how to handle negative reviews",
          },
          { title: "Questions monitored and answers updated" },
        ],
      },
      {
        heading: "Reporting and support",
        items: [
          {
            title: "Monthly performance report",
            detail:
              "Search and Maps views, calls, website clicks, direction requests, top searches",
          },
          {
            title: "30-minute strategy call every month",
            detail: "What's working, seasonal ideas, next month's plan",
          },
          {
            title: "Google policy monitoring",
            detail: "Spot suspension risks early",
          },
          { title: "WhatsApp support during business hours" },
        ],
      },
    ],
    terms: "No lock-in. Cancel anytime.",
    summary:
      "For businesses that want steady Google Maps visibility and a partner who looks after it every month.",
    whatsappMessage:
      "Hi DIGIFI, I'm interested in the Maps Growth System plan.",
  },

  // ── WhatsApp ──────────────────────────────────────────────
  {
    id: "whatsapp-api-setup",
    offering: "whatsapp-marketing",
    name: "API Setup",
    tagline: "Launch on the official WhatsApp Business API.",
    price: "6,000",
    priceFrom: true,
    billing: "one-time",
    priceNote:
      "Final price depends on the number of users, catalogue size and integrations.",
    bestFor: [
      "Businesses new to the WhatsApp API",
      "Shops, clinics and restaurants",
      "Teams that need several people on one number",
      "Businesses running click-to-WhatsApp ads",
    ],
    features: [
      {
        heading: "Account setup",
        items: [
          {
            title: "Official WhatsApp Business API",
            detail: "Meta-approved, not an unofficial app",
          },
          { title: "Meta Business Manager set up and linked" },
          { title: "WhatsApp Business Account created and number registered" },
          { title: "Business display name approval" },
        ],
      },
      {
        heading: "Profile",
        items: [
          {
            title: "Full business profile",
            detail:
              "Logo, description, category, address, website, email, hours",
          },
          { title: "Greeting and away messages" },
          { title: "Quick replies for common questions" },
        ],
      },
      {
        heading: "Templates and catalogue",
        items: [
          {
            title: "Up to 5 approved message templates",
            detail: "For broadcasts, follow-ups and offers",
          },
          {
            title: "Product catalogue",
            detail: "Up to 10 products with descriptions and images",
          },
        ],
      },
      {
        heading: "Access and handover",
        items: [
          {
            title: "QR code and click-to-chat link",
            detail: "For ads, website, print and Google profile",
          },
          { title: "Up to 3 team members" },
          { title: "Testing and a 1-hour training session" },
        ],
      },
    ],
    addOns: [
      "Extra product uploads",
      "Advanced message templates",
      "Extra team members",
      "Multi-branch setup",
      "Green tick verification help",
      "CRM integration and advanced automation",
    ],
    summary:
      "The foundation for WhatsApp marketing. Automation and broadcasts build on it.",
    whatsappMessage: "Hi DIGIFI, I'm interested in the WhatsApp API Setup.",
  },
  {
    id: "whatsapp-automation",
    offering: "whatsapp-marketing",
    name: "Automation",
    tagline: "Instant replies and lead capture, without the manual work.",
    price: "10,000",
    priceFrom: true,
    billing: "one-time",
    priceNote:
      "Needs API Setup. Final price depends on how complex the workflows and integrations are.",
    badge: "High impact",
    bestFor: [
      "Businesses with lots of enquiries",
      "Clinics and appointment-based businesses",
      "Online and retail stores",
      "Education and real estate",
    ],
    features: [
      {
        heading: "Planning",
        items: [
          { title: "How you handle enquiries today, mapped" },
          {
            title: "Customer journey planned",
            detail: "From first message to sale",
          },
        ],
      },
      {
        heading: "Automatic replies",
        items: [
          { title: "Instant welcome message" },
          { title: "Keyword-based auto replies" },
          {
            title: "Tap-to-choose menus",
            detail: "Customers pick a service with one tap",
          },
          { title: "Answers to your top 10–15 questions, any time" },
        ],
      },
      {
        heading: "Leads and bookings",
        items: [
          {
            title: "Lead capture",
            detail: "Name, phone and requirement collected automatically",
          },
          { title: "Lead qualification before it reaches your team" },
          { title: "Appointment booking" },
        ],
      },
      {
        heading: "Business messages",
        items: [
          { title: "Payment reminders" },
          { title: "Order confirmations" },
          { title: "Feedback requests" },
          { title: "Google review requests" },
        ],
      },
      {
        heading: "Integration and handover",
        items: [
          { title: "Website or landing page connection" },
          { title: "Leads logged to your CRM or Google Sheets" },
          { title: "End-to-end testing before going live" },
          { title: "Staff training and documentation" },
        ],
      },
    ],
    addOns: [
      "AI chatbot",
      "Advanced CRM integrations",
      "ERP integrations",
      "Multi-level automation",
      "API and custom workflow development",
    ],
    summary:
      "Stop losing leads to slow replies: every enquiry gets an instant answer, day or night.",
    whatsappMessage: "Hi DIGIFI, I'm interested in WhatsApp Automation.",
  },
  {
    id: "whatsapp-marketing-monthly",
    offering: "whatsapp-marketing",
    name: "WhatsApp Marketing",
    tagline: "Managed campaigns that bring customers back every month.",
    price: "5,000",
    priceFrom: false,
    billing: "monthly",
    priceNote:
      "Final price depends on broadcast volume, creatives and integrations. Needs API Setup.",
    bestFor: [
      "Restaurants and retail stores",
      "Clinics with existing patients",
      "Schools and coaching centres",
      "Businesses with 500+ contacts",
      "Businesses with seasonal offers",
    ],
    features: [
      {
        heading: "Planning",
        items: [
          {
            title: "Monthly WhatsApp plan",
            detail: "Campaigns, timing, offers and audience",
          },
          {
            title: "Customer groups",
            detail:
              "New leads, regulars and lapsed customers each get the right message",
          },
        ],
      },
      {
        heading: "Campaigns",
        items: [
          { title: "Up to 2 broadcast campaigns a month" },
          {
            title: "Festival and seasonal campaigns",
            detail: "Pongal, Diwali, Eid, New Year",
          },
          { title: "Win-back messages for lapsed customers" },
          { title: "Scheduled for when your customers read messages" },
        ],
      },
      {
        heading: "Creatives",
        items: [
          { title: "Message copy in Tamil and English" },
          { title: "Up to 2 offer banners a month" },
          { title: "Message templates kept approved and up to date" },
        ],
      },
      {
        heading: "Reporting",
        items: [
          { title: "Delivery, read and reply tracking per campaign" },
          { title: "Monthly report and recommendations" },
        ],
      },
    ],
    addOns: [
      "Extra broadcast campaigns",
      "Creative design packs",
      "Customer list clean-up",
      "Landing pages",
      "Meta Ads and Google Ads integration",
    ],
    terms: "No lock-in. Cancel anytime.",
    summary:
      "For businesses with existing customers who want repeat visits and seasonal sales.",
    whatsappMessage:
      "Hi DIGIFI, I'm interested in the monthly WhatsApp Marketing plan.",
  },

  // ── Digital Foundation™ (shown on Website Design and the assessment page) ──
  {
    id: "digital-foundation",
    offering: "digital-foundation",
    name: "Digital Foundation™",
    tagline:
      "6 platforms plus a one-page website, built once and built properly.",
    price: "19,999",
    priceFrom: true,
    billing: "one-time",
    priceNote:
      "Final price depends on the number of platforms, branding and extra features.",
    bestFor: [
      "New businesses going online",
      "Businesses with no online presence",
      "Clinics, shops and restaurants",
      "Businesses getting ready to run ads",
    ],
    features: [
      {
        heading: "Google Business Profile",
        items: [
          { title: "Creation and verification support" },
          {
            title:
              "Search-friendly description, categories, hours and contact details",
          },
          { title: "Google review link" },
        ],
      },
      {
        heading: "Facebook and Instagram",
        items: [
          {
            title: "Facebook business page",
            detail: "Full details, profile and cover images, action button",
          },
          {
            title: "Meta Business Manager linked",
            detail: "Ready for ads later",
          },
          {
            title: "Instagram business account",
            detail: "Linked to Facebook, bio, profile image, action buttons",
          },
        ],
      },
      {
        heading: "LinkedIn, WhatsApp and email",
        items: [
          {
            title: "LinkedIn company page",
            detail: "About section, logo, cover image, website",
          },
          {
            title: "WhatsApp Business profile",
            detail:
              "Greeting and away messages, click-to-chat link and QR code",
          },
          {
            title: "Business email on your domain",
            detail:
              "If you already have a domain; domain registration is an add-on",
          },
        ],
      },
      {
        heading: "One-page website",
        items: [
          { title: "Mobile-friendly, fast, secure (HTTPS)" },
          { title: "Your services, contact details and WhatsApp button" },
          { title: "Google Maps location" },
        ],
      },
      {
        heading: "Consistent everywhere",
        items: [
          {
            title:
              "Same logo, description and contact details on every platform",
          },
          { title: "Correctly sized profile and cover images" },
          { title: "Action buttons on every platform that supports them" },
          { title: "Print-ready WhatsApp and review QR codes" },
        ],
      },
    ],
    delivery:
      "Ready in 5–7 business days. You approve screenshots of everything before handover.",
    terms: "All logins handed over securely. You own everything.",
    summary:
      "Customers can find you, trust you and contact you on whichever platform they use.",
    whatsappMessage:
      "Hi DIGIFI, I'm interested in the Digital Foundation package.",
  },

  // ── Digital Growth Assessment™ (paid, in-depth audit) ─────
  {
    id: "digital-growth-assessment",
    offering: "digital-growth-assessment",
    name: "Digital Growth Assessment™",
    tagline: "A full written audit of your business online, with a clear plan.",
    price: "4,999",
    priceFrom: true,
    billing: "one-time",
    priceNote:
      "Final price depends on the number of platforms, website size and competitor analysis.",
    bestFor: [
      "Businesses that want a full picture before spending on ads",
      "Owners who want a written plan their team can follow",
    ],
    features: [
      {
        heading: "9 areas reviewed",
        items: [
          { title: "Business overview and digital presence score" },
          {
            title: "Google Business Profile",
            detail:
              "Completeness, categories, photos, reviews, Maps visibility",
          },
          {
            title: "Website",
            detail:
              "Mobile, speed, ease of use, enquiry paths, basic SEO, security",
          },
          {
            title: "Social media",
            detail:
              "Facebook, Instagram, branding, content, posting, engagement",
          },
          {
            title: "Search visibility",
            detail: "Google search, your brand name, local results, listings",
          },
          {
            title: "WhatsApp Business",
            detail: "Profile, replies, automation opportunities",
          },
          { title: "Up to 3 local competitors compared" },
          {
            title: "Action plan",
            detail: "Priorities, quick wins and recommended strategy",
          },
          {
            title: "30-minute review call",
            detail: "On WhatsApp call or video",
          },
        ],
      },
      {
        heading: "What you receive",
        items: [
          { title: "Detailed PDF report" },
          { title: "Overall digital presence score out of 100" },
          { title: "Recommendations ranked by impact" },
          { title: "30-day action checklist" },
        ],
      },
    ],
    delivery:
      "Report delivered within 5–7 business days on WhatsApp and email.",
    summary:
      "Know exactly where you stand, and what to fix first, before you spend on marketing.",
    whatsappMessage:
      "Hi DIGIFI, I'm interested in the Digital Growth Assessment (full audit).",
  },
];

export function plansFor(offering: OfferingSlug): Plan[] {
  return plans.filter((p) => p.offering === offering);
}

export const pricingLabels = {
  startsFrom: "Starts from",
  oneTime: "one-time",
  perMonth: "/month",
  adBudget: "Recommended ad budget",
  adBudgetSuffix: "+/month, paid to Meta",
  bestFor: "Best for",
  addOns: "Also available (extra cost)",
  cta: "Get started",
  customWebsite: {
    heading: "Need a bigger website?",
    body: "For multi-page websites like the ones we built for Vision Plywoods and Wave Power Tech, we'll quote after understanding what you need.",
    cta: "Get a website quote",
  },
};
