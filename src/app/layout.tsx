import type { Metadata } from "next";
import "@fontsource/cormorant/700.css";
import "@fontsource/cormorant/700-italic.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Sections2";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Numerologist`, template: `%s | ${site.name}` },
  description: site.tagline,
  openGraph: {
    title: `${site.name} | Numerologist`,
    description: site.tagline,
    images: ["/images/dr-abbhiraath-singh.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
