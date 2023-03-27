const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio:300,
    disponible:true,
}
//forma anterior de extraer valores de un arreglo  o de un  objeto
/* const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;
 */

//destructuring (actual)
/* 
const {precio} = producto;
const {nombreProducto} = producto;
    o mas corto seria hacerlo asi:
*/

const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);