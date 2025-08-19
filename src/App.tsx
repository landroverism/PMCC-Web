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

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AnimateOnScroll>
          <About />
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
      </main>
      <Footer />
    </>
  );
}
