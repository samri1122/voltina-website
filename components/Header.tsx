"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "خانه" }, { href: "/projects/order", label: "سفارش پروژه" }, { href: "/shop", label: "فروشگاه" }, { href: "/projects", label: "نمونه‌کارها" }, { href: "/services", label: "خدمات" }, { href: "/about", label: "درباره ما" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const onPathChange = () => setActive(window.location.pathname);
    onPathChange();
    window.addEventListener("popstate", onPathChange);
    return () => window.removeEventListener("popstate", onPathChange);
  }, []);
  return <header className="site-header"><div className="wrap header-inner">
    <Link href="/" className="brand brand-with-logo" aria-label="Voltina Electronics">
      <img src="/images/voltina-mark.png" alt="Voltina Electronics" />
    </Link>
    <nav className={`navlinks ${open ? "open" : ""}`} id="navlinks">{NAV_LINKS.map((link) => <Link key={link.href} href={link.href} className={active === link.href ? "active" : ""} onClick={() => setOpen(false)}>{link.label}</Link>)}<Link href="/blog" onClick={() => setOpen(false)}>وبلاگ</Link><Link href="/contact" onClick={() => setOpen(false)}>تماس با ما</Link><Link href="/account" className="nav-cta" onClick={() => setOpen(false)}>ورود مشتری</Link></nav>
    <div className="header-actions"><Link href="/shop#order-form" className="order-button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 4h2l2 11h10l2-7H7"/><circle cx="9" cy="20" r="1"/><circle cx="17" cy="20" r="1"/></svg><span>سفارش قطعه</span></Link><button className="menu-toggle" aria-label="منو" aria-expanded={open} onClick={() => setOpen((value) => !value)}><span/><span/><span/></button></div>
  </div></header>;
}
