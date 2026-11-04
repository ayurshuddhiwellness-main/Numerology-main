import { services } from "./services";

/*
  All site copy lives here, so text can be edited without touching layout.
  Items marked TODO are placeholders waiting for real details from Dr. Singh.
*/

export const site = {
  name: "Dr. Abbhiraath Singh",
  url: "https://example.com", // TODO: the real domain once the site is live
  tagline: "Dr. Abbhiraath Singh helps you understand your numbers and live in harmony with them",
  footerLine: "Your life, written in numbers",
  contact: {
    email: "your@email.com", // TODO
    phone: "+91 00000 00000", // TODO
    address: "Your address here", // TODO
    mapQuery: "", // TODO: e.g. "Sector 36, Greater Noida". The map appears once this is filled in.
  },
  social: {
    facebook: "#", // TODO
    instagram: "#", // TODO
    x: "#", // TODO
  },
};

/* ---------------- Numbers & weekly forecast ---------------- */

export type NumberForecast = {
  number: number;
  planet: string;
  summary: string;
  general: string;
  health: string;
  relationship: string;
  business: string;
};

// TODO: update the forecast text every week
export const numbers: NumberForecast[] = [
  {
    number: 1,
    planet: "Sun",
    summary: "Confidence is high this week. A good time to start new work and take decisions you have been postponing.",
    general: "Your energy and self-belief are strong. Take the lead on something you have been waiting to begin, and trust your own judgement.",
    health: "Vitality is good, but avoid pushing too hard. Morning sunlight and a steady sleep routine will keep you balanced.",
    relationship: "Others look to you for direction. Lead with warmth rather than authority, and listen before you decide.",
    business: "A favourable week to pitch ideas, meet senior people and start new projects.",
  },
  {
    number: 2,
    planet: "Moon",
    summary: "Emotions run deep. Spend time with family, avoid hasty commitments and trust your intuition.",
    general: "Your sensitivity is heightened. Move gently, and let decisions settle for a day before you act on them.",
    health: "Rest, water and calm surroundings help. Watch for tiredness caused by worry rather than work.",
    relationship: "A tender week for close relationships. Share what you feel rather than expecting others to guess it.",
    business: "Better for collaboration than competition. Support a colleague and it will be returned.",
  },
  {
    number: 3,
    planet: "Jupiter",
    summary: "Learning and guidance are favoured. Seek advice from elders and share your knowledge generously.",
    general: "Wisdom comes through teachers and books. A good week to study, plan and give advice.",
    health: "Keep meals light and regular. Avoid overindulgence, which Jupiter tends to encourage.",
    relationship: "Respect and honesty strengthen your bonds. Guidance you offer will be well received.",
    business: "Favourable for education, consulting, finance and long-term planning.",
  },
  {
    number: 4,
    planet: "Rahu",
    summary: "Expect sudden changes. Stay flexible, double-check paperwork and avoid unnecessary arguments.",
    general: "Plans may shift without warning. Keep a backup ready and avoid shortcuts.",
    health: "Restlessness can disturb sleep. A fixed routine and less screen time at night will help.",
    relationship: "Misunderstandings are possible. Say clearly what you mean, and avoid reacting in the moment.",
    business: "Read contracts carefully and delay risky investments until next week.",
  },
  {
    number: 5,
    planet: "Mercury",
    summary: "Communication flows easily. Good for travel, negotiations and new business conversations.",
    general: "Your mind is quick and adaptable. A good week for short trips, writing and networking.",
    health: "Nervous energy runs high. Breathing exercises and walks help you stay grounded.",
    relationship: "Conversations bring you closer. A good week to resolve a pending misunderstanding.",
    business: "Excellent for sales, negotiation, marketing and signing small deals.",
  },
  {
    number: 6,
    planet: "Venus",
    summary: "Comfort and relationships are in focus. A pleasant week for home, art and reconnecting with loved ones.",
    general: "Beauty and harmony matter to you this week. Spend time on your home and on creative work.",
    health: "Balance rich food with movement. Gentle exercise suits you better than intense effort.",
    relationship: "A warm, affectionate week. Plan time with your partner or family.",
    business: "Favourable for design, hospitality, fashion and anything that serves customers' comfort.",
  },
  {
    number: 7,
    planet: "Ketu",
    summary: "A reflective week. Step back from noise, trust quiet insight and avoid rushing important decisions.",
    general: "Your intuition is sharp, but your patience may be short. Spend some time alone to think clearly.",
    health: "Meditation, prayer or time in nature restores you. Avoid irregular meals.",
    relationship: "You may feel distant. Tell loved ones you need space, so they do not take it personally.",
    business: "Good for research, analysis and planning; less suited to launches or big announcements.",
  },
  {
    number: 8,
    planet: "Saturn",
    summary: "Steady effort brings results. Be patient with delays and keep your commitments.",
    general: "Progress is slow but lasting. Discipline and consistency will be rewarded.",
    health: "Look after your joints and back. Avoid long hours without breaks.",
    relationship: "Reliability shows love this week. Keep your promises, however small.",
    business: "Favourable for long-term investments, property and finishing pending work.",
  },
  {
    number: 9,
    planet: "Mars",
    summary: "Energy and courage are strong. Channel them into action, and keep your temper in check.",
    general: "You have the drive to finish what you start. Direct it into one clear goal.",
    health: "Good stamina, but watch for minor injuries and heat. Stay hydrated.",
    relationship: "Passion runs high. Avoid arguments over small things.",
    business: "Good for competitive situations, sports, engineering and taking bold but measured steps.",
  },
];

