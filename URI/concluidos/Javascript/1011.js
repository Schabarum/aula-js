var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var r = lines.shift();
var pi = 3.14159;

console.log(`VOLUME = ${((4/3.0) * pi * Math.pow(r, 3)).toFixed(3)}`);