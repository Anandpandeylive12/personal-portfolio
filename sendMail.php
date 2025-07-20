<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'anandpandeylive12@gmail.com';
        $mail->Password = 'sjmb wvuv dflc mmzq'; // Gmail App password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Validate input before using
        $fromEmail = $_POST['email'] ?? '';
        $fromName = $_POST['name'] ?? '';
        $subject = $_POST['subject'] ?? '';
        $message = $_POST['message'] ?? '';

        $mail->setFrom($fromEmail, $fromName);
        $mail->addAddress('anandpandeylive12@gmail.com');

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = nl2br(htmlspecialchars($message));
        $mail->AltBody = strip_tags($message);

        $mail->send();
        header("Location: index.html?status=success");
        exit;
    } catch (Exception $e) {
        echo "Message failed: {$mail->ErrorInfo}";
    }
}
?>
