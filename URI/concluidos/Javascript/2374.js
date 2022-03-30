var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var n = +lines.shift();
var m = +lines.shift();

console.log(n-m);
