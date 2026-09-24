import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import InnerPageHero from "@/components/InnerPageHero";
import AboutDetails from "@/components/AboutDetails";

export const metadata: Metadata = { title: "درباره Voltina Electronics", description: "آشنایی با Voltina؛ خدمات طراحی الکترونیک، تعمیر برد و راهکارهای صنعتی در مشهد." };

export default function AboutPage() { return <><Header /><main><InnerPageHero eyebrow="درباره Voltina" title="فناوری، دقت مهندسی و همراهی تا نتیجه" description="با رویکرد، توانمندی‌ها و تجربهٔ Voltina در طراحی، تعمیر و توسعهٔ راهکارهای الکترونیکی آشنا شوید." image="/images/about.png" /><AboutSection /><AboutDetails /><Testimonials /></main><Footer /><FloatingWhatsApp /></>; }
