export default function AboutSection() {
  return (
    <section className="about-split" id="about">
      <div className="wrap about-grid">
        <div className="about-img reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/placeholders/electronics-card.svg"
            alt="نمای نزدیک برد الکترونیکی"
            loading="lazy"
          />
        </div>
        <div className="about-copy reveal">
          <div className="sec-eyebrow">درباره ما</div>
          <h2>تیمی متخصص، متعهد به کیفیت</h2>
          <p>
            Voltina با تکیه بر تجربه‌ی چندساله در حوزه‌ی الکترونیک، خدمات تعمیر، طراحی و فروش قطعات رو با بالاترین
            استاندارد کیفیت ارائه می‌ده. هدف ما اینه که هر مشتری، چه یه فرد باشه چه یه کارخانه، بهترین راهکار
            الکترونیکی رو با قیمت منصفانه دریافت کنه.
          </p>
        </div>
      </div>

      <div className="wrap">
        <div className="why-grid" style={{ marginTop: -30 }}>
          <div className="why-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="#2F6FEB" strokeWidth={1.6}>
              <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
            </svg>
            <h4>تخصص بالا</h4>
            <p>
              تیم فنی ما در حوزه‌ی الکترونیک صنعتی، پزشکی و لوازم خانگی تجربه‌ی عملی داره — یعنی قبل از هر اقدام،
              دقیقاً می‌دونیم دنبال چه علتی برای خرابی بگردیم، نه فقط حدس و آزمون‌وخطا.
            </p>
          </div>
          <div className="why-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="#2F6FEB" strokeWidth={1.6}>
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </svg>
            <h4>تجهیزات پیشرفته</h4>
            <p>
              از اسیلوسکوپ و دستگاه‌های تست حرفه‌ای برای عیب‌یابی دقیق استفاده می‌کنیم — به‌جای تعویض حدسی قطعات،
              علت واقعی خرابی رو با اندازه‌گیری پیدا می‌کنیم و فقط همون رو تعمیر می‌کنیم.
            </p>
          </div>
          <div className="why-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="#2F6FEB" strokeWidth={1.6}>
              <path d="M9 12l2 2 4-4" />
              <circle cx="12" cy="12" r="9" />
            </svg>
            <h4>کیفیت تضمینی</h4>
            <p>
              روی خدمات تعمیر و قطعاتی که می‌فروشیم گارانتی تعویض ارائه می‌دیم. اگه ظرف مدت گارانتی همون مشکل
              دوباره پیش بیاد، بدون هزینه‌ی اضافه پیگیری می‌کنیم.
            </p>
          </div>
          <div className="why-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="#2F6FEB" strokeWidth={1.6}>
              <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
            </svg>
            <h4>پشتیبانی سریع</h4>
            <p>
              از ثبت درخواست تا تماس اولیه معمولاً همون روز کاری اتفاق می‌افته. بعد از تحویل هم از طریق واتساپ در
              دسترسیم، نه اینکه بعد از فروش گم بشیم.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
