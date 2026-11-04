import Image from "next/image";
import type { CSSProperties } from "react";

/*
  The Figma "Background" glows, rebuilt shape for shape: three blurred SVG shapes
  placed, rotated and skewed exactly as in the file, with the same blend modes.
  Values are copied from the Figma nodes (bg-hs 173:869, bg-chooseus 27:466,
  Background-horoscope 44:1036), so they are intentionally not on the spacing grid.
  The size-relative hypot() lengths need container query units (cqw/cqh).
*/

type Shape = {
  src: string;
  inset: string; // position of the shape box inside the section
  blend?: "screen" | "color-dodge";
  flip?: boolean; // Figma -scale-x-100
  size?: [h: string, w: string]; // omitted: fills the box
  rotate?: string;
  skew?: string;
  img: string; // how far the blurred image bleeds past the box
};

const dir = "/images/glow/";

const variants: Record<"hero" | "choose" | "horoscope", Shape[]> = {
  hero: [
    {
      src: "hero-1",
      inset: "26.16% 20.13% -14.95% 0",
      size: ["hypot(-31.3078cqw, 41.9856cqh)", "hypot(68.6922cqw, 58.0144cqh)"],
      rotate: "24.06deg",
      skew: "-30.62deg",
      img: "-11.7% -5.97%",
    },
    {
      src: "hero-2",
      inset: "-0.03% 0 26.51% 32%",
      blend: "screen",
      size: [
        "hypot(-77.2838cqw, -30.0416cqh)",
        "hypot(-22.7162cqw, 69.9584cqh)",
      ],
      rotate: "122.28deg",
      skew: "20.98deg",
      img: "-10.4% -19.27%",
    },
    {
      src: "hero-3",
      inset: "28.71% 29.47% 47.57% 0",
      blend: "color-dodge",
      img: "-31.79% -5.09%",
    },
  ],
  choose: [
    {
      src: "choose-1",
      inset: "12.81% 6.99% -1.6% 13.14%",
      flip: true,
      size: ["hypot(31.3078cqw, 41.9856cqh)", "hypot(-68.6922cqw, 58.0144cqh)"],
      rotate: "-24.06deg",
      skew: "-30.62deg",
      img: "-11.99% -6.04%",
    },
    {
      src: "choose-2",
      inset: "-0.03% 32% 26.51% 0",
      blend: "screen",
      flip: true,
      size: ["hypot(77.2838cqw, -30.0416cqh)", "hypot(22.7162cqw, 69.9584cqh)"],
      rotate: "-122.28deg",
      skew: "20.98deg",
      img: "-10.43% -20.32%",
    },
    {
      src: "choose-3",
      inset: "28.71% 0 47.57% 29.47%",
      blend: "color-dodge",
      flip: true,
      img: "-34.31% -5.09%",
    },
  ],
  horoscope: [
    {
      src: "horoscope-1",
      inset: "12.81% 6.99% -1.6% 13.14%",
      flip: true,
      size: ["hypot(31.3078cqw, 41.9856cqh)", "hypot(-68.6922cqw, 58.0144cqh)"],
      rotate: "-24.06deg",
      skew: "-30.62deg",
      img: "-11.7% -5.97%",
    },
    {
      src: "horoscope-2",
      inset: "13.25% 32% 13.23% 0",
      blend: "screen",
      flip: true,
      size: ["hypot(77.2838cqw, -30.0416cqh)", "hypot(22.7162cqw, 69.9584cqh)"],
      rotate: "-122.28deg",
      skew: "20.98deg",
      img: "-10.4% -19.27%",
    },
    {
      src: "horoscope-3",
      inset: "28.71% 0 47.57% 29.47%",
      blend: "color-dodge",
      flip: true,
      img: "-31.79% -5.09%",
    },
  ],
};

/** Sits behind a section's content (`isolate` section; absolute, -z-10). */
export default function FigmaGlow({
  variant,
}: {
  variant: keyof typeof variants;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-ink"
    >
      {variant === "hero" && (
        // Figma "Background" overlay: ink fading to a faint blue towards the bottom
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgb(10, 25, 47) 0%, rgba(10, 25, 47, 0.6) 21%, rgba(15, 42, 77, 0.39) 48%, rgba(22, 61, 110, 0.23) 73.5%, rgba(37, 99, 168, 0) 100%)",
          }}
        />
      )}
      {/* Phones: the Figma mobile frames use one soft glow (behind the portrait on the hero), not the stretched desktop shapes */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          backgroundImage: `radial-gradient(ellipse 90% 35% at 50% ${variant === "hero" ? "68%" : "50%"}, color-mix(in srgb, var(--color-azure) 55%, transparent), transparent)`,
        }}
      />
      <div className="absolute inset-0 hidden lg:block">
        {variants[variant].map((s) => {
          const [h, w] = s.size ?? ["100cqh", "100cqw"];
          const inner: CSSProperties = {
            height: h,
            width: w,
            flex: "none",
            rotate: s.rotate,
            scale: s.flip ? "-100% 100%" : undefined,
            transform: s.skew ? `skewX(${s.skew})` : undefined,
          };
          return (
            <div
              key={s.src}
              className="absolute flex items-center justify-center"
              style={{
                inset: s.inset,
                containerType: "size",
                mixBlendMode: s.blend,
              }}
            >
              <div style={inner}>
                <div className="relative size-full">
                  <div className="absolute" style={{ inset: s.img }}>
                    <Image
                      src={`${dir}${s.src}.svg`}
                      alt=""
                      fill
                      unoptimized
                      className="max-w-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
