"use client";

import { useEffect, useState } from "react";

type Props = { topics: { id: string; title: string }[] };

/** Topic navigator: left rail on desktop, scrolling chips on mobile. Highlights the topic in view. */
export default function TopicNav({ topics }: Props) {
  const [active, setActive] = useState(topics[0]?.id);

  useEffect(() => {
    // Narrow band near the top of the viewport: the topic crossing it is the "current" one.
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), {
      rootMargin: "-20% 0px -70% 0px",
    });
    topics.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [topics]);

  return (
    <nav
      aria-label="Topics"
      className="sticky top-0 z-20 -mx-5 bg-ink/90 px-5 py-3 backdrop-blur sm:-mx-8 sm:px-8 lg:top-28 lg:mx-0 lg:self-start lg:bg-transparent lg:p-0 lg:backdrop-blur-none"
    >
      <ul className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
        {topics.map((t) => (
          <li key={t.id} className="shrink-0">
            <a
              href={`#${t.id}`}
              aria-current={active === t.id ? "location" : undefined}
              className={`flex min-h-11 items-center rounded-lg border px-4 text-sm whitespace-nowrap transition-colors hover:text-sky lg:whitespace-normal lg:border-0 lg:px-3 lg:text-base ${
                active === t.id ? "border-sky bg-azure/40 text-sky" : "border-sky/25 text-cream"
              }`}
            >
              {t.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
