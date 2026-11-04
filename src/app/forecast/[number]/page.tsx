import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Banner, Pricing } from "@/components/Sections2";
import { Container, PageHeader } from "@/components/ui";
import { numbers } from "@/content/site";

type Props = { params: Promise<{ number: string }> };

export function generateStaticParams() {
  return numbers.map((n) => ({ number: String(n.number) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { number } = await params;
  const n = numbers.find((x) => String(x.number) === number);
  return n ? { title: `Number ${n.number} (${n.planet}) Weekly Forecast`, description: n.summary } : {};
}

export default async function NumberForecastPage({ params }: Props) {
  const { number } = await params;
  const n = numbers.find((x) => String(x.number) === number);
  if (!n) notFound();

  const blocks = [
    { heading: "Health", text: n.health },
    { heading: "Relationship", text: n.relationship },
    { heading: "Business", text: n.business },
  ];

  return (
    <>
      <PageHeader title={`Number ${n.number}`} numeral={String(n.number)} />

      <section className="pt-20 lg:pt-[150px]">
        <Container className="grid gap-12 lg:grid-cols-[420px_1fr] lg:gap-[100px]">
          {/* Left: list of all numbers (the Figma zodiac list) */}
          <nav aria-label="All numbers" className="min-w-0">
            <ul className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:gap-6 lg:overflow-visible lg:pb-0">
              {numbers.map((x) => {
                const active = x.number === n.number;
                return (
                  <li key={x.number} className="shrink-0">
                    <Link
                      href={`/forecast/${x.number}`}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center gap-4 rounded-xl px-3 py-2 font-display text-xl font-bold transition-colors lg:px-0 lg:py-0 lg:text-[32px] ${
                        active ? "text-sky" : "text-white hover:text-sky"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`relative flex h-12 w-12 items-center justify-center rounded-full border gold-edge edge-b-1 text-2xl italic ${
                          active ? "border-sky gold-edge-full bg-sky/10" : "border-sky/40"
                        }`}
                      >
                        {x.number}
                      </span>
                      <span className="whitespace-nowrap">
                        Number {x.number} <span className="hidden lg:inline">({x.planet})</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: this week's reading */}
          <article>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky lg:text-lg">
              Ruled by {n.planet}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white lg:text-xl">{n.general}</p>
            {blocks.map((b) => (
              <div key={b.heading} className="mt-10">
                <h2 className="font-display text-2xl font-bold text-white lg:text-[32px]">{b.heading}</h2>
                <p className="mt-3 text-base leading-relaxed lg:text-xl">{b.text}</p>
              </div>
            ))}
          </article>
        </Container>
      </section>

      <Banner />
      <Pricing />
    </>
  );
}
