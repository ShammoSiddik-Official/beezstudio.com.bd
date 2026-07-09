import { Router } from "express";
import { db, contactsTable, insertContactSchema } from "@workspace/db";

const router = Router();

router.post("/contact", async (req, res) => {
  const result = insertContactSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ error: "Invalid data", details: result.error });
    return;
  }

  try {
    const [contact] = await db
      .insert(contactsTable)
      .values(result.data)
      .returning({ id: contactsTable.id });
    res.json({ success: true, id: contact.id });
  } catch (err) {
    res.status(500).json({ error: "Failed to save message" });
  }
});

export default router;
