var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

let max = +lines.shift();

for (let i = 0; i < 1000;i++){
    for (let j = 0; j < max; j++){
        console.log(`N[${i}] = ${j}`);
    }
}