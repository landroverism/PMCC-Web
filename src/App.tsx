import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Conditions from "./components/Conditions";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Donations from "./components/Donations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimateOnScroll from "./components/AnimateOnScroll";
import FloatingContactButton from "./components/FloatingContactButton";
import WhyChoosePMCC from "./components/WhyChoosePMCC";
import CrisisBar from "./components/CrisisBar";
import LocationDirections from "./components/LocationDirections";

export default function App() {
  return (
    <>
      <CrisisBar />
      <Header />
      <main>
        <Hero />
        <AnimateOnScroll>
          <About />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <WhyChoosePMCC />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Conditions />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Services />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Testimonials />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Team />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Gallery />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <FAQ />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Donations />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Contact />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <LocationDirections />
        </AnimateOnScroll>
      </main>
      <Footer />
      <FloatingContactButton />
    </>
  );
}
