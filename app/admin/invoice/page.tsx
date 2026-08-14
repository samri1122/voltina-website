import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { InvoiceStudio } from "@/components/InvoiceStudio";
import { ADMIN_COOKIE, isValidAdminSession } from "@/lib/adminAuth";

export default function InvoicePage() {
  const session = cookies().get(ADMIN_COOKIE)?.value;
  if (!isValidAdminSession(session)) redirect("/admin/login");

  return <InvoiceStudio />;
}
