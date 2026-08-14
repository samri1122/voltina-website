import Link from "next/link";
import ShopSection from "@/components/ShopSection";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ModalRoot from "@/components/ModalRoot";
import { ModalProvider } from "@/components/ModalProvider";

export default function ShopPage() {
  return <ModalProvider>
    <header className="shop-page-header"><div className="wrap shop-page-nav"><Link href="/" className="shop-page-brand"><img src="/images/voltina-logo.png" alt="Voltina Electronics" /></Link><div><Link href="/">صفحهٔ اصلی</Link><a href="#products">محصولات</a><a href="#order-form" className="shop-page-cta">ثبت سفارش</a></div></div></header>
    <main><section className="shop-page-hero"><div className="wrap shop-hero-grid"><div><span>VOLTINA STORE</span><h1>قطعهٔ درست را، <em>سریع و مطمئن</em> انتخاب کنید.</h1><p>ماژول، برد، منبع تغذیه و ابزارهای پرکاربرد؛ همراه با بررسی موجودی و ثبت سفارش مستقیم.</p><div className="shop-hero-actions"><a href="#products">مشاهده محصولات</a><a href="#order-form">ثبت سفارش یا استعلام</a></div></div><div className="shop-hero-stats"><div><b>ارسال سریع</b><small>برای اقلام موجود</small></div><div><b>تست‌شده</b><small>پیش از تحویل</small></div><div><b>پشتیبانی فنی</b><small>پیش و پس از خرید</small></div></div></div></section><div id="products"><ShopSection variant="full" /></div><OrderForm /></main>
    <Footer /><FloatingWhatsApp /><ModalRoot />
  </ModalProvider>;
}
