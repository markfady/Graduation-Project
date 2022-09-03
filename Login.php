<?php
session_start();
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


if (isset($_POST["signin"])) {
  $email = mysqli_real_escape_string($conn, $_POST["email"]);
  $password = mysqli_real_escape_string($conn, md5($_POST["password"]));

  $check_email = mysqli_query($conn, "SELECT id FROM userss WHERE email='$email' AND password='$password'");
  $getnname = mysqli_query($conn, "SELECT * FROM userss WHERE email='$email' AND password='$password'");
 if (mysqli_num_rows($check_email) > 0) {
   $row = mysqli_fetch_assoc($getnname);
   $_SESSION["user_id"] = $row['id']; 
   $_SESSION["name"] = $row['full_name']; 
   $_SESSION["email"] = $row['email'];

   include 'Session.php';
   header("Location: http://localhost:3000/UserDashBoard");

 }
   
	else{
		echo "<script>alert('Please ReCheck your email or password')</script>";
	}
}
  ?>
