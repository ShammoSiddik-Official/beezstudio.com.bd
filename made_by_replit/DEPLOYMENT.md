# Deploying BeeZ Studio to your own domain & hosting

This project is a pnpm monorepo with three services:

| Service | What it is | Source |
|---|---|---|
| `web` | Public site (Beez Studio) + Admin console (BeeZ Studio Console), served by nginx | `artifacts/beez-studio`, `artifacts/admin-panel` |
| `api-server` | Express API (contact form, AI chatbot, admin REST API) | `artifacts/api-server` |
| `postgres` | Database | — |

Everything you need to self-host is in the repo root: `docker-compose.yml`, `deploy/Dockerfile.api-server`, `deploy/Dockerfile.web`, `deploy/nginx.conf`.

The site is served as: `/` → public site, `/admin/` → admin console, `/api/*` → API. All three share one domain and one nginx entrypoint, so you only need **one** DNS record.

## 1. Prerequisites on your server

- A VM/host with Docker + Docker Compose installed (any provider: DigitalOcean, Hetzner, AWS EC2, a VPS, etc.)
- A domain name pointed at that server's IP (an `A` record, e.g. `beezstudio.com.bd` → `203.0.113.10`)
- Ports 80 and 443 open

## 2. Get the code onto your server

Push this repository to your own GitHub (see the `git-remote` skill if you need help), then on the server:

```bash
git clone https://github.com/<you>/<repo>.git beez-studio
cd beez-studio
```

## 3. Configure secrets

```bash
cp .env.example .env
```

Edit `.env` and set:
- `POSTGRES_PASSWORD` — any strong password
- `SESSION_SECRET` — generate with `openssl rand -hex 32`; this also doubles as the one-time admin bootstrap token
- `GEMINI_API_KEY` — from https://aistudio.google.com/apikey (powers the site's AI chatbot)

**Never commit `.env`.**

## 4. Build and start

```bash
docker compose up -d --build
```

This builds and starts three containers: `postgres`, `api-server`, `web` (nginx, published on port 80).

## 5. Apply the database schema

The schema lives in `lib/db/src/schema`. Push it to the running database once:

```bash
# Temporarily expose postgres so the host machine can reach it:
docker compose exec postgres sh -c 'echo ready'   # sanity check container is up

DATABASE_URL="postgres://beez:<POSTGRES_PASSWORD from .env>@localhost:5432/beez_studio" \
  bash -c 'docker compose port postgres 5432' # confirms mapping, or just run inside the network:

docker run --rm --network beez-studio_default \
  -e DATABASE_URL="postgres://beez:<POSTGRES_PASSWORD>@postgres:5432/beez_studio" \
  -v "$PWD":/app -w /app node:24-alpine \
  sh -c "corepack enable && pnpm install --frozen-lockfile && pnpm --filter @workspace/db run push"
```

Re-run this any time you change files under `lib/db/src/schema`.

## 6. Put TLS (HTTPS) in front of it

Pick ONE of these — do not skip this step, browsers will block a plaintext admin login on a real domain:

**Option A — Caddy or nginx-proxy-manager as an edge reverse proxy (simplest)**
Run a small Caddy container in front of the `web` container instead of publishing port 80 directly:
```
beezstudio.com.bd {
    reverse_proxy web:80
}
```
Caddy automatically issues and renews a free Let's Encrypt certificate.

**Option B — Your hosting platform's built-in TLS/CDN**
If you're using a platform like Render, Railway, Fly.io, or a load balancer (AWS ALB, Cloudflare), point it at this container's port 80 and let the platform terminate TLS — no changes needed here.

## 7. First-time admin setup

Visit `https://yourdomain.com/admin/`. Since the database is empty, you'll land on a **Setup** screen:
1. Enter the `SESSION_SECRET` value from your `.env` as the setup token
2. Choose a username, display name, and password for the first **root** admin account

From there, use the Users page (root only) to create the other admin accounts your team needs.

## 8. Updating the site later

```bash
git pull
docker compose up -d --build
```

If you changed the DB schema, also re-run step 5.

## Notes

- The chatbot (`/api/chat`) streams via Server-Sent Events — `deploy/nginx.conf` already disables proxy buffering for `/api/`, keep that if you customize it.
- Both frontends are static builds (Vite) baked into the `web` image — rebuilding the image is required after any frontend change, restarting the container is not enough.
- The `api-server` container doesn't require internet access except to call the Gemini API — no other outbound calls.
- If you outgrow a single VM, `postgres` can be swapped for a managed Postgres (e.g. RDS, Neon, Supabase) — just point `DATABASE_URL` at it and drop the `postgres` service from `docker-compose.yml`.
