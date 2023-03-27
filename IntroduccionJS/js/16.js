//array methods
const meses = ['enero', 'febrero','marzo','abril','mayo']

const carrito = [
    {nombre: 'Monitor 24 pulgadas', precio:500},
    {nombre: 'Televisión 50 pulgadas', precio:700},
    {nombre: 'Tablet', precio:300},
    {nombre: 'Audifonos', precio:200},
    {nombre: 'Teclado', precio:50},
    {nombre: 'Bocinas', precio:300},
    {nombre: 'Laptop', precio:800}
];

//forEach
/* meses.forEach(function (mes) {
    if(mes == 'marzo'){
        console.log('marzo sí exíste');
    }
});
 */
//includes
/* 
const resultado2 = carrito.includes('Tablet');
const resultado1 = meses.includes('marzo');
console.log(resultado1); 
console.log(resultado2);f
*/

//some ideal para arreglo de objetos
/* resultado = carrito.some(function(producto) {
    return producto.nombre ==='Tablet'
})

console.log(resultado);

 */
//reduce
/* resultado = carrito.reduce(function (total,producto) {
    return total + producto.precio
    
},0);
console.log(resultado); */

//Filter
resultado = carrito.filter(function(producto){
    return producto.precio>400
})
resultado = carrito.filter(function(producto){
    return producto.nombre === 'Tablet'
})
resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Tablet'
})
console.log(resultado); 