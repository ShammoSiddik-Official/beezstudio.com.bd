<?php
define('BEEZ_APP', true);
require __DIR__ . '/../config.php';
require __DIR__ . '/../lib/response.php';
require __DIR__ . '/../lib/db.php';
require __DIR__ . '/../lib/jwt.php';
require __DIR__ . '/../lib/auth.php';

apply_cors();
require_admin();

if ($_SERVER['REQUEST_METHOD'] !== 'GET') send_error('Method not allowed', 405);

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

$totalContacts = (int) db()->query('SELECT COUNT(*) AS c FROM contacts')->fetch()['c'];
$totalProjects = (int) db()->query('SELECT COUNT(*) AS c FROM projects')->fetch()['c'];
$totalUsers = (int) db()->query('SELECT COUNT(*) AS c FROM admin_users')->fetch()['c'];
$recentContacts = db()->query('SELECT * FROM contacts ORDER BY created_at DESC LIMIT 5')->fetchAll();

send_json([
    'totalContacts' => $totalContacts,
    'totalProjects' => $totalProjects,
    'totalUsers' => $totalUsers,
    'recentContacts' => array_map('row_to_contact', $recentContacts),
]);
