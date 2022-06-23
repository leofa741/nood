
var colors = require('colors');
const fs = require('fs');
   
const crearTabla = async (tabla ,listar=false,hasta)  => {

    try {
       
  
        
    let salida = '';
    let consola='';
    for (let i = 1; i <= hasta; i++) {
        salida += `${tabla} * ${i} = ${tabla * i}\n`;
       consola += `${tabla} * ${i} ${'='.green} ${tabla * i}\n`;
    }


    if(listar){      
        console.log(consola);
    } 

    fs.writeFileSync(`./salida/tabla-${tabla}.txt`, salida );
    return `tabla-${tabla}.txt`.green;

   
}


catch (error) {
    console.log(error);
}
}


module.exports = {
    crearTabla
   
}

// const crearTabla = (tabla) => {


//     return new Promise(() => {
//         let salida = "";
     

//         for (let i = 1; i <= 10; i++) {
//            salida += `tabla de: ${tabla} * ${i} = ${tabla * i}\n`;
//         }


//        fs.writeFileSync(`tabla-${tabla}.txt`, salida);
    
//     console.log(`la-tabla-${tabla}.txt`);
//     });
// }








    // let salida = "";



    // for(let i=1; i<=10; i++){
    
    //     // console.log( tabla + " x " + i + " = " + tabla*i);
    //     salida += tabla + " x " + i + " = " + tabla*i + "\n";
    // }
    
    // console.log(salida);
    
    
    // fs.writeFileSync(`tabla-${tabla}.txt`, salida);
    
    // console.log(`tabla-${tabla}.txt`);
    
    
    
    



