var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const pegarValores = (line) => line.split(" ").map(a => +a);
const [a, b, c] = pegarValores(lines.shift());

const maiorAB = (a + b + Math.abs(a - b)) / 2;
const maiorXC = (c + maiorAB + Math.abs(c - maiorAB)) / 2;

console.log(`${maiorXC} eh o maior`);