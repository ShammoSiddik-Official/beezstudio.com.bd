<?php
define('BEEZ_APP', true);
require __DIR__ . '/config.php';
require __DIR__ . '/lib/response.php';

apply_cors();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') send_error('Method not allowed', 405);

$body = read_json_body();
$messages = $body['messages'] ?? null;

if (!is_array($messages) || count($messages) === 0) {
    send_error('messages array is required', 400);
}

if (!defined('GEMINI_API_KEY') || GEMINI_API_KEY === '' || GEMINI_API_KEY === 'your-gemini-api-key') {
    send_error('AI service not configured', 500);
}

const SYSTEM_PROMPT = <<<'PROMPT'
You are BeeZ AI, the intelligent assistant for BeeZ Studio — a premier architectural consultancy and construction firm based in Dhaka, Bangladesh. You were established in 2007.

## About BeeZ Studio
- Full name: BeeZ Studio (Architectural Consultancy & Construction)
- Location: F-109, H-41/B, R-01, Dhanmondi R/A, Dhaka-1205, Bangladesh
- Founded: 2007 (17+ years of practice)
- Phone: +880 1711 18066 | Fax: +880 2 44612330
- Email: support@beezstudio.com.bd | info.beezstudio@gmail.com
- Website: www.beezstudio.com.bd

## Leadership
- CEO: Md. Harun-or-Rashid — over two decades of experience in architectural design and construction management
- The firm has a multidisciplinary team of architects, interior designers, structural engineers, project managers, CAD/BIM specialists, quantity surveyors, and landscape designers

## Services We Offer
1. Architecture & Planning — concept design through construction documentation for all building types
2. Interior Design — space planning, materials, lighting, furniture specification
3. Construction Management — full site oversight from mobilisation to handover
4. Industrial Construction — pre-engineered steel structures, factories, warehouses, processing plants
5. Landscape Design — gardens, plazas, public realm, ecological open spaces
6. Campus & Institutional Design — universities, schools, hospitals, medical facilities
7. Religious Architecture — mosques, temples, community prayer halls
8. Bridge & Infrastructure — pedestrian and vehicular bridges, civic infrastructure

## Our Project Categories
Industrial Steel Buildings, Commercial Buildings, Campus & Medical, Hospital Projects, Religious Projects, Apartment Buildings, Residential Hotels, Bungalows & Cottages, Interiors Design, Landscape Projects, Bridge Projects

## Notable Projects
- Lucerne Cocoa & Chocolate Products (Industrial)
- Hatirjhil Palace (Commercial)
- Ashiyan Medical College (Campus & Medical)
- Hotel International, Progoti Soroni (Residential Hotel)
- DSCSC Mosque, Mirpur Cantonment (Religious)
- Makka Tower G+13 (Apartment)

## Our Design Philosophy
- We consider the client as the soul of every project
- We integrate new technologies for greener, more sustainable structures
- We promote healthy lifestyles through design
- We use energy and water more judiciously, land and materials more creatively
- We reduce waste and pollution in all forms

## Your Role
Answer questions about:
- BeeZ Studio services, portfolio, team, and contact information
- Architecture, civil engineering, construction, and consulting topics
- Building design, materials, structural systems, and construction methods
- Interior design principles, space planning, and aesthetics
- Sustainable architecture and green building practices
- Bangladeshi architectural context and construction industry
- Project planning, permits, and construction management

Be professional, knowledgeable, and warm. Keep responses concise but thorough. If someone wants to start a project, guide them to contact BeeZ Studio.
PROMPT;

// --- SSE headers, matching the format the frontend already expects ---
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
header('Connection: keep-alive');
header('X-Accel-Buffering: no'); // disable buffering on nginx-fronted cPanel setups

// Turn off every layer of output buffering we can reach.
while (ob_get_level() > 0) { ob_end_flush(); }
ignore_user_abort(true);

$contents = [];
foreach ($messages as $m) {
    $role = ($m['role'] ?? 'user') === 'assistant' ? 'model' : 'user';
    $contents[] = ['role' => $role, 'parts' => [['text' => (string) ($m['content'] ?? '')]]];
}

$requestBody = json_encode([
    'contents' => $contents,
    'systemInstruction' => ['parts' => [['text' => SYSTEM_PROMPT]]],
    'generationConfig' => ['maxOutputTokens' => 8192],
]);

$url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse&key=' . GEMINI_API_KEY;

function emit(array $data): void {
    echo 'data: ' . json_encode($data) . "\n\n";
    flush();
}

$sseBuffer = '';
$rawBody = ''; // captured so we can inspect it if the upstream call fails/errors
$gotAnyContent = false;

$ch = curl_init($url);
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
    CURLOPT_POSTFIELDS => $requestBody,
    CURLOPT_TIMEOUT => 60,
    CURLOPT_WRITEFUNCTION => function ($curl, $chunk) use (&$sseBuffer, &$rawBody, &$gotAnyContent) {
        $rawBody .= $chunk;
        $sseBuffer .= $chunk;
        $lines = explode("\n", $sseBuffer);
        $sseBuffer = array_pop($lines) ?? '';

        foreach ($lines as $line) {
            $line = trim($line);
            if (!str_starts_with($line, 'data: ')) continue;
            $json = json_decode(substr($line, 6), true);
            $text = $json['candidates'][0]['content']['parts'][0]['text'] ?? null;
            if ($text !== null) {
                $gotAnyContent = true;
                emit(['content' => $text]);
            }
        }
        return strlen($chunk);
    },
]);

$ok = curl_exec($ch);
$curlErrno = curl_errno($ch);
$httpStatus = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// A transport-level failure, a non-2xx upstream response, or a 2xx response
// that never yielded any text (e.g. safety block, malformed stream) are all
// treated as errors so the frontend doesn't silently show an empty reply.
if ($ok === false || $curlErrno !== 0 || $httpStatus < 200 || $httpStatus >= 300 || !$gotAnyContent) {
    error_log('BeeZ chat upstream failure: httpStatus=' . $httpStatus . ' curlErrno=' . $curlErrno . ' body=' . substr($rawBody, 0, 2000));
    emit(['error' => 'Failed to generate response']);
} else {
    emit(['done' => true]);
}
exit;
