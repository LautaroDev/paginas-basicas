//Estructuras de Control

/* const puntaje = "1000";
if(puntaje == 1000) {
    console.log(`Si el puntaje es:1000`)
} else{
    console.log('No es igual');
} */

/* const efectivo = 1000;
const carrito = 800;

if(efectivo > carrito) {
    console.log('El usuario puede pagar');
}else{
    console.log('Fondos Insuficientes ');
} */

const rol = 'VISITANTE';

if (rol === 'ADMINISTRADOR') {
    console.log('Acceeso a todo el sistema');
}else if (rol === 'EDITOR'){
    console.log('Eres editor, Tienes acceso limitado');
}else if (rol === 'VISITANTE'){
    console.log('No tienes Acceso');
}
else{
    console.log('Acceso Denegado');
}