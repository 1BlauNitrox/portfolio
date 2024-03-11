<?php

require_once __DIR__ . '/../vendor/autoload.php';

if(!isset($_POST['name'], $_POST['email'], $_POST['content'])) {
    header('Location: ../index.html');
    exit;
}
$to = "julius.duesseldorf@web.de";


$name = $_POST['name'];
$email = $_POST['email'];
$content = $_POST['content'];

$resend = Resend::client(getenv('EMAIL_KEY'));



$resend->emails->send([
  'from' => '1BlauNitrox <noreply@1blaunitrox.de>',
  'to' => ['julius.duesseldorf@web.de'],
  'subject' => 'Kontaktanfrage von ' . $name,
  'html' => "Email: " . $email . "<br>" . $content,
]);


exit;

