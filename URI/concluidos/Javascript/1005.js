var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var a = +lines.shift();
var b = +lines.shift();

console.log(`MEDIA = ${(((a*3.5) + (b*7.5))/11).toFixed(5)}`);

