import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import FaqSection from "@/components/FaqSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ModalRoot from "@/components/ModalRoot";
import { ModalProvider } from "@/components/ModalProvider";
import InnerPageHero from "@/components/InnerPageHero";

export const metadata: Metadata = { title: "خدمات طراحی مدار، PCB و اتوماسیون", description: "خدمات Voltina برای طراحی PCB، برنامه‌نویسی میکروکنترلر، نمونه‌سازی، اتوماسیون و مشاورهٔ الکترونیک." };

export default function ServicesPage() { return <ModalProvider><Header /><main><InnerPageHero eyebrow="خدمات Voltina" title="از ایده و طراحی تا نمونهٔ قابل‌تست" description="برای هر نوع نیاز الکترونیکی، خدمت مناسب، مراحل روشن و مسیر اقدام مستقل در اختیار شماست." image="/images/blog/industrial-control.jpg" action={{ href: "/projects/order", label: "ثبت نیاز پروژه" }} /><Services /><FaqSection /></main><Footer /><FloatingWhatsApp /><ModalRoot /></ModalProvider>; }
