import { commitments, experts, numbers, reasons, services } from "@/content/site";
import { ExpertCard, NumberCard, ServiceRow } from "./cards";
import { Button, Container, Eyebrow, Glow, NumeralArt, Title } from "./ui";

/* ---------- Commitment statement + three points (Home, About) ---------- */
export function Commitments({ id }: { id?: string }) {
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
        <NumeralArt numeral="9" label="Decorative numerology artwork" className="mt-14 h-56 sm:h-72 lg:mt-20 lg:h-[380px]" />
      </Container>
    </section>
  );
}

/* ---------- Team preview (Home) ---------- */
export function ExpertsPreview() {
  return (
    <section className="py-20 lg:py-[115px]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Title>
            Meet Our <em>Experts</em>
          </Title>
          <Button href="/experts" variant="outline">
            All Experts
          </Button>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-5 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {experts.slice(0, 4).map((p, i) => (
            <ExpertCard key={p.name} {...p} index={i} />
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ---------- Why choose us (Home, About) ---------- */
export function WhyChooseUs() {
  return (
    <section className="relative isolate overflow-hidden py-20 lg:py-[115px]">
      <Glow className="top-1/2 left-1/2 h-[60%] w-[70%] -translate-x-1/2 -translate-y-1/2 bg-maroon/50" />
      <Container>
        <Eyebrow>Why choose us</Eyebrow>
        <Title>
          Discover <em>Your Path</em> Through Numbers
        </Title>
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          {reasons.map((r) => (
            <article key={r.title} className="glass-card flex flex-col items-center px-8 py-12 text-center">
              <span aria-hidden="true" className="mb-8 h-4 w-4 rounded-full bg-gold shadow-[0_0_40px_18px_rgba(214,175,84,0.45)]" />
              <h3 className="font-display text-3xl font-bold text-white lg:text-[40px]">{r.title}</h3>
              <p className="mt-5 text-base leading-relaxed lg:text-xl">{r.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Services preview (Home: first three) ---------- */
export function ServicesPreview() {
  return (
    <section id="services" className="py-20 lg:py-[115px]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Services</Eyebrow>
            <Title>
              Our <em>Numerology</em> Services
            </Title>
          </div>
          <Button href="/services" variant="outline">
            See All Services
          </Button>
        </div>
        <div className="mt-14 flex flex-col gap-14 lg:mt-20 lg:gap-24">
          {services.slice(0, 3).map((s, i) => (
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
      <Glow className="top-1/3 left-1/3 h-[40%] w-[40%] bg-gold/15" />
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
