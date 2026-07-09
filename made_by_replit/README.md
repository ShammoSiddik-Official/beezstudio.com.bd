# BeeZ Studio — self-hosted package

This folder is a complete, self-contained copy of the BeeZ Studio project —
everything needed to build and run it on your own domain and hosting,
independent of Replit. Download **only this folder** for that purpose.

## Publishing on cPanel (recommended for you)

If your host's cPanel has **no "Setup Node.js App" section** and only offers
**MySQL/MariaDB** — read **`DEPLOYMENT-CPANEL.md`** and use the **`php-api/`**
folder. This runs the entire site (public site, admin console, contact form,
AI chatbot, admin panel) on plain PHP + MySQL, which every cPanel host
supports out of the box — no Node.js process, no external service.

## Publishing on a VPS / Docker host

If you instead have a host that supports Docker or a persistent Node.js
process (a VPS, Railway, Render, Fly.io, etc.), read **`DEPLOYMENT.md`** and
use `docker-compose.yml` + `deploy/` — this runs the original Node/Express +
PostgreSQL backend unchanged.

## What's inside

- `artifacts/beez-studio` — public website source (React/Vite)
- `artifacts/admin-panel` — BeeZ Studio Console (admin) source (React/Vite)
- `artifacts/api-server` — Node/Express backend source (for the VPS/Docker path)
- `php-api/` — PHP + MySQL backend (for the cPanel path)
- `lib/` — shared packages (database schema, API types/client) — used by the Node path only
- `scripts/` — workspace build helper
- `deploy/` — Dockerfiles and nginx config (VPS/Docker path)
- `docker-compose.yml`, `.env.example`, `.dockerignore` — container orchestration (VPS/Docker path)
- `DEPLOYMENT-CPANEL.md` — **start here if using cPanel**
- `DEPLOYMENT.md` — start here if using a VPS/Docker host
