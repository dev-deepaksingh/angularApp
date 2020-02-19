<?php
include("config.php");
header('Access-Control-Allow-Origin:*');
header('Content-type: application/json');

$result = mysqli_query($con, "SELECT COUNT(employee_id) as country_number, country FROM login GROUP BY country");
$json = array();
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_array($result)) {
        $country = $row['country'];
        $country_number = $row['country_number'];
        $data = array("country" => $country, "country_number" => (int)$country_number);
        // $data = array("country" => $country, "country_number" => $country_number);
        array_push($json, $data);
    }
//    echo json_encode(array("Data" => $json));
    echo json_encode($json);
    
}
mysqli_close($con);