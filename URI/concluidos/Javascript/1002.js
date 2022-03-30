var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

const n = 3.14159;

var raio = Number.parseFloat(lines.shift());

console.log(`A=${(n*Math.pow(raio, 2)).toFixed(4)}`);