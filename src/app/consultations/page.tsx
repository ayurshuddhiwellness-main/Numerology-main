import type { Metadata } from "next";
import { Banner } from "@/components/Sections2";
import { Button, Container, PageHeader } from "@/components/ui";
import { programs } from "@/content/services";

export const metadata: Metadata = { title: "Consultation Programs" };

export default function ConsultationsPage() {
  return (
    <>
      <PageHeader
        title="Consultations"
        numeral={String(programs.length)}
        image={{
          src: "/images/consultations-header.jpg",
          alt: "A calm, sunlit sitting room with sofas and tall windows",
          position: "50% 60%",
        }}
      />
      <section className="py-20 lg:py-32">
        <Container>
          <p className="font-display text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl [&_em]:italic">
            Choose the <em>program</em> that fits your needs, from a single sitting to a full year of guidance.
          </p>
          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-24 lg:grid-cols-3">
            {programs.map((p, i) => (
              <li key={p} className="glass-card flex flex-col px-8 py-10">
                <span className="text-lg font-semibold text-gold">0{i + 1}</span>
                <h2 className="mt-3 font-display text-2xl font-bold text-white lg:text-[26px]">{p}</h2>
                <p className="mt-4 grow text-base text-sky-soft lg:text-lg">Contact for pricing</p>
                <Button href={`/contact?plan=${encodeURIComponent(p)}#book`} variant="outline" className="mt-8 self-start">
                  Enquire
                </Button>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <Banner />
    </>
  );
}
