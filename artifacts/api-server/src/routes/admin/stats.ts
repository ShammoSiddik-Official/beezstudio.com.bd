import { Router } from "express";
import { db, contactsTable, projectsTable, adminUsersTable } from "@workspace/db";
import { count, desc } from "drizzle-orm";
import { requireAdmin } from "../../middleware/adminAuth";

const router = Router();

router.get("/", requireAdmin, async (_req, res) => {
  const [[{ totalContacts }], [{ totalProjects }], [{ totalUsers }], recentContacts] = await Promise.all([
    db.select({ totalContacts: count() }).from(contactsTable),
    db.select({ totalProjects: count() }).from(projectsTable),
    db.select({ totalUsers: count() }).from(adminUsersTable),
    db.select().from(contactsTable).orderBy(desc(contactsTable.createdAt)).limit(5),
  ]);
  res.json({ totalContacts, totalProjects, totalUsers, recentContacts });
});

export default router;
