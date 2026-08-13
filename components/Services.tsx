"use client";

import { services } from "@/data/services";
import { useModal } from "./ModalProvider";

export default function Services() {
  const { openServiceModal } = useModal();

  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-eyebrow">خدمات ما</div>
          <h2>راهکارهای الکترونیکی، از تعمیر تا طراحی</h2>
          <p>از عیب‌یابی و تعمیر گرفته تا طراحی سیستم‌های کنترل هوشمند — همه‌چیز زیر یک سقف.</p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div className="svc-card" key={s.key}>
              <div className="svc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#2F6FEB" strokeWidth={1.6}>
                  <path d={s.icon} />
                </svg>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#services" className="svc-link" onClick={() => openServiceModal(s)}>
                بیشتر ←
              </a>
            </div>
          ))}
        </div>

        <div className="mid-banner mid-banner-photo reveal">
          <div className="mid-banner-content">
            <span className="mid-banner-eyebrow">مشاوره‌ی رایگان</span>
            <h3>راهکارهای الکترونیکی برای عملکرد بهتر و آینده‌ای مطمئن‌تر</h3>
            <p>
              از تعمیر و نگهداری گرفته تا طراحی سیستم‌های کنترل صنعتی؛ تیم فنی Voltina همراه شماست تا تجهیزاتتون
              همیشه با بهترین عملکرد کار کنن.
            </p>
            <ul className="mid-banner-list">
              <li>مشاوره‌ی فنی رایگان قبل از هر اقدامی</li>
              <li>بررسی دقیق با تجهیزات اندازه‌گیری حرفه‌ای</li>
              <li>گارانتی تعویض روی خدمات و قطعات</li>
            </ul>
            <a href="#contact" className="btn-primary">
              درخواست مشاوره
            </a>
          </div>
          <div className="mid-banner-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/placeholders/electronics-card.svg"
              alt="اتاق کنترل صنعتی مجهز به تجهیزات الکترونیکی"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
