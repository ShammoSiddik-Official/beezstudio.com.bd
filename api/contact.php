<?php
define('BEEZ_APP', true);
require __DIR__ . '/config.php';
require __DIR__ . '/lib/response.php';
require __DIR__ . '/lib/db.php';

apply_cors();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') send_error('Method not allowed', 405);

$body = read_json_body();
$name = trim((string)($body['name'] ?? ''));
$email = trim((string)($body['email'] ?? ''));
$phone = trim((string)($body['phone'] ?? ''));
$subject = trim((string)($body['subject'] ?? ''));
$message = trim((string)($body['message'] ?? ''));

if ($name === '' || $email === '' || $subject === '' || $message === '') {
    send_error('Invalid data', 400);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    send_error('Invalid data', 400);
}

try {
    $stmt = db()->prepare(
        'INSERT INTO contacts (name, email, phone, subject, message, created_at) VALUES (?, ?, ?, ?, ?, NOW())'
    );
    $stmt->execute([$name, $email, $phone !== '' ? $phone : null, $subject, $message]);
    send_json(['success' => true, 'id' => (int) db()->lastInsertId()]);
} catch (Throwable $e) {
    send_error('Failed to save message', 500);
}
