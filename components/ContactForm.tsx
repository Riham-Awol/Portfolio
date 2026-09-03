"use client";

import { useState, type FormEvent } from "react";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "sending" | "sent" | "fallback";
type Intent = "hire" | "freelance" | "collab" | "hello";

const CONTACT_EMAIL = "rihamha1920@gmail.com";

const INTENTS: { id: Intent; label: string; emoji: string }[] = [
  { id: "hire", label: "Hire me", emoji: "🟣" },
  { id: "freelance", label: "Freelance project", emoji: "🔵" },
  { id: "collab", label: "Collaboration", emoji: "🟢" },
  { id: "hello", label: "Just saying hi", emoji: "🟡" },
];

const MESSAGE_PLACEHOLDER: Record<Intent, string> = {
  hire: "Tell me a bit about the role...",
  freelance: "What are you looking to build?",
  collab: "What did you have in mind?",
  hello: "Hey! Just wanted to say...",
};

export default function ContactForm() {
  const [intent, setIntent] = useState<Intent>("hire");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "That doesn't look like a valid email.";
    if (!message.trim()) next.message = "Please add a short message.";
    return next;
  }

  function buildFullMessage() {
    const intentLabel = INTENTS.find((i) => i.id === intent)?.label ?? "";
    const extra =
      intent === "hire" && (company || position)
        ? [company && `Company: ${company}`, position && `Position: ${position}`].filter(Boolean).join("\n") + "\n\n"
        : "";
    return `[${intentLabel}]\n${extra}${message}`;
  }

  function openMailtoFallback() {
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${buildFullMessage()}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("fallback");
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: buildFullMessage(), source: "form" }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
    } catch {
      openMailtoFallback();
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-[0.95rem] text-text placeholder:text-text-soft/60 outline-none transition-colors focus:border-cherry";

  if (status === "sent") {
    return (
      <div className="grid gap-2 py-6 text-center">
        <p className="text-3xl">✅</p>
        <p className="font-display text-lg text-text">Message sent</p>
        <p className="text-[0.92rem] text-text-soft">Thanks, {name.split(" ")[0]}! I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      <div>
        <label className="mb-2 block text-[0.85rem] font-semibold text-text-soft">What are you looking for?</label>
        <div className="grid grid-cols-2 gap-2">
          {INTENTS.map((i) => (
            <button
              key={i.id}
              type="button"
              onClick={() => setIntent(i.id)}
              className={`rounded-xl border px-3.5 py-2.5 text-left text-[0.85rem] font-semibold transition-all ${
                intent === i.id
                  ? "border-cherry bg-cherry/14 text-text"
                  : "border-border bg-surface-2 text-text-soft hover:border-cherry/30"
              }`}
            >
              {i.emoji} {i.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-[0.85rem] font-semibold text-text-soft">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={inputClass}
        />
        {errors.name && <p className="mt-1.5 text-[0.8rem] text-cherry-light">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-[0.85rem] font-semibold text-text-soft">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={inputClass}
        />
        {errors.email && <p className="mt-1.5 text-[0.8rem] text-cherry-light">{errors.email}</p>}
      </div>

      {intent === "hire" && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="company" className="mb-1.5 block text-[0.85rem] font-semibold text-text-soft">
              Company
            </label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company name"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="position" className="mb-1.5 block text-[0.85rem] font-semibold text-text-soft">
              Position
            </label>
            <input
              id="position"
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Role you're hiring for"
              className={inputClass}
            />
          </div>
        </div>
      )}

      <div>
        <label htmlFor="message" className="mb-1.5 block text-[0.85rem] font-semibold text-text-soft">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={MESSAGE_PLACEHOLDER[intent]}
          className={`${inputClass} resize-none`}
        />
        {errors.message && <p className="mt-1.5 text-[0.8rem] text-cherry-light">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="justify-self-start rounded-full bg-gradient-to-br from-cherry to-navy px-[26px] py-3.5 font-bold text-white shadow-[0_8px_24px_-10px_rgb(232_93_158_/_55%)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      <p className="text-[0.82rem] text-text-soft">
        {status === "fallback"
          ? "Couldn't send directly, so I opened your email app instead with everything pre-filled — hit send there."
          : "I'll see it as soon as you send it — and get back to you as soon as I can."}
      </p>
    </form>
  );
}
