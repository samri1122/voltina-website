import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CustomerAccessGate from "@/components/CustomerAccessGate";
import Link from "next/link";

export const metadata: Metadata = { title: "ورود مشتری", description: "ورود یا ثبت‌نام مشتری Voltina برای ثبت سفارش خرید، پروژه و تعمیرات." };

export default function AccountPage() { return <><Header /><main><CustomerAccessGate title="به حساب مشتری Voltina وارد شوید"><section className="account-welcome"><div className="wrap"><h1>حساب مشتری شما فعال است</h1><p>اکنون می‌توانید سفارش خرید، پروژه یا درخواست تعمیر خود را ثبت کنید.</p><div><Link href="/shop#order-form" className="btn-primary">ثبت سفارش خرید</Link><Link href="/projects/order" className="btn-primary">سفارش پروژه</Link></div></div></section></CustomerAccessGate></main><Footer /><FloatingWhatsApp /></>; }
