<?php

function getDatos($id)
{
    try {
        // Conexión con la BBDD
        $conexion = new PDO('mysql:host=localhost;dbname=tema10', 'root', '');
        // Sentencia para obtener todos los datos de la id
        $sql = "SELECT * FROM datos";
        if ($id != null) {
            $sql .= " WHERE id = :id";
        }

        $pdost = $conexion->prepare($sql);
        // Bindeamos para evitar la inyección de código
        $pdost->bindParam(':id', $id, PDO::PARAM_INT);
        $pdost->setFetchMode(PDO::FETCH_ASSOC);

        $pdost->execute();

        //Devuelve los datos
        $result = $pdost->fetchAll();
        echo json_encode($result);

    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}
// Si la id existe, ejecuta la función y devuelve los datos
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    getDatos($id);
}
?>