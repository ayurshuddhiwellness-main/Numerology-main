import type { Metadata } from "next";
import "@fontsource/cormorant/700.css";
import "@fontsource/cormorant/700-italic.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "./globals.css";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.name} | Numerologist`,
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
