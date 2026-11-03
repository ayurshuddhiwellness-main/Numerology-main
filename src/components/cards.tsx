import Link from "next/link";
import type { NumberForecast, Post, Service } from "@/content/site";
import { Button, NumeralArt } from "./ui";

/* Card components reused across the homepage and inner pages. */

/** Alternating text/image row used for services (home + Services page). */
export function ServiceRow({ service, index, showButton = true }: { service: Service; index: number; showButton?: boolean }) {
  const flip = index % 2 === 1;
  return (
    <article className="grid items-center gap-8 md:grid-cols-2 lg:gap-24">
      <div className={flip ? "md:order-2" : ""}>
        <span className="text-lg font-semibold text-gold lg:text-[22px]">0{index + 1}</span>
        <h3 className="mt-3 font-display text-3xl font-bold text-white lg:text-[40px]">
          <Link href={`/services/${service.slug}`} className="hover:text-gold">
            {service.title}
          </Link>
        </h3>
        <p className="mt-4 max-w-[560px] text-base leading-relaxed lg:text-xl">{service.summary}</p>
        {showButton && (
          <Button href={`/services/${service.slug}`} variant="outline" className="mt-6">
            More Detail
          </Button>
        )}
      </div>
      <NumeralArt numeral={service.numeral} label={`${service.title} artwork`} className="h-56 sm:h-72 lg:h-[300px]" />
    </article>
  );
}

/** Weekly-forecast card for one number (home + Forecast page). */
export function NumberCard({ n }: { n: NumberForecast }) {
  return (
    <li>
      <Link
        href={`/forecast/${n.number}`}
        className="glass-card flex h-full flex-col items-center px-7 py-10 text-center transition-colors hover:border-gold/60"
      >
        <span
          aria-hidden="true"
          className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/50 bg-gold/5 font-display text-5xl leading-none font-bold text-gold italic"
        >
          {n.number}
        </span>
        <h3 className="mt-5 font-display text-3xl font-bold text-white lg:text-[40px]">
          Number {n.number} ({n.planet})
        </h3>
        <p className="mt-4 text-base leading-relaxed lg:text-xl">{n.summary}</p>
      </Link>
    </li>
  );
}

/** Blog card with cover, date, title and button (home, Blog, Blog detail). */
export function PostCard({ post, headingLevel = "h3" }: { post: Post; headingLevel?: "h2" | "h3" }) {
  const H = headingLevel;
  return (
    <article>
      <Link href={`/blog/${post.slug}`} aria-hidden="true" tabIndex={-1}>
        <NumeralArt numeral={post.numeral} label={`${post.title} cover`} className="h-60 sm:h-80 lg:h-[468px]" />
      </Link>
      <p className="mt-6 text-base font-semibold text-gold lg:text-[22px]">{post.date}</p>
      <H className="mt-3 font-display text-3xl font-bold text-white lg:text-5xl">
        <Link href={`/blog/${post.slug}`} className="hover:text-gold">
          {post.title}
        </Link>
      </H>
      <Button href={`/blog/${post.slug}`} variant="outline" className="mt-6">
        Read Article
      </Button>
    </article>
  );
}

/** Team member card (home + Experts page). */
export function ExpertCard({ name, role, index }: { name: string; role: string; index: number }) {
  return (
    <li className="text-center">
      {/* TODO: swap NumeralArt for each person's photo */}
      <NumeralArt numeral={String(index + 1)} label={`Photo of ${name}`} className="aspect-[417/504]" />
      <h3 className="mt-5 font-display text-xl font-bold text-white lg:text-[32px]">{name}</h3>
      <p className="mt-1 text-sm text-gold lg:text-base">{role}</p>
    </li>
  );
}
