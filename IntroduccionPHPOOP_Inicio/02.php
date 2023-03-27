<?php 
declare (strict_types = 1);
include 'includes/header.php';


//ENCAPSULACION
class Producto {
    
    //public - se puede acceder y modificar en cualquier lugar 
    //protected - se puede acceder unicamente en la clase
    //private solo mienbors de la misma clase pueden acceder a el 
    
    //php 8
    public function __construct(protected String $nombre, public int $precio, public bool $disponible)
    {
    }
    public function mostrarProducto(){
        echo "El producto es: " .  $this -> nombre . " y su precio es de: " . $this -> precio   ;
    }

    //para obtener un valor utilizamos GET -- para modificar un valor utilizamos SET
    public function getNombre(){  //obtener un valor
        return $this->nombre;
    }
    public function setNombre(string $nombre){  //modificar un valor
        return $this ->nombre = $nombre;
    }
}

$producto = new Producto('Tablet',200,true);
$producto2 = new Producto('Monitor Curvo', 300, false);

/* $producto -> mostrarProducto(); */

echo $producto->getNombre();
$producto -> setNombre("New name");


echo "<pre>";
var_dump ($producto);
echo "</pre>";


include 'includes/footer.php';