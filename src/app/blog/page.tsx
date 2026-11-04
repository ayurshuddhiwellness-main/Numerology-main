import type { Metadata } from "next";
import Link from "next/link";
import { PostCard } from "@/components/cards";
import { Button, Container, NumeralArt } from "@/components/ui";
import { posts } from "@/content/site";

export const metadata: Metadata = { title: "Number Stories" };

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <section className="pt-28 lg:pt-[220px]">
        <Container>
          <h1 className="text-center font-display text-5xl leading-[1.05] font-bold text-white sm:text-7xl lg:text-[clamp(64px,5vw,96px)]">
            Number Stories
          </h1>

          {/* Featured post (Figma "Frame 60") */}
          <article className="mt-12 lg:mt-16">
            <Link href={`/blog/${featured.slug}`} aria-hidden="true" tabIndex={-1}>
              <NumeralArt numeral={featured.numeral} label={`${featured.title} cover`} className="h-60 sm:h-80 lg:h-[468px]" />
            </Link>
            <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-base font-semibold text-gold lg:text-lg">{featured.date}</p>
                <h2 className="mt-3 font-display text-3xl font-bold text-white lg:text-[42px]">
                  <Link href={`/blog/${featured.slug}`} className="transition-colors hover:text-gold">
                    {featured.title}
                  </Link>
                </h2>
              </div>
              <div>
                <p className="text-base leading-relaxed lg:text-lg">{featured.excerpt}</p>
                <Button href={`/blog/${featured.slug}`} variant="outline" className="mt-6">
                  Read Article
                </Button>
              </div>
            </div>
          </article>
        </Container>
      </section>

      <section className="py-20 lg:py-[150px]">
        <Container>
          <div className="grid gap-x-6 gap-y-16 md:grid-cols-2 lg:gap-y-[150px]">
            {rest.map((p) => (
              <PostCard key={p.slug} post={p} headingLevel="h2" />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
