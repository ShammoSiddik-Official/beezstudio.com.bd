# BeeZ Studio Console — Redesign Source Package

This is the **admin console** (dashboard) for BeeZ Studio. It is a React + Vite + Tailwind CSS + shadcn/ui SPA. You can redesign it completely, but you must keep the following constraints so it still works on the user's cPanel shared hosting.

## Tech Stack

- React 19, TypeScript, Vite 7
- Tailwind CSS v4 (`@tailwindcss/vite` plugin)
- shadcn/ui components live in `src/components/ui/`
- TanStack Query for data fetching
- Wouter for client-side routing (must keep `base` from `import.meta.env.BASE_URL`)
- No backend runtime required; it talks to a PHP + MySQL API

## Build / Preview

```bash
pnpm install
pnpm run build
# Or for dev:
pnpm run dev
```

The Vite base path is already set to `/admin/` in `vite.config.ts`. Keep that so the production build works under `https://beezstudio.com.bd/admin/`.

## API Contract (do NOT change these paths)

All API calls go through `src/lib/api.ts`. The base is `/api` (root-relative). The PHP backend expects these exact endpoints and JSON shapes:

### Auth
- `GET /api/admin/auth/setup-status` → `{ setupRequired: boolean }`
- `POST /api/admin/auth/setup` → `{ setupToken, username, password, displayName? }` → `{ token, user }`
- `POST /api/admin/auth/login` → `{ username, password }` → `{ token, user }`
- `GET /api/admin/auth/me` (Bearer token) → `AdminUser`

### Dashboard
- `GET /api/admin/stats` (Bearer) → `{ totalContacts, totalProjects, totalUsers, recentContacts: Contact[] }`

### Contacts
- `GET /api/admin/contacts` (Bearer) → `Contact[]`
- `DELETE /api/admin/contacts/:id` (Bearer) → `{ success: true }`

### Projects
- `GET /api/admin/projects` (Bearer) → `Project[]`
- `POST /api/admin/projects` (Bearer) → `ProjectInput` → `Project`
- `PUT /api/admin/projects/:id` (Bearer) → `Partial<ProjectInput>` → `Project`
- `DELETE /api/admin/projects/:id` (Bearer) → `{ success: true }`

### Admin Users (root-only)
- `GET /api/admin/users` (Bearer) → `AdminUser[]`
- `POST /api/admin/users` (Bearer) → `UserInput` → `AdminUser`
- `PUT /api/admin/users/:id` (Bearer) → `Partial<UserInput>` → `AdminUser`
- `DELETE /api/admin/users/:id` (Bearer) → `{ success: true }`

## Data Shapes (camelCase from PHP — do not change)

```ts
interface AdminUser {
  id: number;
  username: string;
  email?: string;
  role: "root" | "editor";
  displayName: string | null;
  createdAt?: string;
  lastLoginAt?: string | null;
}

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  createdAt: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
  location: string | null;
  year: string | null;
  featured: boolean;
  published: boolean;
  createdAt: string;
}

interface ProjectInput {
  title: string;
  category: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  location?: string;
  year?: string;
  featured?: boolean;
  published?: boolean;
}

interface UserInput {
  username: string;
  email: string;
  password: string;
  role: "root" | "editor";
  displayName?: string;
}

interface Stats {
  totalContacts: number;
  totalProjects: number;
  totalUsers: number;
  recentContacts: Contact[];
}
```

## Hard Constraints

1. **cPanel static hosting** — the final output must be a `dist/` directory containing only static HTML, JS, CSS, and assets. No Node server, no SSR, no API routes in this package.
2. **Keep `/api` paths** — all data calls must stay relative to `/api` so the `.htaccess` rewrite on the PHP backend catches them.
3. **Keep localStorage token key** — the auth token is stored as `beez_admin_token` and sent as `Authorization: Bearer <token>`.
4. **Route base must stay `/admin/`** — do not change the Vite base path or the `WouterRouter` base logic in `App.tsx` unless the user explicitly asks.
5. **Root-only pages** — the `/users` route should remain restricted to `role === "root"`.
6. **Setup flow** — if `/api/admin/auth/setup-status` returns `setupRequired: true`, the app must show `SetupPage` first and block all other routes.

## What you may redesign freely

- Colors, typography, layout, dashboard widgets, navigation style, cards, tables, forms, loading states, empty states, animations.
- You may replace the current sidebar with a top bar, a drawer, or anything else.
- You may reorganize pages as long as the URL paths stay the same and the data flows through `src/lib/api.ts`.
- You may use any CSS approach that still compiles to a static Vite build.

## After redesign

Run `pnpm run build` and verify the `dist/` folder contains `index.html`, `assets/`, and no Node server code. The user will replace the `admin/` folder on cPanel with this `dist/` content.
