import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogStrip, socialIconPaths } from "@/components/Sections2";
import { Container, NumeralArt } from "@/components/ui";
import { posts, site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.excerpt } : {};
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Share links use site.url, so they work once the real domain is set in site.ts.
  const url = `${site.url}/blog/${post.slug}`;
  const share = [
    { label: "Facebook", icon: socialIconPaths.facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    { label: "Instagram", icon: socialIconPaths.instagram, href: "#" }, // Instagram has no web share link
    { label: "Twitter/X", icon: socialIconPaths.x, href: `https://x.com/intent/post?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(url)}` },
  ];

  return (
    <>
      <section className="pt-28 lg:pt-[220px]">
        <Container>
          <NumeralArt numeral={post.numeral} label={`${post.title} cover`} className="h-60 sm:h-80 lg:h-[468px]" />

          <div className="mt-12 grid gap-12 lg:mt-[100px] lg:grid-cols-[168px_1fr] lg:gap-[269px]">
            {/* Share column */}
            <aside className="order-2 lg:order-1">
              <h2 className="font-display text-3xl font-bold text-gold lg:text-[34px]">Share on</h2>
              <ul className="mt-4 flex flex-wrap gap-6 lg:flex-col lg:gap-5">
                {share.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-lg font-semibold text-white transition-colors hover:text-gold lg:text-lg"
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        {s.icon}
                      </svg>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Article */}
            <article className="order-1 max-w-[1291px] lg:order-2">
              <p className="text-base font-semibold text-gold lg:text-lg">{post.date}</p>
              <h1 className="mt-3 font-display text-4xl leading-[1.1] font-bold text-white lg:text-[52px]">{post.title}</h1>
              <p className="mt-10 text-lg leading-relaxed text-white lg:mt-[60px] lg:text-lg">{post.excerpt}</p>
              {post.sections.map((sec) => (
                <section key={sec.heading} className="mt-10 lg:mt-[50px]">
                  <h2 className="font-display text-2xl font-bold text-white lg:text-[28px]">{sec.heading}</h2>
                  {sec.paragraphs.map((p) => (
                    <p key={p} className="mt-4 text-base leading-relaxed lg:text-lg">
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </article>
          </div>
        </Container>
      </section>

      <BlogStrip
        excludeSlug={post.slug}
        title={
          <>
            Other <em>Stories</em> from <em>Dr. Singh</em>
          </>
        }
      />
    </>
  );
}
