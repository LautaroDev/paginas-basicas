const { src, dest, watch } = require("gulp");   //src = identificar archivo  || dest = sirve para guardarlo
const sass = require("gulp-sass")(require('sass'))
function css(done) {
    src('src/scss/app.scss')   //identificar archivo de SASS
    .pipe ( sass())    //compilarlo
    .pipe (dest('build/css'));    //almacenarla en el disco duro

    done() //callback que avisa a gulp cuando llega al final
}

function dev(done) {
    watch('src/scss/app.scss', css)

    done()
}


exports.css = css;
exports.dev = dev;