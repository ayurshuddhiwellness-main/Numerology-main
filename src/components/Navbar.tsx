"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { serviceMenu } from "@/content/services";
import { Button, Container, Logo } from "./ui";

type NavItem = { label: string; href: string; mega?: boolean };
type Props = { nav: NavItem[]; menu: typeof serviceMenu };

function isActive(pathname: string, href: string) {
  const path = href.split("#")[0];
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(path + "/");
}

export default function Navbar({ nav, menu }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile drawer
  const [megaOpen, setMegaOpen] = useState(false); // desktop Services mega-menu
  const megaRef = useRef<HTMLLIElement>(null);
  const caretRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  // Close menus when the page changes (adjusting state during render, per React docs)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
    setMegaOpen(false);
  }

  // Escape closes whatever is open; outside click closes the mega-menu
  useEffect(() => {
    if (!open && !megaOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!megaRef.current?.contains(e.target as Node)) setMegaOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (megaOpen) caretRef.current?.focus();
      setMegaOpen(false);
      setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, megaOpen]);

  // Hover opens the mega-menu for a mouse only (touch uses the caret); a short delay bridges the gap to the panel
  const hover = (e: React.PointerEvent, on: boolean) => {
    if (e.pointerType !== "mouse") return;
    window.clearTimeout(closeTimer.current);
    if (on) setMegaOpen(true);
    else closeTimer.current = window.setTimeout(() => setMegaOpen(false), 150);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <Container className="flex h-24 items-center justify-between gap-6 lg:h-[120px]">
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-12 text-lg text-white lg:text-xl">
            {nav.map((item) =>
              item.mega ? (
                <li key={item.label} ref={megaRef} onPointerEnter={(e) => hover(e, true)} onPointerLeave={(e) => hover(e, false)}>
                  <div className="flex items-center gap-2">
                    <Link
                      href={item.href}
                      className={`transition-colors hover:text-gold ${isActive(pathname, item.href) ? "text-gold" : ""}`}
                    >
                      {item.label}
                    </Link>
                    <button
                      ref={caretRef}
                      type="button"
                      aria-label="Show services"
                      aria-expanded={megaOpen}
                      aria-controls="services-menu"
                      // A mouse already opened it on hover, so a click keeps it open; keyboard and touch toggle
                      onClick={(e) => setMegaOpen((e.nativeEvent as PointerEvent).pointerType === "mouse" || ((v) => !v))}
                      className="flex h-11 w-6 items-center justify-center hover:text-gold"
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                        <path d="M1 3l4 4 4-4" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  {megaOpen && (
                    // Not inside a positioned parent on purpose: it spans the header width
                    <div id="services-menu" className="absolute inset-x-0 top-full">
                      <Container>
                        <div className="grid grid-cols-4 gap-8 rounded-2xl border border-gold/25 bg-ink/95 p-8 text-base shadow-2xl backdrop-blur">
                          {menu.map((s) => (
                            <div key={s.slug}>
                              <Link
                                href={`/services/${s.slug}`}
                                onClick={() => setMegaOpen(false)}
                                className="font-display text-2xl font-bold text-gold hover:text-gold-soft"
                              >
                                {s.title}
                              </Link>
                              <ul className="mt-3">
                                {s.featured.map((t) => (
                                  <li key={t.id}>
                                    <Link
                                      href={`/services/${s.slug}#${t.id}`}
                                      onClick={() => setMegaOpen(false)}
                                      className="block py-2 text-cream hover:text-gold"
                                    >
                                      {t.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              <Link
                                href={`/services/${s.slug}`}
                                onClick={() => setMegaOpen(false)}
                                className="mt-2 inline-block py-2 text-sm font-semibold text-gold hover:text-gold-soft"
                              >
                                View all {s.count} topics →
                              </Link>
                            </div>
                          ))}
                        </div>
                      </Container>
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive(pathname, item.href) && !item.href.includes("#") ? "page" : undefined}
                    className={`transition-colors hover:text-gold ${
                      isActive(pathname, item.href) && !item.href.includes("#") ? "text-gold" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden xl:block">
          <Button href="/contact#book">Book Now</Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/40 text-gold xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 top-24 bottom-0 z-30 flex flex-col border-t border-gold/20 bg-ink/95 backdrop-blur xl:hidden">
          <Container className="flex-1 overflow-y-auto py-4">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} onClick={() => setOpen(false)} className="block py-3 text-lg text-white hover:text-gold">
                    {item.label}
                  </Link>
                  {item.mega && (
                    <ul className="mb-2 border-l border-gold/25 pl-4">
                      {menu.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            onClick={() => setOpen(false)}
                            className="block py-3 text-base text-cream hover:text-gold"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </Container>
          <div className="shrink-0 border-t border-gold/20 bg-ink">
            <Container className="py-4">
              <Button href="/contact#book" className="w-full">
                Book Now
              </Button>
            </Container>
          </div>
        </div>
      )}
    </header>
  );
}
