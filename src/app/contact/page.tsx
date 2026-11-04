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
    { label: "Address", value: site.contact.address },
  ];

  return (
    <>
      <PageHeader title="Contact Us" numeral="2" />

      <section id="book" className="relative isolate scroll-mt-28 overflow-hidden py-20 lg:py-[100px]">
        <FigmaGlow variant="horoscope" />
        <Container className="grid gap-6 lg:grid-cols-[678px_1fr] lg:gap-[50px]">
          <ul className="flex flex-col gap-6 lg:gap-[50px]">
            {details.map((d) => (
              <li key={d.label} className="glass-card px-8 py-8 lg:px-[53px] lg:py-[44px]">
                <p className="text-base font-semibold text-white lg:text-[22px]">{d.label}</p>
                {d.href ? (
                  <a href={d.href} className="mt-1 block font-display text-3xl font-bold break-words text-white hover:text-sky lg:text-5xl">
                    {d.value}
                  </a>
                ) : (
                  <p className="mt-1 font-display text-3xl font-bold text-white lg:text-5xl">{d.value}</p>
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
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.contact.mapQuery)}&output=embed`}
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
