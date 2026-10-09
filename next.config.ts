import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Copyright year for the footer, stamped at build time so every page stays fully static.
  env: { BUILD_YEAR: String(new Date().getFullYear()) },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
