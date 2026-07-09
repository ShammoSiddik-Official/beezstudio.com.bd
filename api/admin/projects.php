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

function row_to_project(array $r): array {
    return [
        'id' => (int) $r['id'],
        'title' => $r['title'],
        'category' => $r['category'],
        'slug' => $r['slug'],
        'description' => $r['description'],
        'imageUrl' => $r['image_url'],
        'location' => $r['location'],
        'year' => $r['year'],
        'featured' => (bool) $r['featured'],
        'published' => (bool) $r['published'],
        'createdAt' => $r['created_at'],
        'updatedAt' => $r['updated_at'],
    ];
}

if ($method === 'GET' && $id === null) {
    $rows = db()->query('SELECT * FROM projects ORDER BY created_at DESC')->fetchAll();
    send_json(array_map('row_to_project', $rows));
}

if ($method === 'POST' && $id === null) {
    $b = read_json_body();
    $title = trim((string) ($b['title'] ?? ''));
    $category = trim((string) ($b['category'] ?? ''));
    $slug = trim((string) ($b['slug'] ?? ''));
    if ($title === '' || $category === '' || $slug === '') send_error('Invalid data', 400);

    $stmt = db()->prepare(
        'INSERT INTO projects (title, category, slug, description, image_url, location, year, featured, published, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())'
    );
    $stmt->execute([
        $title, $category, $slug,
        $b['description'] ?? null, $b['imageUrl'] ?? null, $b['location'] ?? null, $b['year'] ?? null,
        !empty($b['featured']) ? 1 : 0,
        array_key_exists('published', $b) ? (!empty($b['published']) ? 1 : 0) : 1,
    ]);
    $id = (int) db()->lastInsertId();
    $stmt = db()->prepare('SELECT * FROM projects WHERE id = ?');
    $stmt->execute([$id]);
    send_json(row_to_project($stmt->fetch()), 201);
}

if ($method === 'PUT' && $id !== null) {
    $b = read_json_body();
    $fields = [];
    $values = [];
    foreach ([
        'title' => 'title', 'category' => 'category', 'slug' => 'slug',
        'description' => 'description', 'imageUrl' => 'image_url',
        'location' => 'location', 'year' => 'year',
    ] as $jsKey => $col) {
        if (array_key_exists($jsKey, $b)) { $fields[] = "$col = ?"; $values[] = $b[$jsKey]; }
    }
    if (array_key_exists('featured', $b)) { $fields[] = 'featured = ?'; $values[] = !empty($b['featured']) ? 1 : 0; }
    if (array_key_exists('published', $b)) { $fields[] = 'published = ?'; $values[] = !empty($b['published']) ? 1 : 0; }

    if (count($fields) === 0) send_error('Invalid data', 400);

    $fields[] = 'updated_at = NOW()';
    $values[] = $id;
    $stmt = db()->prepare('UPDATE projects SET ' . implode(', ', $fields) . ' WHERE id = ?');
    $stmt->execute($values);

    $selectStmt = db()->prepare('SELECT * FROM projects WHERE id = ?');
    $selectStmt->execute([$id]);
    $row = $selectStmt->fetch();
    if (!$row) send_error('Not found', 404);
    send_json(row_to_project($row));
}

if ($method === 'DELETE' && $id !== null) {
    db()->prepare('DELETE FROM projects WHERE id = ?')->execute([$id]);
    send_json(['success' => true]);
}

send_error('Not found', 404);
