var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let valorInicial = +lines.shift();

for (let i = 0;i < 10;i++){
    console.log(`N[${i}] = ${valorInicial}`);
    valorInicial = valorInicial * 2;
}