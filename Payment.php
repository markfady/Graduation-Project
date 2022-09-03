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

if (isset($_POST["Donate"])) {
$FullName = mysqli_real_escape_string($con, $_POST["FullName"]);
$email = mysqli_real_escape_string($con, $_POST["email"]);
$Address = mysqli_real_escape_string($con, md5($_POST["Address"]));
$City = mysqli_real_escape_string($con, md5($_POST["City"]));
$ZipCode = mysqli_real_escape_string($con, md5($_POST["ZipCode"]));
$Nameoncard = mysqli_real_escape_string($con, md5($_POST["Nameoncard"]));
$CardNumber = mysqli_real_escape_string($con, md5($_POST["CardNumber"]));
$expmonth = mysqli_real_escape_string($con, md5($_POST["expmonth"]));
$expyear = mysqli_real_escape_string($con, md5($_POST["expyear"]));
$cvv = mysqli_real_escape_string($con, md5($_POST["cvv"]));




  $email = mysqli_real_escape_string($con, $_POST["email"]);
    $sql = "INSERT INTO payment (FullName	,email	,Address,	City ,ZipCode	,Nameoncard	,CardNumber	,expmonth	,expyear	,cvv)
     VALUES ('$FullName', '$email', '$Address', '$City' , '$ZipCode' , '$Nameoncard' , '$CardNumber' , '$expmonth' , '$expyear' , '$cvv ')";
    $result = mysqli_query($con, $sql);
    echo "<script>alert('Donation successfully')</script>";

    if ($result) {
      $_POST["FullName"] = "";
      $_POST["email"] = "";
      $_POST["Address"] = "";
      $_POST["City"] = "";
      $_POST["ZipCode"] = "";
      $_POST["Nameoncard"] = "";
      $_POST["CardNumber"] = "";
      $_POST["expmonth"] = "";
      $_POST["cvv"] = "";

} 
}

$con->close();