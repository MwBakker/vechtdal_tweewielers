<?php     
	$to_email = 'info@vechtdaltweewielers.nl';
	$subject = 'Contactformulier - ' . $_POST['subject'];
	$message = $_POST['message'];
	$headers = 'From: ' . $POST['emails'];
	mail($to_email, $subject, $message, $headers);
?>