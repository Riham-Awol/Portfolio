"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin({ configured }: { configured: boolean }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error || "Incorrect password.");
        setLoading(false);
        return;
      }
      router.refresh();
    } catch {
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[440px] flex-col justify-center px-6 pt-[130px] pb-24 md:pt-24">
      <h1 className="font-display mb-2 text-2xl font-bold text-text">Admin</h1>
      <p className="mb-8 text-[0.95rem] text-text-soft">Sign in to view contact form and chat messages.</p>

      {!configured ? (
        <p className="rounded-xl border border-border bg-surface p-4 text-[0.9rem] text-cherry-light">
          Admin login isn&apos;t configured yet — set the <code>ADMIN_PASSWORD</code> environment variable in Vercel.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            className="w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-[0.95rem] text-text placeholder:text-text-soft/60 outline-none transition-colors focus:border-cherry"
          />
          {error && <p className="text-[0.85rem] text-cherry-light">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="justify-self-start rounded-full bg-gradient-to-br from-cherry to-navy px-6 py-3 font-bold text-white shadow-[0_8px_24px_-10px_rgb(232_93_158_/_55%)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      )}
    </section>
  );
}
