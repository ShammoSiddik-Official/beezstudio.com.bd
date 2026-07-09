<?php
define('BEEZ_APP', true);
require __DIR__ . '/../config.php';
require __DIR__ . '/../lib/response.php';
require __DIR__ . '/../lib/db.php';
require __DIR__ . '/../lib/jwt.php';
require __DIR__ . '/../lib/auth.php';

apply_cors();

$action = $_GET['action'] ?? '';

function public_user(array $u): array {
    return [
        'id' => (int) $u['id'],
        'username' => $u['username'],
        'role' => $u['role'],
        'displayName' => $u['display_name'],
    ];
}

switch ($action) {
    case 'setup-status': {
        if ($_SERVER['REQUEST_METHOD'] !== 'GET') send_error('Method not allowed', 405);
        $total = (int) db()->query('SELECT COUNT(*) AS total FROM admin_users')->fetch()['total'];
        send_json(['setupRequired' => $total === 0]);
    }

    case 'setup': {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') send_error('Method not allowed', 405);

        $total = (int) db()->query('SELECT COUNT(*) AS total FROM admin_users')->fetch()['total'];
        if ($total > 0) send_error('Setup already completed', 403);

        $body = read_json_body();
        $setupToken = (string) ($body['setupToken'] ?? '');
        $username = trim((string) ($body['username'] ?? ''));
        $password = (string) ($body['password'] ?? '');
        $displayName = trim((string) ($body['displayName'] ?? ''));

        if (!hash_equals(JWT_SECRET, $setupToken)) send_error('Invalid setup token', 401);
        if ($username === '' || strlen($password) < 8) send_error('Username and password (min 8 chars) required', 400);

        $passwordHash = password_hash($password, PASSWORD_BCRYPT, ['cost' => 12]);
        $email = $username . '@beezstudio.com.bd';

        $stmt = db()->prepare(
            'INSERT INTO admin_users (username, email, password_hash, role, display_name, created_at) VALUES (?, ?, ?, ?, ?, NOW())'
        );
        $stmt->execute([$username, $email, $passwordHash, 'root', $displayName !== '' ? $displayName : $username]);
        $id = (int) db()->lastInsertId();

        $user = ['id' => $id, 'username' => $username, 'role' => 'root', 'display_name' => $displayName !== '' ? $displayName : $username];
        $token = jwt_sign(public_user($user));
        send_json(['token' => $token, 'user' => public_user($user)], 201);
    }

    case 'login': {
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') send_error('Method not allowed', 405);

        $body = read_json_body();
        $username = trim((string) ($body['username'] ?? ''));
        $password = (string) ($body['password'] ?? '');

        if ($username === '' || $password === '') send_error('Username and password required', 400);

        $stmt = db()->prepare('SELECT * FROM admin_users WHERE username = ? LIMIT 1');
        $stmt->execute([$username]);
        $user = $stmt->fetch();

        if (!$user || !password_verify($password, $user['password_hash'])) {
            send_error('Invalid credentials', 401);
        }

        db()->prepare('UPDATE admin_users SET last_login_at = NOW() WHERE id = ?')->execute([$user['id']]);

        $token = jwt_sign(public_user($user));
        send_json(['token' => $token, 'user' => public_user($user)]);
    }

    case 'me': {
        $admin = require_admin();
        send_json($admin);
    }

    default:
        send_error('Unknown action', 404);
}
