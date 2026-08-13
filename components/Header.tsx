"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#home", label: "خانه" }, { href: "#custom-project", label: "سفارش پروژه" }, { href: "#shop", label: "فروشگاه" }, { href: "#portfolio", label: "نمونه‌کارها" }, { href: "#services", label: "خدمات" }, { href: "#about", label: "درباره ما" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter((item): item is Element => Boolean(item));
    const onScroll = () => { let current = "#home"; for (const section of sections) if (section.getBoundingClientRect().top <= 120) current = `#${section.id}`; setActive(current); };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll(); return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className="site-header"><div className="wrap header-inner">
    <a href="#home" className="brand">Voltina<span>Lab</span></a>
    <nav className={`navlinks ${open ? "open" : ""}`} id="navlinks">{NAV_LINKS.map((link) => <a key={link.href} href={link.href} className={active === link.href ? "active" : ""} onClick={() => setOpen(false)}>{link.label}</a>)}<Link href="/blog" onClick={() => setOpen(false)}>وبلاگ</Link><a href="#contact" onClick={() => setOpen(false)}>تماس با ما</a><a href="#repair-request" className="nav-cta" onClick={() => setOpen(false)}>ثبت درخواست تعمیر</a></nav>
    <div className="header-actions"><a href="#order-form" className="order-button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 4h2l2 11h10l2-7H7"/><circle cx="9" cy="20" r="1"/><circle cx="17" cy="20" r="1"/></svg><span>سفارش قطعه</span></a><button className="menu-toggle" aria-label="منو" aria-expanded={open} onClick={() => setOpen((value) => !value)}><span/><span/><span/></button></div>
  </div></header>;
}
