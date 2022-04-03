var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let fimLaco = +lines.shift();
for (let i = 1; i <= fimLaco;i++){
    console.log(`${i} ${Math.pow(i, 2)} ${Math.pow(i, 3)}`) 
}