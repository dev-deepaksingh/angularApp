<?php
include("config.php");
header('Access-Control-Allow-Origin:*');
header('Content-type: application/json');

$data = file_get_contents("php://input");
$employee_id = json_decode($data, true);

$delete = "DELETE FROM login WHERE employee_id='$employee_id'";
    //    var_dump($delete);
if (mysqli_query($con, $delete)) {
    $json['status'] = true;
} else {
    $json['status'] = false;
}
echo json_encode($json);
?>
