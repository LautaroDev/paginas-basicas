<?php include 'includes/header.php';

class Transporte {
    public function __construct(protected int $ruedas, protected int $capacidad )
    {
        
    }

    public function getInfo() : string{
    return "el transporte tiene " . $this->ruedas . " ruedas y una capacidad de : " . $this->capacidad . " personas";        
    }
    public function getRuedas() : int{
        return $this->ruedas;
    }

}


class Bicicleta extends Transporte{

    public function getInfo() : string{
        return "el transporte tiene " . $this->ruedas . " ruedas y una capacidad de : " . $this->capacidad . " personas  Y NO GASTA CONBUSTIBLE" ;        
        }
}


class Automovil extends Transporte{
    public function __construct(protected int $ruedas, protected int $capacidad, protected string $transmicion)
    {
        
    }

    public function getTransmicion() : string{
        return  "el Automovil tiene una transmicion: " . $this->transmicion . " , ";
    }
}

class Moto extends Transporte{

}

$bicicleta = new Bicicleta(2, 1);
echo $bicicleta -> getInfo();
echo"<hr>";
/* echo $bicicleta -> getRuedas(); */



$automovil = new Automovil(4, 5 , "manual");
echo $automovil-> getInfo();
echo"<hr>";
echo $automovil -> getTransmicion(); 

$moto = new Moto(2, 2);
echo $moto-> getInfo();
echo"<hr>";

include 'includes/footer.php';