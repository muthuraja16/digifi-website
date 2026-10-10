// Trust elements that stay hidden until real data exists. Never fill these with made-up values.
// How to switch each one on: docs/brief.md §7.13.

export type GoogleRating = {
  /** Average star rating shown on DIGIFI's Google Business Profile, e.g. 4.9. */
  rating: number;
  /** Number of Google reviews. */
  count: number;
  /** Link to the Google Business Profile reviews. */
  url: string;
};

/** null until the Google Business Profile exists and has reviews [TBD: next month]. */
export const googleRating: GoogleRating | null = null;

export const googleRatingLabels = {
  source: "Google reviews",
  reviews: "reviews",
  read: "Read our reviews on Google",
};

export type Testimonial = {
  quote: string;
  name: string;
  /** Role and business, e.g. "Founder, Mukilam Academy". */
  role: string;
  /** Written permission from the client to publish this quote (date or note). */
  permission: string;
};

/** Real client quotes only, each with written permission [TBD]. Empty = section hidden. */
export const testimonials: Testimonial[] = [];

export const testimonialsSection = {
  eyebrow: "In their words",
  heading: "What clients say",
};
