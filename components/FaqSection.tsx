const questions = [
  ["تعمیر برد الکترونیکی در مشهد چطور ثبت می‌شود؟", "فرم تعمیر را تکمیل کنید یا از واتساپ پیام بدهید. مدل دستگاه، علائم خرابی و یک تصویر واضح، برآورد اولیه را سریع‌تر می‌کند."],
  ["برای پروژه دانشجویی یا صنعتی چه اطلاعاتی لازم است؟", "هدف پروژه، زمان تحویل، بودجه تقریبی، ورودی و خروجی‌ها و اگر دارید نمونه یا شماتیک اولیه را ارسال کنید."],
  ["آیا برنامه‌نویسی ESP32 و طراحی PCB هم انجام می‌دهید؟", "بله؛ از نمونه اولیه و برنامه‌نویسی ESP32 تا طراحی PCB، مونتاژ و تست نهایی قابل انجام است."],
  ["چگونه قطعه فروشگاه را سفارش بدهم؟", "در صفحه فروشگاه، فرم ثبت سفارش را تکمیل کنید. قبل از پرداخت، موجودی و مبلغ نهایی با شما هماهنگ می‌شود."],
];

export default function FaqSection() {
  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="faq-intro">
          <span className="sec-eyebrow">پاسخ سریع</span>
          <h2 id="faq-title">سؤال‌های پرتکرار مشتریان Voltina</h2>
          <p>پاسخ‌های کوتاه برای ثبت تعمیر، طراحی مدار و سفارش قطعات؛ قبل از تماس، مسیر درست را سریع‌تر پیدا کنید.</p>
          <a href="https://wa.me/989015039653" target="_blank" rel="noopener">پرسش در واتساپ ←</a>
        </div>
        <div className="faq-list">
          {questions.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<span>+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
