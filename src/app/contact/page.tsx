import type { Metadata } from "next";
import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";
import FigmaGlow from "@/components/FigmaGlow";
import { Container, NumeralArt, PageHeader, Title } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  const details = [
    { label: "Phone", value: site.contact.phone, href: `tel:${site.contact.phone.replace(/\s/g, "")}` },
    { label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
    { label: "Address", value: site.contact.address, href: site.contact.mapLink, external: true },
  ];

  return (
    <>
      <PageHeader
        title="Contact Us"
        numeral="2"
        image={{
          src: "/images/contact-header.jpg",
          alt: "Hands holding a smartphone, with call, email and chat icons above it",
          position: "50% 30%",
        }}
      />

      <section id="book" className="relative isolate scroll-mt-28 overflow-hidden py-20 lg:py-[100px]">
        <FigmaGlow variant="horoscope" />
        <Container className="grid grid-cols-1 gap-6 lg:grid-cols-[678px_1fr] lg:gap-[50px]">
          <ul className="flex min-w-0 flex-col gap-6 lg:gap-[50px]">
            {details.map((d) => (
              <li key={d.label} className="glass-card px-8 py-8 lg:px-[53px] lg:py-[44px]">
                <p className="text-base font-semibold text-white lg:text-lg">{d.label}</p>
                {d.href ? (
                  <a
                    href={d.href}
                    {...("external" in d && d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="mt-1 block font-display text-2xl font-bold [overflow-wrap:anywhere] text-white hover:text-sky sm:text-3xl lg:text-[42px]">
                    {d.value}
                  </a>
                ) : (
                  <p className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl lg:text-[42px]">{d.value}</p>
                )}
              </li>
            ))}
          </ul>
          <div className="glass-card px-6 py-10 sm:px-12 lg:px-[88px] lg:py-16">
            <h2 className="sr-only">Book a consultation</h2>
            <Suspense>
              <BookingForm />
            </Suspense>
          </div>
        </Container>
      </section>

      <section className="pb-20 lg:pb-[115px]">
        <Container>
          <Title className="text-center">Find Us on Google Maps</Title>
          {site.contact.mapQuery ? (
            <iframe
              title="Map showing our location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.contact.mapQuery)}&z=17&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-12 h-[360px] w-full rounded-[20px] border border-sky/25 hover:border-gold lg:mt-16 lg:h-[579px]"
            />
          ) : (
            // TODO: set site.contact.mapQuery to show the live map
            <NumeralArt numeral="9" label="Map placeholder" className="mt-12 h-[360px] lg:mt-16 lg:h-[579px]" />
          )}
        </Container>
      </section>
    </>
  );
}
