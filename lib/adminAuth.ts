import { createHmac, timingSafeEqual } from "crypto";

export const SESSION_COOKIE = "admin_session";
const TOKEN_MESSAGE = "riham-portfolio-admin";

function sign(secret: string): string {
  return createHmac("sha256", secret).update(TOKEN_MESSAGE).digest("hex");
}

export function isAdminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}

export function checkPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function createSessionToken(): string | null {
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret) return null;
  return sign(secret);
}

export function isValidSessionToken(token: string | undefined | null): boolean {
  const secret = process.env.ADMIN_PASSWORD;
  if (!secret || !token) return false;
  const expected = sign(secret);
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
