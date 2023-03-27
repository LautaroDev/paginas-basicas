// Metodos de Propiedad
const reproductor = {
    reproducir : function (id) {
        console.log(`reproduciendo Cancion con el ID:${id}`);
    },
    pausar : function(){
        console.log('Pausando...');
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando una PlayList:${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo una PlayList:${nombre}`);
    }
}

reproductor.borrarCancion  = function (id) {
    console.log(`Eliminando la cancion:${id}`);
    
}
reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20)
reproductor.crearPlaylist("Canciones Nuevas")