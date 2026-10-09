// Per-page SEO and copy for pages that don't have their own content file.
// Titles already include the "| DIGIFI" suffix (under 60 characters); descriptions are under 155.

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  keyword: string;
  noindex?: boolean;
};

export const seo = {
  home: {
    path: "/",
    title: "Digital Marketing Agency in Dindigul | DIGIFI",
    description:
      "More enquiries for local businesses in Dindigul, Madurai and Trichy: Meta Ads, Google Business Profile, WhatsApp and websites. Book a free assessment.",
    keyword: "digital marketing agency Dindigul",
  },
  metaAds: {
    path: "/services/meta-ads",
    title: "Meta Ads Agency in Dindigul and Madurai | DIGIFI",
    description:
      "Facebook and Instagram ads that bring real enquiries, tuned weekly and reported monthly in plain language. Book your free Growth Assessment.",
    keyword: "Meta ads agency",
  },
  googleBusinessProfile: {
    path: "/services/google-business-profile",
    title: "Google Business Profile Management | DIGIFI",
    description:
      "Get found on Google Maps. We set up, fill and manage your Google Business Profile and reviews. Book a free Growth Assessment today.",
    keyword: "Google Business Profile management",
  },
  whatsappMarketing: {
    path: "/services/whatsapp-marketing",
    title: "WhatsApp Marketing for Local Businesses | DIGIFI",
    description:
      "Reply faster, follow up properly and win more customers on WhatsApp. Setup, templates and broadcasts by DIGIFI. Chat with us today.",
    keyword: "WhatsApp marketing",
  },
  websiteDesign: {
    path: "/services/website-design",
    title: "Website Design in Dindigul | DIGIFI",
    description:
      "Fast, mobile-first websites for local businesses, with enquiry and WhatsApp buttons on every page. Get a website quote from DIGIFI.",
    keyword: "website design Dindigul",
  },
  results: {
    path: "/results",
    title: "Client Results and Case Studies | DIGIFI",
    description:
      "See how DIGIFI helps local businesses get more enquiries with ads, Google profiles, WhatsApp and websites. Book your free Growth Assessment.",
    keyword: "digital marketing results Tamil Nadu",
  },
  industries: {
    path: "/industries",
    title: "Digital Marketing for Local Industries | DIGIFI",
    description:
      "Marketing for academies, builders, retailers, manufacturers, local services and vehicle dealers in Dindigul, Madurai and Trichy. Talk to us.",
    keyword: "digital marketing agency Madurai",
  },
  growthAssessment: {
    path: "/growth-assessment",
    title: "Free Digital Growth Assessment | DIGIFI",
    description:
      "Find out how strong your business is online. Take the 60-second health check, then book a free Growth Assessment with DIGIFI.",
    keyword: "free digital marketing assessment",
  },
  about: {
    path: "/about",
    title: "About Us: Local Marketing Team in Dindigul | DIGIFI",
    description:
      "DIGIFI is a Dindigul digital marketing agency serving Madurai and Trichy: 35+ clients, 10+ industries, transparent reports. Meet us.",
    keyword: "digital marketing agency Trichy",
  },
  contact: {
    path: "/contact",
    title: "Contact Us in Dindigul | DIGIFI",
    description:
      "Call or WhatsApp +91 88928 34327, email hello@digifi.in, or send a message. DIGIFI, Dindigul, Tamil Nadu. We reply quickly.",
    keyword: "DIGIFI contact",
  },
  privacyPolicy: {
    path: "/privacy-policy",
    title: "Privacy Policy | DIGIFI",
    description:
      "How DIGIFI collects, uses and protects your personal data, and how to ask us to delete it.",
    keyword: "DIGIFI privacy policy",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use | DIGIFI",
    description: "The terms for using the DIGIFI website.",
    keyword: "DIGIFI terms of use",
  },
  dashboard: {
    path: "/dashboard",
    title: "Lead Dashboard | DIGIFI",
    description: "Private lead dashboard.",
    keyword: "",
    noindex: true,
  },
} satisfies Record<string, PageSeo>;

