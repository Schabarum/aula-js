var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
const [a, b, c, d] = pegarValores(lines.shift());

var somaCD = c+d;
var somaAB = a+b;

if ((b > c) && (d > a) && (somaCD > somaAB) && (c > 0) && (d > 0) && (a%2 === 0)){
    console.log('Valores aceitos');
}else{
    console.log('Valores nao aceitos');
}
