<?php
include("config.php");
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers: Content-Type');

$postdata = file_get_contents("php://input");
$data = json_decode($postdata, true);
$employee_id = $data['employee_id'];
$first_name = $data['first_name'];
$last_name = $data['last_name'];
$email = $data['email'];
$country = $data['country'];
$password = $data['password'];

$query ="UPDATE login SET first_name = '$first_name', last_name = '$last_name', email = '$email', country = '$country', password = '$password' WHERE employee_id = '$employee_id'";
// var_dump($query);
if(mysqli_query($con, $query)){
  echo 'true';
}else{
  echo 'false';
}
