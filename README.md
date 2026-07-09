# BeeZ Studio

Architecture consultancy website (Dhaka, Bangladesh) with a public-facing site, an admin console, and a cPanel-compatible PHP + MySQL backend.

## Folder Layout

```
/
├── api/                    # PHP + MySQL backend (production, cPanel-ready)
│   ├── .htaccess
│   ├── config.example.php
│   ├── schema.sql
│   ├── chat.php            # Gemini chatbot proxy
│   ├── contact.php         # contact form endpoint
│   └── admin/              # admin API endpoints
├── artifacts/
│   ├── beez-studio/        # public website (React + Vite)
│   └── admin-panel/        # admin console (React + Vite)
├── docs/
│   ├── DEPLOYMENT-CPANEL.md
│   └── DEPLOYMENT.md
├── scripts/                # Replit/post-merge scripts
└── exports/                # generated download packages
```

## cPanel Deployment (current path)

Use the generated package in `exports/beez-studio-cpanel-complete.zip` or follow `docs/DEPLOYMENT-CPANEL.md`.

- The public site builds into the root path `/`.
- The admin console builds into `/admin/`.
- The PHP API lives at `/api/`.

## Development

```bash
# Public site
pnpm --filter @workspace/beez-studio run dev

# Admin console
pnpm --filter @workspace/admin-panel run dev
```

The PHP API is plain PHP and can be run locally with PHP's built-in server and MySQL/MariaDB.
