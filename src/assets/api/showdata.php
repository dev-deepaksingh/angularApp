<?php
include("config.php");
header('Access-Control-Allow-Origin:*');
header('Content-type: application/json');

$result = mysqli_query($con, "select * from login");
$json = array();
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_array($result)) {
        $employee_id = $row['employee_id'];
        $first_name = $row['first_name'];
        $last_name = $row['last_name'];
        $email = $row['email'];
        $profile_picture = $row['profile_picture'];
        $registration_date = $row['registration_date'];
        $registration_date_format = date("D M d, Y", strtotime($registration_date));
        $country = $row['country'];
        $data = array("employee_id" => $employee_id, "first_name" => $first_name, "last_name" => $last_name, "email" => $email, "registration_date_format" => $registration_date_format, "country" => $country, "profile_picture" => $profile_picture);
        array_push($json, $data);
    }
//    echo json_encode(array("Data" => $json));
    echo json_encode($json);
    
}
mysqli_close($con);