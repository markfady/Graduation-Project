<?php
header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "grad"; 
$id = '';
$con = mysqli_connect($host, $user, $password,$dbname);

$method = $_SERVER['REQUEST_METHOD'];

if (!$con) {
die("Connection failed: " . mysqli_connect_error());
}


switch ($method) {
case 'GET':
$sql = "SELECT * FROM userss"; 
break;
case 'POST':
$firstname = mysqli_real_escape_string($con, $_POST["firstname"]);
$email = mysqli_real_escape_string($con, $_POST["email"]);
$password = mysqli_real_escape_string($con, md5($_POST["password"]));
$need = $_POST["need"];
$check_email = mysqli_num_rows(mysqli_query($con, "SELECT email FROM userss WHERE email='$email'"));



if ($check_email > 0) {
  echo "<script>alert('Email already exists in our database.');</script>";

  } else {
    $sql = "INSERT INTO userss (full_name, email, password , need) VALUES ('$firstname', '$email', '$password' , '$need')";
    $result = mysqli_query($con, $sql);
    header("Location: http://localhost:3000/Login");
    if ($result) {
      $_POST["firstname"] = "";
      $_POST["email"] = "";
      $_POST["password"] = "";
      $_POST["need"] = "";
  
}
}
break;
}
$con->close();