import type { Metadata } from "next";
import Image from "next/image";
import { Button, Container, Eyebrow, Title } from "@/components/ui";
import { about, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About Abbhiraath Singh",
  description:
    "Astro-numerologist and spiritual counsellor with over a decade of guiding people through life's turning points using astrology and numerology.",
};

const rule = "border-sky/25";

export default function AboutPage() {
  const { intro, method, areas, quote, beliefs, recognition, cta } = about;

  return (
    <>
      <section className="pt-28 lg:pt-[160px]">
        <Container>
          <h1 className="text-center font-display text-5xl leading-[1.05] font-bold text-white sm:text-7xl lg:text-[clamp(64px,5vw,96px)]">
            About
          </h1>
        </Container>
      </section>

      {/* His story */}
      <section className="py-16 lg:py-24">
        <Container>
          <Eyebrow>{intro.eyebrow}</Eyebrow>
          <p className="max-w-5xl font-display text-3xl leading-[1.2] font-bold text-white sm:text-4xl lg:text-[44px]">
            {intro.statement}
          </p>
          <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div className={`gold-edge relative aspect-[4/3] overflow-hidden rounded-[20px] border ${rule} sm:aspect-[4/5]`}>
              <Image
                src={intro.image.src}
                alt={intro.image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[50%_78%]"
              />
            </div>
            <div className="flex flex-col gap-5">
              {intro.paragraphs.map((para) => (
                <p key={para.slice(0, 24)} className="text-base leading-relaxed lg:text-lg">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* His approach */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-4xl">
            <Eyebrow>{method.eyebrow}</Eyebrow>
            <Title>{method.title}</Title>
            <p className="mt-6 text-base leading-relaxed lg:text-lg">{method.lead}</p>
            <ol className={`mt-8 border-t ${rule}`}>
              {method.pillars.map((pl, i) => (
                <li key={pl.name} className={`flex gap-5 border-b ${rule} py-5`}>
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 font-display text-2xl font-bold text-gold italic"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white lg:text-2xl">{pl.name}</h3>
                    <p className="mt-1 text-base lg:text-base">{pl.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-base leading-relaxed lg:text-lg">{method.close}</p>
          </div>
        </Container>
      </section>

      {/* Where he helps */}
      <section className="py-16 lg:py-24">
        <Container>
          <Eyebrow>{areas.eyebrow}</Eyebrow>
          <Title>{areas.title}</Title>
          <ul className={`mt-10 border-t ${rule} lg:mt-14`}>
            {areas.list.map((a) => (
              <li key={a.name} className={`grid gap-4 border-b ${rule} py-6 lg:grid-cols-[300px_1fr] lg:items-center lg:gap-10`}>
                <h3 className="font-display text-2xl font-bold text-white lg:text-[28px]">{a.name}</h3>
                <ul className="flex flex-wrap gap-2.5">
                  {a.items.map((item) => (
                    <li key={item} className="rounded-full border border-sky/30 px-4 py-1.5 text-sm text-cream lg:text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* His words and beliefs */}
      <section className="py-16 lg:py-24">
        <Container>
          <figure className="mx-auto max-w-5xl text-center">
            <blockquote className="font-display text-3xl leading-[1.25] font-bold text-white italic sm:text-4xl lg:text-[40px]">
              &ldquo;{quote.text}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-base font-semibold tracking-[0.18em] text-gold uppercase lg:text-base">
              {quote.author}
            </figcaption>
          </figure>
          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
            {beliefs.map((b) => (
              <article key={b.title} className="glass-card px-7 py-8">
                <h3 className="font-display text-2xl font-bold text-white lg:text-2xl">{b.title}</h3>
                <p className="mt-3 text-base leading-relaxed lg:text-base">{b.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Recognition */}
      <section className="py-16 lg:py-24">
        <Container>
          <Eyebrow>{recognition.eyebrow}</Eyebrow>
          <Title>{recognition.title}</Title>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
            {recognition.awards.map((a) => (
              <li key={a.name + a.by} className="glass-card flex items-start gap-5 px-6 py-6">
                <span className="gold-text font-display text-2xl font-bold italic lg:text-2xl">{a.year}</span>
                <div>
                  <p className="font-semibold text-white lg:text-base">{a.name}</p>
                  {a.by && <p className="mt-1 text-sm lg:text-base">{a.by}</p>}
                </div>
              </li>
            ))}
          </ul>
          <h3 className="mt-14 text-sm font-semibold tracking-[0.18em] text-gold uppercase lg:text-base">{recognition.hostsLabel}</h3>
          <ul className="mt-5 grid gap-x-10 gap-y-3 text-base sm:grid-cols-2 lg:grid-cols-3 lg:text-base">
            {recognition.hosts.map((h) => (
              <li key={h} className="flex items-center gap-3">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {h}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Call to action */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className={`glass-card px-7 py-12 text-center lg:py-16`}>
            <Title>{cta.title}</Title>
            <p className="mx-auto mt-5 max-w-2xl text-base lg:text-lg">{cta.text}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact#book" variant="book">
                Book a Consultation
              </Button>
              <a
                href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                className="text-base font-medium text-sky underline-offset-4 hover:underline lg:text-base"
              >
                or call {site.contact.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
