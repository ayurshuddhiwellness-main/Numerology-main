import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { About, Experts, Forecast, Services, WhyChooseUs } from "@/components/Sections";
import { Banner, Blog, Footer, Pricing, Testimonial } from "@/components/Sections2";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experts />
        <WhyChooseUs />
        <Services />
        <Forecast />
        <Banner />
        <Pricing />
        <Testimonial />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
