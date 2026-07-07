# Beez Studio

Beez Studio is an architectural consultancy and construction firm website for a Dhaka-based studio, showcasing projects, services, and a contact form.

## Run & Operate

- `pnpm --filter @workspace/beez-studio run dev` — run the frontend (Vite, reads `PORT`)
- `pnpm --filter @workspace/api-server run dev` — run the API server (Express 5, port via `PORT`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only, production schema managed by Replit Publish flow)
- Required env: `DATABASE_URL` — auto-provisioned by Replit (runtime-managed, do not set manually)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, Framer Motion, Wouter (routing), Radix UI / shadcn
- API: Express 5
- DB: PostgreSQL (Replit built-in) + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec in `lib/api-spec/openapi.yaml`)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/beez-studio/` — React frontend
- `artifacts/api-server/` — Express API server
- `lib/db/src/schema/` — Drizzle schema (source of truth for DB)
- `lib/api-spec/openapi.yaml` — OpenAPI spec (source of truth for API contract)
- `beez-studio.md` — product brief: pages, brand vision, content

## Architecture decisions

- API contract is defined in `openapi.yaml`; client hooks and Zod schemas are generated from it via Orval — do not hand-edit generated files in `lib/api-spec/src/`
- Production schema migrations are handled automatically by the Replit Publish flow (not via custom scripts or startup DDL)
- `DATABASE_URL` is runtime-managed by Replit — never set it as a secret or env var manually

## Product

Architecture consultancy website with pages for Home, Projects, Services, About Us, and Contact. Serves as a portfolio and lead-generation site for Beez Studio, Dhaka.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Run `pnpm --filter @workspace/api-spec run codegen` after any changes to `openapi.yaml` before editing frontend code that calls the API
- `drizzle-kit push` is for dev only; never write migration scripts for production

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
