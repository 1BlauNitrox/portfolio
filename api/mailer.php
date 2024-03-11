<?php

require_once __DIR__ . '/../vendor/autoload.php';

/*if(!isset($_POST['name'], $_POST['email'], $_POST['content'])) {
    header('Location: ../index.html');
    exit;
}*/
$to = "julius.duesseldorf@web.de";
/*$name = $_POST['name'];
$user_mail = $_POST['email'];
$content = $_POST['content'];*/
$name = "Test User";
$user_mail = "julius@wekaonline.com";
$content = "jwehdg wehgd weghudwjhedb";

$resend = Resend::client(getenv('EMAIL_KEY'));

echo getenv("EMAIL_KEY");
echo "<br>";

$resend->emails->send([
  'from' => 'Acme <' . $user_mail . '>',
  'to' => ['julius.duesseldorf@web.de'],
  'subject' => 'Kontaktanfrage von' . $name,
  'html' => $content,
]);
exit;

