<?php
include("config.php");
// check username or password from database
header('Access-Control-Allow-Origin:*');
header('Content-type: application/json');

$json = array();

$postdata = file_get_contents("php://input"); 
$request = json_decode($postdata, true);
$first_name = $request['firstname'];
$password = $request['password'];
$qry = mysqli_query($con,"SELECT * FROM `login` WHERE `first_name` ='$first_name' and `password` = '$password'");

if (mysqli_num_rows($qry) > 0) {
    while ($row = mysqli_fetch_array($qry)) {
        $json['employee_id'] = $row['employee_id'];
        $json['first_name'] = $row['first_name'];
        $json['last_name'] = $row['last_name'];
        $json['status'] = true;
    }
}else{
    $json['status'] = false;
    $json['message'] = 'Invalid Credentials';
}
echo json_encode($json);
?>