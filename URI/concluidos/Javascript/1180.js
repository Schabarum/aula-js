var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let varNum = +lines.shift();

const pegarValores = (line) => line.split(" ").map(a => +a);
let valores = pegarValores(lines.shift());
let menorValor = 0;
let posicao = 0;

for (let i in valores){
    if (i == 0){
        menorValor = valores[i];
        posicao = i;
    }else if (valores[i] < menorValor){
        menorValor = valores[i];
        posicao = i;
    }
}

console.log(`Menor valor: ${menorValor}`);
console.log(`Posicao: ${posicao}`);
