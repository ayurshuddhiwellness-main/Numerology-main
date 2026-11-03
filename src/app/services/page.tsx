import type { Metadata } from "next";
import { ServiceRow } from "@/components/cards";
import { Banner, Pricing } from "@/components/Sections2";
import { Container, PageHeader } from "@/components/ui";
import { services } from "@/content/site";

export const metadata: Metadata = { title: "Numerology Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Numerology Services" numeral="4" />
      <section className="py-20 lg:py-[150px]">
        <Container>
          <p className="font-display text-3xl leading-[1.2] font-bold text-white sm:text-4xl lg:text-[64px] [&_em]:italic">
            We are <em>dedicated</em> to providing numerology services that bring clarity and balance to your{" "}
            <em>unique journey</em> through life.
          </p>
          <div className="mt-14 flex flex-col gap-14 lg:mt-[100px] lg:gap-[100px]">
            {services.map((s, i) => (
              <ServiceRow key={s.slug} service={s} index={i} />
            ))}
          </div>
        </Container>
      </section>
      <Banner />
      <Pricing />
    </>
  );
}
