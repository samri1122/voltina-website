import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <div className="footer-logo-image">
            <img src="/images/voltina-logo.png" alt="Voltina Electronics" />
          </div>
          <p>ارائه‌دهنده‌ی خدمات تخصصی تعمیر، طراحی و فروش قطعات الکترونیکی.</p>
          <div className="social-row">
            <a href="https://instagram.com/VOLTINA_C" target="_blank" rel="noopener" aria-label="اینستاگرام Voltina">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#8792A8">
                <path d="M12 2.2c-2.7 0-3 .01-4.1.06-1.1.05-1.8.2-2.4.45-.7.26-1.2.6-1.8 1.15-.55.55-.9 1.1-1.15 1.8-.24.6-.4 1.3-.45 2.4C2.01 9 2 9.3 2 12s.01 3 .06 4.1c.05 1.1.2 1.8.45 2.4.26.7.6 1.2 1.15 1.8.55.55 1.1.9 1.8 1.15.6.24 1.3.4 2.4.45C9 21.99 9.3 22 12 22s3-.01 4.1-.06c1.1-.05 1.8-.2 2.4-.45.7-.26 1.2-.6 1.8-1.15.55-.55.9-1.1 1.15-1.8.24-.6.4-1.3.45-2.4.05-1.1.06-1.4.06-4.1s-.01-3-.06-4.1c-.05-1.1-.2-1.8-.45-2.4a4.9 4.9 0 00-1.15-1.8 4.9 4.9 0 00-1.8-1.15c-.6-.24-1.3-.4-2.4-.45C15 2.01 14.7 2 12 2z" />
              </svg>
            </a>
            <a href="https://t.me/VOLTINA_C" target="_blank" rel="noopener" aria-label="کانال تلگرام Voltina">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#8792A8">
                <path d="M22 2L2.5 10.6c-1 .45-1 1.75.1 2.1l4.6 1.5 1.8 5.6c.3.95 1.5 1.15 2.1.35l2.5-3 4.9 3.6c.8.6 2 .2 2.2-.8L23.9 3.4c.2-1-.8-1.8-1.9-1.4zM8.7 14.7l-1.3-4.1 10.7-6.7-8.4 7.7-.3 3.1 1.9-2.4" />
              </svg>
            </a>
            <a href="https://wa.me/989015039653" target="_blank" rel="noopener" aria-label="واتساپ Voltina">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#8792A8">
                <path d="M12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2zm0 1.8a8.2 8.2 0 11-4.3 15.2l-.3-.2-2.8.9.9-2.7-.2-.3A8.2 8.2 0 0112 3.8z" />
              </svg>
            </a>
            <a href="https://youtube.com/@voltina" target="_blank" rel="noopener" aria-label="یوتیوب Voltina">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#8792A8">
                <path d="M23 12s0-3.5-.45-5.2c-.25-.94-.98-1.68-1.92-1.93C18.88 4.4 12 4.4 12 4.4s-6.88 0-8.63.47c-.94.25-1.67.99-1.92 1.93C1 8.5 1 12 1 12s0 3.5.45 5.2c.25.94.98 1.66 1.92 1.91C5.12 19.6 12 19.6 12 19.6s6.88 0 8.63-.49c.94-.25 1.67-.97 1.92-1.91C23 15.5 23 12 23 12z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h5>خدمات</h5>
          <ul>
            <li>
              <a href="#custom-project">ساخت پروژه اختصاصی</a>
            </li>
            <li>
              <a href="#repair-request">ثبت درخواست تعمیر</a>
            </li>
            <li>
              <a href="#order-form">ثبت سفارش خرید</a>
            </li>
            <li>
              <a href="https://wa.me/989015039653" target="_blank" rel="noopener">
                پشتیبانی فنی
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5>شرکت</h5>
          <ul>
            <li>
              <a href="#about">درباره ما</a>
            </li>
            <li>
              <a href="#portfolio">نمونه کارها</a>
            </li>
            <li>
              <Link href="/blog">وبلاگ</Link>
            </li>
            <li>
              <a href="#contact">تماس با ما</a>
            </li>
          </ul>
        </div>

        <div>
          <h5>ارتباط</h5>
          <ul>
            <li>
              <a href="#contact">ایران، خراسان رضوی، مشهد</a>
            </li>
            <li>
              <a href="tel:+989015039653" dir="ltr">
                0901 503 9653
              </a>
            </li>
            <li>
              <a href="mailto:sam864116@gmail.com">sam864116@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} Voltina. تمامی حقوق محفوظ است.</p>
      </div>
    </footer>
  );
}
