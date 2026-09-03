"use client";

import { useState, type FormEvent } from "react";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const CONTACT_EMAIL = "rihamha1920@icloud.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "That doesn't look like a valid email.";
    if (!message.trim()) next.message = "Please add a short message.";
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-[0.95rem] text-text placeholder:text-text-soft/60 outline-none transition-colors focus:border-cherry";

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
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

      <div>
        <label htmlFor="message" className="mb-1.5 block text-[0.85rem] font-semibold text-text-soft">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What are you working on?"
          className={`${inputClass} resize-none`}
        />
        {errors.message && <p className="mt-1.5 text-[0.8rem] text-cherry-light">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="justify-self-start rounded-full bg-gradient-to-br from-cherry to-navy px-[26px] py-3.5 font-bold text-white shadow-[0_8px_24px_-10px_rgb(227_28_79_/_55%)] transition-transform hover:-translate-y-0.5"
      >
        Send message
      </button>

      <p className="text-[0.82rem] text-text-soft">
        {sent
          ? "Your email app should now be open with the message ready — hit send there and I'll get back to you soon."
          : "This opens your email app with everything pre-filled, so you send it from your own address."}
      </p>
    </form>
  );
}
