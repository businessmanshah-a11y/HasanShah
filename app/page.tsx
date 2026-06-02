import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Pain from "./components/Pain";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Offer from "./components/Offer";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Pain />
      <About />
      <Services />
      <Portfolio />
      <Offer />
      <LeadForm />
      <Footer />
    </main>
  );
}
