var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let valorInicial = +lines.shift();
let N = [];

for (let i = 0; i < 100; i++){  
    N.push(i);
}

for (let posicao in N){
    console.log(`N[${posicao}] = ${valorInicial.toFixed(4)}`);
    valorInicial = valorInicial/2;
}

// Wrong answer 0%