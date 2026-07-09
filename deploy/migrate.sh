#!/usr/bin/env sh
# Applies the database schema to whatever DATABASE_URL points at.
# Run this once after the postgres container is up, and again after any
# future schema change in lib/db/src/schema.
#
# Usage (from repo root, with a running postgres container):
#   DATABASE_URL=postgres://beez:<password>@localhost:5432/beez_studio ./deploy/migrate.sh
#
# If you're using docker-compose, the postgres port isn't published by
# default — either add `ports: ["5432:5432"]` to the postgres service
# temporarily, or run this from a container on the same docker network.
set -e

if [ -z "$DATABASE_URL" ]; then
  echo "ERROR: DATABASE_URL is not set." >&2
  exit 1
fi

corepack enable
pnpm install --frozen-lockfile
pnpm --filter @workspace/db run push
