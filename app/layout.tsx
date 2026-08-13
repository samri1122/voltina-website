import type { Metadata } from "next";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";
import "@fontsource/vazirmatn/800.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Voltina | خدمات تخصصی الکترونیک، تعمیرات و فروش قطعات",
  description:
    "Voltina ارائه‌دهنده‌ی خدمات تخصصی تعمیر برد، طراحی PCB، سیستم‌های کنترل و فروش مستقیم قطعات الکترونیک در مشهد.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
