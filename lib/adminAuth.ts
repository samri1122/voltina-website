import "server-only";
import crypto from "crypto";

export const ADMIN_COOKIE = "voltina_admin_session";
const SESSION_DURATION_MS = 1000 * 60 * 60 * 12;

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET باید حداقل ۳۲ کاراکتر باشد.");
  }
  return secret;
}

function sign(value: string) {
  return crypto.createHmac("sha256", getSecret()).update(value).digest("base64url");
}

export function isValidAdminPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;

  const suppliedBuffer = Buffer.from(password);
  const expectedBuffer = Buffer.from(expected);
  return suppliedBuffer.length === expectedBuffer.length && crypto.timingSafeEqual(suppliedBuffer, expectedBuffer);
}

export function createAdminSession() {
  const expiresAt = Date.now() + SESSION_DURATION_MS;
  const value = `admin.${expiresAt}`;
  return { value: `${value}.${sign(value)}`, expiresAt };
}

export function isValidAdminSession(token?: string) {
  if (!token) return false;
  const [role, expiresAt, signature] = token.split(".");
  if (role !== "admin" || !expiresAt || !signature || Number(expiresAt) < Date.now()) return false;

  const expected = sign(`${role}.${expiresAt}`);
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  return signatureBuffer.length === expectedBuffer.length && crypto.timingSafeEqual(signatureBuffer, expectedBuffer);
}
