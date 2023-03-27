//Declaracion de Funcion
function sumar() {
    console.log(10+10);
}
sumar()

//Expresion de la funcion
const sumar2 = function(){
    console.log(3+3);
}
sumar2();

//IIFE
(function() {
    console.log('esto es una funcion');
})();

/* la diferencia entre las funciones de tipo 

****Declaracion de Funcion y * Exprecion de la funcion es:*** 

si en *Declaracion de Funcion: llamamos la funcion y luego la definimos SI FUNCIONA.

pero si hacemos esto en *Exprecion de la funcion  NO nos va a funcionar.

¿esto porque pasa?

porque en la Declaracion de Funcion  actua el hoisting(elevacion).

JavaScript se ejecuta en 2 vueltas a eso se le conoce como el hoisting

en la primera  etapa es la de creacion:  se registran todas las funciones, entonces esta funcion a   pesar de que se esta mandando a llamar primero se registra la funcion 

la segunda etapa es la de ejecucion: en esta se registra los llamados a las funciones

y en la Exprecion de la funcion no funciona ya que si bien es una funcion no esta declarada como tal con la sintaxis de function entonces se le considera mas como una variable. entonces vasicamente queda como:


const sumar2;

sumar2();
sumar2 = function() {
    console.log(3+3);
}
*/