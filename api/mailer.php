<?php

require_once __DIR__ . '/../vendor/autoload.php';

if(!isset($_POST['name'], $_POST['email'], $_POST['content'])) {
    header('Location: ../index.html');
    exit;
}
$to = "julius.duesseldorf@web.de";


$name = $_POST['name'];
$user_mail = $_POST['email'];
$content = $_POST['content'];

$resend = Resend::client(getenv('EMAIL_KEY'));



$resend->emails->send([
  'from' => 'Acme <noreply@1blaunitrox.de>',
  'to' => ['julius.duesseldorf@web.de'],
  'subject' => 'Kontaktanfrage von' . $name,
  'html' => $email . " " . $content,
]);

function extractDomainEnding($email) {
  $domain = substr(strrchr($email, "@"), 1);
  return $domain;
}

exit;

