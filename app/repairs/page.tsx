import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceSteps from "@/components/ServiceSteps";
import RepairRequestForm from "@/components/RepairRequestForm";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import InnerPageHero from "@/components/InnerPageHero";

export const metadata: Metadata = { title: "تعمیرات تخصصی برد در مشهد", description: "ثبت درخواست تعمیر برد صنعتی، برد یخچال، منبع تغذیه و تجهیزات پزشکی در مشهد با Voltina." };

export default function RepairsPage() { return <><Header /><main><InnerPageHero eyebrow="Repair Lab / Mashhad" title="درخواست تعمیر برد و تجهیزات الکترونیکی" description="مشکل دستگاه را با جزئیات ثبت کنید؛ مسیر عیب‌یابی، هماهنگی و پیگیری تعمیر از همین صفحه آغاز می‌شود." /><ServiceSteps /><RepairRequestForm /></main><Footer /><FloatingWhatsApp /></>; }
