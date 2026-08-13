import { NextRequest, NextResponse } from "next/server";
import { sendNotification } from "@/lib/mailer";
import { isValidIranPhone, missingFields, findPhoneField } from "@/lib/validate";
import { isRateLimited } from "@/lib/rateLimit";

export const runtime = "nodejs";

const REQUIRED = ["orderName", "orderPhone", "orderProduct", "orderAddress"];

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "تعداد درخواست‌ها بیش از حد مجاز است، کمی بعد دوباره تلاش کنید." },
      { status: 429 }
    );
  }

  try {
    const formData = await req.formData();
    const fields: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === "string") fields[key] = value;
    });

    const missing = missingFields(fields, REQUIRED);
    if (missing.length) {
      return NextResponse.json({ ok: false, error: "فیلدهای الزامی خالی است.", missing }, { status: 400 });
    }

    const phoneField = findPhoneField(fields);
    if (phoneField && !isValidIranPhone(fields[phoneField])) {
      return NextResponse.json({ ok: false, error: "شماره تماس معتبر نیست." }, { status: 400 });
    }

    await sendNotification({ type: "order", fields });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "خطای سرور. لطفاً دوباره تلاش کنید." }, { status: 500 });
  }
}
