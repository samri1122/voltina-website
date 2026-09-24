import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomProjectForm from "@/components/CustomProjectForm";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import InnerPageHero from "@/components/InnerPageHero";

export const metadata: Metadata = { title: "ثبت سفارش پروژه الکترونیک", description: "برای طراحی مدار، PCB، برنامه‌نویسی ESP32 و STM32 یا ساخت نمونه اولیه در Voltina درخواست ثبت کنید." };

export default function ProjectOrderPage() { return <><Header /><main><InnerPageHero eyebrow="شروع همکاری" title="پروژه‌ات را دقیق تعریف کن؛ مسیر ساختش را می‌سازیم" description="نیاز، زمان‌بندی و محدودهٔ پروژه را ثبت کن تا بررسی فنی و برآورد اولیه از مسیر درست شروع شود." image="/images/blog/iot-lab.jpg" /><CustomProjectForm /></main><Footer /><FloatingWhatsApp /></>; }
