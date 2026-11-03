"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/content/site";
import { Button, Container, Logo } from "./ui";

function isActive(pathname: string, href: string) {
  const path = href.split("#")[0];
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(path + "/");
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  // Close menus when the page changes (adjusting state during render, per React docs)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
    setServicesOpen(false);
  }

  // Close the Services dropdown on outside click or Escape
  useEffect(() => {
    if (!servicesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setServicesOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <Container className="flex h-24 items-center justify-between gap-6 lg:h-[120px]">
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-12 text-lg text-white lg:text-xl">
            {nav.map((item) =>
              item.children ? (
                <li
                  key={item.label}
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <Link
                      href={item.href}
                      className={`transition-colors hover:text-gold ${isActive(pathname, item.href) ? "text-gold" : ""}`}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Show services"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((v) => !v)}
                      className="flex h-6 w-6 items-center justify-center hover:text-gold"
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                        <path d="M1 3l4 4 4-4" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 w-80 -translate-x-1/2 pt-4">
                      <ul className="rounded-2xl border border-gold/25 bg-ink/95 p-3 shadow-2xl backdrop-blur">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className={`block rounded-lg px-4 py-3 text-base transition-colors hover:bg-maroon/40 hover:text-gold ${
                                pathname === c.href ? "text-gold" : ""
                              }`}
                            >
                              {c.label}
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
        <div id="mobile-menu" className="border-y border-gold/20 bg-ink/95 backdrop-blur xl:hidden">
          <Container className="py-4">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="block py-3 text-lg text-white hover:text-gold">
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mb-2 border-l border-gold/25 pl-4">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block py-2 text-base text-cream hover:text-gold">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Button href="/contact#book" className="mt-3 w-full">
              Book Now
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
