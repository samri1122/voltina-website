import Link from "next/link";

type BlogHeaderProps = {
  backHref?: string;
  backLabel?: string;
};

export default function BlogHeader({
  backHref = "/",
  backLabel = "بازگشت به سایت",
}: BlogHeaderProps) {
  return (
    <header className="blog-header">
      <div className="wrap blog-header-inner">
        <Link href="/" className="blog-brand" aria-label="صفحه اصلی Voltina">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/voltina-mark.png" alt="Voltina" />
          <span>
            <b>VOLTINA</b>
            <small>دانشنامه الکترونیک</small>
          </span>
        </Link>
        <nav className="blog-nav" aria-label="ناوبری وبلاگ">
          <Link href="/">خانه</Link>
          <Link href="/shop">فروشگاه</Link>
          <Link href="/blog" className="active">وبلاگ</Link>
          <Link href={backHref} className="blog-back">
            {backLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
