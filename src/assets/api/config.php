<?php
$con = mysqli_connect('localhost','root','') or die(mysqli_error());
if (!$con) {
    echo "Unable to connect to DB: " . mysqli_error();
    exit;
}
if (!mysqli_select_db($con,"angularsix_db")) {
    echo "Unable to select mydbname: " . mysqli_error();
    exit;
}
?>
