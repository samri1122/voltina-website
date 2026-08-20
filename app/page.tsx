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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", name: "Voltina Electronics", description: "تعمیرات برد و طراحی پروژه الکترونیک در مشهد", telephone: "+989015039653", email: "sam864116@gmail.com", address: { "@type": "PostalAddress", addressLocality: "مشهد", addressCountry: "IR" }, areaServed: "مشهد", sameAs: ["https://t.me/VOLTINA_C", "https://instagram.com/VOLTINA_C"] }) }} />
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
