<?php include 'includes/header.php';
//conectar a la DB con PDO
$db = new PDO('mysql:host=localhost; dbname=bienesraices_crud', 'root','20223036');
//creamos el query
$query = "SELECT titulo FROM propiedades";
//lo preparamos
$stmt = $db->prepare($query);
//lo ejecutamos
$stmt->execute();
//obtenemos resultados
$resultado = $stmt ->fetchAll( PDO::FETCH_ASSOC );

foreach ($resultado as $propiedad) : 
echo $propiedad['titulo'];
endforeach;


include 'includes/footer.php';

?>