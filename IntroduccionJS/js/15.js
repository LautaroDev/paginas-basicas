//arreglos o arrays

const numeros = [10,20,30,40,50]
console.log(numeros);



numeros.push(60,70,80);//Se agrega al final del arreglo
numeros.unshift(-10,-20,-30);//se agrega al inicio del arreglo

console.table(numeros);



const meses = ['enero', 'febrero','marzo','abril','mayo']
//meses.pop();//Elimina el ultimo elemento
//meses.shift();//Elimina el primer elemento

meses.splice(2,1) //el primer 2 dentro del parentesis indica la posicion del elemento que queres eliminar, el 1 es dsp del elemento cuantos queres eliminar

console.table(meses); 


//rest operatos o spread operatos

/* const nuevoArreglo = [...meses,'junio'] //Se agrega al final del arreglo

 */
const nuevoArreglo = ['diciembre',...meses] //Se agrega al principio del arreglo
console.table(nuevoArreglo);

