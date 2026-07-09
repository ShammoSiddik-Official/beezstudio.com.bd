<?php
/**
 * Copy this file to config.php (same folder) and fill in your real values.
 * config.php contains secrets — never share it or commit it to git.
 */

// cPanel > MySQL Databases: host is almost always "localhost".
define('DB_HOST', 'localhost');
define('DB_PORT', 3306);
define('DB_NAME', 'yourcpaneluser_beez');
define('DB_USER', 'yourcpaneluser_beez');
define('DB_PASS', 'your-database-password');

// Signs admin login tokens AND doubles as the one-time setup token used to
// create the first admin account. Generate with:
//   php -r "echo bin2hex(random_bytes(32));"
define('JWT_SECRET', 'change-me-to-a-long-random-string');

// Powers the site's AI chatbot. Get one at https://aistudio.google.com/apikey
define('GEMINI_API_KEY', 'your-gemini-api-key');
