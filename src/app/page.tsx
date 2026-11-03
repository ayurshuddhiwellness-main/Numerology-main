import Hero from "@/components/Hero";
import { Commitments, ExpertsPreview, ForecastGrid, ServicesPreview, WhyChooseUs } from "@/components/Sections";
import { Banner, BlogStrip, Pricing, Testimonial } from "@/components/Sections2";

export default function Home() {
  return (
    <>
      <Hero />
      <Commitments id="about" />
      <ExpertsPreview />
      <WhyChooseUs />
      <ServicesPreview />
      <ForecastGrid limit={6} />
      <Banner />
      <Pricing />
      <Testimonial />
      <BlogStrip />
    </>
  );
}
