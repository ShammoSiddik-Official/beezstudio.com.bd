import { Router } from "express";
import bcrypt from "bcryptjs";
import { db, adminUsersTable } from "@workspace/db";
import { eq, count } from "drizzle-orm";
import { signToken } from "../../lib/auth";
import { requireAdmin } from "../../middleware/adminAuth";

const router = Router();

/** Returns whether the admin panel needs first-time setup */
router.get("/setup-status", async (_req, res) => {
  const [{ total }] = await db.select({ total: count() }).from(adminUsersTable);
  res.json({ setupRequired: total === 0 });
});

/**
 * First-time setup: create the initial root account.
 * Protected by SESSION_SECRET — the operator must know this value to bootstrap.
 * Only works when no users exist yet.
 */
router.post("/setup", async (req, res) => {
  const [{ total }] = await db.select({ total: count() }).from(adminUsersTable);
  if (total > 0) {
    res.status(403).json({ error: "Setup already completed" });
    return;
  }

  const { setupToken, username, password, displayName } = req.body as Record<string, string>;

  const expectedToken = process.env.SESSION_SECRET;
  if (!expectedToken || setupToken !== expectedToken) {
    res.status(401).json({ error: "Invalid setup token" });
    return;
  }

  if (!username || !password || password.length < 8) {
    res.status(400).json({ error: "Username and password (min 8 chars) required" });
    return;
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const email = `${username}@beezstudio.com.bd`;
  const [user] = await db
    .insert(adminUsersTable)
    .values({ username, email, passwordHash, role: "root", displayName: displayName || username })
    .returning();

  const token = signToken({ id: user.id, username: user.username, role: user.role, displayName: user.displayName });
  res.status(201).json({ token, user: { id: user.id, username: user.username, role: user.role, displayName: user.displayName } });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body as { username?: string; password?: string };
  if (!username || !password) {
    res.status(400).json({ error: "Username and password required" });
    return;
  }

  const [user] = await db.select().from(adminUsersTable).where(eq(adminUsersTable.username, username));
  if (!user) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }

  await db.update(adminUsersTable).set({ lastLoginAt: new Date() }).where(eq(adminUsersTable.id, user.id));

  const token = signToken({ id: user.id, username: user.username, role: user.role, displayName: user.displayName });
  res.json({ token, user: { id: user.id, username: user.username, role: user.role, displayName: user.displayName } });
});

router.get("/me", requireAdmin, (req, res) => {
  res.json(req.admin);
});

export default router;
