var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var km = +lines.shift();
var l = +lines.shift();

console.log(`${(km/l).toFixed(3)} km/l`);