//this
const reservacion = {
    nombre: 'Lautaro',
    apellido: 'Encalado',
    total: 10000,
    pagado: false,
    informacion: function () {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de: ${this.total}`);
    }
}


const reservacion2 = {
    nombre: 'Pedrp',
    apellido: 'Lorenzo',
    total: 10000,
    pagado: false,
    informacion: function () {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de: ${this.total}`);
    }
}
console.log(reservacion.informacion());
console.log(reservacion2.informacion());