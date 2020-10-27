const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`${base} no es un numero`);
            return;
        }

        console.log('==================='.red);
        console.log('==================='.rainbow);
        console.log('==================='.red);

        for (let index = 1; index <= limite; index++) {
            console.log(`${base}*${index}=${base * index}\n`);
        };

        console.log('==================='.red);
        console.log('==================='.rainbow);
        console.log('==================='.red);

        resolve(`tabla del ${base} mostrada`.rainbow)

    })
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`${base} no es un numero`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base}*${index}=${base * index}\n`;
        };

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla del ${base} guardada`)
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}