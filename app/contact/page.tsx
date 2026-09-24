import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import InnerPageHero from "@/components/InnerPageHero";

export const metadata: Metadata = { title: "تماس با Voltina در مشهد", description: "راه‌های تماس با Voltina: تماس تلفنی، واتساپ، تلگرام، اینستاگرام و ایمیل برای مشاورهٔ الکترونیک در مشهد." };

export default function ContactPage() { return <><Header /><main><InnerPageHero eyebrow="تماس و مشاوره" title="مستقیم با Voltina در ارتباط باشید" description="برای مشاوره، ثبت سفارش پروژه، تعمیر یا پیگیری درخواست، راه ارتباطی مناسب خودتان را انتخاب کنید." /><ContactSection /></main><Footer /><FloatingWhatsApp /></>; }
