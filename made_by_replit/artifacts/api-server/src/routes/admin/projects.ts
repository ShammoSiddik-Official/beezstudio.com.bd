import { Router } from "express";
import { db, projectsTable, insertProjectSchema } from "@workspace/db";
import { eq, desc } from "drizzle-orm";
import { requireAdmin } from "../../middleware/adminAuth";

const router = Router();

router.get("/", requireAdmin, async (_req, res) => {
  const projects = await db.select().from(projectsTable).orderBy(desc(projectsTable.createdAt));
  res.json(projects);
});

router.post("/", requireAdmin, async (req, res) => {
  const result = insertProjectSchema.safeParse(req.body);
  if (!result.success) { res.status(400).json({ error: "Invalid data" }); return; }
  const [project] = await db.insert(projectsTable).values(result.data).returning();
  res.status(201).json(project);
});

router.put("/:id", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) { res.status(400).json({ error: "Invalid id" }); return; }
  const result = insertProjectSchema.partial().safeParse(req.body);
  if (!result.success) { res.status(400).json({ error: "Invalid data" }); return; }
  const [updated] = await db.update(projectsTable).set({ ...result.data, updatedAt: new Date() }).where(eq(projectsTable.id, id)).returning();
  if (!updated) { res.status(404).json({ error: "Not found" }); return; }
  res.json(updated);
});

router.delete("/:id", requireAdmin, async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) { res.status(400).json({ error: "Invalid id" }); return; }
  await db.delete(projectsTable).where(eq(projectsTable.id, id));
  res.json({ success: true });
});

export default router;
