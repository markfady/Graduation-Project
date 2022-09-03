<?php

header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "grad"; 
$id = '';
$conn = mysqli_connect($host, $user, $password,$dbname);

$method = $_SERVER['REQUEST_METHOD'];

if (!$conn) {
die("Connection failed: " . mysqli_connect_error());
}

session_start();

if(isset($_SESSION["email"])) {

  $email = $_SESSION["email"]; // Get Email from form

  $sql = "INSERT INTO comments (email)
      VALUES ('$email')";
  $result = mysqli_query($conn, $sql);
  if ($result) {
    echo "<script>alert('Email added successfully.')</script>";
    $email = "";
  } else {
    echo "<script>alert('Email does not add.')</script>";
  }
  
}


?>
