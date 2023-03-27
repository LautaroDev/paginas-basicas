<?php 

$db = mysqli_connect('localhost','root','20223036','appsalon');

if(!$db){
    echo "error de conexion";
}else{
    echo "Conexion exitosa";
}