"use client";

import { FormEvent, ReactNode, useEffect, useState } from "react";

type Customer = { name: string; phone: string; email: string; passwordHash: string };
const CUSTOMER_KEY = "voltina_customer";
const SESSION_KEY = "voltina_customer_session";

async function hash(value: string) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest)).map((part) => part.toString(16).padStart(2, "0")).join("");
}

function normalizePhone(value: string) {
  return value.replace(/[۰-۹]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹".indexOf(digit).toString()).replace(/[٠-٩]/g, (digit) => "٠١٢٣٤٥٦٧٨٩".indexOf(digit).toString());
}

export default function CustomerAccessGate({ children, title = "برای ثبت درخواست، وارد حساب مشتری شوید" }: { children: ReactNode; title?: string }) {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const session = localStorage.getItem(SESSION_KEY);
    const saved = localStorage.getItem(CUSTOMER_KEY);
    if (session && saved) setCustomer(JSON.parse(saved));
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setMessage("");
    const fields = new FormData(event.currentTarget);
    const email = String(fields.get("email") || "").trim().toLowerCase();
    const password = String(fields.get("password") || "");
    const saved = localStorage.getItem(CUSTOMER_KEY);
    if (mode === "signup") {
      const name = String(fields.get("name") || "").trim();
      const phone = normalizePhone(String(fields.get("phone") || "").trim());
      if (!name || !/^09\d{9}$/.test(phone) || !email || password.length < 8) { setMessage("نام، شمارهٔ معتبر، ایمیل و رمز حداقل ۸ کاراکتری لازم است."); return; }
      if (saved && JSON.parse(saved).email === email) { setMessage("این ایمیل قبلاً ثبت شده است؛ وارد شوید."); setMode("login"); return; }
      const next = { name, phone, email, passwordHash: await hash(password) };
      localStorage.setItem(CUSTOMER_KEY, JSON.stringify(next)); localStorage.setItem(SESSION_KEY, "1"); setCustomer(next); return;
    }
    if (!saved) { setMessage("ابتدا یک حساب مشتری بسازید."); setMode("signup"); return; }
    const next = JSON.parse(saved) as Customer;
    if (next.email !== email || next.passwordHash !== await hash(password)) { setMessage("ایمیل یا رمز عبور درست نیست."); return; }
    localStorage.setItem(SESSION_KEY, "1"); setCustomer(next);
  }

  if (customer) return <>{children}</>;
  return <section className="customer-access"><div className="wrap"><div className="customer-access-card"><span>حساب مشتری Voltina</span><h2>{title}</h2><p>با ساخت حساب، اطلاعات پایهٔ سفارش‌های بعدی شما در همین مرورگر نگهداری می‌شود.</p><div className="access-tabs"><button type="button" className={mode === "login" ? "active" : ""} onClick={() => setMode("login")}>ورود</button><button type="button" className={mode === "signup" ? "active" : ""} onClick={() => setMode("signup")}>ثبت‌نام</button></div><form onSubmit={submit}>{mode === "signup" && <><label>نام و نام خانوادگی<input name="name" required autoComplete="name" /></label><label>شمارهٔ تماس<input name="phone" inputMode="tel" placeholder="09xxxxxxxxx" required autoComplete="tel" /></label></>}<label>ایمیل<input name="email" type="email" required autoComplete="email" /></label><label>رمز عبور<input name="password" type="password" minLength={8} required autoComplete={mode === "login" ? "current-password" : "new-password"} /></label>{message && <p className="access-error">{message}</p>}<button className="f-submit" type="submit">{mode === "login" ? "ورود و ادامهٔ سفارش" : "ساخت حساب و ادامه"}</button></form></div></div></section>;
}
