<?php

/* 
Name: Hahna Seaman
Class: Web Development With PHP and MySQL
Date: December 12, 2023 
*/

define('DB_USER', 'root');
define('DB_PASSWORD', 'bingbing');
define('DB_HOST', 'localhost');
define('DB_NAME', 'message_board');

// Make the connection:
$dbc = @mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

// Check the connection:
if (mysqli_connect_errno()) {
    die('Could not connect to MySQL: ' . mysqli_connect_error());
}

// Set the encoding...
mysqli_set_charset($dbc, 'utf8');
?>
