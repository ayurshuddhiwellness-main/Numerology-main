/*
  All homepage copy lives here, so text can be edited without touching layout.
  Items marked TODO are placeholders waiting for real details from Dr. Singh.
*/

export const site = {
  name: "Dr. Abbhiraath Singh",
  tagline: "Dr. Abbhiraath Singh helps you understand your numbers and live in harmony with them",
  footerLine: "Your life, written in numbers",
  contact: {
    email: "your@email.com", // TODO
    phone: "+91 00000 00000", // TODO
    address: "Your address here", // TODO
  },
  social: {
    facebook: "#", // TODO
    instagram: "#", // TODO
    x: "#", // TODO
  },
};

export const nav = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Consultations", href: "#consultations" },
  { label: "Services", href: "#services" },
  { label: "Forecast", href: "#forecast" },
  { label: "Blog", href: "#blog" },
];

export const commitments = [
  {
    title: "Accurate readings rooted in Vedic and Chaldean numerology",
    body: "Every reading starts from your exact date of birth and full name, analysed through time-tested systems, not generic one-size-fits-all predictions.",
  },
  {
    title: "Practical guidance you can act on in daily life",
    body: "From choosing an auspicious date to correcting a name spelling, you get clear, simple remedies that fit into your everyday routine.",
  },
  {
    title: "A holistic view of life, not just numbers",
    body: "Numbers work best alongside health, mind and habits. Dr. Singh brings his background in holistic wellness to every consultation.",
  },
];

// TODO: replace with real team members and photos (the Figma file still has template stock photos here)
export const experts = [
  { name: "Team Member One", role: "Numerologist" },
  { name: "Team Member Two", role: "Numerologist" },
  { name: "Team Member Three", role: "Vastu Consultant" },
  { name: "Team Member Four", role: "Client Care" },
];

export const reasons = [
  {
    title: "Expert Numerologist",
    body: "Dr. Singh calculates your core numbers, such as Life Path, Destiny and Soul Urge, and explains what they mean for your career, health and relationships.",
  },
  {
    title: "Compatibility Readings",
    body: "We compare the numbers of two people to understand harmony in marriage, business partnerships and family relationships.",
  },
  {
    title: "Name Correction",
    body: "A small change in spelling can align your name with your birth numbers. We suggest corrections that keep your name recognisable.",
  },
];

export const services = [
  {
    title: "Personal Numerology Report",
    body: "A complete reading of your birth date and name: your strengths, challenges, lucky numbers and colours, and the life cycles ahead.",
    numeral: "1",
  },
  {
    title: "Compatibility Readings",
    body: "Before marriage or partnership, understand how your numbers interact and where to bring extra care and effort.",
    numeral: "2",
  },
  {
    title: "Business & Brand Numerology",
    body: "Choose a business name, mobile number or launch date that supports growth, based on the numbers of the owner.",
    numeral: "3",
  },
];

export const forecast = [
  { number: 1, planet: "Sun", text: "Confidence is high this week. A good time to start new work and take decisions you have been postponing." },
  { number: 2, planet: "Moon", text: "Emotions run deep. Spend time with family, avoid hasty commitments and trust your intuition." },
  { number: 3, planet: "Jupiter", text: "Learning and guidance are favoured. Seek advice from elders and share your knowledge generously." },
  { number: 4, planet: "Rahu", text: "Expect sudden changes. Stay flexible, double-check paperwork and avoid unnecessary arguments." },
  { number: 5, planet: "Mercury", text: "Communication flows easily. Good for travel, negotiations and new business conversations." },
  { number: 6, planet: "Venus", text: "Comfort and relationships are in focus. A pleasant week for home, art and reconnecting with loved ones." },
];

// TODO: confirm prices with Dr. Singh
export const plans = [
  {
    name: "Name Analysis",
    tier: "Quick Reading",
    price: "₹1,100",
    features: ["Analysis of your name and its number", "Your lucky numbers, colours and days", "Written report on WhatsApp or email"],
  },
  {
    name: "Personal Report",
    tier: "Most Chosen",
    price: "₹2,100",
    popular: true,
    features: ["Everything in Name Analysis", "Full birth date and name reading", "30-minute call with Dr. Singh"],
  },
  {
    name: "Complete Guidance",
    tier: "Premium Consultation",
    price: "₹5,100",
    features: ["Everything in Personal Report", "Name correction and signature advice", "A follow-up session within 3 months"],
  },
];

// TODO: replace with a real client quote (with their permission)
export const testimonial = {
  quote: "Your client's words go here: a short, real testimonial about their consultation with Dr. Singh.",
  author: "Client Name, City",
};

export const posts = [
  { title: "What Your Life Path Number Says About You", date: "November 2026", numeral: "7", href: "#" },
  { title: "Should You Change the Spelling of Your Name?", date: "November 2026", numeral: "9", href: "#" },
];

export const footerLinks = [
  { heading: "Company", links: ["About", "Consultations", "Services", "Weekly Forecast"] },
  { heading: "Services", links: ["Personal Numerology Report", "Compatibility Readings", "Name Correction", "Business Numerology"] },
];
