// محدودکننده‌ی ساده‌ی نرخ درخواست (best-effort). در محیط‌های serverless که هر
// درخواست ممکنه روی یک نمونه‌ی جدید اجرا بشه، این محافظت کامل نیست، ولی روی
// سرورهای Node معمولی (VPS و مشابه) به‌خوبی کار می‌کنه.
const hits = new Map<string, number[]>();

const WINDOW_MS = 15 * 60 * 1000; // 15 دقیقه
const MAX_REQUESTS = 20;

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  hits.set(ip, timestamps);
  return timestamps.length > MAX_REQUESTS;
}
