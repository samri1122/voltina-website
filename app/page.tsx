import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CustomProjectForm from "@/components/CustomProjectForm";
import ShopSection from "@/components/ShopSection";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import StatsAndCTA from "@/components/StatsAndCTA";
import Services from "@/components/Services";
import RepairRequestForm from "@/components/RepairRequestForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ModalRoot from "@/components/ModalRoot";
import { ModalProvider } from "@/components/ModalProvider";
import RevealObserver from "@/components/RevealObserver";
import ServiceSteps from "@/components/ServiceSteps";

export default function HomePage() {
  return (
    <ModalProvider>
      <Header />
      <main>
        <Hero />
        <ServiceSteps />
        <CustomProjectForm />
        <ShopSection />
        <Portfolio />
        <Testimonials />
        <AboutSection />
        <StatsAndCTA />
        <Services />
        <RepairRequestForm />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ModalRoot />
      <RevealObserver />
    </ModalProvider>
  );
}