/* ---------------- About ---------------- */

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

export const aboutIntro = {
  statement: "Welcome. We help you understand the numbers that shape your life, and use them with clarity and care.",
  body: "Dr. Abbhiraath Singh is a numerologist and holistic health practitioner. He reads your date of birth and name through Vedic and Chaldean numerology, and explains what they reveal in simple, practical terms: when to act, when to wait, and which small changes can bring your life into better balance. Every consultation is personal, and every number is calculated by hand.", // TODO: confirm biography with Dr. Singh
};

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

// TODO: replace with real team members and photos
export const experts = [
  { name: "Dr. Abbhiraath Singh", role: "Lead Numerologist" },
  { name: "Team Member Two", role: "Numerologist" },
  { name: "Team Member Three", role: "Vastu Consultant" },
  { name: "Team Member Four", role: "Client Care" },
  { name: "Team Member Five", role: "Numerologist" },
  { name: "Team Member Six", role: "Research" },
  { name: "Team Member Seven", role: "Content" },
  { name: "Team Member Eight", role: "Client Care" },
];

/* ---------------- Consultations ---------------- */

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

/* ---------------- Blog ---------------- */

export type Post = {
  slug: string;
  title: string;
  date: string;
  numeral: string;
  excerpt: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "life-path-number",
    title: "What Your Life Path Number Says About You",
    date: "November 2026",
    numeral: "7",
    excerpt:
      "Your full date of birth reduces to a single number. In Indian numerology it is called the Bhagyank, or destiny number, and it describes the direction your life tends to take.",
    sections: [
      {
        heading: "How to find it",
        paragraphs: [
          "Add every digit of your full date of birth, then keep adding the digits of the result until you reach a single number. For a birth date of 14-08-1990: 1 + 4 + 0 + 8 + 1 + 9 + 9 + 0 = 32, and 3 + 2 = 5. The Life Path number is 5.",
          "This is different from your Mulank, which uses only the day of birth (here, 1 + 4 = 5). Sometimes the two match, as in this example; often they do not, and the relationship between them is part of what a reading explains.",
        ],
      },
      {
        heading: "What each number points to",
        paragraphs: [
          "Each number is linked with a planet and a temperament. 1 (Sun) leads; 2 (Moon) nurtures; 3 (Jupiter) teaches; 4 (Rahu) breaks patterns; 5 (Mercury) communicates; 6 (Venus) harmonises; 7 (Ketu) seeks meaning; 8 (Saturn) builds slowly; 9 (Mars) acts with courage.",
          "These are tendencies, not fixed outcomes. Two people with the same number can live very different lives, depending on their other numbers and their choices.",
        ],
      },
      {
        heading: "Using it well",
        paragraphs: [
          "Your Life Path number is most useful as a mirror. It shows the kind of work and pace that come naturally, and the lessons that tend to repeat until they are learned. A full reading places it alongside your Mulank and name number, so the advice is specific to you.",
        ],
      },
    ],
  },
  {
    slug: "name-spelling",
    title: "Should You Change the Spelling of Your Name?",
    date: "November 2026",
    numeral: "9",
    excerpt:
      "Many people consider a small change to the spelling of their name. Here is how name numerology works, and when a correction is worth making.",
    sections: [
      {
        heading: "Why a name carries a number",
        paragraphs: [
          "In Chaldean numerology each letter has a value from 1 to 8. The total of your name gives a number that you use constantly: when you sign, introduce yourself, or are called by others.",
          "When this number supports your Mulank and Bhagyank, it adds strength. When it works against them, people often describe a sense of effort that does not quite pay off.",
        ],
      },
      {
        heading: "When a correction helps",
        paragraphs: [
          "A correction is worth considering when your name number conflicts strongly with your birth numbers, or when you are choosing a name for a new business or a new stage of life.",
          "It is not a cure for every problem. A good numerologist will tell you honestly when your current name already works well.",
        ],
      },
      {
        heading: "How to make the change",
        paragraphs: [
          "Corrections are usually small, such as doubling a letter or adding a vowel, so your name stays recognisable. Start using the new spelling in your signature and on social profiles; legal changes are a personal decision and are not required for the spelling to be used.",
        ],
      },
    ],
  },
  {
    slug: "mulank-and-bhagyank",
    title: "Mulank and Bhagyank: The Two Numbers That Shape You",
    date: "November 2026",
    numeral: "5",
    excerpt:
      "Indian numerology starts with two numbers from your date of birth. One describes who you are; the other describes where life is taking you.",
    sections: [
      {
        heading: "Mulank: your psychic number",
        paragraphs: [
          "Your Mulank comes from the day of the month you were born, reduced to a single digit. Someone born on the 23rd has a Mulank of 2 + 3 = 5. It describes your personality: how you think, react and present yourself.",
        ],
      },
      {
        heading: "Bhagyank: your destiny number",
        paragraphs: [
          "Your Bhagyank comes from your full date of birth. It describes the direction of your life, the opportunities that come to you, and the lessons you are here to learn.",
        ],
      },
      {
        heading: "Reading them together",
        paragraphs: [
          "When the two numbers are friendly, life tends to feel aligned. When they pull in different directions, people often feel torn between who they are and what life asks of them. Understanding both helps you work with that tension instead of against it.",
        ],
      },
    ],
  },
  {
    slug: "auspicious-dates",
    title: "Choosing an Auspicious Date with Numerology",
    date: "November 2026",
    numeral: "3",
    excerpt:
      "Weddings, launches, house moves and signings: numerology can help you choose a date that supports the people involved.",
    sections: [
      {
        heading: "Why the date matters",
        paragraphs: [
          "Every date reduces to a number. When that number is friendly to the Mulank and Bhagyank of the people involved, the event begins with their own energy supporting it.",
        ],
      },
      {
        heading: "How dates are chosen",
        paragraphs: [
          "Dr. Singh shortlists dates whose numbers support yours, then removes those that clash with other important numbers in the situation, such as a partner's or a business's.",
        ],
      },
      {
        heading: "Keeping it practical",
        paragraphs: [
          "The aim is to choose well between dates that already work for you. Numerology should make planning easier, not harder.",
        ],
      },
    ],
  },
  {
    slug: "mobile-and-vehicle-numbers",
    title: "Lucky Numbers for Your Mobile and Vehicle",
    date: "November 2026",
    numeral: "8",
    excerpt:
      "The numbers you use every day add up too. Here is how to check whether your mobile or vehicle number supports you.",
    sections: [
      {
        heading: "How to check a number",
        paragraphs: [
          "Add all the digits of the number and reduce the total to a single digit. Compare that digit with your Mulank and Bhagyank.",
        ],
      },
      {
        heading: "What to look for",
        paragraphs: [
          "Numbers that match or are friendly to your own are considered supportive. A number that repeatedly clashes with yours is worth reconsidering when you next have a choice.",
        ],
      },
      {
        heading: "A balanced view",
        paragraphs: [
          "There is no need to change a number you have used for years if life is going well. This matters most when you are choosing a new number anyway.",
        ],
      },
    ],
  },
];

/* ---------------- Navigation ---------------- */

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Consultations", href: "/consultations" },
  { label: "Services", href: "/services", mega: true },
  { label: "Forecast", href: "/forecast" },
  { label: "Blog", href: "/blog" },
];

export const footerLinks = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Experts", href: "/experts" },
      { label: "Consultations", href: "/consultations" },
      { label: "Weekly Forecast", href: "/forecast" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
];
