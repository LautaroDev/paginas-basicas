const carrito = [
    {nombre: 'Monitor 24 pulgadas', precio:500},
    {nombre: 'Televisión 50 pulgadas', precio:700},
    {nombre: 'Tablet', precio:300},
    {nombre: 'Audifonos', precio:200},
    {nombre: 'Teclado', precio:50},
    {nombre: 'Bocinas', precio:300},
    {nombre: 'Laptop', precio:800}]


//ForEach
const arreglo1 = carrito.forEach( producto => producto.nombre);


//map
const arreglo2 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo1);
console.log(arreglo2);