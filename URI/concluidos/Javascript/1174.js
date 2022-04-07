var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let lista = [];

for (let i = 0;i < 100;i++){
    lista.push(+lines.shift());
}

for (let j in lista){
    if (lista[j] <= 10){
        console.log(`A[${j}] = ${(lista[j]).toFixed(1)}`);
    }
}