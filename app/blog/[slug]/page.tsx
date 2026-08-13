import type { Metadata } from "next";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | وبلاگ Voltina`,
    description: post.description,
  };
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <header className="blog-header">
        <div className="wrap">
          <Link href="/" className="brand">
            Voltina
          </Link>
          <Link href="/blog" className="back">
            ← بازگشت به وبلاگ
          </Link>
        </div>
      </header>

      <article className="blog-article">
        <div className="article-hero-img">
          <SafeImage src={post.image} alt={post.title} width={1200} height={460} />
        </div>
        <div className="wrap">
          <h1>{post.title}</h1>
          <div className="meta">تیم فنی Voltina — {post.tag}</div>

          <div dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />

          <div className="cta-box">
            <p>سوالی درباره‌ی این موضوع دارید؟</p>
            <a
              href="https://wa.me/989015039653"
              target="_blank"
              rel="noopener"
              className="f-submit"
              style={{ display: "inline-block", textDecoration: "none" }}
            >
              مشاوره در واتساپ
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
