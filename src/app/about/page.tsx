import type { Metadata } from "next";
import { Commitments, WhyChooseUs } from "@/components/Sections";
import { Banner } from "@/components/Sections2";
import { Container, NumeralArt, PageHeader } from "@/components/ui";
import { aboutIntro } from "@/content/site";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" numeral="1" />

      {/* Figma "Frame 55": large statement, then paragraph beside an image */}
      <section className="pt-20 lg:pt-[150px]">
        <Container>
          <p className="font-display text-3xl leading-[1.2] font-bold text-white sm:text-4xl lg:text-[64px]">
            {aboutIntro.statement}
          </p>
          <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-[1fr_800px] lg:gap-16">
            <p className="text-base leading-relaxed lg:text-xl">{aboutIntro.body}</p>
            <NumeralArt numeral="6" label="Dr. Singh at work" className="h-64 lg:h-[380px]" />
          </div>
        </Container>
      </section>

      <Commitments />
      <WhyChooseUs />
      <Banner />
    </>
  );
}
