import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="pt-40 pb-32 lg:pt-[260px]">
      <Container className="text-center">
        <p className="font-display text-[120px] leading-none font-bold text-sky italic lg:text-[200px]">404</p>
        <h1 className="mt-6 font-display text-4xl font-bold text-white lg:text-6xl">This page isn&apos;t in the numbers</h1>
        <p className="mx-auto mt-5 max-w-[560px] text-base lg:text-xl">The page you are looking for has moved or does not exist.</p>
        <Button href="/" className="mt-10">
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
