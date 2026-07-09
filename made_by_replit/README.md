# BeeZ Studio — self-hosted package

This folder is a complete, self-contained copy of the BeeZ Studio project —
everything needed to build and run it on your own domain and hosting,
independent of Replit. Download **only this folder** for that purpose.

## What's inside

- `artifacts/beez-studio` — public website source
- `artifacts/admin-panel` — BeeZ Studio Console (admin) source
- `artifacts/api-server` — backend API source
- `lib/` — shared packages (database schema, API types/client)
- `scripts/` — workspace build helper
- `deploy/` — Dockerfiles and nginx config
- `docker-compose.yml`, `.env.example`, `.dockerignore` — container orchestration
- `DEPLOYMENT.md` — **start here** — full step-by-step hosting guide

## Quick start

```bash
cp .env.example .env
# edit .env with your own POSTGRES_PASSWORD, SESSION_SECRET, GEMINI_API_KEY
docker compose up -d --build
```

Then read `DEPLOYMENT.md` for DNS, TLS/HTTPS setup, database migration, and
first-time admin account creation.
