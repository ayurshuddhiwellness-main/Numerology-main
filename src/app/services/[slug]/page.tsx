import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reservation } from "@/components/Reservation";
import { Banner } from "@/components/Sections2";
import TopicNav from "@/components/TopicNav";
import { TopicCard } from "@/components/TopicCard";
import { Container, Eyebrow, PageHeader, Title } from "@/components/ui";
import { services } from "@/content/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.intro } : {};
}

// TODO(copy): confirm the three steps with Dr. Singh
const steps = (inputs: string[]) => [
  { title: "Share your details", body: `Tell us your ${inputs.join(", ").toLowerCase()} so the consultation can be prepared.` },
  { title: "Book a topic", body: "Choose the topic you want to explore and request a time through the booking form." },
  { title: "Receive your guidance", body: "Dr. Singh walks you through what he finds in plain language, online or in person." },
];

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHeader title={service.title} numeral={String(services.indexOf(service) + 1)} />

      <section className="pt-20 lg:pt-28">
        <Container>
          <p className="max-w-4xl text-lg leading-relaxed text-white lg:text-2xl">{service.intro}</p>
          {/* Block on mobile (so the chip bar can stick for the whole list), grid from lg up */}
          <div className="mt-12 lg:grid lg:grid-cols-4 lg:gap-12">
            <TopicNav topics={service.topics.map(({ id, title }) => ({ id, title }))} />
            <div className="mt-6 flex flex-col gap-6 lg:col-span-3 lg:mt-0">
              {service.topics.map((t) => (
                <TopicCard key={t.id} topic={t} serviceSlug={service.slug} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container className="text-center">
          <Eyebrow>How it works</Eyebrow>
          <Title>
            Three simple <em>steps</em>
          </Title>
          <ol className="mt-12 grid gap-6 text-left md:grid-cols-3 lg:mt-16">
            {steps(service.inputs).map((s, i) => (
              <li key={s.title} className="glass-card px-8 py-10">
                <span className="text-lg font-semibold text-gold">0{i + 1}</span>
                <h3 className="mt-3 font-display text-2xl font-bold text-white lg:text-3xl">{s.title}</h3>
                <p className="mt-4 text-base leading-relaxed lg:text-xl">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Banner />
      <Reservation defaultService={service.title} />
    </>
  );
}
