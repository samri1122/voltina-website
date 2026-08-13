const steps = [
  { number: "۱", title: "ثبت درخواست در کمتر از ۲ دقیقه", description: "نوع دستگاه، مدل و نشانه‌های خرابی را ثبت کنید؛ اگر تصویر دارید همان‌جا ارسال کنید." },
  { number: "۲", title: "بررسی و اعلام مسیر درست", description: "کارشناس وضعیت را بررسی می‌کند و قبل از هر اقدامی، راهکار و برآورد را با شما هماهنگ می‌کند." },
  { number: "۳", title: "تعمیر، تست و تحویل", description: "پس از تعمیر، عملکرد دستگاه بررسی می‌شود تا با اطمینان تحویل بگیرید." },
];

export default function ServiceSteps() {
  return <section className="service-journey" aria-labelledby="journey-title"><div className="wrap">
    <div className="journey-intro"><div><span className="journey-kicker">روند شفاف خدمات</span><h2 id="journey-title">از خرابی دستگاه تا راه‌حل، سه قدم فاصله دارید</h2></div><a href="#repair-request" className="journey-link">ثبت درخواست تعمیر ←</a></div>
    <ol className="journey-steps">{steps.map((step) => <li key={step.number} className="journey-step"><span className="journey-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>)}</ol>
  </div></section>;
}
