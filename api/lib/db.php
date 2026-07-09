<?php
if (!defined('BEEZ_APP')) { exit; }

function db(): PDO {
    static $pdo = null;
    if ($pdo === null) {
        $port = defined('DB_PORT') && DB_PORT ? DB_PORT : 3306;
        $dsn = 'mysql:host=' . DB_HOST . ';port=' . $port . ';dbname=' . DB_NAME . ';charset=utf8mb4';
        try {
            $pdo = new PDO($dsn, DB_USER, DB_PASS, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ]);
        } catch (PDOException $e) {
            send_error('Database connection failed', 500);
        }
    }
    return $pdo;
}
