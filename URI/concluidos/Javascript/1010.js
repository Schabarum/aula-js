var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
const [a, b, c] = pegarValores(lines.shift());
const [d, e, f] = pegarValores(lines.shift());

console.log(`VALOR A PAGAR: R$ ${((b*c) + (e*f)).toFixed(2)}`);