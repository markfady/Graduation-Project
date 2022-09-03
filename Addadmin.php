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
$sql = "SELECT * FROM admin"; 
break;
case 'POST':
$firstname = mysqli_real_escape_string($con, $_POST["firstname"]);
$email = mysqli_real_escape_string($con, $_POST["email"]);
$password = mysqli_real_escape_string($con, md5($_POST["password"]));

$check_email = mysqli_num_rows(mysqli_query($con, "SELECT admin_mail FROM admin WHERE admin_mail='$email'"));



if ($check_email > 0) {
echo "<script>alert('Email already exists in our database.');</script>";
header("Location: http://localhost:3000/DashBoard");

} else {
    $sql = "INSERT INTO admin (admin_name, admin_mail, password ) VALUES ('$firstname', '$email', '$password')";
    $result = mysqli_query($con, $sql);
    if ($result) {
      $_POST["firstname"] = "";
      $_POST["email"] = "";
      $_POST["password"] = "";
}
}
break;
}
$con->close();