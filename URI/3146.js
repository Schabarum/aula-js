var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let raio = +lines.shift();
let pi = 3.14;
console.log(3.14 * (raio * raio));
