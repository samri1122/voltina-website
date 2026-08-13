import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE, isValidAdminSession } from "@/lib/adminAuth";

const contentFiles = [
  ["محصولات فروشگاه", "data/products.ts"],
  ["نمونه‌کارها", "data/portfolio.ts"],
  ["مقالات وبلاگ", "data/blog.ts"],
  ["خدمات", "data/services.ts"],
  ["نظرات مشتریان", "data/testimonials.ts"],
];

export default function AdminPage() {
  const session = cookies().get(ADMIN_COOKIE)?.value;
  if (!isValidAdminSession(session)) redirect("/admin/login");

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div><p style={styles.eyebrow}>VOLTINA</p><h1 style={styles.title}>پنل مدیریت</h1></div>
        <form action="/api/admin/logout" method="post"><button style={styles.logout}>خروج امن</button></form>
      </header>
      <section style={styles.notice}>
        <strong>درخواست‌های سایت</strong>
        <p>سفارش‌ها، درخواست تعمیر و پروژه‌های سفارشی به ایمیل تنظیم‌شده در <code>NOTIFY_EMAIL</code> ارسال می‌شوند.</p>
      </section>
      <section>
        <h2 style={styles.heading}>مدیریت محتوای سایت</h2>
        <p style={styles.muted}>داده‌های فعلی سایت در فایل‌های زیر نگهداری می‌شوند. پس از ویرایش، سایت را دوباره deploy کنید.</p>
        <div style={styles.grid}>
          {contentFiles.map(([title, file]) => <article key={file} style={styles.card}><h3>{title}</h3><code>{file}</code></article>)}
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: { minHeight: "100vh", padding: "min(6vw, 72px)", background: "#f5f8fb", color: "#152535" },
  header: { display: "flex", justifyContent: "space-between", gap: "20px", alignItems: "center", maxWidth: "1000px", margin: "0 auto 36px" },
  eyebrow: { margin: 0, color: "#0589b4", fontWeight: 800, letterSpacing: "0.1em" },
  title: { margin: "5px 0", fontSize: "2rem" },
  logout: { padding: "10px 14px", border: "1px solid #b8c7d2", borderRadius: "8px", background: "white", font: "inherit", cursor: "pointer" },
  notice: { maxWidth: "1000px", margin: "0 auto 42px", padding: "24px", borderRadius: "14px", background: "#e0f7ff", border: "1px solid #a5e7f7" },
  heading: { maxWidth: "1000px", margin: "0 auto 8px" },
  muted: { maxWidth: "1000px", margin: "0 auto 20px", color: "#51697a" },
  grid: { maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "16px" },
  card: { padding: "20px", background: "white", border: "1px solid #dce6ed", borderRadius: "12px", boxShadow: "0 4px 16px #1133550d" },
} as const;
