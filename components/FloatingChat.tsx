"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CONTACT_EMAIL = "rihamha1920@icloud.com";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      document.addEventListener("mousedown", onClickOutside);
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!message.trim()) return;
    const subject = encodeURIComponent("Quick chat message from your portfolio");
    const body = encodeURIComponent(`${message}${email ? `\n\n— reply to: ${email}` : ""}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="fixed right-5 bottom-5 z-50 sm:right-7 sm:bottom-7">
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 bottom-[calc(100%+16px)] w-[min(340px,85vw)] overflow-hidden rounded-[20px] border border-border bg-surface shadow-[0_20px_60px_-15px_rgb(0_0_0_/_70%)]"
          >
            <div className="flex items-center justify-between bg-gradient-to-br from-cherry to-navy px-5 py-4">
              <p className="font-display text-[1.05rem] font-bold text-white">💬 Quick chat</p>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="grid h-7 w-7 place-items-center rounded-full text-white/90 transition-colors hover:bg-white/15"
              >
                ✕
              </button>
            </div>

            <div className="p-5">
              {sent ? (
                <p className="text-[0.92rem] leading-relaxed text-text-soft">
                  Your email app should now be open with the message ready — hit send there and I&apos;ll reply soon. 👋
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-3">
                  <p className="mb-1 text-[0.88rem] leading-relaxed text-text-soft">
                    Hey! Send a quick message and I&apos;ll get back to you.
                  </p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email (optional)"
                    className="w-full rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-[0.88rem] text-text placeholder:text-text-soft/60 outline-none transition-colors focus:border-cherry"
                  />
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message"
                    className="w-full resize-none rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 text-[0.88rem] text-text placeholder:text-text-soft/60 outline-none transition-colors focus:border-cherry"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-gradient-to-br from-cherry to-navy px-4 py-2.5 text-[0.88rem] font-bold text-white transition-transform hover:-translate-y-0.5"
                  >
                    Send message
                  </button>
                </form>
              )}

              <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
                <span className="text-[0.78rem] text-text-soft">Or:</span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="grid h-8 w-8 place-items-center rounded-full border border-border bg-surface-2 text-text-soft transition-colors hover:border-cherry/40 hover:text-cherry-light"
                  aria-label="Email"
                >
                  <svg viewBox="0 0 24 24" width="15" height="15">
                    <path
                      fill="currentColor"
                      d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.3 7.06 5.6a1.2 1.2 0 0 0 1.48 0l7.06-5.6a.6.6 0 0 0-.3-1.05H4.5a.6.6 0 0 0-.3 1.05Z"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/Riham-Awol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-8 w-8 place-items-center rounded-full border border-border bg-surface-2 text-text-soft transition-colors hover:border-cherry/40 hover:text-cherry-light"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" width="15" height="15">
                    <path
                      fill="currentColor"
                      d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.2.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with me"}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-cherry to-navy text-white shadow-[0_10px_30px_-8px_rgb(227_28_79_/_60%)]"
      >
        {!open && (
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-cherry/40" aria-hidden="true" />
        )}
        {open ? (
          <span className="text-xl leading-none">✕</span>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8l-4.4 3.3A.5.5 0 0 1 3 20V5a1 1 0 0 1 1-1Z"
            />
          </svg>
        )}
      </motion.button>
    </div>
  );
}
