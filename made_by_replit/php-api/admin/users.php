<?php
define('BEEZ_APP', true);
require __DIR__ . '/../config.php';
require __DIR__ . '/../lib/response.php';
require __DIR__ . '/../lib/db.php';
require __DIR__ . '/../lib/jwt.php';
require __DIR__ . '/../lib/auth.php';

apply_cors();
require_root();

$method = $_SERVER['REQUEST_METHOD'];
$id = isset($_GET['id']) ? (int) $_GET['id'] : null;

function row_to_user(array $r): array {
    return [
        'id' => (int) $r['id'],
        'username' => $r['username'],
        'email' => $r['email'],
        'role' => $r['role'],
        'displayName' => $r['display_name'],
        'createdAt' => $r['created_at'] ?? null,
        'lastLoginAt' => $r['last_login_at'] ?? null,
    ];
}

if ($method === 'GET' && $id === null) {
    $rows = db()->query('SELECT id, username, email, role, display_name, created_at, last_login_at FROM admin_users')->fetchAll();
    send_json(array_map('row_to_user', $rows));
}

if ($method === 'POST' && $id === null) {
    $b = read_json_body();
    $username = trim((string) ($b['username'] ?? ''));
    $email = trim((string) ($b['email'] ?? ''));
    $password = (string) ($b['password'] ?? '');
    $role = (string) ($b['role'] ?? '');
    $displayName = trim((string) ($b['displayName'] ?? ''));

    if ($username === '' || $email === '' || $password === '' || $role === '') send_error('All fields required', 400);
    if (!in_array($role, ['root', 'editor'], true)) send_error('Invalid role', 400);

    $passwordHash = password_hash($password, PASSWORD_BCRYPT, ['cost' => 12]);
    $stmt = db()->prepare(
        'INSERT INTO admin_users (username, email, password_hash, role, display_name, created_at) VALUES (?, ?, ?, ?, ?, NOW())'
    );
    $stmt->execute([$username, $email, $passwordHash, $role, $displayName !== '' ? $displayName : null]);
    $newId = (int) db()->lastInsertId();

    send_json([
        'id' => $newId,
        'username' => $username,
        'email' => $email,
        'role' => $role,
        'displayName' => $displayName !== '' ? $displayName : null,
    ], 201);
}

if ($method === 'PUT' && $id !== null) {
    $b = read_json_body();
    $fields = [];
    $values = [];

    if (!empty($b['username'])) { $fields[] = 'username = ?'; $values[] = $b['username']; }
    if (!empty($b['email'])) { $fields[] = 'email = ?'; $values[] = $b['email']; }
    if (!empty($b['role'])) {
        if (!in_array($b['role'], ['root', 'editor'], true)) send_error('Invalid role', 400);
        $fields[] = 'role = ?'; $values[] = $b['role'];
    }
    if (array_key_exists('displayName', $b)) { $fields[] = 'display_name = ?'; $values[] = $b['displayName']; }
    if (!empty($b['password'])) { $fields[] = 'password_hash = ?'; $values[] = password_hash($b['password'], PASSWORD_BCRYPT, ['cost' => 12]); }

    if (count($fields) === 0) send_error('Invalid data', 400);

    $values[] = $id;
    db()->prepare('UPDATE admin_users SET ' . implode(', ', $fields) . ' WHERE id = ?')->execute($values);

    $selectStmt = db()->prepare('SELECT id, username, email, role, display_name, created_at, last_login_at FROM admin_users WHERE id = ?');
    $selectStmt->execute([$id]);
    $row = $selectStmt->fetch();
    if (!$row) send_error('Not found', 404);
    send_json(row_to_user($row));
}

if ($method === 'DELETE' && $id !== null) {
    db()->prepare('DELETE FROM admin_users WHERE id = ?')->execute([$id]);
    send_json(['success' => true]);
}

send_error('Not found', 404);
