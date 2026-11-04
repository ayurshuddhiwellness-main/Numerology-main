import Link from "next/link";
import { services } from "@/content/services";
import { commitments, numbers, practitioner, reasons } from "@/content/site";
import { NumberCard, ServiceRow } from "./cards";
import Image from "next/image";
import FigmaGlow from "./FigmaGlow";
import { Button, Container, Eyebrow, NumeralArt, Title } from "./ui";

/* ---------- Commitment statement + three points (Home, About) ---------- */
export function Commitments({ id, cover }: { id?: string; cover?: { src: string; alt: string } }) {
  return (
    <section id={id} className="py-20 lg:py-[115px]">
      <Container>
        <p className="font-display text-3xl leading-[1.2] font-bold text-white sm:text-4xl lg:text-[64px] [&_em]:italic">
          With <em>Dr. Abbhiraath Singh</em>, you discover what your name and date of birth reveal about your nature,
          your timing and your path. Our <em>commitment</em> includes:
        </p>
        <div className="mt-12 grid gap-10 md:grid-cols-3 lg:mt-20 lg:gap-16">
          {commitments.map((c) => (
            <div key={c.title}>
              <h3 className="font-display text-2xl leading-tight font-bold text-white lg:text-[40px]">{c.title}</h3>
              <p className="mt-4 text-base leading-relaxed lg:text-xl">{c.body}</p>
            </div>
          ))}
        </div>
        {cover ? (
          <div className="relative mt-14 h-56 overflow-hidden rounded-[20px] border border-gold/25 sm:h-72 lg:mt-20 lg:h-[380px]">
            <Image src={cover.src} alt={cover.alt} fill sizes="(min-width: 1800px) 1728px, 100vw" className="object-cover" />
          </div>
        ) : (
          <NumeralArt numeral="9" label="Decorative numerology artwork" className="mt-14 h-56 sm:h-72 lg:mt-20 lg:h-[380px]" />
        )}
      </Container>
    </section>
  );
}

/* ---------- Practitioner (Home): photo on one side, bio and highlights beside it ---------- */
const highlightIcons = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  sparkle: <path d="M12 3c.6 4.6 3.4 7.4 8 8-4.6.6-7.4 3.4-8 8-.6-4.6-3.4-7.4-8-8 4.6-.6 7.4-3.4 8-8Z" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
};

export function Practitioner() {
  const p = practitioner;
  return (
    <section id="practitioner" className="py-16 lg:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
        {/* Cropped from the top: the upper part of the photo is plain wall */}
        <div className="gold-edge relative aspect-[4/3] overflow-hidden rounded-[20px] border border-sky/25 sm:aspect-square">
          <Image
            src={p.image.src}
            alt={p.image.alt}
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="object-cover object-[50%_78%]"
          />
        </div>

        <div>
          <Eyebrow>{p.label}</Eyebrow>
          <Title>{p.name}</Title>
          <p className="mt-3 font-display text-2xl font-bold text-sky lg:text-[28px]">{p.role}</p>
          {p.bio.map((para) => (
            <p key={para.slice(0, 24)} className="mt-5 text-base leading-relaxed lg:text-xl">
              {para}
            </p>
          ))}
          <ul className="mt-8 border-t border-sky/25">
            {p.highlights.map((h) => (
              <li key={h.text} className="flex items-center gap-4 border-b border-sky/25 py-4 text-base text-white lg:text-lg">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="shrink-0 text-sky"
                >
                  {highlightIcons[h.icon]}
                </svg>
                {h.text}
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-base font-medium text-sky underline-offset-4 hover:underline lg:text-lg"
          >
            Read his story <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Why choose us (Home, About) ---------- */
export function WhyChooseUs() {
  return (
    <section className="relative isolate overflow-hidden py-20 lg:py-[115px]">
      <FigmaGlow variant="choose" />
      <Container>
        <Eyebrow>Why choose us</Eyebrow>
        <Title>
          Discover <em>Your Path</em> Through Numbers
        </Title>
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          {reasons.map((r) => (
            <article key={r.title} className="glass-card flex flex-col items-center px-8 py-12 text-center">
              <span aria-hidden="true" className="mb-8 h-4 w-4 rounded-full bg-sky shadow-[0_0_40px_18px_color-mix(in_srgb,var(--color-sky)_45%,transparent)]" />
              <h3 className="font-display text-3xl font-bold text-white lg:text-[40px]">{r.title}</h3>
              <p className="mt-5 text-base leading-relaxed lg:text-xl">{r.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Services preview (Home: the four umbrella services) ---------- */
export function ServicesPreview() {
  return (
    <section id="services" className="py-20 lg:py-[115px]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Services</Eyebrow>
            <Title>
              Our <em>Consultation</em> Services
            </Title>
          </div>
          <Button href="/services" variant="outline">
            See All Services
          </Button>
        </div>
        <div className="mt-14 flex flex-col gap-14 lg:mt-20 lg:gap-24">
          {services.map((s, i) => (
            <ServiceRow key={s.slug} service={s} index={i} showButton={false} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Weekly forecast grid (Home: 1–6, Forecast page: all) ---------- */
export function ForecastGrid({ limit, showTitle = true, showButton = true }: { limit?: number; showTitle?: boolean; showButton?: boolean }) {
  const list = limit ? numbers.slice(0, limit) : numbers;
  return (
    <section id="forecast" className="relative isolate overflow-hidden py-20 lg:py-[115px]">
      <FigmaGlow variant="horoscope" />
      <Container className="text-center">
        {showTitle && (
          <>
            <Eyebrow>Weekly forecast</Eyebrow>
            <Title className="mx-auto max-w-[1100px]">
              What the numbers hold for you in this <em>Weekly Forecast</em>
            </Title>
          </>
        )}
        <ul className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 ${showTitle ? "mt-12 lg:mt-16" : ""}`}>
          {list.map((n) => (
            <NumberCard key={n.number} n={n} />
          ))}
        </ul>
        {showButton && (
          <div className="mt-12">
            <Button href="/forecast" variant="outline">
              All Numbers
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
