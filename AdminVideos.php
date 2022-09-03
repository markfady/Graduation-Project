<?php

header('Access-Control-Allow-Origin: http://localhost:3000');
$serverName="localhost";
$username="root";
$password="";
$databaseName="grad";
$conn=mysqli_connect($serverName,$username,$password,$databaseName);


if(ISSET($_POST['save'])){
	$file_name = $_FILES['video']['name'];
	$file_temp = $_FILES['video']['tmp_name'];
	$file_size = $_FILES['video']['size'];
	
	if($file_size < 50000000){
		$file = explode('.', $file_name);
		$end = end($file);
		$allowed_ext = array('mp4');
		if(in_array($end, $allowed_ext)){
			$name = $file_name;
			$location = 'video/'.$name.".".$end;
			if(move_uploaded_file($file_temp, $location)){
				mysqli_query($conn, "INSERT INTO `video` VALUES('', '$name', '$location')") or die(mysqli_error());
				echo "<script>alert('Video Uploaded')</script>";
				echo "<script>window.location = 'http://localhost:3000/AdminVideos'</script>";
			}
		}else{
			echo "<script>alert('Wrong video format')</script>";
			echo "<script>window.location = 'http://localhost:3000/AdminVideos'</script>";
		}
	}else{
		echo "<script>alert('File too large to upload')</script>";
		echo "<script>window.location = 'http://localhost:3000/AdminVideos'</script>";
	}
}
?>