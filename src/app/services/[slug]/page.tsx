import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reservation } from "@/components/Reservation";
import { Banner } from "@/components/Sections2";
import { Container, PageHeader } from "@/components/ui";
import { services } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.summary } : {};
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHeader title={service.title} numeral={service.numeral} />

      <section className="pt-20 lg:pt-[150px]">
        <Container className="max-w-[1533px]">
          <p className="text-lg leading-relaxed text-white lg:text-[22px]">{service.intro}</p>
          <div className="mt-12 flex flex-col gap-12 lg:gap-[50px]">
            {service.sections.map((sec) => (
              <div key={sec.heading}>
                <h2 className="font-display text-2xl font-bold text-white lg:text-[32px]">{sec.heading}</h2>
                {sec.paragraphs?.map((p) => (
                  <p key={p} className="mt-4 text-base leading-relaxed lg:text-xl">
                    {p}
                  </p>
                ))}
                {sec.list &&
                  (sec.ordered ? (
                    <ol className="mt-4 list-decimal space-y-2 pl-6 text-base leading-relaxed marker:text-gold lg:text-xl">
                      {sec.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ol>
                  ) : (
                    <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed marker:text-gold lg:text-xl">
                      {sec.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  ))}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Banner />
      <Reservation defaultService={service.title} />
    </>
  );
}
