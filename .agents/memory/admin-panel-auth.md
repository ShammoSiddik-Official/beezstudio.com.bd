---
name: Admin panel & auth setup
description: JWT auth, secure first-run setup flow, and db declaration rebuild requirement
---

## JWT Auth
- Signing in `artifacts/api-server/src/lib/auth.ts` via `getJwtSecret()` — reads `SESSION_SECRET` and throws if missing (no fallback)
- Admin routes under `/api/admin/…` require `Authorization: Bearer <token>` header
- RBAC: `requireAdmin` = any role, `requireRoot` = root only

## First-run bootstrap (no hardcoded credentials)
- `GET /api/admin/auth/setup-status` returns `{ setupRequired: true }` if the admin_users table is empty
- `POST /api/admin/auth/setup` creates the first root user; caller must supply SESSION_SECRET as the `setupToken` field — no users are ever seeded in code
- Admin panel shows a `/setup` page when `setupRequired` is true

**Why:** Hardcoded or seeded credentials create a predictable privileged account in any fresh environment. Using the operator-controlled SESSION_SECRET as the bootstrap token ensures only the deploy owner can create the first account.

## DB declaration rebuild
After adding new schema files to `lib/db/src/schema/`, run `pnpm run typecheck:libs` from workspace root before running api-server typecheck.

**Why:** Project references require built `.d.ts` in `lib/db/dist`; stale declarations cause TS2305 errors in api-server.
