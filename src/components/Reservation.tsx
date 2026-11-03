import { Suspense } from "react";
import BookingForm from "./BookingForm";
import { Container, Eyebrow, Title } from "./ui";

/** "Reserve Your Appointment" block from the Service Detail page. */
export function Reservation({ defaultService }: { defaultService?: string }) {
  return (
    <section id="book" className="scroll-mt-28 py-20 lg:py-[115px]">
      <Container className="max-w-[1242px]">
        <div className="text-center">
          <Eyebrow>Reservation</Eyebrow>
          <Title>Reserve Your Appointment</Title>
        </div>
        <div className="glass-card mx-auto mt-12 max-w-[1000px] px-6 py-10 sm:px-12 lg:mt-16 lg:px-[88px] lg:py-16">
          <Suspense>
            <BookingForm defaultService={defaultService} />
          </Suspense>
        </div>
      </Container>
    </section>
  );
}
