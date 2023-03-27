//arreglos o arrays

const numeros = [10,20,30,40,50]
console.log(numeros);
/* 
const meses = new Array ('enero', 'febrero','marzo','abril','mayo')
console.table(meses); */

const meses = ['enero', 'febrero','marzo','abril','mayo']
console.table(meses); 


const arreglo = ['hola',20,true, {nombre:'lautaro', trabajo: 'Programador'},[1,2,3]];
console.table(arreglo); 

//acceder a los valores de un arreglo
/* 
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);
console.log(numeros[200]); */

//conocer la extencion de un arreglo
console.log(meses.length);

numeros.forEach( function(numeros) {
    console.log(numeros);
})