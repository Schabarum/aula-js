var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let numHo = +lines.shift();
let listaHo = [];
let lista = 'Ho';

for (let i = 1; i < numHo; i++){
    listaHo.push(lista);
}

for (let j in listaHo){
    if (j === listaHo.length){
        lista = lista + listaHo[j];
    }else{
        lista = lista + ' ' + listaHo[j];
    }   
}

console.log(`${lista}!`)