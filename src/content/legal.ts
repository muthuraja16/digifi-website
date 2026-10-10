// DRAFT — to be reviewed by a legal professional before launch.
// Privacy policy (Digital Personal Data Protection Act, 2023) and website terms of use.
// Anything in [TBD: ...] must be filled in by DIGIFI before launch.

export type LegalSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalDocument = {
  headline: string;
  intro: string;
  /** Plain date string; update whenever the text changes. */
  lastUpdated: string;
  sections: LegalSection[];
};

const business = "[TBD: registered business name]";

export const privacyPolicy: LegalDocument = {
  headline: "Privacy policy",
  intro: `This policy explains what personal data DIGIFI (${business}, "we") collects through www.digifi.in, why we collect it, how we protect it and the rights you have under the Digital Personal Data Protection Act, 2023.`,
  lastUpdated: "10 October 2026",
  sections: [
    {
      id: "who-we-are",
      heading: "Who we are",
      paragraphs: [
        `DIGIFI is a digital marketing agency based in Dindigul, Tamil Nadu, India. For the personal data described here, ${business} is the Data Fiduciary: we decide why and how your data is used.`,
        "You can contact us about this policy at hello@digifi.in or +91 88928 34327.",
      ],
    },
    {
      id: "what-we-collect",
      heading: "What we collect",
      paragraphs: [
        "When you fill in a form on this website (the free Growth Assessment, the contact form, a website quote or an ad landing page), we collect:",
      ],
      list: [
        "Your name and business name",
        "Your WhatsApp number",
        "Your email address (optional)",
        "Your city or town and business category",
        "The services you're interested in, your current marketing and any message you write",
        "Your answers and score if you take the Digital Health Check",
        "Where you came from: the page you landed on, the referring website and advertising campaign tags (for example utm_source or fbclid)",
      ],
    },
    {
      id: "why",
      heading: "Why we collect it",
      list: [
        "To contact you about your enquiry and prepare your Growth Assessment",
        "To reply to you on WhatsApp, by phone or by email",
        "To understand which of our pages and ads bring enquiries, so we can improve them",
        "To keep this website secure and stop spam",
      ],
      paragraphs: [
        "We only use your data for these purposes. We do not sell it, and we do not add you to marketing lists without asking.",
      ],
    },
    {
      id: "consent",
      heading: "Your consent",
      paragraphs: [
        "Our forms ask for your consent before you submit them. You can withdraw your consent at any time by emailing hello@digifi.in; we will then stop using your data and delete it, unless the law requires us to keep it. Withdrawing consent does not affect anything we did before you withdrew it.",
      ],
    },
    {
      id: "storage",
      heading: "Where your data is stored",
      paragraphs: [
        "Form and quiz data is stored in a secure database provided by Supabase, hosted in Mumbai, India. Access is limited to authorised DIGIFI staff through a password-protected dashboard.",
      ],
    },
    {
      id: "who-receives-it",
      heading: "Who receives your data",
      paragraphs: [
        "Your enquiry is seen only by DIGIFI. We use a few service providers to run this website, and they process data only on our instructions:",
      ],
      list: [
        "Supabase: database storage",
        "Resend: sending enquiry alerts to DIGIFI and replies to you by email",
        "Vercel: website hosting",
        "Cloudflare Turnstile: spam protection on forms",
        "Google, Microsoft and Meta: website analytics, only if you accept analytics cookies (see below)",
      ],
    },
    {
      id: "cookies",
      heading: "Analytics and cookies",
      paragraphs: [
        "With your permission, we use Google Analytics 4 (through Google Tag Manager), Microsoft Clarity and the Meta Pixel to understand how people use this website and which ads bring enquiries. These tools set cookies and may record how you move around the pages.",
        'They only load after you choose "Accept" in the cookie banner. If you choose "Only essential", they are not loaded. You can change your choice at any time by clearing this website\'s cookies in your browser.',
        "We also keep a small first-party cookie for 30 days that remembers which page or ad first brought you here, so we can see where enquiries come from.",
      ],
    },
    {
      id: "retention",
      heading: "How long we keep your data",
      paragraphs: [
        "We keep enquiry and quiz data for [TBD: retention period, e.g. 2 years] after our last contact with you, or until you ask us to delete it, whichever comes first. After that we delete it.",
      ],
    },
    {
      id: "your-rights",
      heading: "Your rights",
      paragraphs: [
        "Under the Digital Personal Data Protection Act, 2023, you have the right to:",
      ],
      list: [
        "Ask for a summary of the personal data we hold about you and how we use it",
        "Ask us to correct, complete or update your data",
        "Ask us to delete your data",
        "Withdraw your consent",
        "Nominate another person to exercise these rights for you",
        "Raise a grievance with us, and with the Data Protection Board of India if you are not satisfied with our response",
      ],
    },
    {
      id: "delete",
      heading: "How to ask us to delete your data",
      paragraphs: [
        "Email hello@digifi.in from the email address you gave us, or message us on WhatsApp from the number you gave us, and say you want your data deleted. We will confirm and delete it.",
      ],
    },
    {
      id: "security",
      heading: "How we protect your data",
      paragraphs: [
        "This website uses HTTPS. Your data is stored in a database that the public cannot read, and only DIGIFI staff can sign in to see it. We keep secret keys on our servers, never in the website code that reaches your browser.",
      ],
    },
    {
      id: "children",
      heading: "Children",
      paragraphs: [
        "This website is for business owners. We do not knowingly collect personal data from anyone under 18.",
      ],
    },
    {
      id: "grievance",
      heading: "Grievance contact",
      paragraphs: [
        "If you have a concern about how we handle your personal data, contact our grievance officer: [TBD: name of grievance officer], DIGIFI, Dindigul, Tamil Nadu. Email: hello@digifi.in. Phone and WhatsApp: +91 88928 34327.",
        "We aim to respond within [TBD: response time, e.g. 7 days].",
      ],
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      paragraphs: [
        "If we change this policy, we will update the date at the top of this page.",
      ],
    },
  ],
};

