//querySelector 
const heading = document.querySelector('.header__texto h2') //0 o 1 Elemento
heading.textContent='Nuevo Heading'

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a ');
enlaces[0].textContent = 'nuevo texto para enlace';
enlaces[0].classList.add('clase-nueva');
//enlaces[0].classList.remove('navegacion__enlace');

//getElementById

/* const heading2 = document.getElementById('heading');
console.log(heading2); */


//Generar un nuevo enlace 
const nuevoEnlace = document.createElement('A');

//agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
//agregar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlace';
//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace')
console.log(nuevoEnlace);
//agregarlo al documento
const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace)

//Eventos

console.log(1);

/* window.addEventListener('load',function () {  //load espera a que el JS y los archivos que dependen del html esten listos
    console.log(2);
    
} )
window.onload = function () {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() {  //solo espera a que se descargue el html, no espera CSS o imagenes 
    console.log(4);
});

console.log(5); */

/* window.onscroll = function() {
    console.log('scrolling...');
} */
/* 
//Seleccionar elementos y asociarle un evento
const btnEnviar= document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento){
console.log(evento);
evento.preventDefault();


console.log('enviando formulario');
}); */


//Eventos de los Inputs y Textarea 

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


nombre.addEventListener('input',leerTexto);
email.addEventListener('input',leerTexto);
mensaje.addEventListener('input',leerTexto);
//El evento de Submit
formulario.addEventListener('submit',function(evento){
    evento.preventDefault();
    
    
    
    function leerTexto(e) {
        /* console.log(e.target.value); */
    
        datos[e.target.id] = e.target.value;
    /* 
        console.log(datos); */
    }
    
    
    
    //validar formulario
    const{nombre,email,mensaje} = datos;
    
    if (nombre ==='' || email === ''||mensaje===''  ) {
        mostrarAlerta('Todos los campos son obligatorios','error');
        return; //Corta la ejecucion del Código
    }    
    
    function mostrarAlerta(mensaje,error=null) {
        const alerta= document.createElement('P')
        alerta.textContent = mensaje; 
        if(error){
            alerta.classList.add('error')
        }else{
            alerta.classList.add('correcto')
        }    
        formulario.appendChild(alerta)

        setTimeout(() => {
            alerta.remove()
        }, 5000);    
    }    

    //crear la alerta de enviar formulario correctamente
    mostrarAlerta('Mensaje enviado correctamente');

});    

