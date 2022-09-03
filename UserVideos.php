<?php
header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "grad"; 
$id = '';
$con = mysqli_connect($host, $user, $password,$dbname);


if(isset($_POST['video'])) { 

  $query = mysqli_query($con, "SELECT * FROM video ORDER BY video_id ASC") or die(mysqli_error());
  while($fetch = mysqli_fetch_array($query)){
      ?>
  <style>

h5{
  font-family: system-ui;
    font-size: medium;
    font-weight: 700;
    color:#033f70;
}
.container {
  display:list items;
  border-radius: 50px;
}
.container:before{
  position: absolute;
    content: '';
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    left: -2px;
    top: -2px;
    box-shadow: -60px -60px -90px #222, 60px 60px 90px rgba(41, 51, 51, 0.9);
    background:linear-gradient(to right, #9bb1d5 , #afc9f0);
    z-index: -1;
}
#phpvideo, #Player{
display: grid;
text-align:center;
justify-content:center;
}
#Player{
  margin: 20px 2.5% 20px 2.5%;
  left:20%;
}

video::-webkit-media-controls-play-button{
  border:none;
  background-color:#B8C0FF;
  border-radius: 50%;
}
video::-webkit-media-controls-mute-button {
  background-color: #B1D4E0;
  border-radius: 50%;
}
video::-webkit-media-controls-current-time-display {
  color: #fff;
}
video::-webkit-media-controls-time-remaining-display {
  color: #fff;
}

video::-webkit-media-controls-volume-slider {
  background-color: #c3dee7;
  border-radius: 25px;
  padding-left: 8px;
  padding-right: 8px;
}
    </style>
      <div class="container"> 
      <h5 id="phpvideo"><?php echo $fetch['video_name']?></h5>
      <video id="Player" width="100%" height="240" controls>
          <source src="<?php echo $fetch['location']?>">
      </video>
  </div>
<?php 
}


  }
?>