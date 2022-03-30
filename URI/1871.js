var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
const [a, b] = pegarValores(lines.shift());
var c = a + b;
var d = c.toString();
console.log(d.replace('0', ''));