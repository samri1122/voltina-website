import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE } from "@/lib/adminAuth";

export async function POST(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/admin/login", request.url), 303);
  response.cookies.set(ADMIN_COOKIE, "", { httpOnly: true, sameSite: "strict", path: "/", maxAge: 0 });
  return response;
}
