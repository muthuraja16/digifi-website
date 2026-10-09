export type PackageSlug = "local-starter" | "local-growth" | "local-dominance";

export type Package = {
  slug: PackageSlug;
  name: string;
  /** Monthly starting price in ₹, digits only, or "[TBD]". Shown in Geist Mono. */
  startingPrice: string;
  priceLabel: string;
  /** One line on who it suits. */
  bestFor: string;
  included: string[];
  highlighted: boolean;
};

export const packages: Package[] = [
  {
    slug: "local-starter",
    name: "Local Starter",
    startingPrice: "[TBD]",
    priceLabel: "Starting from ₹[TBD]/month",
    bestFor:
      "For businesses getting set up online and found locally. [confirm]",
    included: ["[TBD: what's included in Local Starter]"],
    highlighted: false,
  },
  {
    slug: "local-growth",
    name: "Local Growth",
    startingPrice: "[TBD]",
    priceLabel: "Starting from ₹[TBD]/month",
    bestFor:
      "For businesses ready to bring in steady enquiries every month. [confirm]",
    included: ["[TBD: what's included in Local Growth]"],
    highlighted: true,
  },
  {
    slug: "local-dominance",
    name: "Local Dominance",
    startingPrice: "[TBD]",
    priceLabel: "Starting from ₹[TBD]/month",
    bestFor:
      "For businesses that want to lead their market across the region. [confirm]",
    included: ["[TBD: what's included in Local Dominance]"],
    highlighted: false,
  },
];

export const packagesSection = {
  eyebrow: "Packages",
  heading: "Simple monthly packages",
  intro:
    "Every business is different, so we recommend a package after your free Growth Assessment. Ad spend is paid separately, straight to Meta. [confirm]",
  ctaLabel: "Book a free Growth Assessment",
  note: "Prices are starting points. Your exact plan depends on your goals and market.",
};
