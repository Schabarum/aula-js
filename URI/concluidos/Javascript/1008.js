var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var a = +lines.shift();
var b = +lines.shift();
var c = +lines.shift();

console.log(`NUMBER = ${a}`);
console.log(`SALARY = U$ ${(b*c).toFixed(2)}`)