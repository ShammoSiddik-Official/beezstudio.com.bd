import { Router } from "express";
import bcrypt from "bcryptjs";
import { db, adminUsersTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { requireRoot } from "../../middleware/adminAuth";

const router = Router();

router.get("/", requireRoot, async (_req, res) => {
  const users = await db.select({
    id: adminUsersTable.id,
    username: adminUsersTable.username,
    email: adminUsersTable.email,
    role: adminUsersTable.role,
    displayName: adminUsersTable.displayName,
    createdAt: adminUsersTable.createdAt,
    lastLoginAt: adminUsersTable.lastLoginAt,
  }).from(adminUsersTable);
  res.json(users);
});

router.post("/", requireRoot, async (req, res) => {
  const { username, email, password, role, displayName } = req.body as Record<string, string>;
  if (!username || !email || !password || !role) {
    res.status(400).json({ error: "All fields required" }); return;
  }
  const passwordHash = await bcrypt.hash(password, 10);
  const [user] = await db.insert(adminUsersTable).values({
    username, email, passwordHash,
    role: role as "root" | "editor",
    displayName: displayName || null,
  }).returning({ id: adminUsersTable.id, username: adminUsersTable.username, role: adminUsersTable.role });
  res.status(201).json(user);
});

router.put("/:id", requireRoot, async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) { res.status(400).json({ error: "Invalid id" }); return; }
  const { username, email, password, role, displayName } = req.body as Record<string, string>;
  const update: Record<string, unknown> = {};
  if (username) update.username = username;
  if (email) update.email = email;
  if (role) update.role = role;
  if (displayName !== undefined) update.displayName = displayName;
  if (password) update.passwordHash = await bcrypt.hash(password, 10);
  const [updated] = await db.update(adminUsersTable).set(update).where(eq(adminUsersTable.id, id)).returning({ id: adminUsersTable.id, username: adminUsersTable.username, role: adminUsersTable.role });
  if (!updated) { res.status(404).json({ error: "Not found" }); return; }
  res.json(updated);
});

router.delete("/:id", requireRoot, async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) { res.status(400).json({ error: "Invalid id" }); return; }
  await db.delete(adminUsersTable).where(eq(adminUsersTable.id, id));
  res.json({ success: true });
});

export default router;
