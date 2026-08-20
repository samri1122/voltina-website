import type { Metadata } from "next";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";
import "@fontsource/vazirmatn/800.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://voltina-website.vercel.app"),
  title: { default: "Voltina | تعمیرات برد و پروژه الکترونیک در مشهد", template: "%s | Voltina" },
  description: "تعمیرات تخصصی برد یخچال، برد صنعتی و تجهیزات پزشکی در مشهد؛ طراحی و ساخت پروژه دانشجویی، صنعتی و IoT با ESP32 و میکروکنترلر.",
  keywords: ["تعمیرات برد مشهد", "تعمیر برد یخچال مشهد", "پروژه دانشجویی مشهد", "طراحی پروژه صنعتی", "تعمیر تجهیزات پزشکی", "برنامه نویسی ESP32", "میکروکنترلر", "تعمیر برد صنعتی", "طراحی PCB"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "fa_IR", siteName: "Voltina Electronics", title: "Voltina | تعمیرات و پروژه الکترونیک در مشهد", description: "تعمیر برد، طراحی PCB و ساخت پروژه‌های دانشجویی و صنعتی." },
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
