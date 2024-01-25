<?php

// Conexión con la BBDD
$conexion = new PDO('mysql:host=localhost;dbname=tema10', 'root', '');

$id = $_GET['id'] ?? null;

// Sentencia para obtener todos los datos de la id
$sql = "SELECT * FROM datos";

// Si la id existe, añade la condición WHERE a la consulta
if ($id != null) {
  $sql .= " WHERE id = :id";
}

$pdost = $conexion->prepare($sql);

// Bindeamos para evitar la inyección de código
if ($id != null) {
  $pdost->bindParam(':id', $id, PDO::PARAM_INT);
}

$pdost->execute();

// Devuelve los datos
$result = $pdost->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($result);

?>