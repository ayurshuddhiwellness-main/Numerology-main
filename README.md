# Dr. Abbhiraath Singh — Numerology Website

Homepage built from the Figma design (rebranded Calestial template), using **Next.js 15 + Tailwind CSS 4**.

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
| All site text (services, forecast, blog posts, prices, contact details) | `src/content/site.ts` |
| Pages (one folder per page) | `src/app/` (`about`, `experts`, `services`, `services/[slug]`, `forecast`, `forecast/[number]`, `blog`, `blog/[slug]`, `contact`) |
| Booking form | `src/components/BookingForm.tsx` |
| Shared cards (service, number, blog, expert) | `src/components/cards.tsx` |
| Colours and fonts (the brand) | `src/app/globals.css` (`@theme` block) |
| Header + mobile menu | `src/components/Navbar.tsx` |
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
