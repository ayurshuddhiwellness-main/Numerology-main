import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

/* Reusable building blocks shared by every page. */

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-site px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

type ButtonProps = { href: string; children: ReactNode; variant?: "filled" | "outline"; className?: string };

export function Button({ href, children, variant = "filled", className = "" }: ButtonProps) {
  return (
    <Link href={href} className={`${buttonClass(variant)} ${className}`}>
      {children}
    </Link>
  );
}

export function buttonClass(variant: "filled" | "outline" = "filled") {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-base lg:text-lg font-medium whitespace-nowrap transition duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky cursor-pointer";
  return variant === "filled"
    ? `${base} bg-sky text-ink hover:bg-sky-soft`
    : `${base} border-2 border-sky text-sky hover:bg-sky hover:text-ink`;
}

/** Small sky label above section titles, e.g. "SERVICES". */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-sky lg:text-lg ${className}`}>{children}</p>
  );
}

/** Section title. Wrap a word in <em> to get the italic accent from the design. */
export function Title({ children, className = "", as: Tag = "h2" }: { children: ReactNode; className?: string; as?: "h1" | "h2" }) {
  return (
    <Tag
      className={`font-display text-4xl leading-[1.1] font-bold text-white sm:text-5xl lg:text-[64px] [&_em]:italic ${className}`}
    >
      {children}
    </Tag>
  );
}

/**
 * Inner-page header from the Figma "Header" component:
 * a very large centred title with a wide image below it.
 */
export function PageHeader({ title, numeral, label }: { title: ReactNode; numeral: string; label?: string }) {
  return (
    <section className="pt-28 lg:pt-[220px]">
      <Container>
        <h1 className="rise text-center font-display text-5xl leading-[1.05] font-bold text-white sm:text-7xl lg:text-[clamp(88px,7.3vw,140px)]">
          {title}
        </h1>
        <NumeralArt
          numeral={numeral}
          label={label ?? "Decorative numerology artwork"}
          className="mt-8 h-52 sm:h-72 lg:mt-12 lg:h-[450px]"
        />
      </Container>
    </section>
  );
}

/** Swastik seal logo mark (clockwise, upright, with the four dots). */
export function SwastikSeal({ size = 41, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" strokeWidth="3" />
      <path
        d="M45.5 20H80V29H54.5V45.5H80V80H71V54.5H54.5V80H20V71H45.5V54.5H20V20H29V45.5H45.5Z"
        fill="currentColor"
      />
      <circle cx="35" cy="35" r="3.5" fill="currentColor" />
      <circle cx="65" cy="35" r="3.5" fill="currentColor" />
      <circle cx="35" cy="65" r="3.5" fill="currentColor" />
      <circle cx="65" cy="65" r="3.5" fill="currentColor" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 text-sky" aria-label="Dr. Abbhiraath Singh, home">
      <SwastikSeal size={41} />
      <span className="font-display text-2xl font-bold whitespace-nowrap lg:text-[26px]">Dr. Abbhiraath Singh</span>
    </Link>
  );
}

/** Four-point sparkle used as decoration. */
export function Sparkle({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={`twinkle ${className}`} style={style}>
      <path d="M16 0C17 9 23 15 32 16C23 17 17 23 16 32C15 23 9 17 0 16C9 15 15 9 16 0Z" fill="currentColor" />
    </svg>
  );
}

/**
 * Stand-in artwork for spots where the template had stock photos.
 * Shows a large numeral on a azure glow so the layout still reads well
 * until real photography is added. TODO: replace with real images.
 */
export function NumeralArt({ numeral, label, className = "" }: { numeral: string; label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden rounded-[20px] border border-sky/25 bg-[radial-gradient(circle_at_30%_30%,var(--color-azure)_0%,color-mix(in_srgb,var(--color-azure)_30%,var(--color-ink))_45%,var(--color-ink)_100%)] ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="aspect-square h-[78%] rounded-full border border-sky/30" />
      </div>
      <span className="absolute inset-0 flex items-center justify-center font-display text-[min(40vw,220px)] leading-none font-bold text-sky/90 italic">
        {numeral}
      </span>
    </div>
  );
}
