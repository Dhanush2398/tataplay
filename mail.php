<?php

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';
$number = $_POST['number'] ?? '';


$to = ""; 


$subject = "New contact from $name";
$txt = "Name: $name\nPhone: $number\nEmail: $email\nMessage:\n$message";
$headers = "From: $email";


if (!empty($email) && !empty($message)) {
    mail($to, $subject, $txt, $headers);
}


header("Location: thankyou.html");
exit;
?>
