import { cookies } from "next/headers";
import type { Metadata } from "next";
import { isAdminConfigured, isValidSessionToken, SESSION_COOKIE } from "@/lib/adminAuth";
import { listMessages } from "@/lib/db";
import AdminLogin from "@/components/AdminLogin";
import AdminInbox from "@/components/AdminInbox";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin — Riham Awol",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  const authed = isValidSessionToken(token);

  if (!authed) {
    return <AdminLogin configured={isAdminConfigured()} />;
  }

  const messages = await listMessages();
  return <AdminInbox messages={messages} />;
}
