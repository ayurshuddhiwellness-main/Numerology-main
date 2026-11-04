import Image from "next/image";
import { site } from "@/content/site";
import FigmaGlow from "./FigmaGlow";
import { Button, Container, Sparkle } from "./ui";

/* Decorative stars/dots, positioned in % so they hold on any screen width. */
const stars = [
  { x: 92, y: 18, s: 24, t: "sparkle" },
  { x: 7, y: 78, s: 22, t: "sparkle" },
  { x: 55, y: 74, s: 22, t: "sparkle" },
  { x: 94, y: 78, s: 24, t: "sparkle" },
  { x: 41, y: 14, s: 7, t: "dot" },
  { x: 3, y: 36, s: 7, t: "dot" },
  { x: 11, y: 72, s: 7, t: "dot" },
  { x: 88, y: 72, s: 7, t: "dot" },
  { x: 96, y: 82, s: 7, t: "dot" },
  { x: 47, y: 88, s: 11, t: "dot" },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-24 lg:pt-[120px]">
      <FigmaGlow variant="hero" />

      <div aria-hidden="true" className="stars pointer-events-none absolute inset-0 -z-10 hidden md:block">
        {stars.map((st, i) =>
          st.t === "sparkle" ? (
            <Sparkle
              key={i}
              className="absolute text-white"
              style={{ left: `${st.x}%`, top: `${st.y}%`, width: st.s, height: st.s }}
            />
          ) : (
            <span
              key={i}
              className="absolute rounded-full bg-white"
              style={{ left: `${st.x}%`, top: `${st.y}%`, width: st.s, height: st.s }}
            />
          ),
        )}
      </div>

      <Container className="grid items-end gap-6 lg:min-h-[790px] lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10">
        {/* Right on desktop: headline block. Shown first on mobile so the message leads. */}
        <div className="rise-group pt-10 lg:order-2 lg:self-center lg:pt-0 lg:pb-10">
          <h1 className="font-display text-[44px] leading-[1.05] font-bold text-white sm:text-7xl lg:text-[clamp(72px,6.6vw,127px)]">
            Your Life, Written <br className="hidden sm:block" />
            in <em className="italic">Numbers</em>
          </h1>
          <p className="mt-6 max-w-[620px] text-lg leading-relaxed text-white lg:mt-8 lg:text-xl">{site.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4 lg:mt-10 lg:gap-5">
            <Button href="/contact#book">Book a Consultation</Button>
            <Button href="/contact?plan=Name%20Analysis#book" variant="outline">
              Free Name Analysis
            </Button>
          </div>
        </div>

        {/* Left on desktop: Dr. Singh with sky glow and seal ring */}
        <div className="hero-photo relative mx-auto flex w-full max-w-[520px] justify-center lg:order-1 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute top-[4%] left-1/2 aspect-square w-[min(110%,760px)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-sky)_55%,transparent)_0%,transparent_68%)]"
          />
          <div
            aria-hidden="true"
            className="absolute top-[11%] left-1/2 aspect-square w-[min(92%,640px)] -translate-x-1/2 rounded-full border-2 border-sky/60"
          />
          <Image
            src="/images/dr-abbhiraath-singh.webp"
            alt="Dr. Abbhiraath Singh"
            width={518}
            height={1100}
            priority
            sizes="(min-width: 1024px) 396px, 70vw"
            className="relative h-auto w-[70%] max-w-[396px] drop-shadow-[0_20px_60px_rgba(0,0,0,0.45)] lg:w-[396px]"
          />
        </div>
      </Container>
    </section>
  );
}
