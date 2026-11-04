import type { Metadata } from "next";
import { ForecastGrid } from "@/components/Sections";
import { Banner, Pricing } from "@/components/Sections2";
import { Container, PageHeader, Title } from "@/components/ui";

export const metadata: Metadata = { title: "Weekly Forecast" };

export default function ForecastPage() {
  return (
    <>
      <PageHeader title="Weekly Forecast" numeral="5" />
      <section className="pt-20 lg:pt-[110px]">
        <Container className="text-center">
          <Title className="mx-auto max-w-[1100px]">
            What the numbers hold for you in this <em>Weekly Forecast</em>
          </Title>
          <p className="mx-auto mt-6 max-w-[760px] text-base leading-relaxed lg:text-lg">
            Find your Mulank (the day you were born, added to a single digit: the 23rd becomes 2 + 3 = 5) and choose your
            number below.
          </p>
        </Container>
      </section>
      <ForecastGrid showTitle={false} showButton={false} />
      <Banner />
      <Pricing />
    </>
  );
}
