<?php
// Para solicitudes de otros dominios.
header("access-control-allow-origin: *");
//...................................... 
$json = file_get_contents('php://input');
$data = json_decode($json);
// Devuelve JSON
$json = json_encode($data);
echo $json;

?>