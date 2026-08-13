import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, createAdminSession, isValidAdminPassword } from "@/lib/adminAuth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const password = formData.get("password");

  if (typeof password !== "string" || !isValidAdminPassword(password)) {
    return NextResponse.redirect(new URL("/admin/login?error=1", request.url), 303);
  }

  const session = createAdminSession();
  const response = NextResponse.redirect(new URL("/admin", request.url), 303);
  response.cookies.set(ADMIN_COOKIE, session.value, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(session.expiresAt),
  });
  return response;
}
