<?php include 'sendemail.php'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact us Form Validation</title>
    <link rel="stylesheet" href="cu.css">
</head>
<body>
    <div class="wrapper">
        <h2> Contact us</h2>
        <div id="error_message"></div>
        <form id="myform" onsubmit=" return validation()">
            <div class="input_field">
                <input type="text" placeholder="Name" id="name">
            </div>
            <div class="input_field">
                <input type="text" placeholder="Phone" id="phone">
            </div>
            <div class="input_field">
                <input type="text" placeholder="Email" id="email">
            </div>
            <div class="input_field">
                <textarea id="message" placeholder="Message"></textarea>
            </div>
            <div class="btn">
                <input type="submit">
            </div>




        </form>

    </div>
    <script src="cu.js"></script>
</body>
</html>
