"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/content/site";
import { Button, Container, Logo } from "./ui";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <Container className="flex h-24 items-center justify-between gap-6 lg:h-[120px]">
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-12 text-lg text-white lg:text-xl">
            {nav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden xl:block">
          <Button href="#consultations">Book Now</Button>
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
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lg text-white hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button href="#consultations" className="mt-3 w-full">
              Book Now
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
