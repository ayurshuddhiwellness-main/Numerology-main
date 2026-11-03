import type { Metadata } from "next";
import { ExpertCard } from "@/components/cards";
import { Container, PageHeader } from "@/components/ui";
import { experts } from "@/content/site";

export const metadata: Metadata = { title: "Our Experts" };

export default function ExpertsPage() {
  return (
    <>
      <PageHeader title="Our Experts" numeral="8" />
      <section className="py-20 lg:py-[100px]">
        <Container>
          <ul className="grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-[100px]">
            {experts.map((p, i) => (
              <ExpertCard key={p.name} {...p} index={i} />
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
