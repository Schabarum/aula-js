var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
const [a, b] = pegarValores(lines.shift());
const [c, d] = pegarValores(lines.shift());

console.log((Math.sqrt(Math.pow(c-a,2) + Math.pow(d-b,2))).toFixed(4));