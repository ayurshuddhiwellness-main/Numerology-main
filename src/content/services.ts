/*
  Services content, generated from content-source/*.md (item text is verbatim).
  4 umbrella services -> topics -> items. Edit here; the md files are the original brief.
  Items marked TODO(confirm) are drafted copy waiting for Dr. Singh's approval.
*/

export type LifeArea = "marriage" | "business" | "baby" | "property" | "money" | "health" | "timing" | "purpose";

export type Topic = {
  id: string;
  title: string;
  summary: string;
  items: string[];
  disclaimer?: string;
  lifeAreas: LifeArea[]; // data only for now, no UI yet
};

export type Service = {
  slug: string;
  title: string;
  intro: string;
  inputs: string[]; // what the client shares before a consultation (How it works)
  topics: Topic[];
  /** Card and page-header photo. `position` is the CSS object-position used when cropping. */
  image: { src: string; alt: string; position: string };
};

export const services: Service[] = [
  {
    slug: "astrology",
    image: { src: "/images/service-astrology.jpg", alt: "A gold pendulum resting on an astrology chart", position: "45% 60%" },
    title: "Astrology Consultancy",
    intro: "Gain deeper insights into your personality, life patterns, planetary influences and important life decisions through personalised Vedic astrology consultations.",
    inputs: ["Date of birth", "Time of birth", "Place of birth"],
    topics: [
      {
        id: "birth-chart-kundli-analysis",
        title: "Birth Chart & Kundli Analysis",
        summary: "Your Kundli read through the ascendant, houses, planets and nakshatra to describe your temperament and life patterns.", // TODO(confirm)
        items: [
          "Complete Janam Kundli Analysis",
          "Birth Chart Interpretation",
          "Ascendant (Lagna) Analysis",
          "Moon Sign & Sun Sign Analysis",
          "12 Houses of Horoscope Analysis",
          "9 Planetary Influences Analysis",
          "Planetary Strength & Weakness Analysis",
          "Yogas & Dosha Analysis",
          "Nakshatra & Pada Analysis",
          "Personality & Life Path Insights",
        ],
        lifeAreas: ["purpose"],
      },
      {
        id: "career-business-astrology",
        title: "Career & Business Astrology",
        summary: "Insights on career direction, profession suitability and the periods that favour a change or a new venture.", // TODO(confirm)
        items: [
          "Career Prediction & Guidance",
          "Profession Suitability Analysis",
          "Job & Career Change Guidance",
          "Business & Entrepreneurship Analysis",
          "Government Job Prospects",
          "Foreign Career & Settlement Indications",
          "Business Growth Period Analysis",
          "Professional Success & Challenges",
          "Career Timing & Dasha Analysis",
        ],
        lifeAreas: ["business", "timing"],
      },
      {
        id: "marriage-relationship-astrology",
        title: "Marriage & Relationship Astrology",
        summary: "Kundli matching, compatibility and timing guidance for marriage and close relationships.", // TODO(confirm)
        items: [
          "Marriage Prediction & Timing",
          "Kundli Matching (Guna Milan)",
          "Horoscope Compatibility",
          "Love Marriage & Arranged Marriage Guidance",
          "Manglik Dosha Analysis",
          "Marriage Compatibility Assessment",
          "Spouse & Partner Personality Insights",
          "Relationship Challenges Analysis",
          "Family & Marital Harmony Guidance",
        ],
        lifeAreas: ["marriage", "timing"],
      },
      {
        id: "child-family-astrology",
        title: "Child & Family Astrology",
        summary: "A look at a child's chart for nature, talents and learning, with name-alphabet guidance and family compatibility.", // TODO(confirm)
        items: [
          "Child Birth Chart Analysis",
          "Child Personality & Nature",
          "Nakshatra & Pada Analysis",
          "Planetary Strength Analysis",
          "Education & Learning Potential",
          "Natural Talents & Strengths",
          "Parent–Child Compatibility",
          "Child Name Alphabet Guidance",
          "Family Horoscope Compatibility",
        ],
        lifeAreas: ["baby"],
      },
      {
        id: "health-wellness-astrology",
        title: "Health & Wellness Astrology",
        summary: "A traditional view of the health houses and planetary periods, offered for wellness awareness only.", // TODO(confirm)
        items: [
          "Health House (6th House) Analysis",
          "8th & 12th House Interpretation",
          "Planetary Health Indicators",
          "Traditional Astrological Wellness Insights",
          "Mental & Emotional Tendencies",
          "Dasha-Based Wellness Period Analysis",
          "Lifestyle & Spiritual Balance Guidance",
        ],
        disclaimer: "Astrological interpretations are not medical diagnoses and should never replace professional healthcare.",
        lifeAreas: ["health"],
      },
      {
        id: "financial-wealth-astrology",
        title: "Financial & Wealth Astrology",
        summary: "Wealth houses and planetary periods read for income, savings, property and business growth timing.", // TODO(confirm)
        items: [
          "Wealth & Prosperity Analysis",
          "2nd & 11th House Analysis",
          "Financial Growth Periods",
          "Income & Savings Potential",
          "Property & Asset-Related Astrology",
          "Business Wealth Analysis",
          "Jupiter & Venus Planetary Analysis",
          "Dhana Yoga Analysis",
        ],
        lifeAreas: ["money", "property"],
      },
      {
        id: "dasha-transit-prediction",
        title: "Dasha, Transit & Prediction",
        summary: "Mahadasha, Antardasha and transit analysis, with yearly and monthly guidance on timing.", // TODO(confirm)
        items: [
          "Mahadasha & Antardasha Analysis",
          "Planetary Transit (Gochar) Analysis",
          "Saturn Transit & Sade Sati Analysis",
          "Rahu–Ketu Transit Analysis",
          "Jupiter & Saturn Transit",
          "Annual Horoscope Analysis",
          "Yearly Predictions",
          "Monthly Planetary Guidance",
          "Important Life Event Timing",
        ],
        lifeAreas: ["timing"],
      },
      {
        id: "muhurat-auspicious-timing",
        title: "Muhurat & Auspicious Timing",
        summary: "Auspicious dates and times for weddings, a new home, a business launch or another important event.", // TODO(confirm)
        items: [
          "Business Opening Muhurat",
          "Marriage Muhurat",
          "Griha Pravesh Muhurat",
          "Property Purchase Muhurat",
          "Vehicle Purchase Muhurat",
          "Naming Ceremony Muhurat",
          "New Venture & Project Launch Muhurat",
          "Important Personal Event Muhurat",
        ],
        lifeAreas: ["timing", "business", "property"],
      },
      {
        id: "nakshatra-planetary-remedies",
        title: "Nakshatra & Planetary Remedies",
        summary: "Nakshatra and planetary analysis with traditional remedies, mantras, gemstone and ritual guidance.", // TODO(confirm)
        items: [
          "27 Nakshatra Analysis",
          "Birth Nakshatra & Pada Interpretation",
          "Planetary Dosha Analysis",
          "Traditional Vedic Remedies",
          "Mantra & Meditation Recommendations",
          "Gemstone Suitability Guidance",
          "Rudraksha Guidance",
          "Spiritual Practices & Ritual Recommendations",
        ],
        lifeAreas: ["purpose"],
      },
      {
        id: "specialised-astrology-consultations",
        title: "Specialised Astrology Consultations",
        summary: "Prashna, horary, karmic and life-purpose consultations for specific questions and situations.", // TODO(confirm)
        items: [
          "Prashna Kundli",
          "Horary Astrology",
          "Spiritual & Karmic Astrology",
          "Past Life Astrology Perspectives",
          "Child Astrology",
          "Foreign Travel & Settlement Analysis",
          "Property & Real Estate Astrology",
          "Life Purpose & Spiritual Growth Analysis",
        ],
        lifeAreas: ["purpose", "property"],
      },
    ],
  },
  {
    slug: "numerology",
    image: { src: "/images/service-numerology.jpg", alt: "Hands holding numbered stones over astrology and numerology charts", position: "50% 55%" },
    title: "Numerology Consultancy",
    intro: "Discover the significance of numbers and their influence on different aspects of life. Our numerology consultations focus on name analysis, personal numbers, business identity, relationships and life direction through personalised numerological insights.",
    inputs: ["Full name", "Date of birth"],
    topics: [
      {
        id: "newborn-baby-name-numerology",
        title: "Newborn Baby Name Numerology",
        summary: "Personalised numerology guidance for choosing a meaningful and numerologically aligned name for your newborn.",
        items: [
          "Newborn Baby Numerology Analysis",
          "Lucky Alphabet Selection",
          "Baby Name Suggestions Based on Numerology",
          "Baby Name Number Analysis",
          "Name Correction & Spelling Optimisation",
          "Birth Date & Destiny Number Analysis",
          "Personal Number Compatibility",
          "Parent–Child Numerological Compatibility",
          "Baby’s Strengths & Potential Analysis",
          "Auspicious Name Number Recommendations",
        ],
        lifeAreas: ["baby"],
      },
      {
        id: "personal-name-numerology",
        title: "Personal Name Numerology",
        summary: "Understand the numerological significance of your name and its relationship with your birth date.",
        items: [
          "Personal Name Analysis",
          "Name Correction & Spelling Guidance",
          "Lucky Name Number Selection",
          "First Name & Full Name Analysis",
          "Signature Numerology",
          "Personal Lucky Alphabet",
          "Birth Number & Destiny Number Analysis",
          "Personal Strengths & Challenges",
          "Name & Date of Birth Compatibility",
        ],
        lifeAreas: ["purpose"],
      },
      {
        id: "business-brand-numerology",
        title: "Business & Brand Numerology",
        summary: "Build a numerologically aligned business identity with guidance on business names, branding and important business decisions.",
        items: [
          "Business Name Numerology",
          "Business Name Selection & Correction",
          "Company & Brand Name Analysis",
          "Lucky Business Name Number",
          "Business Partnership Compatibility",
          "Business Launch Date Selection",
          "Company Registration Date Guidance",
          "Lucky Website & Domain Name Selection",
          "Logo Colour Recommendations",
          "Lucky Brand Colour Selection",
          "Visiting Card Design Numerology Guidance",
          "Business Logo & Brand Identity Guidance",
          "Social Media Username Selection",
          "Business Banner & Marketing Template Guidance",
          "Office & Shop Name Numerology",
        ],
        lifeAreas: ["business"],
      },
      {
        id: "marriage-relationship-numerology",
        title: "Marriage & Relationship Numerology",
        summary: "Explore numerical compatibility and relationship dynamics for better understanding and harmony.",
        items: [
          "Marriage Compatibility Analysis",
          "Husband & Wife Numerology",
          "Love Relationship Compatibility",
          "Partner Name Compatibility",
          "Birth Date Compatibility",
          "Marriage Timing Guidance",
          "Relationship Strengths & Challenges",
          "Family Compatibility Analysis",
          "Couple Name Analysis",
        ],
        lifeAreas: ["marriage"],
      },
      {
        id: "career-education-professional-growth",
        title: "Career, Education & Professional Growth",
        summary: "Numerology-based insights to help individuals understand their professional strengths and explore suitable opportunities.",
        items: [
          "Career Numerology Analysis",
          "Profession & Business Suitability",
          "Career Direction Guidance",
          "Job & Business Compatibility",
          "Student Numerology Analysis",
          "Education & Academic Potential",
          "Lucky Career Dates",
          "Professional Name Analysis",
          "Personal Strengths & Potential Assessment",
        ],
        lifeAreas: ["business", "purpose"],
      },
      {
        id: "health-wellness-numerology",
        title: "Health & Wellness Numerology",
        summary: "Explore traditional numerological perspectives on personal well-being, lifestyle balance and emotional tendencies.",
        items: [
          "Health & Wellness Numerology Profile",
          "Personal Energy Number Analysis",
          "Emotional & Mental Pattern Analysis",
          "Mind–Body Balance Insights",
          "Lifestyle Alignment Guidance",
          "Personal Year Cycle Analysis",
        ],
        disclaimer: "Numerology-based wellness insights are complementary and do not replace medical assessment or treatment.",
        lifeAreas: ["health"],
      },
      {
        id: "lucky-numbers-personal-selection",
        title: "Lucky Numbers & Personal Selection",
        summary: "Number selection guidance for mobile numbers, vehicles, homes, dates and colours.", // TODO(confirm)
        items: [
          "Lucky Mobile Number Analysis",
          "Vehicle Number Numerology",
          "House & Property Number Analysis",
          "Lucky Signature Number",
          "Lucky Dates & Days",
          "Personal Lucky Colour Analysis",
          "Lucky Number for Important Events",
          "Personal Year & Monthly Number Forecast",
        ],
        lifeAreas: ["timing", "property"],
      },
      {
        id: "annual-life-cycle-numerology",
        title: "Annual & Life Cycle Numerology",
        summary: "Your personal year and life cycles, with yearly and monthly number guidance.", // TODO(confirm)
        items: [
          "Personal Year Number Analysis",
          "Annual Numerology Forecast",
          "Monthly Numerology Guidance",
          "Important Life Cycle Analysis",
          "Personal Growth & Development Cycles",
          "Favourable Periods for Important Decisions",
        ],
        lifeAreas: ["timing"],
      },
    ],
  },
  {
    slug: "vastu-shastra",
    image: { src: "/images/service-vastu-shastra.jpg", alt: "A colourful, symmetrical mandala", position: "50% 50%" },
    title: "Vastu Shastra Consultancy",
    intro: "Create balanced and harmonious living and working environments through traditional Vastu Shastra principles. Our consultations focus on directional alignment, spatial planning and practical Vastu recommendations for residential and commercial properties.",
    inputs: ["Property type", "City", "Online or on-site consultation"],
    topics: [
      {
        id: "residential-vastu-consultancy",
        title: "Residential Vastu Consultancy",
        summary: "Room-by-room Vastu guidance for flats, houses and new homes.", // TODO(confirm)
        items: [
          "Complete Home Vastu Analysis",
          "Apartment & Flat Vastu",
          "Independent House Vastu",
          "New Home Vastu Planning",
          "Plot Selection & Vastu Analysis",
          "Main Entrance Direction Analysis",
          "Bedroom Vastu",
          "Kitchen Vastu",
          "Living Room & Dining Area Vastu",
          "Bathroom & Toilet Vastu",
          "Pooja Room Vastu",
          "Balcony & Garden Vastu",
          "Staircase & Parking Vastu",
        ],
        lifeAreas: ["property"],
      },
      {
        id: "commercial-business-vastu",
        title: "Commercial & Business Vastu",
        summary: "Vastu for offices, shops, clinics, restaurants and other commercial spaces.", // TODO(confirm)
        items: [
          "Office Vastu Consultancy",
          "Corporate Office Vastu",
          "Shop & Showroom Vastu",
          "Retail Store Vastu",
          "Clinic & Wellness Centre Vastu",
          "Hospital & Healthcare Facility Vastu",
          "Restaurant & Hotel Vastu",
          "Factory & Industrial Vastu",
          "Business Entrance Direction",
          "Reception & Workstation Placement",
          "Owner’s Cabin Vastu",
          "Cash Counter & Finance Area Vastu",
          "Meeting Room & Conference Area Vastu",
        ],
        lifeAreas: ["business", "property"],
      },
      {
        id: "plot-property-vastu",
        title: "Plot & Property Vastu",
        summary: "Direction, shape and layout of a plot, with guidance on purchase and water-source placement.", // TODO(confirm)
        items: [
          "Plot Direction & Shape Analysis",
          "Land Selection Guidance",
          "Property Purchase Vastu",
          "Road & Entrance Analysis",
          "Slope & Level Analysis",
          "Underground Water Tank Placement",
          "Overhead Water Tank Placement",
          "Borewell & Water Source Placement",
          "Boundary Wall & Gate Placement",
        ],
        lifeAreas: ["property"],
      },
      {
        id: "directional-energy-analysis",
        title: "Directional & Energy Analysis",
        summary: "Directional alignment, the five elements and the energy balance of a space.", // TODO(confirm)
        items: [
          "8 Directions & Their Significance",
          "16 Directional Vastu Analysis",
          "Five Elements (Panchamahabhuta) Balance",
          "North, South, East & West Direction Analysis",
          "Brahmasthan Analysis",
          "Vastu Purusha Mandala",
          "Natural Light & Ventilation Assessment",
          "Space Utilisation & Directional Alignment",
        ],
        lifeAreas: ["property"],
      },
      {
        id: "vastu-corrections-remedies",
        title: "Vastu Corrections & Remedies",
        summary: "Practical, non-demolition corrections using colour, placement and traditional remedies.", // TODO(confirm)
        items: [
          "Practical Vastu Correction Guidance",
          "Non-Demolition Vastu Solutions",
          "Colour & Element Recommendations",
          "Furniture Placement Guidance",
          "Directional Corrections",
          "Vastu Accessories & Traditional Remedies",
          "Yantra & Symbol Placement Guidance",
          "Pooja & Spiritual Space Recommendations",
        ],
        lifeAreas: ["property"],
      },
      {
        id: "specialised-vastu-services",
        title: "Specialised Vastu Services",
        summary: "New construction, floor-plan review, renovation and interior guidance, online or on-site.", // TODO(confirm)
        items: [
          "New Construction Vastu Consultation",
          "Architectural Layout Review",
          "Floor Plan Vastu Analysis",
          "Interior Design Vastu Guidance",
          "Renovation & Reconstruction Vastu",
          "Rental Property Vastu",
          "Farmhouse & Villa Vastu",
          "Hospitality & Wellness Space Vastu",
          "Online Vastu Consultation",
          "On-Site Vastu Visit",
        ],
        lifeAreas: ["property", "business"],
      },
    ],
  },
  {
    slug: "personal-spiritual-guidance",
    image: { src: "/images/service-personal-spiritual-guidance.jpg", alt: "Hands folded quietly on soft linen", position: "70% 50%" },
    title: "Personal & Spiritual Guidance",
    intro: "Guidance for personal growth, life purpose and business decisions, drawn from astrology, numerology and Vastu.", // TODO(confirm)
    inputs: ["Date of birth", "The areas of life you would like to explore"], // TODO(confirm)
    topics: [
      {
        id: "personal-spiritual-guidance",
        title: "Personal & Spiritual Guidance",
        summary: "Reflective consultations on life purpose, personal growth and spiritual practice.", // TODO(confirm)
        items: [
          "Life Purpose Consultation",
          "Personal Growth & Self-Discovery",
          "Spiritual Guidance",
          "Meditation & Mindfulness Guidance",
          "Emotional Pattern Understanding",
          "Personal Strengths & Potential Discovery",
        ],
        lifeAreas: ["purpose"],
      },
      {
        id: "corporate-business-consultancy",
        title: "Corporate & Business Consultancy",
        summary: "Numerology, Vastu and Muhurat guidance for businesses, partnerships and leadership.", // TODO(confirm)
        items: [
          "Corporate Numerology",
          "Business Name & Brand Analysis",
          "Business Partnership Compatibility",
          "Corporate Vastu",
          "Leadership & Personal Potential Analysis",
          "Business Launch & Expansion Muhurat",
          "Corporate Wellness & Spiritual Workshops",
        ],
        lifeAreas: ["business"],
      },
    ],
  },
];

/** Just the umbrella services, for the Navbar (topics stay on each service's own page). */
export const serviceMenu = services.map((s) => ({
  slug: s.slug,
  title: s.title,
}));

/** Consultation programs (the /consultations page). No prices exist yet. */
export const programs = [
  "One-to-One Numerology Consultation",
  "Detailed Astrology Consultation",
  "Combined Astrology & Numerology Analysis",
  "Numerology, Astrology & Vastu Combined Consultation",
  "Family Consultation",
  "Business Owner Consultation",
  "Annual Personal Guidance Session",
];
