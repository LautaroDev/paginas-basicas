<?php 
declare (strict_types = 1);
include 'includes/header.php';
//definir clase
class Producto {
    /* php viejo
    public $nombre;
    public $precio;
    public $disponible;
    
    public function __construct(String $nombre, int $precio, bool $disponible)
    {
        
    }
    */
    //php 8
    public function __construct(public String $nombre, public int $precio, public bool $disponible)
    {
    }
    public function mostrarProducto(){
        echo "El producto es: " .  $this -> nombre . " y su precio es de: " . $this -> precio   ;
    }
}

$producto = new Producto('Tablet',200,true);

$producto2 -> mostrarProducto();

echo "<pre>";
var_dump ($producto);
echo "</pre>";

$producto2 = new Producto('Monitor Curvo', 300, false);



echo "<pre>";
var_dump ($producto2);
echo "</pre>";

include 'includes/footer.php';