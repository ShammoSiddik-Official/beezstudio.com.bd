# Deploying BeeZ Studio on cPanel (no Node.js, MySQL only)

This is the path for hosts where cPanel has **no "Setup Node.js App" section**
and only offers **MySQL/MariaDB**. Everything runs on PHP + MySQL — no
external service required.

Layout on your domain (`beezstudio.com.bd`):
- `/` → the public website (static build)
- `/admin/` → BeeZ Studio Console, the admin panel (static build)
- `/api/` → the PHP backend (contact form, AI chatbot, admin API)

## 1. Create the MySQL database

In cPanel → **MySQL Databases**:
1. Create a database, e.g. `beez` (cPanel will prefix it, e.g. `youruser_beez`)
2. Create a database user with a strong password
3. Add that user to the database with **All Privileges**

In cPanel → **phpMyAdmin**: select the new database → **Import** →
upload `php-api/schema.sql` from this package. This creates the 4 tables
(`contacts`, `projects`, `admin_users`, `chat_messages`).

## 2. Configure the backend

1. Copy `php-api/config.example.php` to `php-api/config.php`
2. Fill in:
   - `DB_HOST` (almost always `localhost`)
   - `DB_NAME`, `DB_USER`, `DB_PASS` (from step 1, full prefixed names)
   - `JWT_SECRET` — generate one locally: `php -r "echo bin2hex(random_bytes(32));"` (or use any long random string). This also doubles as your admin **setup token**.
   - `GEMINI_API_KEY` — from https://aistudio.google.com/apikey (powers the AI chatbot)

## 3. Build the two frontends

You need Node.js on your own computer (not on the server) to build these —
cPanel only needs to serve the finished, already-built files.

```bash
corepack enable
pnpm install
pnpm --filter @workspace/db run typecheck   # skip if it errors, not required for a static build
BASE_PATH=/ pnpm --filter @workspace/beez-studio run build
BASE_PATH=/admin/ pnpm --filter @workspace/admin-panel run build
```

This produces:
- `artifacts/beez-studio/dist/public/` — the public site
- `artifacts/admin-panel/dist/public/` — the admin console

## 4. Upload everything via cPanel File Manager (or FTP)

Upload so the result looks like this under `public_html/`:

```
public_html/
├── (everything from artifacts/beez-studio/dist/public/)   ← site files at the root
├── admin/
│   └── (everything from artifacts/admin-panel/dist/public/)
└── api/
    └── (everything from php-api/, including your edited config.php)
```

Two `.htaccess` files matter:
- `public_html/.htaccess` — SPA fallback for the public site (create this, see below)
- `public_html/admin/.htaccess` — SPA fallback for the admin console (same content)
- `public_html/api/.htaccess` — already included in `php-api/.htaccess`, routes clean URLs to the right PHP file

Create `public_html/.htaccess` and `public_html/admin/.htaccess` with:
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^api/ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```
(For the `admin/.htaccess`, change `RewriteBase /` to `RewriteBase /admin/` and the last line to `RewriteRule . /admin/index.html [L]`.)

## 5. Enable HTTPS

cPanel → **SSL/TLS Status** → run **AutoSSL** (most hosts do this automatically
for domains added to cPanel). Confirm `https://beezstudio.com.bd` loads with a
valid certificate before going further — the admin login will not work safely
without it.

## 6. First-time admin setup

Visit `https://beezstudio.com.bd/admin/`. You'll land on a **Setup** screen:
1. Enter your `JWT_SECRET` value (from `config.php`) as the setup token
2. Choose a username, display name, and password for the first root admin account

Then use the Users page (root only) to add the rest of your team.

## Notes & limitations on shared hosting

- **Chatbot streaming**: `api/chat.php` streams the AI response using PHP's
  `flush()`. Most cPanel/Apache+PHP-FPM setups support this, but some hosts
  buffer output regardless (common with certain caching/CDN layers, e.g.
  Cloudflare proxying). If the chatbot appears to "hang" and then dump the
  whole answer at once instead of streaming, that's output buffering on the
  host's side — the feature still works, it just won't animate token-by-token.
- **Ask your host/provider** if you get stuck on: enabling `mod_rewrite` (needed
  for the `.htaccess` rules — nearly always on by default), the exact database
  host string if it isn't `localhost`, or increasing the PHP `max_execution_time`
  if chatbot replies get cut off (ask for at least 60 seconds on the `api/`
  folder — this is a standard, safe request to make to shared-hosting support).
- **Updating later**: after any code change, rebuild the two frontends (step 3)
  and re-upload the changed `dist/public` contents; for backend changes, just
  re-upload the changed `.php` files, no build step needed for those.
