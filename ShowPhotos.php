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

            $sql = "SELECT * FROM donations";
            $result = mysqli_query($conn, $sql);
                while ($row = mysqli_fetch_array($result)) {
            ?>
<style>


.container:before{
  position: absolute;
    content: '';
    width:100%;
    height: 100%;
    left: 0px;
    top: 0px;
    right:0px;
    box-shadow: -60px -60px -90px #222, 60px 60px 90px rgba(41, 51, 51, 0.9);
    background:linear-gradient(to right, #9bb1d5 , #afc9f0);
    z-index: -1;
}

.article {
  padding-top: 50px;
  padding-bottom: 100px;
  position: relative;
  font-family: var(--Poppins);
  color: var(--CyanColor);
}
.article .container {
        display: flex;
        align-items: center;
        justify-content: center;
}

.article .box {
  height: 450px;
  box-shadow: 0 2px 15px;
  background-color: var(--sectionsColor);
  border-radius: 10px;
  overflow: hidden;
}
.article .box:hover {
  transform: translateY(-10px);
  box-shadow: 0 2px 30px;
}
.article .box img {
  width: 319px;
  max-width: fit-content;
  height:fit-content;
}
.content {
      padding: 31px;
  
}
.content h3 {
  color: var(--primaryColor);
  font-family: var(--Poppins);
}
.content > p {
  font-family: var(--Poppins);
  color: var(--grayColor);
  line-height: 1.5;
}
</style>
            <div class="article">
            <div class="container">
            <div class="box">
            <?php echo "<img src='images/".$row['image']."' >"; ?>
            <div class="content">
                <h3><?php echo $row['phone']; ?></h4>
                <p>
				<?php echo  $row['description']; ?>
                </p>
                </div>
                <span><?php echo "<img src='images/".$row['image']."' >"; ?></span>
                </div>
                </div>
                </div>
            <?php

                }
            

            ?>