<?php include 'includes/header.php';

interface TransporteInterfaz {
        public function getInfo() : string;
        public function getRuedas() : int;

}

abstract class Transporte  implements TransporteInterfaz{
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

include 'includes/footer.php';