import type { Metadata } from "next";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "وبلاگ Voltina — مقالات آموزشی الکترونیک",
  description:
    "مقالات آموزشی درباره‌ی تعمیر و نگهداری برد کنترل یخچال و فریزر، انتخاب منبع تغذیه سوئیچینگ، و راهنمای تعمیر یا تعویض برد الکترونیکی.",
};

export default function BlogIndexPage() {
  return (
    <>
      <header className="blog-header">
        <div className="wrap">
          <Link href="/" className="brand">
            Voltina
          </Link>
          <Link href="/" className="back">
            ← بازگشت به سایت
          </Link>
        </div>
      </header>

      <section className="blog-hero">
        <div className="wrap">
          <span className="eyebrow">وبلاگ آموزشی</span>
          <h1>مقالات آموزشی الکترونیک، تعمیرات و انتخاب قطعه</h1>
          <p>
            راهنماهای کوتاه و کاربردی درباره‌ی عیب‌یابی، تعمیر و انتخاب قطعات
            الکترونیکی — نوشته‌شده توسط تیم فنی Voltina.
          </p>
        </div>
      </section>

      <section className="blog-list">
        <div className="wrap">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card-img">
                  <SafeImage
                    src={post.image.replace("w=1200&h=460", "w=500&h=310")}
                    alt={post.title}
                    width={500}
                    height={310}
                  />
                </div>
                <div className="blog-card-body">
                  <span className="tag">{post.tag}</span>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
