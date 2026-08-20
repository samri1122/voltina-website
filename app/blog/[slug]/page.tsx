import type { Metadata } from "next";
import SafeImage from "@/components/SafeImage";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import Footer from "@/components/Footer";
import BlogHeader from "@/components/BlogHeader";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | وبلاگ Voltina`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.description, type: "article", images: [post.image] },
  };
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://voltina-website.vercel.app";
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${siteUrl}${post.image}`,
    inLanguage: "fa-IR",
    author: { "@type": "Organization", name: "Voltina Electronics" },
    publisher: { "@type": "Organization", name: "Voltina Electronics" },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <>
      <BlogHeader backHref="/blog" backLabel="بازگشت به مقالات" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

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
      <Footer />
    </>
  );
}
