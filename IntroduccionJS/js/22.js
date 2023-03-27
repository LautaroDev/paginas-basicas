    //Arrow Funtion solo se puede usar en la exprecion de la funcion, no en otra sintaxis

    //Expresion de la funcion

/* const sumar2 = function(n1, n2){
    console.log(n1+n2);
}

sumar2(5, 10);
 */

const sumar2 = (n1, n2) =>console.log(n1+n2);

sumar2(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo: ${tecnologia}`);

aprendiendo ('JavaScript')



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
meses.forEach(mes =>{
    if(mes == 'marzo'){
        console.log('marzo sí exíste');
    }
});

//includes

const resultado2 = carrito.includes('Tablet');
const resultado1 = meses.includes('marzo');
console.log(resultado1); 
console.log(resultado2);


let resultado;
//some ideal para arreglo de objetos
resultado = carrito.some(producto=>producto.nombre ==='Tablet')
console.log(resultado); 


//reduce
resultado = carrito.reduce((total,producto)=>total + producto.precio,0);
console.log(resultado);

//Filter
resultado = carrito.filter( producto => producto.precio > 400);
console.log(resultado);


resultado = carrito.filter(producto => producto.nombre === 'Tablet');

console.log(resultado);

resultado = carrito.filter(producto => producto.nombre !== 'Tablet');
console.log(resultado);