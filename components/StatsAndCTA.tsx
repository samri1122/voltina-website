export default function StatsAndCTA() {
  return (
    <>
      <section className="stats">
        <div className="wrap stats-grid">
          <div>
            <strong>+۱۵۰</strong>
            <span>پروژه موفق</span>
          </div>
          <div>
            <strong>+۵</strong>
            <span>سال تجربه</span>
          </div>
          <div>
            <strong>+۱۰۰</strong>
            <span>مشتری راضی</span>
          </div>
          <div>
            <strong>۲۴/۷</strong>
            <span>پشتیبانی</span>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="wrap">
          <h3>آماده‌ی همکاری با شما هستیم</h3>
          <div className="cta-strip-btns">
            <a href="tel:+989015039653" className="btn-primary">
              تماس با ما
            </a>
            <a href="https://wa.me/989015039653" target="_blank" rel="noopener" className="btn-outline-light">
              واتس‌اپ
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
