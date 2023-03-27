<?php

function obtenerServicios() : array{
    try {
        //primero importamos una conexion 
        require 'databases.php';
        //escribir el codigo sql 
        $sql  = "SELECT * FROM  servicios;";

        $consulta = mysqli_query($db, $sql);
        //Arreglo vacio
        $servicios = [];    //creamos un arreglo vacio 

        $i = 0;
        //obtener resultados
        while ($row = mysqli_fetch_assoc($consulta)) {
            $servicios[$i]['id'] = $row ['id'];
            $servicios[$i]['nombre'] = $row ['nombre'];
            $servicios[$i]['precio'] = $row ['precio'];

            $i++; //aumenta 1 cada vez que itere 
        }
        
        return $servicios;
        //mientras el while itere los arreglos que tiene la base de datos los almacene en un arreglo para despues convertirlo con el json encode 
        
    } catch (\Throwable $th) {
        var_dump($th);
    }
}
obtenerServicios() ;