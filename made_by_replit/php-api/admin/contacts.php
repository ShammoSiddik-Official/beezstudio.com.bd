<?php
define('BEEZ_APP', true);
require __DIR__ . '/../config.php';
require __DIR__ . '/../lib/response.php';
require __DIR__ . '/../lib/db.php';
require __DIR__ . '/../lib/jwt.php';
require __DIR__ . '/../lib/auth.php';

apply_cors();
require_admin();

$method = $_SERVER['REQUEST_METHOD'];
$id = isset($_GET['id']) ? (int) $_GET['id'] : null;

function row_to_contact(array $r): array {
    return [
        'id' => (int) $r['id'],
        'name' => $r['name'],
        'email' => $r['email'],
        'phone' => $r['phone'],
        'subject' => $r['subject'],
        'message' => $r['message'],
        'createdAt' => $r['created_at'],
    ];
}

if ($method === 'GET' && $id === null) {
    $rows = db()->query('SELECT * FROM contacts ORDER BY created_at DESC')->fetchAll();
    send_json(array_map('row_to_contact', $rows));
}

if ($method === 'DELETE' && $id !== null) {
    db()->prepare('DELETE FROM contacts WHERE id = ?')->execute([$id]);
    send_json(['success' => true]);
}

send_error('Not found', 404);
