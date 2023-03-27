//Classes

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `El producto:  ${this.nombre} tiene un precio de:$ ${this.precio}`;
    }  
    obtenerPrecio(){
        console.log(this.precio);
    }
}


const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);

//Herencia
class Libro extends Producto {
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()}y su ISBN es: ${this.isbn}`;
    }  
    obtenerPrecio(){
        super.obtenerPrecio();
        console.log('y si hay en existencia');
    }
}

const libro = new Libro('JavaScript la Revolucion', 120, '0918092842802');
console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());
console.log(libro.obtenerPrecio());


/* 
//Classes

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `El producto  ${this.nombre} tiene un precio de:$ ${this.precio}`;
    }  
}
const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);


//Herencia

class Libro extends Producto{
    }

const libro = new Libro('JavaScript la Revolucion', 120, '0918092842802');
console.log(libro.formatearProducto() );

console.log(producto2);
console.log(producto3); */