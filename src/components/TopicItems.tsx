"use client";

import { useId, useState } from "react";

const list = "list-disc space-y-2 pl-6 text-base leading-relaxed marker:text-sky lg:text-base";

/** A topic's items: the first few always shown, the rest slide open above a toggle that stays at the bottom. */
export default function TopicItems({ items, shown }: { items: string[]; shown: number }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const rest = items.slice(shown);

  return (
    <div className="mt-6">
      <ul className={list}>
        {items.slice(0, shown).map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      {rest.length > 0 && (
        <>
          {/* inert keeps the hidden items out of tab order and screen readers until opened */}
          <div id={id} className="reveal-rows" data-open={open} inert={!open}>
            <ul className={list}>
              {/* spacing lives on the first item so a closed panel is exactly 0 high */}
              {rest.map((i) => (
                <li key={i} className="first:mt-2">
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            aria-expanded={open}
            aria-controls={id}
            onClick={() => setOpen(!open)}
            className="mt-3 flex min-h-11 cursor-pointer items-center gap-2 text-base font-semibold text-sky hover:text-sky-soft"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 10 10"
              aria-hidden="true"
              className={`transition-transform duration-300 motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
            >
              <path d="M1 3l4 4 4-4" fill="currentColor" />
            </svg>
            {open ? "Show fewer" : "Show all"}
          </button>
        </>
      )}
    </div>
  );
}
