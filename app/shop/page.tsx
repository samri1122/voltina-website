import Link from "next/link";
import type { Metadata } from "next";
import ShopSection from "@/components/ShopSection";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ModalRoot from "@/components/ModalRoot";
import { ModalProvider } from "@/components/ModalProvider";
import RevealObserver from "@/components/RevealObserver";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "فروشگاه قطعات الکترونیکی در مشهد",
  description: "خرید و ثبت سفارش ماژول، برد کنترل، منبع تغذیه و ابزار الکترونیک در مشهد با پشتیبانی فنی Voltina.",
  keywords: ["خرید قطعات الکترونیکی مشهد", "ماژول ESP32 مشهد", "برد کنترل", "منبع تغذیه سوئیچینگ"],
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://voltina-website.vercel.app";
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "فروشگاه قطعات الکترونیکی Voltina",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: { "@type": "Product", name: product.name, description: product.desc, image: `${siteUrl}${product.images[0]}` },
    })),
  };
  return (
    <ModalProvider>
      <header className="shop-page-header">
        <div className="wrap shop-page-nav">
          <Link href="/" className="shop-page-brand" aria-label="Voltina Electronics">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/voltina-mark.png" alt="Voltina" />
          </Link>
          <div><Link href="/">صفحهٔ اصلی</Link><a href="#products">محصولات</a><a href="#order-form" className="shop-page-cta">ثبت سفارش</a></div>
        </div>
      </header>
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
        <section className="shop-page-hero">
          <div className="wrap shop-hero-grid">
            <div><span>VOLTINA STORE</span><h1>قطعهٔ درست را، <em>سریع و مطمئن</em> انتخاب کنید.</h1><p>ماژول، برد، منبع تغذیه و ابزارهای پرکاربرد؛ همراه با بررسی موجودی و ثبت سفارش مستقیم.</p><div className="shop-hero-actions"><a href="#products">مشاهده محصولات</a><a href="#order-form">ثبت سفارش یا استعلام</a></div></div>
            <div className="shop-hero-stats"><div><b>ارسال سریع</b><small>برای اقلام موجود</small></div><div><b>تست‌شده</b><small>پیش از تحویل</small></div><div><b>پشتیبانی فنی</b><small>پیش و پس از خرید</small></div></div>
          </div>
        </section>
        <OrderForm />
        <div id="products"><ShopSection variant="full" /></div>
      </main>
      <Footer /><FloatingWhatsApp /><ModalRoot /><RevealObserver />
    </ModalProvider>
  );
}
