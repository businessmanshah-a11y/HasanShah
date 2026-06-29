import Nav from "./components/Nav";
import Hero from "./components/Hero";
import PromoCards from "./components/PromoCards";
import Pain from "./components/Pain";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ConsultationHighlight from "./components/ConsultationHighlight";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";
import { MainPageFaqJsonLd, PersonJsonLd, WebSiteJsonLd } from "./components/JsonLd";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <PersonJsonLd />
      <WebSiteJsonLd />
      <MainPageFaqJsonLd />
      <Nav />
      <Hero />
      <PromoCards />
      <Pain />
      <About />
      <Services />
      <Portfolio />
      <ConsultationHighlight />
      <LeadForm />
      <Footer />
    </main>
  );
}
