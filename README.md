# Dr. Abbhiraath Singh — Numerology Website

Homepage built from the Figma design (rebranded Calestial template), using **Next.js 16 + Tailwind CSS 4**.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To check a production build: `npm run build && npm start`.

## Deploying

Import the repo on [Vercel](https://vercel.com/new). No settings need changing; every push to `main` redeploys.

## Where things live

| What | File |
|---|---|
| Site text (forecast, blog posts, prices, contact details, nav) | `src/content/site.ts` |
| Services: 4 umbrella services, 26 topics, ~230 items, consultation programs | `src/content/services.ts` (original brief in `content-source/*.md`) |
| Pages (one folder per page) | `src/app/` (`about`, `experts`, `services`, `services/[slug]`, `consultations`, `forecast`, `forecast/[number]`, `blog`, `blog/[slug]`, `contact`) |
| Booking form | `src/components/BookingForm.tsx` |
| Shared cards (service, number, blog, expert) | `src/components/cards.tsx` |
| Service topic card and sticky topic navigator | `src/components/TopicCard.tsx`, `src/components/TopicNav.tsx` |
| Colours and fonts (the brand) | `src/app/globals.css` (`@theme` block) |
| Header, Services mega-menu, mobile drawer | `src/components/Navbar.tsx` |
| Hero with Dr. Singh's photo | `src/components/Hero.tsx` |
| Commitments, Experts, Why Choose Us, Services, Forecast sections | `src/components/Sections.tsx` |
| Banner, Pricing, Testimonial, Blog strip, Footer | `src/components/Sections2.tsx` |
| Shared pieces (Button, Title, Logo, Swastik seal) | `src/components/ui.tsx` |
| Images | `public/images/` |

To reuse this for another client, change the `@theme` colours and fonts, swap the content in `site.ts`, and replace the images.

## Still to do (marked `TODO` in the code)

- Real contact details and social links
- Confirm consultation prices
- Team photos/names (the "Meet Our Experts" section uses numeral placeholders)
- Real artwork or photos for About, Services and Blog (numeral placeholders for now)
- A real client testimonial
- Connect the newsletter form, and a real booking backend (the form currently opens the visitor's email app)
- Set `site.url` (real domain) and `site.contact.mapQuery` (shows the Google map on Contact)
- Update the weekly forecast text in `site.ts` each week

## Routes

| Route | What |
|---|---|
| `/services` | Hub: one row per umbrella service (astrology, numerology, vastu-shastra, personal-spiritual-guidance) |
| `/services/[slug]` | Service detail: sticky topic navigator, a card per topic, How it works, booking form |
| `/consultations` | The 7 consultation programs ("Contact for pricing") |
| `/contact?service=<slug>&topic=<id>#book` | Booking form with service and topic preselected |
| `/services/personal-numerology-report` and 3 other old slugs | Permanent redirects to topics on `/services/numerology` (see `next.config.ts`) |

Topic ids are the slugified topic titles, so `#personal-name-numerology` is also the card's anchor.
