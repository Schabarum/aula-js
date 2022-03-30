var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
const [a, b, c] = pegarValores(lines.shift());
var pi = 3.14159;

console.log(`TRIANGULO: ${((a*c)/2).toFixed(3)}`);
console.log(`CIRCULO: ${(pi * Math.pow(c,2)).toFixed(3)}`);
console.log(`TRAPEZIO: ${(((a+b)*c)/2).toFixed(3)}`);
console.log(`QUADRADO: ${(Math.pow(b,2)).toFixed(3)}`);
console.log(`RETANGULO: ${(a*b).toFixed(3)}`);