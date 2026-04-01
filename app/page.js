import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import CTASection from "../components/CTASection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <CTASection />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
