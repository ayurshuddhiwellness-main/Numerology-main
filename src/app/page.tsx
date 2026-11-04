import Hero from "@/components/Hero";
import { Commitments, Practitioner, ForecastGrid, ServicesPreview, WhyChooseUs } from "@/components/Sections";
import { Banner, BlogStrip, Pricing, Testimonial } from "@/components/Sections2";

export default function Home() {
  return (
    <>
      <Hero />
      <Commitments
        id="about"
        cover={{ src: "/images/home-cover.jpg", alt: "Divination dice on a decorated circular chart" }}
      />
      <Practitioner />
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
