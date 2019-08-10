<?php

    $subject = $_POST['subject'];
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'Sound English soundenglishschool@gmail.com';
    $email_subject = $subject;
    $email_body = "Imię: $name.\n".
                    "Nazwisko: $surname.\n".
                        "Email: $email.\n".
                    "Wiadomość: $message.\n";

                    // $to = "soundenglishschool@gmail.com"
    $to = "tomasz.mojsiuk@gmail.com";
    $headers = "Od: $email_from \r\n";
    $headers .= "Odpowiedz to: $email \r\n";

    mail($to, $email_subject, $email_body, $headers);
    header("Location: ./Components/ContactForm/ContactForm.js");



?>