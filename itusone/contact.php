<?php

// configure
$from = 'Message from ItusOneTech.com <hello@itusonetech.com>';
$sendTo = 'Message from ItusOneTech.com <hello@itusonetech.com>';
$subject = 'New Message from ItusOneTech.com Contact Form';
$fields = array('name' => 'Name', 'email' => 'Email', 'message' => 'Message');

// array variable name => Text that will appear in the email
$okMessage = 'Contact form successfully submitted. Thank you. We will respond shortly';
$errorMessage = 'There was an error while submitting the form. Please try again later';

// Perform the sending

try
{
  $emailText = 'You have a new message from ItusOneTech.com Contact Form\n===========================\n';

  foreach ($_POST as $key => $value) {
    if (isset($fields[$ke])) {
      $emailText .= "$fields[$key]: $value\n";
    }
  }

  mail($sendTo, $subject, $emailText, "From: " . $from);

  $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
  $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
  $encode = json_encode($responseArray);

  header('Content-Type: application/json');

  echo $encoded;
}
else {
  echo responseArray['message'];
}
?>