export const termsOfUse: LegalDocument = {
  headline: "Terms of use",
  intro: `These terms apply to your use of www.digifi.in, run by DIGIFI (${business}), Dindigul, Tamil Nadu. By using this website you agree to them.`,
  lastUpdated: "10 October 2026",
  sections: [
    {
      id: "use",
      heading: "Using this website",
      paragraphs: [
        "You may use this website to learn about DIGIFI's services and to contact us. Please don't misuse it: don't try to break its security, send spam through its forms, or copy it to pass off as your own.",
      ],
    },
    {
      id: "information",
      heading: "Information on this website",
      paragraphs: [
        "We work to keep the information here accurate and up to date, but it is general information, not professional advice for your business. Your free Growth Assessment and any proposal we send you are where we give advice specific to you.",
      ],
    },
    {
      id: "no-guaranteed-results",
      heading: "No guaranteed results",
      paragraphs: [
        "Marketing results depend on many things outside our control, including your budget, your market, your competitors, your offer and how quickly you follow up with enquiries. The client results on this website are real, but they are not a promise of what your business will achieve. We don't guarantee any number of enquiries, sales, rankings or returns.",
      ],
    },
    {
      id: "prices",
      heading: "Prices and plans",
      paragraphs: [
        "Prices on this website are in Indian rupees and are starting prices. Your final price, scope and terms are confirmed in writing before any work starts. Advertising budgets are paid directly to the advertising platform and are not part of our fees. We may change prices or plans at any time; changes do not affect work already agreed.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "Our content",
      paragraphs: [
        "The text, design, logo and graphics on this website belong to DIGIFI. Client names and logos belong to their owners and are shown with their permission. Please don't reuse our content without asking.",
      ],
    },
    {
      id: "links",
      heading: "Links to other websites",
      paragraphs: [
        "This website links to other services, such as WhatsApp and our clients' websites. We are not responsible for their content or how they handle your data.",
      ],
    },
    {
      id: "liability",
      heading: "Limits on our responsibility",
      paragraphs: [
        "We are not liable for any loss that comes from using, or not being able to use, this website, as far as the law allows. Nothing in these terms limits any rights you have that cannot be limited by law.",
      ],
    },
    {
      id: "privacy",
      heading: "Your privacy",
      paragraphs: [
        "Our privacy policy explains how we collect and use your personal data.",
      ],
    },
    {
      id: "law",
      heading: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of India. Any dispute will be handled by the courts of [TBD: confirm jurisdiction, e.g. Dindigul, Tamil Nadu].",
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      paragraphs: [
        "Questions about these terms: hello@digifi.in or +91 88928 34327.",
      ],
    },
  ],
};
