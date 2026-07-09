import { Router } from "express";
import authRouter from "./auth";
import contactsRouter from "./contacts";
import projectsRouter from "./projects";
import usersRouter from "./users";
import statsRouter from "./stats";

const router = Router();

router.use("/auth", authRouter);
router.use("/contacts", contactsRouter);
router.use("/projects", projectsRouter);
router.use("/users", usersRouter);
router.use("/stats", statsRouter);

export default router;
