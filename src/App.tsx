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

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Conditions />
        <Services />
        <Testimonials />
        <Team />
        <Gallery />
        <FAQ />
        <Donations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
