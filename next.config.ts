import type { NextConfig } from "next";

// Old flat numerology service pages now live as topics on /services/numerology
const oldServices: Record<string, string> = {
  "personal-numerology-report": "personal-name-numerology",
  "name-correction": "personal-name-numerology",
  "compatibility-readings": "marriage-relationship-numerology",
  "business-numerology": "business-brand-numerology",
};

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(oldServices).map(([from, topic]) => ({
      source: `/services/${from}`,
      destination: `/services/numerology#${topic}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
