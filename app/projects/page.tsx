import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ModalRoot from "@/components/ModalRoot";
import { ModalProvider } from "@/components/ModalProvider";
import InnerPageHero from "@/components/InnerPageHero";

export const metadata: Metadata = { title: "نمونه‌کارهای طراحی PCB و پروژه الکترونیک", description: "نمونه‌کارهای Voltina در طراحی PCB، STM32، ESP32، اتوماسیون صنعتی و تجهیزات پزشکی در مشهد." };

export default function ProjectsPage() { return <ModalProvider><Header /><main><InnerPageHero eyebrow="Portfolio / Voltina" title="نمونه‌کارهایی برای دیدن عمق اجرای پروژه" description="هر کارت مسیر مسئله، رویکرد فنی و خروجی قابل تحویل را نشان می‌دهد؛ از پروژه‌های STM32 و ESP32 تا اتوماسیون، PCB و ابزار دقیق." image="/images/blog/pcb-design.jpg" action={{ href: "/projects/order", label: "ثبت سفارش پروژه" }} /><Portfolio /></main><Footer /><FloatingWhatsApp /><ModalRoot /></ModalProvider>; }
