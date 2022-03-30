var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var a = +lines.shift();
var b = +lines.shift();
var c = +lines.shift();
var d = +lines.shift();

console.log(`DIFERENCA = ${(a*b) - (c*d)}`)