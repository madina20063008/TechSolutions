import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Partners from "./components/Partners";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Portfolio from "./components/Portfolio";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <About />
        <Partners />
        <Services />
        <WhyUs />
        <Portfolio />
        <Stats />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}