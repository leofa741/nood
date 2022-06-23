const argv = require('yargs')
.options('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe:'es la base de la tabla'
}).check((argv,options) => {
    if(isNaN(argv.base)){
        throw new Error('La base debe ser un numero');
    }
    return true;

})
.option('h',{
    alias:'hasta',
    type:'number',
   default:10,
   describe:'NUMERO HASTA'
})
   
.option('l',{
    alias: 'listar',
    descripcion: 'Muestra una tabla de multiplicar',
    demandOption: false,
    default: false,
    type: 'boolean',
    describe:'muestra tabla en consola'
}).argv;


module.exports=argv

