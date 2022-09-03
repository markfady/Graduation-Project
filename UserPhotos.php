<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
$serverName="localhost";
$username="root";
$password="";
$databaseName="grad";
$conn=mysqli_connect($serverName,$username,$password,$databaseName);

$msg = "";
if (isset($_POST['upload'])) {

$target="images/".basename($_FILES['image']['name']);
$image=$_FILES['image']['name'];
$number=$_POST['number'];
$description=$_POST['description'];
$sql="INSERT INTO donations(image ,phone,description) VALUES('$image','$number','$description')";
mysqli_query($conn,$sql);

if(move_uploaded_file($_FILES['image'] ['tmp_name'], $target)){ 
	echo "<script>alert('image Uploaded')</script>";
}  
	else{
		echo "<script>alert('image not uploaded')</script>";
	}
} 	
?>
