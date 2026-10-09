import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { MobileCtaBar } from "@/components/sections/MobileCtaBar";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { seo } from "@/content/pages";
import { site } from "@/content/site";
import "./globals.css";

// Variable font: covers weights 400–800, plus the optical-size axis.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: seo.home.title,
  description: seo.home.description,
  applicationName: site.name,
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/brand/apple-touch-icon-180.png", sizes: "180x180" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1340",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${geistMono.variable}`}>
      <body className="pb-(--mobile-bar-h) md:pb-0">
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          {site.nav.labels.skipToContent}
        </a>
        <MotionProvider>
          <SiteHeader />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <SiteFooter />
          <MobileCtaBar />
        </MotionProvider>
      </body>
    </html>
  );
}
