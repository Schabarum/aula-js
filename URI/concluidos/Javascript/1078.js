var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var valor = +lines.shift();

for (let i = 1; i <= 10; i++){
    console.log(`${i} x ${valor} = ${i*valor}`);
}