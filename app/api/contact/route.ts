import { NextResponse } from "next/server";
import { Resend } from "resend";

const ADMIN_EMAIL = "rihamha1920@gmail.com";
const MAX_LEN = 5000;

type Body = {
  name?: string;
  email?: string;
  message?: string;
  source?: "form" | "chat";
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name ?? "").trim().slice(0, 200);
  const email = (body.email ?? "").trim().slice(0, 200);
  const message = (body.message ?? "").trim().slice(0, MAX_LEN);
  const source = body.source === "chat" ? "chat" : "form";

  if (!message) {
    return NextResponse.json({ ok: false, error: "Message is required." }, { status: 400 });
  }
  if (source === "form" && (!name || !email)) {
    return NextResponse.json({ ok: false, error: "Name and email are required." }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Email delivery isn't configured yet (missing RESEND_API_KEY)." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const subject =
    source === "chat"
      ? `Quick chat message from your portfolio${name ? ` — ${name}` : ""}`
      : `Portfolio contact from ${name}`;

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [ADMIN_EMAIL],
      replyTo: email || undefined,
      subject,
      text: [
        source === "chat" ? "New quick-chat message from your portfolio site." : "New contact form submission from your portfolio site.",
        "",
        name ? `Name: ${name}` : null,
        email ? `Email: ${email}` : null,
        "",
        message,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message || "Failed to send email." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to send email." }, { status: 502 });
  }
}
