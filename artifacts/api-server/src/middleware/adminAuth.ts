import { Request, Response, NextFunction } from "express";
import { verifyToken, type AdminTokenPayload } from "../lib/auth";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      admin?: AdminTokenPayload;
    }
  }
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    res.status(401).json({ error: "Authentication required" });
    return;
  }
  try {
    req.admin = verifyToken(authHeader.slice(7));
    next();
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}

export function requireRoot(req: Request, res: Response, next: NextFunction) {
  requireAdmin(req, res, () => {
    if (req.admin?.role !== "root") {
      res.status(403).json({ error: "Root access required" });
      return;
    }
    next();
  });
}
