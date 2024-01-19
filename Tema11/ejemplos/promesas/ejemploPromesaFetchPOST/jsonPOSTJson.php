<?php
// Para solicitudes de otros dominios.
header("access-control-allow-origin: *");
//...................................... 
$json = file_get_contents('php://input');
$data = json_decode($json);
// Devuelve JSON
echo '{"nombre":"' . $data->nombre . '","ciudad":"' . $data->ciudad . '"}';
// Podríamos usar ....
//$json = json_encode($data);
// echo $json;

?>