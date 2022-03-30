var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var d = +lines.shift();

console.log(`${(60*d)/30} minutos`);