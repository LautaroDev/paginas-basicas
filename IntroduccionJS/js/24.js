const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'tarjeta': //a partir de los dos puntos se ejecuta el codigo 
        console.log('Pagaste con tarjeta');
        break;//el brack indica que hasta aqui se ejecuta el codigo
    case 'cheque': 
        console.log('El usuario va a pagar con cheque, Revisaremos los fondos primero');
        break;
    case 'efectivo': 
        console.log('El usuario va a pagar en efectivo');
        break;

    default: //obligatoriamente tiene que tener un default 
    console.log('aun no has pagado');
        break;
}