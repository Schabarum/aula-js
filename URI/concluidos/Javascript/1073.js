var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var count = +lines.shift();
var divisao = 0;

for (let i = 1; i <= count; i++){
    divisao = i%2;
    if (divisao === 0){
        console.log(`${i}^2 = ${Math.pow(i,2)}`);
    }
}