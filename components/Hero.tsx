const options = [
  { href: "#custom-project", label: "ساخت پروژه اختصاصی", text: "از ایده تا طراحی و ساخت", icon: "circuit" },
  { href: "#repair-request", label: "تعمیر دستگاه یا برد", text: "ثبت مشکل و ارسال تصویر دستگاه", icon: "repair" },
  { href: "/shop", label: "خرید قطعه و ماژول", text: "مشاهده قطعات پرکاربرد", icon: "shop" },
];

function OptionIcon({ type }: { type: string }) {
  if (type === "repair") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M14.7 6.3a5 5 0 01-6.9 6.9L3.5 17.5a2.1 2.1 0 103 3l4.3-4.3a5 5 0 006.9-6.9l-3.1 3.1-2.8-.5-.5-2.8 3.4-2.8z" /></svg>;
  if (type === "circuit") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4M9 10h6M12 10v4" /></svg>;
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><path d="M3 4h2l2 11h10l2-7H7" /><circle cx="9" cy="20" r="1.3" /><circle cx="17" cy="20" r="1.3" /></svg>;
}

export default function Hero() {
  return <section className="hero" id="home"><div className="glow" /><div className="wrap hero-grid">
    <div className="hero-copy">
      <span className="eyebrow">طراحی PCB، ساخت نمونه اولیه و پروژه‌های هوشمند</span>
      <h1>ایدهٔ شما را به <span>مدار، برد و محصول قابل‌تست</span> تبدیل می‌کنیم.</h1>
      <p>از تحلیل نیاز و شماتیک تا طراحی PCB، برنامه‌نویسی ESP32 و ساخت نمونه اولیه؛ پروژهٔ دانشجویی، صنعتی یا محصول جدیدتان را حرفه‌ای شروع کنید.</p>
      <div className="hero-ctas"><a href="#custom-project" className="btn-project-cta"><span>ثبت سفارش پروژه</span><b>←</b></a><a href="#repair-request" className="btn-primary btn-highlight">درخواست تعمیر برد</a></div>
      <ul className="hero-assurances" aria-label="مزیت‌های خدمات ولتینا"><li>تحلیل فنی پیش از ساخت</li><li>طراحی قابل تولید</li><li>گزارش و اطلاع‌رسانی شفاف</li></ul>
      <div className="project-workflow" aria-label="مسیر اجرای پروژه"><span><b>01</b> تحلیل نیاز</span><i>→</i><span><b>02</b> طراحی PCB</span><i>→</i><span><b>03</b> نمونه و تست</span></div>
    </div>
    <aside className="hero-quick-panel" aria-label="شروع سریع">
      <div className="quick-panel-head"><span>شروع سریع</span><strong>امروز به چه چیزی نیاز دارید؟</strong><p>مسیر درست را انتخاب کنید تا مستقیم به فرم مرتبط بروید.</p></div>
      <div className="quick-options">{options.map((option) => <a href={option.href} key={option.href} className="quick-option"><span className="quick-option-icon"><OptionIcon type={option.icon} /></span><span><b>{option.label}</b><small>{option.text}</small></span><i>←</i></a>)}</div>
      <div className="quick-panel-foot"><span className="live-dot" /> پاسخ‌گویی از طریق تماس و واتساپ</div>
    </aside>
  </div></section>;
}
