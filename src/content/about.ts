export type TeamMember = {
  name: string;
  role: string;
  /** Path under /public, or null to show an initials avatar. No stock photos. */
  photo: string | null;
};

export const about = {
  hero: {
    eyebrow: "About DIGIFI",
    headline: "A local team that treats your growth like our own.",
    subheading:
      "DIGIFI is a digital marketing agency in Dindigul. For 3 years we've helped local businesses across Dindigul, Madurai and Trichy get found, get enquiries and grow.",
  },
  story: {
    heading: "Why we started DIGIFI",
    paragraphs: [
      "Local businesses here are good at what they do, but most marketing agencies talk in jargon, sell big promises and send reports nobody can read. We started DIGIFI in Dindigul to do it differently.",
      "We combine 15+ years of IT and marketing experience with an understanding of how people in this region search, compare and buy. We speak your language, in English or Tamil, and we show you exactly what your money is doing.",
      "[confirm: founding story details, e.g. who founded DIGIFI and why]",
    ],
  },
  approach: {
    heading: "How we work",
    items: [
      {
        title: "Local first",
        icon: "MapPin",
        body: "We know the Dindigul–Madurai–Trichy market: the seasons, the festivals, and how customers here decide.",
      },
      {
        title: "Transparent",
        icon: "FileBarChart",
        body: "A plain-language report every month: what came in, what it cost, and what we're doing next.",
      },
      {
        title: "AI-powered",
        icon: "Sparkles",
        body: "We use AI tools to research, write and test faster, so you get quicker turnaround without cutting corners.",
      },
    ],
  },
  numbers: {
    eyebrow: "DIGIFI in numbers",
    heading: "Three years, 35+ local businesses",
    items: [
      { value: 3, suffix: "", label: "years in business" },
      { value: 35, suffix: "+", label: "clients served" },
      { value: 10, suffix: "+", label: "industries" },
      {
        value: 15,
        suffix: "+",
        label: "years of combined IT and marketing experience",
      },
    ],
  },
  team: {
    eyebrow: "People",
    heading: "The team",
    photoPending: "Photo coming soon",
    intro: "[TBD: one line about the team]",
    // [TBD: team members: names, roles and real photos]. One entry per person.
    members: [
      { name: "[TBD: name]", role: "[TBD: role]", photo: null },
    ] satisfies TeamMember[],
  },
  values: {
    heading: "What we believe",
    items: [
      {
        title: "Honest over impressive",
        body: "We'd rather tell you the truth than tell you what you want to hear.",
      },
      {
        title: "Results you can see",
        body: "If we can't measure it, we don't claim it.",
      },
      {
        title: "Easy to work with",
        body: "Quick replies, clear answers, no jargon.",
      },
      {
        title: "Your accounts, your business",
        body: "Everything we build for you stays yours. Every login is handed over to you.",
      },
    ],
  },
  cta: {
    heading: "Let's see what's possible for your business",
    body: "Book a free Growth Assessment. We'll look at where you are today and show you the first steps.",
  },
};
