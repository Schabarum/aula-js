var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var horas = +lines.shift();
var km = +lines.shift();

console.log(((horas*km)/12).toFixed(3));