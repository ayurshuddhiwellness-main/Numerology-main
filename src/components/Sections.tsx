import { commitments, experts, forecast, reasons, services } from "@/content/site";
import { Button, Container, Eyebrow, NumeralArt, Title } from "./ui";

/* ---------- About / commitment ---------- */
export function About() {
  return (
    <section id="about" className="py-20 lg:py-[115px]">
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
        <NumeralArt numeral="9" label="Decorative numerology artwork" className="mt-14 h-56 sm:h-72 lg:mt-20 lg:h-[388px]" />
      </Container>
    </section>
  );
}

/* ---------- Team ---------- */
export function Experts() {
  return (
    <section className="py-20 lg:py-[115px]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Title>
            Meet Our <em>Experts</em>
          </Title>
          <Button href="#about" variant="outline">
            All Experts
          </Button>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-5 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {experts.map((p, i) => (
            <li key={p.name} className="text-center">
              {/* TODO: swap NumeralArt for each person's photo */}
              <NumeralArt numeral={String(i + 1)} label={`Photo of ${p.name}`} className="aspect-[417/504]" />
              <h3 className="mt-5 font-display text-xl font-bold text-white lg:text-[32px]">{p.name}</h3>
              <p className="mt-1 text-sm text-gold lg:text-base">{p.role}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ---------- Why choose us ---------- */
export function WhyChooseUs() {
  return (
    <section className="relative isolate overflow-hidden py-20 lg:py-[115px]">
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 h-[60%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-maroon/50 blur-[120px]" />
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

/* ---------- Services (alternating rows) ---------- */
export function Services() {
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
          <Button href="#consultations" variant="outline">
            See All Services
          </Button>
        </div>

        <div className="mt-14 flex flex-col gap-14 lg:mt-20 lg:gap-24">
          {services.map((s, i) => (
            <article key={s.title} className="grid items-center gap-8 md:grid-cols-2 lg:gap-24">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <span className="text-lg font-semibold text-gold lg:text-[22px]">0{i + 1}</span>
                <h3 className="mt-3 font-display text-3xl font-bold text-white lg:text-[40px]">{s.title}</h3>
                <p className="mt-4 max-w-[560px] text-base leading-relaxed lg:text-xl">{s.body}</p>
              </div>
              <NumeralArt numeral={s.numeral} label={`${s.title} artwork`} className="h-56 sm:h-72 lg:h-[330px]" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Weekly forecast ---------- */
export function Forecast() {
  return (
    <section id="forecast" className="relative isolate overflow-hidden py-20 lg:py-[115px]">
      <div aria-hidden="true" className="absolute top-1/3 left-1/3 -z-10 h-[40%] w-[40%] rounded-full bg-gold/15 blur-[120px]" />
      <Container className="text-center">
        <Eyebrow>Weekly forecast</Eyebrow>
        <Title className="mx-auto max-w-[1100px]">
          What the numbers hold for you in this <em>Weekly Forecast</em>
        </Title>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {forecast.map((f) => (
            <li key={f.number} className="glass-card px-7 py-10 text-center">
              <span aria-hidden="true" className="font-display text-6xl leading-none font-bold text-gold italic">
                {f.number}
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold text-white lg:text-[40px]">
                Number {f.number} ({f.planet})
              </h3>
              <p className="mt-4 text-base leading-relaxed lg:text-xl">{f.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Button href="#forecast" variant="outline">
            All Numbers
          </Button>
        </div>
      </Container>
    </section>
  );
}
