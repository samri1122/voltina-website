import Link from "next/link";
import ShopSection from "@/components/ShopSection";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ModalRoot from "@/components/ModalRoot";
import { ModalProvider } from "@/components/ModalProvider";

export default function ShopPage() {
  return <ModalProvider>
    <header className="shop-page-header"><div className="wrap shop-page-nav"><Link href="/" className="shop-page-brand"><img src="/images/voltina-logo.png" alt="Voltina Electronics" /></Link><div><Link href="/">صفحهٔ اصلی</Link><a href="#order-form" className="shop-page-cta">ثبت سفارش</a></div></div></header>
    <main><ShopSection variant="full" /><OrderForm /></main>
    <Footer /><FloatingWhatsApp /><ModalRoot />
  </ModalProvider>;
}
