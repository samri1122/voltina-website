import nodemailer from "nodemailer";

const TYPE_LABELS: Record<string, string> = {
  repair: "درخواست تعمیر جدید",
  order: "سفارش خرید جدید",
  project: "درخواست ساخت پروژه جدید",
};

function getTransporter() {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const password = process.env.SMTP_PASS?.replace(/\s/g, "");

  if (!host || !user || !password || !process.env.NOTIFY_EMAIL?.trim()) {
    throw new Error(
      "Email settings are incomplete. Set NOTIFY_EMAIL, SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER and SMTP_PASS in Vercel."
    );
  }

  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 465),
    secure: process.env.SMTP_SECURE !== "false",
    auth: {
      user,
      // Google shows App Passwords in groups of four characters. Whitespace is not part of the password.
      pass: password,
    },
  });
}

interface SendOptions {
  type: "repair" | "order" | "project";
  fields: Record<string, string>;
  attachment?: { filename: string; buffer: Buffer } | null;
}

export async function sendNotification({ type, fields, attachment }: SendOptions) {
  const label = TYPE_LABELS[type] || "پیام جدید از سایت";

  const rows = Object.entries(fields)
    .filter(([, v]) => v !== undefined && v !== null && v !== "")
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;color:#666;font-size:13px;white-space:nowrap;">${k}</td><td style="padding:6px 12px;font-size:14px;">${String(
          v
        ).replace(/</g, "&lt;")}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:Tahoma,Arial,sans-serif;direction:rtl;max-width:600px;">
      <h2 style="color:#2F6FEB;">${label}</h2>
      <table style="border-collapse:collapse;width:100%;">${rows}</table>
      ${attachment ? `<p>فایل ضمیمه: ${attachment.filename}</p>` : ""}
      <p style="color:#999;font-size:12px;margin-top:20px;">این ایمیل به‌صورت خودکار از سایت Voltina ارسال شده است.</p>
    </div>
  `;

  const transporter = getTransporter();

  await transporter.sendMail({
    from: `"Voltina Website" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFY_EMAIL,
    subject: `${label} — Voltina`,
    html,
    attachments: attachment ? [{ filename: attachment.filename, content: attachment.buffer }] : undefined,
  });
}
