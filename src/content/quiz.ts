// Digital Health Check: 6 questions, score 0–100, three bands.
// Points are relative weights of DIGIFI's own judgement, not benchmarks or statistics.

export type QuizOption = { id: string; label: string; points: 0 | 1 | 2 | 3 };

export type QuizQuestion = {
  id: string;
  topic: string;
  question: string;
  options: QuizOption[];
};

export type QuizBandId = "needs-attention" | "good-start" | "strong";

export type QuizBand = {
  id: QuizBandId;
  /** Inclusive score range. */
  min: number;
  max: number;
  title: string;
  summary: string;
  recommendations: string[];
  cta: string;
};

export const quizIntro = {
  id: "health-check",
  eyebrow: "Digital Health Check",
  heading: "How strong is your business online?",
  intro:
    "Six quick questions. Get your score and simple next steps in about 60 seconds.",
  startLabel: "Start the health check",
  nextLabel: "Next",
  backLabel: "Back",
  resultLabel: "Your score",
  progressLabel: "Question {current} of {total}",
  retakeLabel: "Retake",
  disclaimer:
    "This is a quick self-check based on your answers, not an audit. Your free Growth Assessment looks at your actual profiles.",
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "google-profile",
    topic: "Google Business Profile",
    question: "Does your business have a Google Business Profile?",
    options: [
      { id: "none", label: "No, or I'm not sure", points: 0 },
      {
        id: "unverified",
        label: "Yes, but it's not verified or I can't access it",
        points: 1,
      },
      {
        id: "basic",
        label: "Yes, verified, but I rarely update it",
        points: 2,
      },
      {
        id: "active",
        label: "Yes, verified, with photos and regular updates",
        points: 3,
      },
    ],
  },
  {
    id: "reviews",
    topic: "Reviews",
    question: "How do you handle Google reviews?",
    options: [
      { id: "none", label: "We have few or no reviews", points: 0 },
      {
        id: "passive",
        label: "We get some, but don't ask for them or reply",
        points: 1,
      },
      {
        id: "sometimes",
        label: "We ask sometimes and reply to some",
        points: 2,
      },
      {
        id: "system",
        label: "We ask every happy customer and reply to every review",
        points: 3,
      },
    ],
  },
  {
    id: "social-ads",
    topic: "Social media and ads",
    question: "How active are you on Facebook and Instagram?",
    options: [
      { id: "none", label: "We don't post or run ads", points: 0 },
      { id: "occasional", label: "We post now and then", points: 1 },
      {
        id: "boost",
        label: "We post regularly and sometimes boost posts",
        points: 2,
      },
      {
        id: "campaigns",
        label: "We run planned ad campaigns that bring enquiries",
        points: 3,
      },
    ],
  },
  {
    id: "whatsapp-response",
    topic: "WhatsApp response time",
    question:
      "When a customer messages you on WhatsApp, how fast do they get a reply?",
    options: [
      { id: "day-plus", label: "Often the next day or later", points: 0 },
      { id: "same-day", label: "Usually the same day", points: 1 },
      { id: "hour", label: "Usually within an hour", points: 2 },
      {
        id: "minutes",
        label: "Within minutes, with a follow-up if they go quiet",
        points: 3,
      },
    ],
  },
  {
    id: "website",
    topic: "Website",
    question: "What's the state of your website?",
    options: [
      { id: "none", label: "We don't have one", points: 0 },
      {
        id: "outdated",
        label: "We have one, but it's old or hard to use on a phone",
        points: 1,
      },
      { id: "ok", label: "It works, but rarely brings enquiries", points: 2 },
      {
        id: "good",
        label: "It's fast, mobile-friendly and brings enquiries",
        points: 3,
      },
    ],
  },
  {
    id: "tracking",
    topic: "Tracking enquiries",
    question: "How do you keep track of where your enquiries come from?",
    options: [
      { id: "none", label: "We don't track it", points: 0 },
      { id: "memory", label: "We have a rough idea", points: 1 },
      { id: "notes", label: "We note it down or ask customers", points: 2 },
      { id: "reports", label: "We get regular reports by source", points: 3 },
    ],
  },
];

export const quizBands: QuizBand[] = [
  {
    id: "needs-attention",
    min: 0,
    max: 39,
    title: "Your business is hard to find online",
    summary:
      "Customers searching for what you sell are likely finding someone else first. The good news: the basics are quick to fix and make a real difference.",
    recommendations: [
      "Set up and verify your Google Business Profile with photos and correct details.",
      "Start asking happy customers for Google reviews.",
      "Reply to WhatsApp enquiries as fast as you can, the same day at the latest.",
    ],
    cta: "Book a free Growth Assessment",
  },
  {
    id: "good-start",
    min: 40,
    max: 69,
    title: "You have a good start. There's room to grow.",
    summary:
      "You have some of the pieces in place, but they're probably not working together yet. A few focused changes can turn more searches into enquiries.",
    recommendations: [
      "Keep your Google profile active with regular posts and review replies.",
      "Move from boosting posts to planned ad campaigns aimed at enquiries.",
      "Track where every enquiry comes from, so you know what's worth paying for.",
    ],
    cta: "Book a free Growth Assessment",
  },
  {
    id: "strong",
    min: 70,
    max: 100,
    title: "Your foundations are strong. Now make them work harder.",
    summary:
      "Your foundations look solid. The next step is getting more from your budget and following up every enquiry properly.",
    recommendations: [
      "Review cost per enquiry by channel and shift budget to what works best.",
      "Set up WhatsApp follow-ups so fewer leads go cold.",
      "Make sure your website turns visitors into enquiries, not just visits.",
    ],
    cta: "Book a free Growth Assessment",
  },
];

const maxPoints = quizQuestions.length * 3;

/** Score 0–100 from the chosen option points. */
export function quizScore(points: number[]): number {
  const total = points.reduce((sum, p) => sum + p, 0);
  return Math.round((total / maxPoints) * 100);
}

export function quizBand(score: number): QuizBand {
  return (
    quizBands.find((b) => score >= b.min && score <= b.max) ?? quizBands[0]
  );
}
