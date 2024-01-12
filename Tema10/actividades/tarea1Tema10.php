<?php

function getDatos($id)
{
    try {
        $usuario = 'root';
        $contraseña = '';

        $conexion = new PDO('mysql:host=localhost;dbname=tema10', $usuario, $contraseña);
        $sql = "SELECT * FROM datos WHERE id = :id";
        $pdost = $conexion->prepare($sql);
        $pdost->bindParam(':id', $id, PDO::PARAM_INT);
        $pdost->setFetchMode(PDO::FETCH_ASSOC);

        $pdost->execute();

        $result = $pdost->fetch();
        echo json_encode($result);

    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    getDatos($id);
}
?>