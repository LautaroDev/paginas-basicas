<?php include 'includes/header.php';

//Conectar a BD con mysqli
$db = new mysqli('localhost','root','20223036','bienesraices_crud');

//creamos el query
$query = "SELECT titulo, imagen FROM propiedades";
//lo preparamos
$stmt = $db ->prepare($query);

//lo ejecutamos
$stmt -> execute();

//lo creamos la variable
$stmt -> bind_result($titulo, $imagen);

//asignamos resultados

while ($stmt->fetch()) :
    var_dump($titulo, $imagen);
endwhile;




// var_dump($resultado->fetch_assoc());
include 'includes/footer.php';

?> 