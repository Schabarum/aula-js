var input = require('fs').readFileSync('./dev/stdin/arquivo.txt', 'utf8');
var lines = input.split('\n');

var countPares = 0;
var divisao = 0;
for (let i = 0; i<5; i++){
    let valor = +lines.shift();
    divisao = valor % 2;
    if (divisao === 0){
        countPares++;
    }
}
console.log(`${countPares} valores pares`);
