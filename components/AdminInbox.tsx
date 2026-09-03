"use client";

import { useRouter } from "next/navigation";
import type { ContactMessage } from "@/lib/db";

function formatDate(iso: string) {
  return new Date(iso).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function AdminInbox({ messages }: { messages: ContactMessage[] }) {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  return (
    <section className="mx-auto max-w-[900px] px-6 pt-[130px] pb-24 md:pt-24">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="mb-1.5 text-[0.78rem] font-extrabold tracking-[0.14em] text-cherry-light uppercase">Admin</p>
          <h1 className="font-display text-2xl font-bold text-text">
            Messages <span className="text-text-soft">({messages.length})</span>
          </h1>
        </div>
        <button
          onClick={handleLogout}
          className="rounded-full border-2 border-border px-5 py-2.5 text-[0.85rem] font-bold text-text transition-all hover:border-cherry hover:bg-cherry/10"
        >
          Sign out
        </button>
      </div>

      {messages.length === 0 ? (
        <p className="rounded-[20px] border border-border bg-surface p-8 text-center text-[0.95rem] text-text-soft">
          No messages yet. Submissions from the contact form and chat widget will show up here.
        </p>
      ) : (
        <div className="grid gap-4">
          {messages.map((m) => (
            <div key={m.id} className="rounded-[20px] border border-border bg-surface p-6">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-1 text-[0.7rem] font-bold uppercase ${
                      m.source === "chat" ? "bg-navy-light/20 text-navy-light" : "bg-cherry/14 text-cherry-light"
                    }`}
                  >
                    {m.source === "chat" ? "Chat" : "Form"}
                  </span>
                  {m.name && <span className="font-semibold text-text">{m.name}</span>}
                  {m.email && (
                    <a href={`mailto:${m.email}`} className="text-[0.85rem] text-text-soft hover:text-cherry-light">
                      {m.email}
                    </a>
                  )}
                </div>
                <span className="text-[0.78rem] text-text-soft">{formatDate(m.created_at)}</span>
              </div>
              <p className="text-[0.95rem] leading-relaxed whitespace-pre-wrap text-text-soft">{m.message}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
