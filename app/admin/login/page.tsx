type LoginPageProps = { searchParams: { error?: string } };

export default function AdminLoginPage({ searchParams }: LoginPageProps) {
  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <p style={styles.eyebrow}>VOLTINA</p>
        <h1 style={styles.title}>ورود به مدیریت</h1>
        <p style={styles.description}>این بخش فقط برای مدیر سایت است.</p>
        {searchParams.error && <p style={styles.error}>رمز عبور نادرست است.</p>}
        <form action="/api/admin/login" method="post" style={styles.form}>
          <label htmlFor="password">رمز عبور مدیریت</label>
          <input id="password" name="password" type="password" autoComplete="current-password" required style={styles.input} />
          <button type="submit" style={styles.button}>ورود</button>
        </form>
      </section>
    </main>
  );
}

const styles = {
  page: { minHeight: "100vh", display: "grid", placeItems: "center", padding: "24px", background: "#06111c", color: "#eef7ff" },
  card: { width: "min(100%, 420px)", padding: "36px", borderRadius: "18px", background: "#102235", boxShadow: "0 20px 60px #0008" },
  eyebrow: { margin: 0, color: "#4dd5ff", fontWeight: 800, letterSpacing: "0.12em" },
  title: { margin: "12px 0 8px", fontSize: "1.8rem" },
  description: { margin: "0 0 24px", color: "#b6c9d9" },
  error: { padding: "10px", borderRadius: "8px", background: "#5a1720", color: "#ffd6d9" },
  form: { display: "grid", gap: "10px" },
  input: { padding: "12px", borderRadius: "8px", border: "1px solid #58718a", font: "inherit" },
  button: { marginTop: "8px", padding: "12px", border: 0, borderRadius: "8px", background: "#23b8e6", color: "#06111c", font: "inherit", fontWeight: 800, cursor: "pointer" },
} as const;
