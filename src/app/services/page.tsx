import type { Metadata } from "next";
import { ServiceRow } from "@/components/cards";
import { Banner } from "@/components/Sections2";
import { Container, PageHeader } from "@/components/ui";
import { services } from "@/content/services";

export const metadata: Metadata = { title: "Our Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        numeral="4"
        image={{
          src: "/images/services-header.jpg",
          alt: "Morning sunlight streaming through a tall window into a quiet room",
          position: "50% 45%",
        }}
      />
      <section className="py-20 lg:py-32">
        <Container>
          <p className="font-display text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl [&_em]:italic">
            Four ways to bring <em>clarity</em> and balance to your <em>journey</em>: astrology, numerology, Vastu and
            personal guidance.
          </p>
          <div className="mt-14 flex flex-col gap-14 lg:mt-24 lg:gap-24">
            {services.map((s, i) => (
              <ServiceRow key={s.slug} service={s} index={i} />
            ))}
          </div>
        </Container>
      </section>
      <Banner
        heading={
          <>
            Explore our <em className="italic">consultation</em> programs
          </>
        }
        text="One-to-one, family and business programs"
        href="/consultations"
        cta="View Programs"
      />
    </>
  );
}
