// 1 CREAMOS OBJETO
function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

//2. INSTANCIA PARA AGREGAR PROPIEDAD AL OBJETO
const cliente = new Cliente('Jose', 'Morales');
const cliente2 = new Cliente('Eduardo', 'Ozuna'); 

//3. CREAMOS UN PROTOTIPO PARA CAMBIAR LA FORMA DEL TEXTO 
Cliente.prototype.formatearCliente = function(){
    return `El cliente se llama ${this.nombre} con apellido ${this.apellido}`;
}

//LLAMAMOS EN LA CONSOLA EL OBJETO CLIENTE CON EL FORMATO DEL PROTOTIPO
console.log(cliente.formatearCliente());
console.log(cliente.formatearCliente())