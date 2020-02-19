<?php
include("config.php");
header('Access-Control-Allow-Origin:*');
header('Content-type: application/json');

$data = file_get_contents("php://input");
$postdata = json_decode($data, true);
$firstname = $postdata['firstname'];
$lastname = $postdata['lastname'];
$email = $postdata['email'];
$password = $postdata['password'];
$registration_date = date("Y-m-d");
$registration_time = date("h:i:s");
$country = $postdata['country'];
$result = mysqli_query($con,"insert into login(first_name,last_name,email,password,profile_picture,registration_date,registration_time,country) values('$firstname','$lastname','$email','$password','default.png','$registration_date','$registration_time','$country')");
//var_dump($result);
if ($result > 0) {
   echo "1";
} else {
    echo"0";
}

