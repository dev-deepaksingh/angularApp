<?php
include("config.php");
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json');
$employee_id = $_GET['employee_id'];
$result = mysqli_query($con, "SELECT `employee_id`, `first_name`, `last_name`, `email`, `password`, `country` FROM `login` WHERE employee_id = '$employee_id'");
$json = array();
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $employee_id = $row['employee_id'];
        $first_name = $row['first_name'];
        $last_name = $row['last_name'];
        $email = $row['email'];
        $password = $row['password'];
        $country = $row['country'];
        $data = array("employee_id" => $employee_id, "first_name" => $first_name, "last_name" => $last_name, "email" => $email, "password" => $password, "country" => $country);
        array_push($json, $data);
    }
//    echo json_encode(array("Data" => $json));
    echo json_encode($json);
    
}
mysqli_close($con);