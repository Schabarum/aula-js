var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let valores = [];
let listaFinal = [];

for (let i = 0;i < 20;i++){
    valores.push(+lines.shift());
}

for (let j = 19; j != 0; j--){
    listaFinal.push(valores[j]);
}

listaFinal.push(valores[0]);

for (let j in listaFinal){
    console.log(`N[${j}] = ${listaFinal[j]}`);
}
