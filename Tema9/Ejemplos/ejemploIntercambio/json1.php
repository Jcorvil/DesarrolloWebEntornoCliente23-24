<?php
header("access-control-allow-origin: *");
$myObj = new stdClass();
$myObj->nombre = "Juan";
$myObj->ciudad = "Ubrique";
$myJSON = json_encode($myObj);
echo $myJSON;
?>