<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $message = htmlspecialchars($_POST["message"]);
  $to = "lpea2019@yahoo.com"; //  votre adresse e-mail
  $subject = "Nouveau message du formulaire";
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  $headers .= 'From: <lpea2019@yahoo.com>' . "\r\n"; // votre adresse e-mail
  $message = "<html><body>" . $message . "</body></html>"; //Enveloppe le message en HTML
  mail($to, $subject, $message, $headers);
  echo "E-mail envoyé avec succès!";
}
?>