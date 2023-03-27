
"use strict" //JS en modo estricto
//objetos
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio:300,
    disponible:true,
}
Object.freeze(producto)

/* producto.imagen='imagen.jpg'
 */
console.log(Object.isFrozen(producto));
console.log(producto);



/* 
"use strict" //JS en modo estricto
//objetos
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio:300,
    disponible:true,
}
Object.seal(producto)

/* producto.imagen='imagen.jpg'
 */


/* console.log(Object.isSealed(producto));
console.log(producto);  */