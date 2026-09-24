import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://voltina-website.vercel.app";
  const lastModified = new Date();
  return [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/projects`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/projects/order`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/repairs`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/shop`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    ...blogPosts.map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
