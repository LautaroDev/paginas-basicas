//async /await

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');
    
    setTimeout(() => {
        resolve('Los Clientes fueron Descargados')
    }, 5000);
    
    });
}
function descagarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere...');
    
    setTimeout(() => {
        resolve('Los pedidos fueron Descargados')
    },3000);
    
    });
}

async function app(){
    try {
/*         const clientes = await descargarNuevosClientes();
        const pedidos = await descagarUltimosPedidos();
        console.log(clientes);
        console.log(pedidos); */

        const resultado = await Promise.all([descargarNuevosClientes(),descagarUltimosPedidos() ]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}
app();