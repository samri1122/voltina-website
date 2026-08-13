import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="light testimonials-section" id="testimonials">
      <div className="wrap">
        <div className="sec-head reveal">
          <div className="sec-eyebrow">نظر مشتریان</div>
          <h2>چه کسانی به Voltina اعتماد کرده‌اند</h2>
          <p>بخشی از بازخورد مشتریانی که برای تعمیر، سفارش قطعه یا ساخت پروژه به ما مراجعه کرده‌اند.</p>
        </div>
        <div className="testi-grid">
          {testimonials.map((t) => (
            <div className="testi-card reveal" key={t.name + t.context}>
              <div className="testi-stars">★★★★★</div>
              <p>«{t.quote}»</p>
              <div className="testi-who">
                <strong>{t.name}</strong>
                <span>{t.context}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
