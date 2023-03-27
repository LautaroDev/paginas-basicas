const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = false;

    if(auth) {
        resolve('Usuario Autenticado'); //EL PROMISE SE CUMPLE 
    }else {
        reject('No se pudo iniciar sesión');//EL PROMISE NO SE CUMPLE  
    }

});
//mostrado por arrow funtion
usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))


/* usuarioAutenticado
    .then(function (resultado) {  //resolve
        console.log(resultado);
    })
    .catch(function(error){   //rejact
        console.log(error);
    }) */
//en los promises existen 3 valores posibles:
//Pending: no se a cumplido pero no se a rechazado
//Fulfilled: Ya se cumplio
//Rejected: Se a rechazado o no se pudo cumplir