import jwt from "jsonwebtoken";

export interface AdminTokenPayload {
  id: number;
  username: string;
  role: "root" | "editor";
  displayName: string | null;
}

function getJwtSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error("SESSION_SECRET environment variable must be set for JWT signing.");
  }
  return secret;
}

const JWT_EXPIRES_IN = "7d";

export function signToken(payload: AdminTokenPayload): string {
  return jwt.sign(payload as object, getJwtSecret(), { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(token: string): AdminTokenPayload {
  const decoded = jwt.verify(token, getJwtSecret());
  return decoded as unknown as AdminTokenPayload;
}