export const pages = {
  results: {
    hero: {
      eyebrow: "Results",
      headline: "Real numbers from real local businesses.",
      subheading:
        "Every figure here comes from our client reports. Filter by service to see what's relevant to you.",
    },
    filterLabel: "Filter by service",
    allLabel: "All",
    expandLabel: "See the full story",
    collapseLabel: "Hide details",
    storyLabels: {
      challenge: "The challenge",
      whatWeDid: "What we did",
      results: "Results",
    },
    disclaimer: "Results vary by business, budget and market.",
  },

  industries: {
    hero: {
      eyebrow: "Industries",
      headline: "We know how customers in your industry decide.",
      subheading:
        "35+ local businesses across 10+ industries in Dindigul, Madurai and Trichy. Here's how we help each kind of business grow.",
    },
    labels: {
      problem: "The challenge",
      howWeHelp: "How we help",
      clients: "Clients include",
    },
  },

  growthAssessment: {
    hero: {
      eyebrow: "Free Growth Assessment",
      headline: "Find out what's holding your business back online.",
      subheading:
        "We review your Google profile, social media, ads, WhatsApp and website, then show you the first steps to more enquiries. Free, with no obligation.",
    },
    whatYouGet: {
      heading: "What you get",
      items: [
        "A quick look at how your business shows up on Google, Facebook, Instagram, WhatsApp and your website",
        "A conversation about what's working and what's missing",
        "Honest advice on the first steps we'd take",
        "A recommended plan and budget, if you want our help",
      ],
    },
    steps: {
      heading: "How it works",
      items: [
        {
          title: "Tell us about your business",
          body: "Fill in the short form below. It takes about 2 minutes.",
        },
        {
          title: "We review your online presence",
          body: "We look at your profiles, ads and website before we talk.",
        },
        {
          title: "We talk you through it",
          body: "On a call or WhatsApp, in Tamil or English, at a time that suits you.",
        },
      ],
    },
    paidAssessment: {
      eyebrow: "Want the full picture?",
      heading: "Digital Growth Assessment™: the full written audit",
      body: "If you'd like everything in writing, our paid audit reviews 9 areas of your business online, compares you with up to 3 local competitors, and gives you a score, a PDF report, a 30-day action plan and a 30-minute review call.",
      // Price and details: plans "digital-growth-assessment" in packages.ts.
    },
    form: {
      id: "assessment-form",
      heading: "Book your free Growth Assessment",
      intro:
        "Tell us a little about your business. We'll contact you on WhatsApp within [TBD: e.g. 1 working day].",
      fields: {
        name: { label: "Your name", placeholder: "" },
        businessName: { label: "Business name", placeholder: "" },
        whatsapp: {
          label: "WhatsApp number",
          hint: "10-digit mobile number",
          prefix: "+91",
        },
        email: {
          label: "Email (optional)",
          hint: "For a copy of your enquiry",
        },
        city: { label: "City or town", placeholder: "e.g. Dindigul" },
        businessCategory: { label: "Business category", otherLabel: "Other" },
        servicesInterested: { label: "What are you interested in? (optional)" },
        currentMarketing: {
          label: "What are you doing for marketing now?",
          options: [
            "Nothing yet",
            "Posting on social media myself",
            "Boosting posts sometimes",
            "Working with another agency",
            "Something else",
          ],
        },
        message: { label: "Anything else we should know? (optional)" },
        consent: {
          label: "I agree to be contacted by DIGIFI about my enquiry.",
          privacyLinkLabel: "Privacy policy",
        },
      },
      submitLabel: "Book my free assessment",
      submittingLabel: "Sending…",
      errors: {
        required: "Please fill this in.",
        whatsapp: "Enter a 10-digit WhatsApp number.",
        email: "Enter a valid email address, or leave it blank.",
        consent: "Please tick the box so we can contact you.",
        generic:
          "Something went wrong and your enquiry wasn't sent. Try again, or message us on WhatsApp.",
      },
      privacyLine: "Your data stays private. No spam calls.",
    },
    success: {
      heading: "Thank you. We've got your details.",
      body: "We'll review your business online and contact you on WhatsApp within [TBD: e.g. 1 working day].",
      nextStepsHeading: "What happens next",
      nextSteps: [
        "We look at your Google profile, social media and website.",
        "We message you on WhatsApp to fix a time to talk.",
        "We walk you through what we found and the first steps.",
      ],
      whatsappPrompt: "Want to talk sooner? Message us on WhatsApp.",
    },
  },

  contact: {
    hero: {
      eyebrow: "Contact",
      headline: "Talk to a local team.",
      subheading:
        "Call, WhatsApp or email us, or send a message below. We're happy to talk in Tamil or English.",
    },
    channels: {
      whatsapp: { title: "WhatsApp", body: "The fastest way to reach us." },
      phone: { title: "Phone", body: "[TBD: calling hours]" },
      email: { title: "Email", body: "For documents and detailed questions." },
      location: {
        title: "Location",
        body: "Dindigul, Tamil Nadu. Serving Dindigul, Madurai and Trichy.",
      },
    },
    officeNote:
      "We're moving to a new office this month. Our full address will be added here soon.",
    form: {
      heading: "Send us a message",
      submitLabel: "Send message",
      success: "Thanks. We've got your message and will reply soon.",
    },
  },

  legal: {
    lastUpdatedLabel: "Last updated",
    tocLabel: "On this page",
  },
};
