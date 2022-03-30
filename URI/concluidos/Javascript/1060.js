var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var countPositivos = 0;
for (let i = 0; i<6; i++){
    if (+lines.shift() > 0){
        countPositivos++;
    }
}
console.log(`${countPositivos} valores positivos`);