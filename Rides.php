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
$sql = "SELECT * FROM rides"; 
break;
case 'POST':
$Departure = $_POST["Departure"];
$destination = $_POST["Going"];
$Date = $_POST["Date"];
$sql = "INSERT INTO rides  (location , destination, arrival_time) values ('$Departure', '$destination' , '$Date')"; 
break;
}

// run SQL statement
$result = mysqli_query($con,$sql);

// die if SQL statement failed
if (!$result) {
http_response_code(404);
die(mysqli_error($con));
}

if ($method == 'GET') {
if (!$id) echo '[';
for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
}
if (!$id) echo ']';
} elseif ($method == 'POST') {
echo json_encode($result);
} else {
mysqli_affected_rows($con);
}

$con->close();