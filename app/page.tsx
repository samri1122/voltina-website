import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsAndCTA from "@/components/StatsAndCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ModalRoot from "@/components/ModalRoot";
import { ModalProvider } from "@/components/ModalProvider";
import RevealObserver from "@/components/RevealObserver";
import ServiceSteps from "@/components/ServiceSteps";
import Link from "next/link";

export default function HomePage() {
  return (
    <ModalProvider>
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", name: "Voltina Electronics", description: "تعمیرات برد و طراحی پروژه الکترونیک در مشهد", telephone: "+989015039653", email: "sam864116@gmail.com", address: { "@type": "PostalAddress", addressLocality: "مشهد", addressRegion: "خراسان رضوی", addressCountry: "IR" }, areaServed: "مشهد", sameAs: ["https://t.me/VOLTINA_C", "https://instagram.com/VOLTINA_C"] }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "تعمیر برد الکترونیکی در مشهد چطور ثبت می‌شود؟", acceptedAnswer: { "@type": "Answer", text: "فرم تعمیر را تکمیل کنید یا از واتساپ پیام بدهید." } }, { "@type": "Question", name: "آیا برنامه‌نویسی ESP32 و طراحی PCB انجام می‌دهید؟", acceptedAnswer: { "@type": "Answer", text: "بله؛ از نمونه اولیه و برنامه‌نویسی ESP32 تا طراحی PCB و تست نهایی قابل انجام است." } }] }) }} />
        <Hero />
        <ServiceSteps />
        <section className="site-directory"><div className="wrap"><div className="sec-head reveal"><div className="sec-eyebrow">همه‌چیز در جای درست</div><h2>برای هر نیاز، یک صفحهٔ اختصاصی</h2><p>به‌جای یک صفحهٔ شلوغ، هر خدمت مسیر کامل، جزئیات و اقدام مخصوص خودش را دارد.</p></div><div className="directory-grid"><Link href="/projects/order" className="directory-card"><span>01</span><h3>سفارش پروژه</h3><p>ثبت نیاز طراحی مدار، PCB، ESP32، STM32 و نمونه‌سازی.</p><b>شروع سفارش ←</b></Link><Link href="/projects" className="directory-card"><span>02</span><h3>نمونه‌کارها</h3><p>پروژه‌های منتخب، سناریوی فنی و خروجی قابل تحویل.</p><b>دیدن پروژه‌ها ←</b></Link><Link href="/services" className="directory-card"><span>03</span><h3>خدمات فنی</h3><p>طراحی، توسعه، اتوماسیون و مشاورهٔ تخصصی.</p><b>مشاهده خدمات ←</b></Link><Link href="/repairs" className="directory-card"><span>04</span><h3>تعمیرات برد</h3><p>ثبت درخواست عیب‌یابی و پیگیری تعمیر دستگاه.</p><b>ثبت تعمیر ←</b></Link><Link href="/shop" className="directory-card"><span>05</span><h3>فروشگاه</h3><p>قطعات و ماژول‌های موردنیاز با فرم سفارش مستقل.</p><b>ورود به فروشگاه ←</b></Link><Link href="/contact" className="directory-card"><span>06</span><h3>تماس با Voltina</h3><p>ارتباط مستقیم از طریق تماس، واتساپ، تلگرام یا ایمیل.</p><b>راه‌های ارتباطی ←</b></Link></div></div></section>
        <StatsAndCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ModalRoot />
      <RevealObserver />
    </ModalProvider>
  );
}
