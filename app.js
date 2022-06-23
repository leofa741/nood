//tabla de multiplicar de 5

const { crearTabla  } = require('./helpers/multiplicar');
var colors = require('colors');
const argv = require('./config/yargs')



console.clear();


console.log(argv);
crearTabla(argv.b, argv.l,argv.h)
    .then(archivo => console.log(`Archivo creado ${archivo}`.inverse))
    .catch(err => console.log(err));

// console.log('tabla de multiplicar de: ', argv.base);








// console.log(process.argv);

// const [,,arg3] = process.argv;
// console.log(arg3);
// const [,tabla] = arg3.split('=');
// console.log(tabla);


// const taba=7;














