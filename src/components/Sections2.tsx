import Link from "next/link";
import type { ReactNode } from "react";
import { footerLinks, plans, posts, site, testimonial } from "@/content/site";
import { PostCard } from "./cards";
import { Button, buttonClass, Container, Eyebrow, Logo, Sparkle, Title } from "./ui";

/* ---------- Call-to-action banner (most pages) ---------- */
export function Banner({
  heading = (
    <>
      Get your <em className="italic">numbers</em> explained by Dr. Singh
    </>
  ),
  text = "One-on-one consultations, online or in person",
  href = "/contact#book",
  cta = "Book a Consultation",
}: {
  heading?: ReactNode;
  text?: string;
  href?: string;
  cta?: string;
}) {
  return (
    <section className="py-10 lg:py-[115px]">
      <Container>
        <div className="relative isolate grid overflow-hidden rounded-[24px] border border-sky/20 gold-edge hover:shadow-gold-glow bg-azure bg-[radial-gradient(ellipse_at_30%_45%,color-mix(in_srgb,var(--color-sky)_35%,transparent),transparent_65%),linear-gradient(to_bottom_right,transparent,color-mix(in_srgb,var(--color-ink)_60%,transparent))] md:grid-cols-2">
          <div aria-hidden="true" className="relative hidden min-h-[320px] md:block">
            <div className="absolute top-[-40%] left-[-15%] aspect-square w-[85%] rounded-full border border-sky-soft/40" />
            <div className="absolute top-[10%] left-[10%] aspect-square w-[75%] rounded-full border-2 border-dashed border-sky-soft/70" />
            <div className="absolute top-1/2 left-[30%] h-40 w-40 -translate-y-1/2 rounded-full bg-sky/30 blur-3xl" />
            <Sparkle className="absolute top-[42%] left-[34%] h-7 w-7 text-sky" />
            <Sparkle className="absolute top-[52%] left-[30%] h-5 w-5 text-sky" />
            <Sparkle className="absolute top-[52%] left-[38%] h-5 w-5 text-sky" />
          </div>
          <div className="relative px-7 py-12 md:py-16 md:pr-14 lg:py-24">
            <h2 className="font-display text-4xl leading-[1.1] font-bold text-white lg:text-[64px]">
              {heading}
            </h2>
            <p className="mt-5 text-base text-white lg:text-xl">{text}</p>
            <Button href={href} variant={href.includes("#book") ? "book" : "filled"} className="mt-8">
              {cta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Consultation plans (Home, Services, Forecast pages) ---------- */
export function Pricing() {
  return (
    <section id="consultations" className="scroll-mt-28 py-20 lg:py-[115px]">
      <Container className="text-center">
        <Eyebrow>Consultations</Eyebrow>
        <Title>
          Choose Your <em>Consultation</em>
        </Title>
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`glass-card relative flex flex-col items-center px-8 pt-14 pb-12 ${
                p.popular ? "bg-[radial-gradient(circle_at_50%_40%,color-mix(in_srgb,var(--color-sky)_22%,transparent),transparent_65%)] lg:-translate-y-3" : ""
              }`}
            >
              {p.popular && (
                <span className="absolute top-0 right-6 rounded-b-lg gold-edge bg-sky px-5 py-2 font-display text-xl font-bold text-ink lg:text-2xl">
                  Popular
                </span>
              )}
              <h3 className="font-display text-4xl font-bold text-white lg:text-5xl">{p.name}</h3>
              <p className="mt-2 text-base font-semibold text-sky lg:text-[22px]">{p.tier}</p>
              <ul className="mt-10 flex flex-col gap-5 text-base text-white lg:text-xl">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className="mt-10 font-display text-6xl font-bold text-sky italic">{p.price}</p>
              <Button href={`/contact?plan=${encodeURIComponent(p.name)}#book`} variant="book" className="mt-10">
                Book Now
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Testimonial (Home) ---------- */
export function Testimonial() {
  return (
    <section className="py-20 lg:py-[115px]">
      <Container>
        <Eyebrow>Testimonial</Eyebrow>
        <figure>
          <blockquote className="font-display text-3xl leading-[1.2] font-bold text-white sm:text-4xl lg:text-[64px]">
            {testimonial.quote}
          </blockquote>
          <figcaption className="mt-8 text-lg font-semibold text-white lg:text-[22px]">{testimonial.author}</figcaption>
        </figure>
        <div aria-hidden="true" className="mt-12 flex justify-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
        </div>
      </Container>
    </section>
  );
}

/* ---------- Two-post blog strip (Home, Blog detail "Other stories") ---------- */
export function BlogStrip({ excludeSlug, title }: { excludeSlug?: string; title?: React.ReactNode }) {
  const list = posts.filter((p) => p.slug !== excludeSlug).slice(0, 2);
  return (
    <section id="blog" className="py-20 lg:py-[115px]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            {!excludeSlug && <Eyebrow>Blog</Eyebrow>}
            <Title>
              {title ?? (
                <>
                  Number <em>Stories</em> from Dr. Singh
                </>
              )}
            </Title>
          </div>
          <Button href="/blog" variant="outline">
            More Stories
          </Button>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:mt-16 lg:gap-6">
          {list.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Footer (every page) ---------- */
const socialIcons = {
  facebook: <path d="M14 8h3V4h-3c-2.8 0-4 1.7-4 4.3V10H7v4h3v8h4v-8h3l1-4h-4V8.6c0-.4.3-.6.6-.6Z" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.3" />
    </>
  ),
  x: <path d="M4 4h4.6l4 5.6L17.4 4H20l-6.2 7.2L20.5 20h-4.6l-4.3-6-5.1 6H4l6.4-7.4Z" />,
};
export const socialIconPaths = socialIcons;

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden pt-16 pb-10 lg:pt-24">
      <div aria-hidden="true" className="absolute inset-x-[10%] -bottom-40 -z-10 h-64 rounded-full bg-azure/60 blur-[100px]" />
      <Container>
        <div className="fade-rule pt-16 lg:pt-24">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.5fr_1.3fr_1.6fr]">
            <div>
              <Logo />
              <p className="mt-5 text-base lg:text-xl">{site.footerLine}</p>
              <div className="mt-6 flex gap-4">
                {(Object.keys(socialIcons) as (keyof typeof socialIcons)[]).map((k) => (
                  <a key={k} href={site.social[k]} aria-label={k} className="text-white hover:text-sky">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      {socialIcons[k]}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {footerLinks.map((col) => (
              <div key={col.heading}>
                <h3 className="font-display text-2xl font-bold text-sky lg:text-[32px]">{col.heading}</h3>
                <ul className="mt-5 flex flex-col gap-3 text-base lg:text-xl">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="hover:text-sky">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="font-display text-2xl font-bold text-sky lg:text-[32px]">
                <Link href="/contact" className="hover:text-sky-soft">
                  Contact Us
                </Link>
              </h3>
              <ul className="mt-5 flex flex-col gap-3 text-base lg:text-xl">
                <li>
                  <a href={`mailto:${site.contact.email}`} className="hover:text-sky">
                    {site.contact.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="hover:text-sky">
                    {site.contact.phone}
                  </a>
                </li>
                <li>{site.contact.address}</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-sky lg:text-[32px]">Get weekly number insights</h3>
              {/* TODO: connect to a newsletter service (e.g. Mailchimp, Brevo) */}
              <form className="mt-5 flex gap-3" action="#">
                <label htmlFor="newsletter-email" className="sr-only">
                  Your email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="min-w-0 flex-1 rounded-lg border border-cream/30 hover:border-gold bg-transparent px-4 py-3 text-base text-white placeholder:text-cream/70 focus:border-gold focus:outline-2 focus:outline-gold"
                />
                <button type="submit" className={buttonClass("filled")}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <p className="mt-16 fade-rule pt-8 text-center text-sm text-cream/70">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
