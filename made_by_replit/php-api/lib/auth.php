<?php
if (!defined('BEEZ_APP')) { exit; }

function get_bearer_token(): ?string {
    $header = $_SERVER['HTTP_AUTHORIZATION'] ?? (function_exists('apache_request_headers') ? (apache_request_headers()['Authorization'] ?? '') : '');
    if (stripos($header, 'Bearer ') === 0) {
        return substr($header, 7);
    }
    return null;
}

/** Returns the admin token payload, or sends a 401 and exits. */
function require_admin(): array {
    $token = get_bearer_token();
    if (!$token) send_error('Authentication required', 401);
    $payload = jwt_verify($token);
    if (!$payload) send_error('Invalid or expired token', 401);
    return $payload;
}

/** Returns the admin token payload, or sends a 401/403 and exits. */
function require_root(): array {
    $admin = require_admin();
    if (($admin['role'] ?? '') !== 'root') send_error('Root access required', 403);
    return $admin;
}
