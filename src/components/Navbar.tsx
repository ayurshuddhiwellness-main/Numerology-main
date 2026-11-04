"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { serviceMenu } from "@/content/services";
import { Button, Container, Logo } from "./ui";

type NavItem = { label: string; href: string; dropdown?: boolean };
type Props = { nav: NavItem[]; menu: typeof serviceMenu };

function isActive(pathname: string, href: string) {
  const path = href.split("#")[0];
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(path + "/");
}

export default function Navbar({ nav, menu }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile drawer
  const [servicesOpen, setServicesOpen] = useState(false); // desktop Services dropdown
  const servicesRef = useRef<HTMLLIElement>(null);
  const caretRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  // Close menus when the page changes (adjusting state during render, per React docs)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
    setServicesOpen(false);
  }

  // Escape closes whatever is open; outside click closes the dropdown
  useEffect(() => {
    if (!open && !servicesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (servicesOpen) caretRef.current?.focus();
      setServicesOpen(false);
      setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, servicesOpen]);

  // Hover opens the dropdown for a mouse only (touch uses the caret); a short delay bridges the gap to the panel
  const hover = (e: React.PointerEvent, on: boolean) => {
    if (e.pointerType !== "mouse") return;
    window.clearTimeout(closeTimer.current);
    if (on) setServicesOpen(true);
    else closeTimer.current = window.setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <Container className="flex h-24 items-center justify-between gap-6 lg:h-[120px]">
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-10 text-base text-white">
            {nav.map((item) =>
              item.dropdown ? (
                <li key={item.label} ref={servicesRef} className="relative" onPointerEnter={(e) => hover(e, true)} onPointerLeave={(e) => hover(e, false)}>
                  <div className="flex items-center gap-2">
                    <Link
                      href={item.href}
                      data-active={isActive(pathname, item.href)}
                      className={`nav-link transition-colors hover:text-sky ${isActive(pathname, item.href) ? "text-sky" : ""}`}
                    >
                      {item.label}
                    </Link>
                    <button
                      ref={caretRef}
                      type="button"
                      aria-label="Show services"
                      aria-expanded={servicesOpen}
                      aria-controls="services-menu"
                      // A mouse already opened it on hover, so a click keeps it open; keyboard and touch toggle
                      onClick={(e) => setServicesOpen((e.nativeEvent as PointerEvent).pointerType === "mouse" || ((v) => !v))}
                      className="flex h-11 w-6 items-center justify-center hover:text-sky"
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                        <path d="M1 3l4 4 4-4" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  {servicesOpen && (
                    <div id="services-menu" className="absolute top-full left-1/2 w-80 -translate-x-1/2 pt-4">
                      <ul className="relative gold-edge edge-b-1 rounded-2xl border border-sky/25 bg-ink/95 p-3 shadow-2xl backdrop-blur">
                        {menu.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}`}
                              onClick={() => setServicesOpen(false)}
                              className={`block rounded-lg px-4 py-3 text-base transition-colors hover:bg-azure/40 hover:text-sky ${
                                pathname === `/services/${s.slug}` ? "text-sky" : ""
                              }`}
                            >
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive(pathname, item.href) && !item.href.includes("#") ? "page" : undefined}
                    data-active={isActive(pathname, item.href) && !item.href.includes("#")}
                    className={`nav-link transition-colors hover:text-sky ${
                      isActive(pathname, item.href) && !item.href.includes("#") ? "text-sky" : ""
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
          <Button href="/contact#book" variant="book">
            Book Now
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center relative gold-edge edge-b-1 rounded-lg border border-sky/40 text-sky focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold xl:hidden"
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
        <div id="mobile-menu" className="fixed inset-x-0 top-24 bottom-0 z-30 flex flex-col fade-rule bg-ink/95 backdrop-blur xl:hidden">
          <Container className="flex-1 overflow-y-auto py-4">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} onClick={() => setOpen(false)} className="block py-3 text-lg text-white hover:text-sky">
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <ul className="mb-2 border-l border-sky/25 pl-4">
                      {menu.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            onClick={() => setOpen(false)}
                            className="block py-3 text-base text-cream hover:text-sky"
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
          <div className="shrink-0 fade-rule bg-ink">
            <Container className="py-4">
              <Button href="/contact#book" variant="book" className="w-full">
                Book Now
              </Button>
            </Container>
          </div>
        </div>
      )}
    </header>
  );
}
